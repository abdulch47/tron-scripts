import { ethers } from 'ethers';
import TronWeb from 'tronweb';
import crypto from 'crypto';


// Generate or use an existing mnemonic
// const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
// // const mnemonic = "existing mnemonic phrase here"; // Use your existing mnemonic

// console.log("Mnemonic:", mnemonic);

// // Create a wallet from the mnemonic
// const wallet = ethers.Wallet.fromMnemonic(mnemonic);

// // Get the private key
// const privateKey = wallet.privateKey.slice(2); // Remove the '0x' prefix

// // Create a Tron address from the private key
// const tronWeb = new TronWeb({ fullHost: 'https://api.trongrid.io' });
// const address = tronWeb.address.fromPrivateKey(privateKey);

// console.log("Private Key:", privateKey);
// console.log("Address:", address);


var privateKey = crypto.randomBytes(32).toString('hex');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
 async function createAddress () {
    const wallet = await tronWeb.createAccount();
    console.log("Wallet:", wallet);
}
createAddress()
