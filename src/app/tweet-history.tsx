import { config } from "@/auth";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default async function TweetHistory() {
  const session = await getServerSession(config);
  if (!session) return null;

  const tweets = await prisma.tweet.findMany({
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="bg-base-100 p-4 sm:p-6 prose rounded-xl">
      <h3>Riwayat Fess</h3>
      <div className="flex flex-col divide-y">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="py-4 flex justify-between">
            <div className="text-lg text-base-content mt-1 w-full">
              {tweet.text}
            </div>
            <a
              href={`https://twitter.com/i/web/status/${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-square btn-sm shrink-0"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
        ))}

        {tweets.length === 0 ? (
          <div className="text-center">Belum ada tweet</div>
        ) : null}
      </div>
    </div>
  );
}
