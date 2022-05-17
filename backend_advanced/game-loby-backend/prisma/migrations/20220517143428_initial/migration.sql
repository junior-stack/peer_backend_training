-- CreateTable
CREATE TABLE "users" (
    "userID" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userID")
);
