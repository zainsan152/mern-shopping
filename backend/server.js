const express = require('express');
require('colors');
const products = require('./data/products');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productsRoute');

//dotenv config
dotenv.config();
const {connectDb} = require('./config/config')
connectDb();
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node server</h1>')
});

app.use('/api', productRoutes);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.inverse.green)
})