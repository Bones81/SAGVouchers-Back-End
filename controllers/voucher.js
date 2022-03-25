const express = require('express')
const router = express.Router()
const Voucher = require('../models/voucher')

// Index
router.get('/', (req, res) => {
  Voucher.find({}, (err, allVouchers) => {
    res.json(allVouchers)
  })
})

// New
router.get('/new', (req, res) => {
  res.json({"responseText": 'Route for initiating a new voucher'})
})

// Edit
router.get('/edit/:id', (req, res) => {
  Voucher.findById(req.params.id, (err, foundVoucher) => {
    res.json(foundVoucher)
  })
})

// Create
router.post('/', (req, res) => {
  Voucher.create(req.body, (err, createdVoucher) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdVoucher);
    }
    res.json(createdVoucher)
  })
})

// Update
router.put('/edit/:id', (req, res) => {
  Voucher.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedVoucher) => {
    res.json(updatedVoucher)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  Voucher.findByIdAndRemove(req.params.id, (err, deletedVoucher) => {
    res.json(deletedVoucher)
  })
})

// Show
router.get('/:id', (req, res) => {
  Voucher.findById(req.params.id, (err, foundVoucher) => {
    res.json(foundVoucher)
  })
})

module.exports = router