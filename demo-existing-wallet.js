console.log("Generates HD addresses from an existing master key.\n");

var bitcore = require('bitcore-lib');
var EthereumBip44 = require('ethereum-bip44');

// the existing master private key
var key = 'xprv9s21ZrQH143K4BX2reUURqR54XkNhbNkFhEiRQqFkzu5z7T1dp9eMGozFTgKVu5Bs6R8Wd8BuhcJ3rj3LvzJvkc9uBc5xdhstRfJgcTLsjk';

// create the hd wallet from the existing private key
var wallet = EthereumBip44.fromPrivateSeed(key)

console.log("Master Key:\t" + key + "\n");

for (var i=1; i < 10; i++) {
    console.log(i + ".\t" + wallet.getAddress(i-1));
}




