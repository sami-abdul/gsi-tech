const Token = artifacts.require("./ERC20Token.sol");
const ICO = artifacts.require("./ICO.sol");
let Web3 = require("web3");
let utils = require('./functions');

const web3 = new Web3("http://127.0.0.1:8545");

const valueToInvest = 10;
const etherRate = 10;
const bitcoinRate = 50;

let transaction;

contract("ICO", () => {

    it("Should be possible for user to buy token using ether", async () => {
        const tokenInstance = await Token.deployed();
        const icoInstance = await ICO.deployed();

        let accounts = await web3.eth.getAccounts();
        let userAccount = accounts[1];

        // Check initial balance.
        let initialBalance = await tokenInstance.balanceOf.call(userAccount);
        assert.equal(initialBalance.toNumber(), 0);

        // Add ICO as token minter.
        let minterResult = await tokenInstance.addMinter(icoInstance.address);
        assert.equal(minterResult.logs[0].event, 'MinterAdded');

        await icoInstance.buyTokensWithEther({
            value: valueToInvest,
            from: userAccount
        });

        let finalBalance = await tokenInstance.balanceOf.call(userAccount);
        assert.equal(finalBalance.toNumber(), valueToInvest * etherRate);
    });

    it("Should be possible for user to buy token using bitcoin", async () => {
        transaction = await utils.generateBTCAddress('BTC', valueToInvest);
        let verification = await utils.verifyTransactionBalance(transaction.publicAddress, valueToInvest);
        if (verification) {
            const tokenInstance = await Token.deployed();
            const icoInstance = await ICO.deployed();

            let accounts = await web3.eth.getAccounts();
            let userAccount = accounts[1];

            // Check initial balance.
            let initialBalance = await tokenInstance.balanceOf.call(userAccount);
            assert.equal(initialBalance.toNumber(), 100);

            await icoInstance.buyTokensWithBitcoin(userAccount, valueToInvest);

            let finalBalance = await tokenInstance.balanceOf.call(userAccount);
            assert.equal(finalBalance.toNumber(), valueToInvest * bitcoinRate);
        }
    });
});
