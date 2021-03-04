require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note spice prosper gesture infant sword turkey'; 
let testAccounts = [
"0xc579cacf43e41fef7408bc979007fc44716f111813b2fda0c4c66f860d1a6953",
"0xbe82ec8ae16fe32fd394c65588d9859b61ce6d3dd687fb8669f274058d271c9e",
"0x21c432bcdfd357b089fb719177bb8ea62d43608a1da9c622c8661e3fc204e741",
"0xaf64a3222cdfd685e8d221ff2bec17290a3c1dd1ca7345886ed5f872a3cf2169",
"0xbb28ec3d9278bd075fb8f077459f300e7bb1b9d39b3096e0afa616ee4a46859d",
"0x94df5eef2278683acfa36422f1131d1274861b325697c300a6f5f8a5f2b35f59",
"0xbec3118a0e6f9272d114198656a416a094883c253d7b6461489753dbd98c2d93",
"0xdd3ee488913c5d4417438189d4ac52a6e675bb3731f4153fe0d92da477252461",
"0xbddbebd5fd360e2a11afa48e38e899f8d973c0072c76ab2118816f88872db7f6",
"0x9df79851aeea4dabdfac35e68a4b4852b94f1ee9cd99a542a82aea54218b97b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
