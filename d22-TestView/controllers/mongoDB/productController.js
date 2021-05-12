
const model = require('../../models/products')
var ObjectId = require('mongodb').ObjectID;


module.exports = class productController {

    constructor(connection) {
        this.db = connection
    }

    index = async function (req, res) {
        try {
            console.log("Mostrar Productos")
            let products_found = await model.products.find({})
            res.json(products_found)
        }
        catch (e) {
            console.log("Error")
            res.sendStatus(500)
        }
    }

    store = async function (req, res) {
        const product = req.body

        try {
            console.log("Cargar Producto")
            const newProduct = new model.products(product)
            await newProduct.save()
            res.json({ status: "ok" })
        }
        catch (e) {
            console.log("Error")
            res.sendStatus(500)
        }
    }

    update = async function (req, res) {
        const id = req.params.id
        const product = req.body

        try {
            console.log("Actualizar Producto")
            await model.products.updateOne({ "_id": ObjectId(`${id}`) }, { $set: product })
            res.json({ status: "ok" })
        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }

    }

    destroy = async function (req, res) {
        const id = req.params.id
        try {
            console.log("Borrar Producto")
            await model.products.deleteOne({ "_id": ObjectId(`${id}`)})
            res.json({ status: "ok" })
        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    show = async function (req, res) {
        const id = req.params.id

        try {
            console.log("Mostrar un Producto")
            let product = await model.products.findOne({ "_id": ObjectId(`${id}`) })
            res.json(product)
        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

