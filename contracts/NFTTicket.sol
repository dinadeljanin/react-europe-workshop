// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// see: https://docs.openzeppelin.com/contracts/4.x/erc721
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract NFTTicket is ERC721URIStorage {
    constructor() ERC721("FrensTickets", "FRENS") {}
}

// See: how to create and deploy NFT
// https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961