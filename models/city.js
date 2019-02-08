const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  continent: { type: mongoose.Schema.ObjectId, ref: 'Continent', required: true },
  population: { type: Number },
  currency: { type: Number},
  lat: { type: Number },
  lng: { type: Number },
  posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post'}]
})

// citySchema.virtual('posts', {
//   ref: 'Post',
//   localField: '_id',
//   foreignField: 'city'
// })
//
// citySchema.set('toJSON', {
//   virtuals: true,
//   transform(doc, json) {
//     delete json.__v
//     return json
//   }
// })

module.exports = mongoose.model('City', citySchema)
