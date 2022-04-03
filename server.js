const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const db = mongoose.connection

// config
PORT = process.env.PORT

// how to connect to db either via heroku or locally
const mongoURI = process.env.MONGODB_URI


// db connect
mongoose.connect(mongoURI, () => {
	console.log('the connection with mongod is established')
})

// drop collection, if necessary
// db.dropCollection

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// middleware
app.use(express.json())
app.use(cors())

// controller
const voucherController = require('./controllers/voucher')
app.use('/vouchers', voucherController)

app.get('/', (req, res) => {
  res.redirect('/vouchers')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`)
})