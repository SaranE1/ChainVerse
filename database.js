const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectionString = process.env.CON_STRING

mongoose.connect(connectionString)
    .then(() => console.log('connection is created'))