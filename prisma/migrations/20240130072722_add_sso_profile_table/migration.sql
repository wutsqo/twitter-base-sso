/*
  Warnings:

  - You are about to drop the column `sso_id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "sso_id";

-- CreateTable
CREATE TABLE "SsoUiProfile" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "org_code" TEXT,

    CONSTRAINT "SsoUiProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SsoUiProfile_username_key" ON "SsoUiProfile"("username");

-- AddForeignKey
ALTER TABLE "SsoUiProfile" ADD CONSTRAINT "SsoUiProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
