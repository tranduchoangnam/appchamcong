-- CreateTable
CREATE TABLE "staff" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checkIn" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "checkIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checkOut" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "checkOut_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "staff_id_key" ON "staff"("id");

-- AddForeignKey
ALTER TABLE "checkIn" ADD CONSTRAINT "checkIn_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkOut" ADD CONSTRAINT "checkOut_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
