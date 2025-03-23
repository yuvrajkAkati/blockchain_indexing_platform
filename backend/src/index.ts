import express from "express";
const app = express()

app.use(express.json())

app.post("/webhook",(req,res)=>{
    
    

})

app.listen(3000)
























// app.post("/webhook",(req,res)=>{

//     try {
//         const event = req.body
//         if (event.type === "NFT_SALE") {
//             const { nft } = event;
            
//             const targetPrice = 9.64;

//             if (nft.price === targetPrice) {
//                 console.log(`NFT sold for ${targetPrice} SOL! Mint: ${nft.mint}`);
//                  res.status(200).json({
//                     message: "NFT matched target price",
//                     nft: nft,
//                 });
//             } else {
//                 console.log(`NFT did not match target price: ${nft.price} SOL`);
//                 res.status(200).json({
//                     message: "NFT did not match target price",
//                     nft: nft,
//                 });
//             }
//         }
//         res.status(200).send("asdas")
//     } catch (err) {
//         res.status(500).send("error")
//     }

// })