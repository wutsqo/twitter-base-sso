import prisma from "@/prisma";
import { TwitterApi } from "twitter-api-v2";
import { getServerSession } from "next-auth";
import { config } from "@/auth";

const client = new TwitterApi({
  appKey: process.env.TWITTER_BOT_APP_KEY as string,
  appSecret: process.env.TWITTER_BOT_APP_SECRET as string,
  accessToken: process.env.TWITTER_BOT_ACCESS_TOKEN as string,
  accessSecret: process.env.TWITTER_BOT_ACCESS_SECRET as string,
});

export async function POST(request: Request) {
  const session = await getServerSession(config);
  if (!session?.user.sso_id) {
    return new Response("Unauthorized", { status: 401 });
  }
  const user_id = session.user.id;
  const sso_id = session.user.sso_id;

  const body = await request.json();
  if (!body?.text) {
    return new Response("Bad Request", { status: 400 });
  }

  const tweet = await client.v2.tweet(body.text);
  const res = await prisma.tweet.create({
    data: {
      id: tweet.data.id,
      text: tweet.data.text,
      user_id: user_id,
      sso_id: sso_id,
    },
  });
  return Response.json({
    id: res.id,
    text: res.text,
  });
}
