# Blockchain Data Indexer Lite

This repository provides a clean, robust solution for tracking smart contract events in real-time. Instead of querying the blockchain repeatedly, this indexer listens for specific logs and prepares them for use in your dApp frontend or analytics dashboard.

## Features
* **Real-time Event Listening**: Uses WebSockets for low-latency event detection.
* **Filter Management**: Easily configurable to watch specific contracts or topics.
* **Developer Friendly**: Structured to be integrated into any Node.js backend or used as a standalone bot.

## Setup
1. Install dependencies: `npm install ethers dotenv`
2. Create a `.env` file with your `RPC_WS_URL` (WebSocket provider).
3. Run the indexer: `node indexer.js`

## Use Cases
* Building a custom NFT mint tracker.
* Monitoring large DeFi whale transfers.
* Syncing on-chain state to a local SQL/NoSQL database.
