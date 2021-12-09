// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./NFTTicket.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // Access control - only allows the smart contract owner to mint NFTs

/// @title SalesManager
/// @author NFT Buying Wojak and Frens
/// @notice A contract to buy event tickets in Web3
/// @dev Unaudited contract for learning purposes only
//  Note: contract is equivalent to class keyword
contract SalesManager is Ownable {
  // STATE VARIABLES
  // State variables live on the blockchain and act like storage
  // The more state variables the more the contract costs to deploy to chain
  uint256 public ticketsSold; // implict 0 by default
  uint256 public maxAttendees;
  uint256 public basePrice;

  // Do we want a bool for if someone is attending,
  // or rather how many tickets they have,
  // so can that be an array?

  // public keyword creates an automatic getter
  // mapping is equivalent to JS Object, a key-value pair / hash map
  // see: https://solidity-by-example.org/mapping/
  /// @notice holds public state of the attendee list
  mapping(address => bool) public attendees;

  NFTTicket nftTicket;

  /// EVENTS
  // Events alert the front end to what happened
  event TicketBought(address _attendee);

  /// @notice This constructor sets up the max amount of event attendees
  constructor(
    uint256 _maxAttendees,
    uint256 _basePrice,
    address _nftTicket
  ) {
    maxAttendees = _maxAttendees;
    basePrice = _basePrice;

    // Create NFT ticket contract instance
    // deployed prior in depoly script
    nftTicket = NFTTicket(_nftTicket);
  }

  /// The function modifier can be added to function signature
  /// This runs the the modifier when the function is called
  /// https://solidity-by-example.org/function-modifier/
  /// @notice modifier checks ticket availablity
  modifier isNotSoldOut() {
    // require conditional to be true, or reverts back to previous state
    // gas fee to pay for computation is still consumed.
    // see: https://solidity-by-example.org/gas/
    // see: https://www.geeksforgeeks.org/solidity-error-handling/
    require(ticketsSold < maxAttendees, "All sold out.");
    // indicates to call function.
    // Can be placed before or after code and used multiple times
    _;
  }

  modifier hasNotBought(address _potentialBuyer) {
    require(
      attendees[msg.sender] == false,
      "already purchased, 1 ticket per person"
    );
    _;
  }

  modifier checkCorrectPayment() {
    require(msg.value == basePrice, "Please pay the correct price");
    _;
  }

  // send value
  // msg has to include value. Then send that value to owner
  // when you do buy, the last paramet is an object with value
  // where is the money going?
  // or pass owner of contract and make it so that accounts[9] is owner
  // accounts 9 is making monies

  /// @notice allows user to buy ticket if not sold out
  /// first checks if tickets are not sold out - canAttend
  /// then checks total payment matches funds sent - checkPayment

  function buyTicket()
    public
    payable
    isNotSoldOut
    checkCorrectPayment
    hasNotBought(msg.sender)
  {
    // mint ticket
    nftTicket.mintNFT(msg.sender);

    // Add ticket owner to mapping which holds our smart contract's "database"
    attendees[msg.sender] = true;

    // Increase tickets sold count by num of tickets.
    ticketsSold = ticketsSold + 1;

    // Let front end know of tickets
    emit TicketBought(msg.sender);
  }

  // owner get paid
  function withdrawFundsByOwner(address _recipient) public onlyOwner {
    payable(_recipient).transfer(address(this).balance);
  }
}
