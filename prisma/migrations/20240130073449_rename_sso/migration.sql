/*
  Warnings:

  - You are about to drop the column `sso_ui_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_sso_ui_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sso_ui_id",
ADD COLUMN     "sso_id" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sso_id_fkey" FOREIGN KEY ("sso_id") REFERENCES "SsoUiProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
