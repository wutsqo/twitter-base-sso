import { config } from "@/auth";
import { CAS_SERVICE_URL, CAS_VALIDATE_URL, SITE_URL } from "@/config";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { parseStringPromise } from "xml2js";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ticket = searchParams.get("ticket");

  if (!ticket) return new Response("No ticket provided", { status: 400 });

  const validateUrl = new URL(CAS_VALIDATE_URL);
  validateUrl.searchParams.set("service", CAS_SERVICE_URL);
  validateUrl.searchParams.set("ticket", ticket);

  const { data, status } = await axios.get(validateUrl.toString());

  if (status !== 200) {
    return new Response("Failed to validate ticket", { status });
  }

  const xml = await parseStringPromise(data);
  const serviceResponse = xml["cas:serviceResponse"];
  const authenticationSuccess = serviceResponse["cas:authenticationSuccess"];

  if (!authenticationSuccess) {
    return new Response("CAS Authentication Failed", { status: 401 });
  }

  const user = authenticationSuccess[0]["cas:user"][0];
  const session = await getServerSession(config);
  if (session?.user.email) {
    await prisma.user.update({
      where: { email: session.user.email },
      data: { sso_id: user },
    });
  }

  redirect(SITE_URL);
}
