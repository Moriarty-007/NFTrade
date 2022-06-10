require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
//require("dotenv").config({ path: ".env" });
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const AlchemyId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Alchemy
      url: `https://polygon-mumbai.g.alchemy.com/v2/${AlchemyId}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    /*
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};