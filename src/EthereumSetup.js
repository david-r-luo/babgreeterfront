// import web3: https://github.com/ethereum/wiki/wiki/JavaScript-API
import Web3 from 'web3';

// instantiate web3
// creates a new web3 object using the testrpc instance we are running in the background
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// set greeter's ABI (Application Binary Interface)
var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]

// this should be the address of the mined Greeter contract on testrpc after truffle migrate
var greeterAddress = '0x9fc1959c394282fcd96ea7d58250f62f1efd3168';

// uses web3 api to find a contract with the greeterABI at the greeterAddress on the current network
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);

/* TASK 1:
 * get block number
 */
var blockNum = web3.eth.blockNumber;

/* TASK 2:
 * get hashrate
 */
var hashrate = web3.eth.hashrate;

/* TASK 3:
 * get gas price
 * HINT: use BigNumber.toString(10)
 */
var gasPrice = web3.eth.gasPrice.toString(10);

/* TASK 4:
 * Get the default (0th) account from your Testrpc
 */
var acct = web3.eth.accounts[0];

/* TASK 5:
 * Get the balance of your default account in Ether
 * HINT: use web3.fromWei()
 */
var balance = web3.fromWei(web3.eth.getBalance(acct)).toString();

//make sure you have a value for each of the following exported variables
export {greeterContract, acct, balance, blockNum, hashrate, gasPrice};
