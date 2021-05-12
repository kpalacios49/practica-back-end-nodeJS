const mongoose = require('mongoose')

const productsCollection = 'products'

const productSchema = new mongoose.Schema({
    name: {type:  String},
    description: {type:  String},
    code: {type:  Number},
    picture: {type:  String},
    price: {type:  Number},
    stock: {type:  Number},
    timestamp: {type:  Date}
})

const products = mongoose.model(productsCollection, productSchema)

module.exports = {
    products
}