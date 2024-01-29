import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultSession["user"] {
    username: string | null;
    sso_id: string | null;
  }

  interface Session {
    user: User;
  }

  interface Profile extends DefaultProfile {
    screen_name: string | null;
  }
}
