module.exports = class productController {

    constructor(connection) {
        this.knex = connection
    }
    index = function (req, res) {

        this.knex('shopping_carts')
            .join('products', 'shopping_carts.product_id', '=', 'products.id')
            .then(rows => {
                if (!rows.length) return res.json({ error: "no hay productos cargados en el carrito" })
                res.json(rows)
            })
            .catch(() => {
                res.sendStatus(500)
            })
    }

    store = function (req, res) {

        const id = req.params.id

        this.knex('shopping_carts')
            .insert({
                product_id: id,
                quantity: 1
            })
            .then(_ => {
                res.json({ status: "ok" })
            })
            .catch(_ => {
                res.sendStatus(500)
            })

    }

    destroy = function (req, res) {
        const id = req.params.id

        this.knex('shopping_carts')
            .where({ id: id })
            .del()
            .then(_ => {
                res.json({ status: "ok" })
            })
            .catch(_ => {
                res.sendStatus(500)
            })
    }

    show = function (req, res) {
        const id = req.params.id

        this.knex('shopping_carts')
            .join('products', 'shopping_carts.product_id', '=', 'products.id')
            .where({ "shopping_carts.id": id })
            .then(rows => {
                if (!rows.length) return res.json({ error: "no se encontró el producto" })
                res.json(rows)
            })
            .catch(() => {
                res.sendStatus(500)
            })
    }
}