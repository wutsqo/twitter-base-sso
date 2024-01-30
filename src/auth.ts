import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";

const prismaAdapter = PrismaAdapter(prisma);
// @ts-ignore
prismaAdapter.createUser = (data) => {
  return prisma.user.create({ data });
};

export const config = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: prismaAdapter,
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.username = user.username;
      session.user.sso_id = user.sso_id;
      return session;
    },
    async signIn({ user, profile }) {
      if (profile) {
        user.username = profile.screen_name;
      }
      return Promise.resolve(true);
    },
  },
} satisfies NextAuthOptions;

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
