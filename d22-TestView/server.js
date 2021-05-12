const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router_product = require('./routes/products')

const router_shopping_cart = require('./routes/shopping_cart')


app.use('/api/productos/', router_product)

app.use('/api/carrito/', router_shopping_cart)


app.listen(process.env.port || 8080, () => {
    console.log("Running on 8080")
})