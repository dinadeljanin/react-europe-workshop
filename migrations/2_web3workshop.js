const Web3Workshop = artifacts.require("Web3Workshop");

const _maxAttendees = 200;
const _basePrice = 1;

module.exports = function (deployer) {
  deployer.deploy(Web3Workshop, _maxAttendees, _basePrice);
};
