const NFTTicket = artifacts.require("NFTTicket");

module.exports = function (deployer) {
  deployer.deploy(NFTTicket);
};
