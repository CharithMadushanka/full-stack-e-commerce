const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

  items: { type: Array,required: true },

  name: { type: String,required: true },

  shipping_address: { type: String,required: true },

  email: { type: String,required: true },

  phone_number: { type: String,required: true },
},
  { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)