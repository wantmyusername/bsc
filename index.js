const Web3 = require('web3');

const web3 = new Web3('https://bsc-dataseed.binance.org/');

const contractAddress = '0x00';
const contractAbi = [
ABI_HERE
];

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

const mintFunction = contractAbi.find(
  (abi) => abi.type === 'function' && abi.name === 'mint'
);

if (mintFunction) {
  console.log('El contrato tiene una función para mintear.');
} else {
  console.log('El contrato no tiene una función para mintear.');
}
