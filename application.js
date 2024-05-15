const express = require('express')
const bodyParser = require('body-parser')
const Block = require('./Block')
const BlockChain = require('./BlockChain')
const mongoose = require('mongoose')
const BlockModel = require('./model/blockModel')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const connectionString = process.env.CON_STRING

mongoose.connect(connectionString)
    .then(() => {
        app.listen(port, () => {
            console.log('server listening to the port: ' + port)
        })
        console.log('connection is created')
    }).catch((error) => console.log(error))


let blockChain = new BlockChain()

const app = express()
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('homepage.ejs')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addData', async (req, res) => {
    let amount = req.body.amount
    let from = req.body.from
    let to = req.body.to
    let data = from + ' sent ' + amount + ' rupees to ' + to 
    let newBlock = new Block(blockChain.getLastBlock().index + 1, new Date(), data)
    blockChain.addNewBlock(newBlock)
    try{
        const blockNew = await BlockModel.create(newBlock)
        console.log(blockNew + " data added to the data base")
        res.render('showBlockupdate.ejs', {blockNew: blockNew})
    }
    catch(err){
        console.log('data not added')
        res.status(500).json({message: "error message"})
    }
    console.log(newBlock.hash)
})

// app.get('/getChain', (req, res) => {
//     res.status(200).send(blockChain.chain);
// });

app.get('/getChain', async (req, res) => {
    try{
        const blockData = await BlockModel.find({})
        res.status(200).json(blockData)
    }
    catch(err){
        console.log("error showing the data")
    }
    
});


