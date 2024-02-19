import {  ethers } from "ethers";
import dotenv from"dotenv"

dotenv.config();
console.log(process.env.INFURA_API_KEY);

const network = "homestead";
 
const provider = new ethers.providers.InfuraProvider(network,process.env.INFURA_API_KEY);

const blockNumber = await provider.getBlockNumber();
console.log(blockNumber);

// code to get the account balance & detail 
////Querying The Blockchain
/*const address = "  ";  // add any address for testing use from ether scan
const balance = await provider.getbalance(address); //will show the balance in the address 
*/
