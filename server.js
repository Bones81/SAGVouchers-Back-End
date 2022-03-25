const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/' + 'SAGVouchers'
const db = mongoose.connection

const Voucher = require('./models/voucher')

// db connect
mongoose.connect(mongoURI, () => {
	console.log('the connection with mongod is established')
})

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// config
PORT = process.env.PORT

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