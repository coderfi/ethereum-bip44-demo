console.log("Generates HD addresses from a new master key.\n");

var bitcore = require('bitcore-lib');
var EthereumBip44 = require('ethereum-bip44');

// create a new master private key
var key = bitcore.HDPrivateKey();

// create the hd wallet
var wallet = new EthereumBip44(key);

console.log("Master Key:\t" + key + "\n");

for (var i=1; i < 10; i++) {
    console.log(i + ".\t" + wallet.getAddress(i-1));
}




