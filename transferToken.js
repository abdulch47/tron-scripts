import TronWeb from 'tronweb';

//Initialize Alchemy provider
const tronWeb = new TronWeb({
    fullNode: 'https://nile.trongrid.io/',
    solidityNode: 'https://nile.trongrid.io/',
    eventServer: 'https://nile.trongrid.io/',
    privateKey: '49B7C9C323A02D668A61822EB069F89C44FC8C6D5AB1C9DEB6D8512636B7E3C2'
});

const tokenAddress = 'TLf7ey3N8hM9nPmHVhJ1mUx6CRwS2CEjn5';
// const contract = new tronWeb.Contract(tokenAddress, tokenAbi, wallet);
// const result =
 async function getBalanceToken (userAddress)  {
    try {
        console.log("user", userAddress)
        // Initialize the token contract instance
        const tokenContract = await tronWeb.contract().at(tokenAddress);
        // Address for which you want to get the balance
        // Call the balanceOf function of the token contract
        let balance = await tokenContract.balanceOf(userAddress).call();
        balance = balance.toString();
        console.log("Balance:", balance);
        return { balance };
    } catch (error) {
        console.error("Error fetching balance:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
// getBalanceToken('THwZrmdZwJp9RpVxg9GiFGJJ1FZfGfY6tb');

async function sendTokens (recipientAddress, amount) {
    try {

        console.log(recipientAddress, amount)
        // Initialize the USDT contract instance
        const usdtContract = await tronWeb.contract().at(tokenAddress);
        // Convert amount to contract's decimal precision
        const decimalFactor = Math.pow(10, 18); // Decimal factor for 18 decimal places
        amount = amount * decimalFactor;
        amount = amount.toString();
        console.log("amount", amount)
        // Call the transfer function of the USDT contract
        const result = await usdtContract.transfer(recipientAddress, amount).send();
        console.log("Transaction result:", result);
        return { success: true, result: result }
    } catch (error) {
        console.error("Error transferring USDT:", error);
    }
};
sendTokens('TXU7duXEeLDWTM3iufwveRkJtdfVGjKfQS', 100);