require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half kiwi orange tooth bike curtain net purpose grace derive symptom skull'; 
let testAccounts = [
"0x725daa9bc846ae77c77d4f5a383c971ac30fccb77655aad0e10de5db43828e21",
"0x37c645d54584ee10f255845b777fc62bf1bf3dab6150bb924219810a3106f4e6",
"0xdd5b99c0ac17a77fed3de6918f268560fe541bb492250ab9827967cc64d98b64",
"0x93be690d01357fce1ca1b7c8c7bdc7be30c559497a9be4b4a682ed42d847c9ba",
"0x281f48c706b5cf888c2d0bdeb57b9b93c6fb93c092e59a91b67679b0950c0721",
"0xfa82757522c0b9f5968e8e411d98c9f9c20d9c0bb57c9bc5c4966f86d79001a2",
"0x8548af7f84151dc48410855956ceb4c76f175ddb695f5ceb459a2db7f346818d",
"0x7733bc0cfb1c7979ae7a53f2143a3fbb84884646eb6c168e66acd0665251e125",
"0xa6b73901732005aaa0ebb5c17b47d4836787af4bf79c1f1adf437cab3702fc99",
"0x9bd8eb150fea1c40ae55a586ab89c581b4a7f8bdda9cd17c83b11cdd42331c2c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


