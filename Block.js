const crypto = require('crypto-js');

class Block {
    constructor(index, timestamp, transactionData, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.transactionData = transactionData;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return crypto.SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.transactionData)).toString();
    }
}

module.exports = Block;
