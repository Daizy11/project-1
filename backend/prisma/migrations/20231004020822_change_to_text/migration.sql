-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE TEXT;