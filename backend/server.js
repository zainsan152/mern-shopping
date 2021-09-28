const express = require('express');
require('colors');
const products = require('./data/products');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();
const { connectDb } = require('./config/config')
connectDb();
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node server</h1>')
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    res.json(product);
})

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.inverse.green)
})