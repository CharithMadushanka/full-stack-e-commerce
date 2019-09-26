const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//Getting all
router.get('/', async(req,res) => {
    const products = await Product.find();
    res.json(products)
})

//Getting Discover New/Trending Now list
router.get('/sortedList', (req,res) => {
    
    let sortBy = req.query.sortBy;

    Product.find({ $or: [ { "type": "Tops & T-Shirts" }, { "type": "Jackets & Vests" } ] })
    .sort([[ sortBy,"desc" ]])
    .limit(3)
    .exec((err,products) => {
        if(err){
            return res.status(400).json({ error : "Products not found" })
        }
        res.json(products)
    })
})

//Getting Men's/Women's/Sneakers/Tops & T-Shirts/Jackets & Vests list
router.get('/list', (req,res) => {

    let field = Object.keys(req.query)[0]
    let value = (field == 'type') ? req.query.type : req.query.gender

    Product.find({ [field]: value })
    .exec((err,products) => {
        if(err){
            return res.status(400).json({ error : "Products not found" })
        }
        res.json(products)
    })
})

//Creating one
router.post('/', async (req,res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        gender: req.body.gender,
        type: req.body.type,
        category: req.body.category,
        quantity: req.body.quantity,
        sold: req.body.sold,
        date: req.body.date,
        image: req.body.image
      })

    const newProduct = await product.save()
    res.status(201).json(newProduct)
})

//Deleting one from products
router.delete('/:id', async (req,res) => {
    const product = await Product.findById(req.params.id)
    product.remove();
    res.json({ message : 'Product deleted successfully' })
})

module.exports = router