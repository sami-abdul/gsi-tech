const Token = artifacts.require("./ERC20Token.sol");
const ICO = artifacts.require("./ICO.sol");

var Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");

contract("ICO", accounts => {

  function tokenToChacha(_token) {
    return _token / (10 ** 6);
  }

  it("Should be possible for user to buy token using ether.", () => {
    // const tokenInstance = await Token.deployed();
    // const icoInstance = await ICO.deployed();

    let accounts = web3.eth.accounts;
    console.log(accounts);
    // let ownerAccount = accounts[0];
    // let userAccount = accounts[1];
    // const decimal = 0;
    // console.log("Owner account address ..... ", ownerAccount);

    // let temp = await tokenInstance.balanceOf.call(ownerAccount);
    // console.log("Owner balance initially ..... ", tokenToChacha(temp).toString(decimal));
    // assert.equal(tokenToChacha(temp).toString(decimal), 100, "there is a problem in user owner initial balance");

    // await tokenInstance.transfer(icoInstance.address, 50000000, {from: ownerAccount});
    // let temp1 = await tokenInstance.balanceOf.call(ownerAccount);
    // console.log("Owner balance after transfer to ICO ..... ", tokenToChacha(temp1).toString(decimal));

    // let temp2 = await icoInstance.getICOBalance.call();
    // console.log("ICO balance before loosing any token ..... ", tokenToChacha(temp2).toString(decimal));
    // assert.equal(tokenToChacha(temp2).toString(decimal), 50, "ICO does'nt get right balance");

    // let userBalance = await tokenInstance.balanceOf.call(userAccount);
    // console.log("User token balance Before buying token ..... ", userBalance.toString(10));
    // assert.equal(userBalance.toString(decimal), 0, "It should be Zero");

    // let userBal = await web3.eth.getBalance(userAccount);
    // console.log("User Account balance before, in ether ..... ", web3.utils.fromWei(userBal, "ether"));

    // await icoInstance.buyToken({
    //   value: 500,
    //   from: userAccount
    // });

    // let temp3 = await icoInstance.getICOBalance.call();
    // console.log("ico balance after loosing token ..... ", tokenToChacha(temp3).toString(decimal));
    // assert.equal(tokenToChacha(temp3).toString(decimal), 49.995, "ICO didnt dispatched the required amount");
  
    // let userBalanceAfter = await tokenInstance.balanceOf.call(userAccount);
    // console.log("User token balance After buying token ..... ", userBalanceAfter.toString(decimal));
    // assert.equal(userBalanceAfter.toString(decimal), 5000, "user token transaction is unsuccessful");

    // let userBal1 = await web3.eth.getBalance(userAccount);
    // console.log("User Account balance after, in ether ..... ", web3.utils.fromWei(userBal1, "ether"));
  });
})