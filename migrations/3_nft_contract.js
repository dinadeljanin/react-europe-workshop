const NFTTicket = artifacts.require("NFTTicket");

module.exports = function (deployer) {
  deployer.deploy(
    NFTTicket,
    "FrensTickets",
    "FRENS",
    "https://my-json-server.typicode.com/abcoathup/samplenft/tokens/"
  );
};
