const express = require('express')
const keys = require('./config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product')
const Order = require('./models/order')
const path = require('path');

password = 'client123'

app.use(require("body-parser").text());

mongoose.connect(`mongodb+srv://client:${password}@ecommerce-jt0aj.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { token,product } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
    //   const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: product.description
        }
        // {
        //   idempotency_key
        // }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });

const ordersRouter = require('./routes/orders')
app.use('/api/orders', ordersRouter)

const productsRouter = require('./routes/products')
app.use('/api/products', productsRouter)

//Getting one
app.get('/api/product/:id', async (req,res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

//Updating one
app.patch('/api/product/:id', async (req,res) => {
  const product = await Product.findById(req.params.id)
  product.sizes = req.body.sizes;
  product.second_image = req.body.second_image;

  const updatedProduct = await product.save()
  res.json(updatedProduct)
})

//Serve static assets if in production
if(process.env.NODE_ENV === 'production')
{
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))