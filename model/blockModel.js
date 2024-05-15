const mongoose = require('mongoose')

const blockSchema = mongoose.Schema(
    {
        index: {
            type: Number,
            required: true
        },
        timestamp: {
            type: String,
            required: true
        },
        transactionData: {
            type: String,
            required: [true, "Enter the transaction amount to begin the transaction process"]
        },
        previousHash: {
            type: String,
            required: true
        },
        hash: {
            type: String
        }

    }
)

const modelName = 'BlockModel_' + Date.now()
const BlockModel = mongoose.model(modelName , blockSchema)
module.exports = BlockModel