const Block = require('./Block')
const BlockModel = require('./model/blockModel.js')

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
        BlockModel.create(this.createGenesisBlock())
    }
    createGenesisBlock(){
        return new Block(0, "01/01/2020", 0, "Genesis block with 0 transaction" )
    }
    getLastBlock(){
        return this.chain[this.chain.length - 1]
    }
    addNewBlock(newBlock){
        newBlock.previousHash = this.getLastBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
}

module.exports = BlockChain
