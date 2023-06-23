# Contract README
This README file provides a brief overview and instructions for using the mtok contract. The mtok contract is deployed on the GoEarly testnet using Hardhat and Alchemy RPC. It can be tested and interacted with using Remix.

# Contract Details
Contract Name: mtok
License: MIT
Solidity Version: ^0.8.9
External Dependencies: @openzeppelin/contracts/token/ERC20/ERC20.sol, @openzeppelin/contracts/access/Ownable.sol
About the Contract
The mtok contract is an ERC20 token contract that allows the minting, transferring, and burning of tokens. It inherits functionality from the OpenZeppelin ERC20 and Ownable contracts.

# Token Information
Token Name: MTok
Token Symbol: MT
# Contract Functions
mint(address to, uint256 amount): This function is used to mint new tokens. Only the contract owner can call this function. The specified amount of tokens will be created and sent to the to address.

transferTok(address to, uint256 amount): This function allows users to transfer tokens to another address. Before calling this function, the user needs to approve the contract to spend a certain amount of tokens on their behalf. This function handles the transfer using the transferFrom function.

burn(uint256 amount): This function allows users to burn (destroy) a specified amount of their own tokens. Before calling this function, the user needs to approve the contract to spend a certain amount of tokens on their behalf.

# Testing on Remix
To test the mtok contract on Remix, follow these steps:

Open the Remix IDE (https://remix.ethereum.org/).

Create a new file called mtok.sol and paste the contract code into it.

Select the compiler version 0.8.9 from the Remix compiler settings.

Make sure you have the necessary dependencies imported in your Remix environment:

@openzeppelin/contracts/token/ERC20/ERC20.sol
@openzeppelin/contracts/access/Ownable.sol
Compile the contract by clicking the "Compile" button in Remix.

Deploy the contract by selecting the mtok contract from the dropdown in the "Deploy & Run Transactions" section.

Interact with the contract by calling its functions. Make sure you have the required permissions and provide the necessary arguments when calling each function.
