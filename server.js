const express = require('express')
const app = express()
require('dotenv').config()

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

// Index
app.get('/', (req, res) => {
  Voucher.find({}, (err, allVouchers) => {
    res.json(allVouchers)
  })
})

// New
app.get('/new', (req, res) => {
  res.send('Route for initiating a new voucher')
})

// Edit
app.get('/edit/:id', (req, res) => {
  res.send(`Route for showing edit page for voucher id# ${req.params.id}`)
})

// Create
app.post('/', (req, res) => {
  Voucher.create(req.body, (err, createdVoucher) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdVoucher);
    }
  })
  res.redirect('/')
})

// Update
app.put('/edit/:id', (req, res) => {
  res.send(`Route for posting edits to voucher id# ${req.params.id} with data: ${JSON.stringify(req.body)}`)
})

// Delete
app.delete('/:id', (req, res) => {
  res.send(`Route for deleting voucher id# ${req.params.id}`)
})

// Show
app.get('/:id', (req, res) => {
  res.send(`Route for showing voucher id# ${req.params.id}`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`)
})