const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voucherSchema = new Schema({
  actorName: String,
  prodName: String,
  inTime: String,
  outTime: String,
  lunchPenalties: Number,
  dinnerPenalties: Number,
  wetPay: Boolean,
  smokePay: Boolean,
  wardobeOptions: Number,
  propsOptions: Number,
  ndbStart: String,
  ndbEnd: String,
  addtlBumps: Number,
  notes: String
}, {timestamps: true})

const Voucher = mongoose.model('voucher', voucherSchema)

module.exports = Voucher