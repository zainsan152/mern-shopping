const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/UserModel');
const Product = require('./models/ProductModel');
const Order = require('./models/OrderModel');
require('colors');
dotenv.config();
const {connectDb} = require('./config/config')
connectDb();

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return {...product, user: adminUser}
        })
        await Product.insertMany(sampleData);
        console.log('Data imported!!'.green.inverse)
        process.exit()
    } catch (e) {
        console.log(`${e}`.red)
        process.exit(1)
    }
};


const dataDestroy = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log('Data destroyed!!'.green.inverse)
        process.exit()
    }catch (e) {
        console.log(`${e}`.red.inverse)
        process.exit(1)
    }
};

if (process.argv[2] === '-d') {
    dataDestroy();
} else {
    importData();
}
