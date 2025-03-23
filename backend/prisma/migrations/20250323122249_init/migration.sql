-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL,
    "nftMint" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'SOL',
    "marketplace" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NFT" (
    "id" TEXT NOT NULL,
    "mint" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "collection" TEXT,

    CONSTRAINT "NFT_pkey" PRIMARY KEY ("mint")
);

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_nftMint_fkey" FOREIGN KEY ("nftMint") REFERENCES "NFT"("mint") ON DELETE CASCADE ON UPDATE CASCADE;
