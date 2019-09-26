const express = require('express')
const router = express.Router()
const Order = require('../models/order')

//Getting all orders
router.get('/', async(req,res) => {
    const orders = await Order.find();
    res.json(orders)
  })

//Creating an order
router.post('/', async (req,res) => {
    const order = new Order({
        _id: req.body._id,
        items: req.body.items,
        name: req.body.name,
        shipping_address: req.body.shipping_address,
        email: req.body.email,
        phone_number: req.body.phone_number
      })
  
    const newOrder = await order.save()
    res.status(201).json(newOrder)
  })
  
//Deleting one from orders
router.delete('/:id', async (req,res) => {
    const order = await Order.findById(req.params.id)
    order.remove();
    res.json({ message : 'Product deleted successfully' })
  })

module.exports = router