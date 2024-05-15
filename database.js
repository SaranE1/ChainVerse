const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:1234@blockcluster.0ohvqbb.mongodb.net/blockchain?retryWrites=true&w=majority&appName=blockcluster')
    .then(() => console.log('connection is created'))