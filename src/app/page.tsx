import { auth } from "@/auth";
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { CAS_LOGIN_URL } from "@/config";
import Link from "next/link";
import NewTweet from "./new-tweet";
import TweetHistory from "./tweet-history";

export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <div className="h-screen w-screen relative flex items-center justify-center">
        <div className="bg-base-100 relative z-10 p-8 rounded-xl prose">
          <h1>UIFESS SSO 🌾🌾</h1>
          <div className="divider" />
          <LoginButton />
        </div>
      </div>
    );

  return (
    <main className="p-4 container mx-auto max-w-screen-sm flex flex-col gap-4">
      <div className="flex items-center justify-between bg-base-100 rounded-xl p-4 sm:p-6">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={session.user?.image ?? ""} alt="avatar" />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="font-medium text-sm">@{session.user.username}</div>
            {session.user.sso_id ? (
              <div className="badge badge-success gap-2 badge-sm text-white py-1">
                <CheckBadgeIcon className="h-4 w-4" />
                {session.user.sso_id.slice(0, 4)}***@ui.ac.id
              </div>
            ) : (
              <div className="badge badge-error gap-2 badge-sm text-white py-1">
                <ExclamationTriangleIcon className="h-4 w-4" />
                Belum terverifikasi
              </div>
            )}
          </div>
        </div>
        <LogoutButton />
      </div>

      {session.user.sso_id ? null : (
        <Link href={CAS_LOGIN_URL} className="btn btn-warning">
          Verifikasi dengan SSO UI
        </Link>
      )}
      <NewTweet disabled={!session.user.sso_id} />
      <TweetHistory />
    </main>
  );
}
