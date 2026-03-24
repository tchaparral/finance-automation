/*
  Warnings:

  - The values [TRANSFER] on the enum `CategoryType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name,type,userId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `type` on the `Recurring` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
*/

-- AlterEnum
BEGIN;
CREATE TYPE "CategoryType_new" AS ENUM ('EXPENSE', 'INCOME');

ALTER TABLE "Category"
ALTER COLUMN "type" TYPE "CategoryType_new"
USING ("type"::text::"CategoryType_new");

ALTER TYPE "CategoryType" RENAME TO "CategoryType_old";
ALTER TYPE "CategoryType_new" RENAME TO "CategoryType";

-- IMPORTANT: move Recurring off the old enum before dropping it
ALTER TABLE "Recurring" DROP COLUMN "type";
ALTER TABLE "Recurring" ADD COLUMN "type" "TransactionType" NOT NULL;

DROP TYPE "public"."CategoryType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_type_userId_key"
ON "Category"("name", "type", "userId");