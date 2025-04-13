-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_addressId_fkey";

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
