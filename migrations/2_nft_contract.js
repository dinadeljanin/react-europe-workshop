const NFTTicket = artifacts.require("NFTTicket");
const SalesManager = artifacts.require("SalesManager");

module.exports = function (deployer) {
  let nftTicket;
  deployer.deploy(NFTTicket).then((res) => {
    console.log(res);
  });

  console.log("---------- Y %O", nftTicket);

  const salesManager = deployer.deploy(
    SalesManager,
    10,
    (1e18).toString(),
    nftTicket.address
  );
};
