/*
  Warnings:

  - You are about to drop the column `userId` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_userId_fkey";

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "userId",
ADD COLUMN     "sso_id" TEXT,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_sso_id_fkey" FOREIGN KEY ("sso_id") REFERENCES "SsoUiProfile"("username") ON DELETE SET NULL ON UPDATE CASCADE;
