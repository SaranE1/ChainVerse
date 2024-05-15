const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const filepath = path.resolve(__dirname, 'views\\index.html')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
})
let firstName = ""
let secondName = ""
app.post('/sample', (req, res) => {
    
    firstName += req.body.fname
    secondName += req.body.lname
    console.log(firstName)
    res.end(secondName)
})

const port = 3000
app.listen(port, () => {
    console.log('server is running on the port: ' + port)
})