require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://polygon-amoy.drpc.org',
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.PRIVATE_KEY],
  }
  }
};
