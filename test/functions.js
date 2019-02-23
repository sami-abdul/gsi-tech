var exports = module.exports = {},
    axios = require('axios'),
    coinInfo = require('coininfo'),
    coinkey = require('coinkey');

exports.verifyTransactionBalance = async (address, value) => {
    let balance_check = await axios.get('https://api.blockcypher.com/v1/btc/main/addrs/' + address + '/balance');
    if (balance_check.data.balance >= value) {
        return true;
    }
};

exports.generateBTCAddress = async (coinSymbol, quantity) => {
    let selectedCoinInfo = coinInfo(coinSymbol);
    let ck = new coinkey.createRandom(selectedCoinInfo);
    let transaction = {
        symbol: coinSymbol,
        privateKeyWif: ck.privateWif,
        privateKey: ck.privateKey.toString('hex'),
        publicAddress: ck.publicAddress,
        quantity,
        isFinished: false
    };
    return transaction;
};
