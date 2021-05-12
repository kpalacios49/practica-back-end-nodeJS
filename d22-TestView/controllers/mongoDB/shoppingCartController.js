const model = require('../../models/shoppingCarts')
const product_model = require('../../models/products')
var ObjectId = require('mongodb').ObjectID;


module.exports = class productController {

    constructor(connection) {
        this.db = connection
    }
    index = async function (req, res) {
        try{
            console.log("Mostrar Carrito de compras")
            let results = await model.shopping_carts.find({})

            res.json(results)
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }

    store = async function (req, res) {

        const id = req.params.id

        try{
            console.log("Cargar en el carrito")

            let product = await product_model.products.find({"_id": ObjectId(`${id}`)})
            console.log(product)

            if(!product.length){
                throw new Error("El producto no existe.")
            }

            let new_shopping_cart = new model.shopping_carts({
                product: product[0],
                quantity: 1
            })
            new_shopping_cart.save()
       
            res.json({ status: "ok" })
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }

    destroy = async function (req, res) {
        const id = req.params.id

        try{
            console.log("Borrar del carrito")

            await model.shopping_carts.deleteOne({"_id": ObjectId(`${id}`)})
       
            res.json({ status: "ok" })
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }

    }

    show = async function (req, res) {
        const id = req.params.id

        try{
            console.log("Mostrar un producto del carrito")
            let result = await model.shopping_carts.findOne({"_id": ObjectId(`${id}`)})
            res.json(result)
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }
}