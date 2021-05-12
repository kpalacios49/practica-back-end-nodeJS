const mongoose = require('mongoose')

const shoppingCartsCollection = 'shoppingCarts'

const shoppingCartSchema = new mongoose.Schema({
    product: {type: Object},
    quantity: {type: Number}
})


const shopping_carts = mongoose.model(shoppingCartsCollection, shoppingCartSchema)

module.exports = {
    shopping_carts
}