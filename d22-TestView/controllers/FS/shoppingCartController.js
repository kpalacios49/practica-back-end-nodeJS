
module.exports = class productController {

    constructor(connection) {
        this.db = connection
    }
    index = async function (req, res) {
        try{
            console.log("Mostrar Carrito de compras")



            // res.json(results)
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




            // res.json(result)
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }
}