console.log("Generates HD addresses from an existing master key.\n");

var bitcore = require('bitcore-lib');
var EthereumBip44 = require('ethereum-bip44');

// TODO: generate the key from an existing seed
var key = new bitcore.HDPrivateKey();
var derivedPubKey = key.derive("m/44'/60'/0'/0").hdPublicKey;

// create the hd wallet from the existing private key
var wallet = EthereumBip44.fromPublicSeed(derivedPubKey.toString());

console.log("Master Key:\t" + key + "\n");

for (var i=1; i < 10; i++) {
    console.log(i + ".\t" + wallet.getAddress(i-1));
}




