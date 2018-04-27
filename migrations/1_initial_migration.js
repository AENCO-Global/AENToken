var AENToken = artifacts.require("./AENToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AENToken,{gas:4700000});
};