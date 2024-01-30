/*
  Warnings:

  - You are about to drop the column `user_id` on the `SsoUiProfile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SsoUiProfile" DROP CONSTRAINT "SsoUiProfile_user_id_fkey";

-- AlterTable
ALTER TABLE "SsoUiProfile" DROP COLUMN "user_id",
ADD COLUMN     "npm" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sso_ui_id" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sso_ui_id_fkey" FOREIGN KEY ("sso_ui_id") REFERENCES "SsoUiProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
