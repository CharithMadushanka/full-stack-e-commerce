const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String,required: true },

  description: { type: String,required: true,maxlength: 2000 },

  price: { type: Number,required: true },
  
  gender: { type: String,required: true },

  type: { type: String,required: true },

  category: { type: String,required: true },

  quantity: { type: Number },

  sold: { type: Number,default: 0 },

  sizes: { type: Array,required: true },

  image: { type: String,required: true },

  second_image: { type: String,required: true }
},
  { timestamps: true })

module.exports = mongoose.model('Product', productSchema)