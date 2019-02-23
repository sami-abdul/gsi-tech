var ERC20Token = artifacts.require("./ERC20Token.sol");
var ICO = artifacts.require("./ICO.sol");

module.exports = async function(deployer) {
  await deployer.deploy(ERC20Token);
  await deployer.deploy(ICO, ERC20Token.address);
};
