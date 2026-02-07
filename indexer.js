const { ethers } = require("ethers");
require("dotenv").config();

// Configuration
const RPC_URL = process.env.RPC_WS_URL || "wss://eth-mainnet.g.alchemy.com/v2/your-api-key";
const CONTRACT_ADDRESS = "0x7Be8076F4EA4A4AD08075C2508e481d6C946D12b"; // Example: OpenSea Wyvern Exchange

// Minimal ABI for Transfer Events
const ABI = [
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    "event OrderApprovedPartOne(bytes32 indexed hash, address indexed exchange, address indexed maker, address uint256 price)"
];

async function main() {
    console.log("Starting Indexer...");
    
    const provider = new ethers.WebSocketProvider(RPC_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    console.log(`Listening for events on: ${CONTRACT_ADDRESS}`);

    contract.on("Transfer", (from, to, tokenId, event) => {
        const info = {
            from,
            to,
            tokenId: tokenId.toString(),
            blockNumber: event.log.blockNumber,
            transactionHash: event.log.transactionHash
        };

        console.log("New Transfer Detected:");
        console.table(info);
        
        // Logic to save to database (e.g., MongoDB/PostgreSQL) goes here
    });

    // Error handling
    provider.on("error", (tx) => {
        console.error("Provider Error:", tx);
    });
}

main().catch((error) => {
    console.error("Critical Failure:", error);
    process.exit(1);
});
