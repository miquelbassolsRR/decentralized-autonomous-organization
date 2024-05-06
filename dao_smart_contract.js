const Web3 = require('web3');

// Kết nối đến mạng blockchain (ví dụ: Ethereum)
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Địa chỉ và ABI của hợp đồng thông minh cho DAO
const contractAddress = '0x123456789abcdef';
const contractABI = [
  // Define các hàm và sự kiện của hợp đồng
];

// Tạo một instance của hợp đồng từ địa chỉ và ABI
const daoContract = new web3.eth.Contract(contractABI, contractAddress);

// Hàm để tạo một đề xuất mới cho DAO
async function createProposal(proposalDetails) {
  try {
    // Thực hiện giao dịch để tạo đề xuất mới
    const accounts = await web3.eth.getAccounts();
    const transaction = await daoContract.methods.createProposal(proposalDetails).send({ from: accounts[0] });
    console.log('Proposal created successfully. Transaction hash:', transaction.transactionHash);
  } catch (error) {
    console.error('Error creating proposal:', error);
    throw error;
  }
}

module.exports = { createProposal };
