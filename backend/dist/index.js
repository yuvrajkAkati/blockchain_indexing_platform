"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/webhook", (req, res) => {
    try {
        const event = req.body;
        if (event.type === "NFT_SALE") {
            const { nft } = event;
            const targetPrice = 9.64;
            if (nft.price === targetPrice) {
                console.log(`✅ NFT sold for ${targetPrice} SOL! Mint: ${nft.mint}`);
                res.status(200).json({
                    message: "NFT matched target price",
                    nft: nft,
                });
            }
            else {
                console.log(`❌ NFT did not match target price: ${nft.price} SOL`);
                res.status(200).json({
                    message: "NFT did not match target price",
                    nft: nft,
                });
            }
        }
        res.status(200).send("asdas");
    }
    catch (err) {
        console.log("error");
        res.status(500).send("error");
    }
});
app.listen(3000);
