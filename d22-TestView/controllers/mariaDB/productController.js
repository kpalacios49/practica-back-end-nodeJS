// const { options } = require("../../options/mariaDB")

// const knex = require('knex')(options)

module.exports = class productController{

    constructor(connection){
        this.knex = connection
    }

    index = function (req, res) {
        this.knex('products')
            .then(rows => {
                if (!rows.length) return res.json({ error: "no hay productos cargados" })
                res.json(rows)
            })
            .catch(() => {
                res.sendStatus(500)
            })
    }
    
    store = function (req, res) {
        const product = req.body
        this.knex('products')
            .insert(product)
            .then(_ => {
                res.json({ status: "ok" })
            })
            .catch(_ => {
                res.sendStatus(500)
            })
    }
    
    update = function (req, res) {
        const id = req.params.id
        const product = req.body
    
        this.knex('products')
            .where({ id: id })
            .update(product)
            .then(_ => {
                res.json(product)
            })
            .catch(_ => {
                res.sendStatus(500)
            })
    
    }
    
    destroy = function (req, res) {
        const id = req.params.id
        this.knex('products')
            .where({ id: id })
            .del()
            .then(_ => {
                res.json({ status: "ok" })
            })
            .catch(e => {
                 console.log(e)
                res.sendStatus(500)
            })
    }
    
    show = function (req, res) {
        const id = req.params.id
    
        this.knex('products')
        .where({ id: id })
        .then(rows => {
            if (!rows.length) return res.json({ error: "no se encontró el producto" })
            res.json(rows)
        })
        .catch(() => {
            res.sendStatus(500)
        })
    }
}

