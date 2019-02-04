const mongoose = require('mongoose')

const chickenShopSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  website: { type: String }
})

module.exports = mongoose.model('ChickenShop', chickenShopSchema)
