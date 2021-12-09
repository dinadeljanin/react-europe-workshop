// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; // Keeps track of total number of NFTs minted & assigns a unique ID to each
import "@openzeppelin/contracts/access/Ownable.sol"; // Access control - only allows the smart contract owner to mint NFTs
import "@openzeppelin/contracts/utils/Counters.sol";

// see: https://docs.openzeppelin.com/contracts/4.x/erc721

/// @title FRENS NFT Contract
/// @author Wojak and Frens
/// @notice A simple NFT contract
/// @dev All unaudited code. ONLY for educational purposes
contract NFTTicket is ERC721, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  /// @notice Create FRENS NFT contract
  /// @notice A simple NFT contract
  /// @dev creates NFT contract with custom information
  constructor() ERC721("FrensTickets", "FRENS") {}

  function mintNFT(address recipient) public onlyOwner returns (uint256) {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    // _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }
}

// See: how to create and deploy NFT
// https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961
