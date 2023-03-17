//Let's monitor Ethereum activity in real time!
//a) Sign up for a free Infura account.
//b) Using the `ethers` npm library, display the following information:

//- Current block number
//- Current gas price
//- Current chain id

//c) Using the `prompt-promise` npm library, prompt a user to provide an ethereum address, and then: 
//- Display the Ethereum balance of that account to the user in the terminal. 
//If it is not a valid ethereum address, display an error. 
//The balance should be converted from `wei` to `ether`.
// - Display the transaction count of that account to the user in the terminal.

const { ethers } = require('ethers');
const dotenv = require('dotenv');
dotenv.config();
const prompt = require('prompt-promise');

async function main(){
    //create provider
    const infuraEndpoint = 'https://mainnet.infura.io/v3/cc7b99f2e5ab4df2bc8e0d0f42da0e56';
    //console.log(infuraEndpoint);
    const provider = new ethers.providers.JsonRpcProvider(infuraEndpoint);

    console.log('The current block number is: ' + await provider.getBlockNumber());
    console.log('The current gas price is: ' + ethers.utils.formatUnits(await provider.getGasPrice(),"ether") + ' eth');
    console.log('The current chain ID is: ' + await (await provider.getNetwork()).chainId)


    const address = await prompt('What ethereum address would you like to check?');
    if (ethers.utils.isAddress(address)){
        console.log('Your balance is currently: ' + ethers.utils.formatUnits(await provider.getBalance(address)) + ' eth');
        console.log('The transaction count is: ' + await provider.getTransactionCount(address));
        process.exit()
    } else {
        throw new Error('This is not a proper Eth address');
    }

}
main();