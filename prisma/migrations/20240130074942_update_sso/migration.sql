/*
  Warnings:

  - The primary key for the `SsoUiProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SsoUiProfile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_sso_id_fkey";

-- DropIndex
DROP INDEX "SsoUiProfile_username_key";

-- AlterTable
ALTER TABLE "SsoUiProfile" DROP CONSTRAINT "SsoUiProfile_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "SsoUiProfile_pkey" PRIMARY KEY ("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sso_id_fkey" FOREIGN KEY ("sso_id") REFERENCES "SsoUiProfile"("username") ON DELETE SET NULL ON UPDATE CASCADE;
