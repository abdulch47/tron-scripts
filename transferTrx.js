import TronWeb from 'tronweb';

//Initialize Alchemy provider
const tronWeb = new TronWeb({
    fullNode: 'https://nile.trongrid.io/',
    solidityNode: 'https://nile.trongrid.io/',
    eventServer: 'https://nile.trongrid.io/',
    privateKey: '49B7C9C323A02D668A61822EB069F89C44FC8C6D5AB1C9DEB6D8512636B7E3C2'
});

const amount = 1000_000; //1 trx
const recipientAddress = 'TXU7duXEeLDWTM3iufwveRkJtdfVGjKfQS';
async function sendTx() {
    console.log("Sending trx")
    const transaction = await tronWeb.transactionBuilder.sendTrx(recipientAddress, amount, tronWeb.address);
    const signedTransaction = await tronWeb.trx.sign(transaction);
    const broadcastResponse = await tronWeb.trx.sendRawTransaction(signedTransaction);
    console.log("Transaction completed:", broadcastResponse.txid)
}
sendTx();