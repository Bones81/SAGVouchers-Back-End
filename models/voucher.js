const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voucherSchema = new Schema({
  actorName: String,
  prodName: String,
  inTime: String,
  outTime: String,
  lunchPenalties: Number,
  dinnerPenalties: Number,
  wardobeOptions: Number,
  wetPay: Boolean,
  smokePay: Boolean,
  hairMakeup: Boolean,
  formalWardrobe: Boolean,
  policeWardrobe: Boolean,
  pet: Boolean,
  golf: Boolean,
  tennis: Boolean,
  luggage1: Boolean,
  luggage2: Boolean,
  luggage3: Boolean,
  camera: Boolean,
  ski: Boolean,
  otherProps: Boolean,
  automobile: Boolean,
  trailer: Boolean,
  bicycle: Boolean,
  moped: Boolean,
  motorcycle: Boolean,
  policeMotorcycle: Boolean,
  skatesSkateboard: Boolean,
  hazardPay: Boolean,
  mileage: Boolean,
  addtlBumps: Number,
}, {timestamps: true})

const Voucher = mongoose.model('voucher', voucherSchema)

module.exports = Voucher