

module.exports = class productController {

    constructor(connection) {
        this.db = connection
    }

    index = async function (req, res) {
        try {
            console.log("Mostrar Productos")

            // res.json(products_found)
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




            res.json(product)
        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

