// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Web3Workshop {
  uint public ticketsSold;
  uint public maxAttendees;

  // do we want a bool for if someone is attending, or rather how many tickets they have, so can that be an array?
  mapping(address => bool) attendees;

  constructor() {
    ticketsSold = 0;
    maxAttendees = 200;
  }

  modifier canAttend() {
    require(ticketsSold < maxAttendees, "All sold out.");
    _;
  }

  function buyTicket() external payable {
    // Check if they can attend
    // People can buy multiple tickets

    // Transfer the calculated value for the tickets
    // Increase tickets sold count by num of tickets.
  }
}