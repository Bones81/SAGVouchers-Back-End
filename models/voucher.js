const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voucherSchema = new Schema({
  actorName: String,
  prodName: String,
  bgType: String,
  wetPay: Boolean,
  smokePay: Boolean,
  hmu: Boolean,
  startTime: String,
  endTime: String,
  ndbStart: String,
  lunchStart: String,
  lunchEnd: String,
  dinnerStart: String,
  dinnerEnd: String,
  numWardrobe: Number,
  formalWear: Boolean,
  policeWear: Boolean,
  pet: Boolean,
  golfClubs: Boolean,
  tennisRacquet: Boolean,
  luggage1: Boolean,
  luggage2: Boolean,
  camera: Boolean,
  skisPoles: Boolean,
  otherPropsAmt: Number,
  car: Boolean,
  trailer: Boolean,
  bicycle: Boolean,
  moped: Boolean,
  motorcycle: Boolean,
  policeMoto: Boolean,
  skatesOrSkateboard: Boolean,
  hazardPay: Number,
  otherBumps: Number,
  mileage: Number,
  tolls: Number,
}, {timestamps: true})

const Voucher = mongoose.model('voucher', voucherSchema)

module.exports = Voucher