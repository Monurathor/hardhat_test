require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    hardhat: {},
    alchemy: {
      url: 'https://eth-goerli.g.alchemy.com/v2/MUOdcETm5QCK80GuDxFpGjs6VbkKp0JG',
      accounts: ['084f2f34b37fd0d3319ad9841f354887804c2abbd6497384c3e7b88148e4a4ad']
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

