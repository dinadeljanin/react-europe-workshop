const NFTTicket = artifacts.require("NFTTicket");
const SalesManager = artifacts.require("SalesManager");

module.exports = async function (deployer) {
  
  await deployer.deploy(NFTTicket);

  const salesManager = deployer.deploy(
    SalesManager,
    10,
    (1e18).toString(),
    NFTTicket.address
  );
};
