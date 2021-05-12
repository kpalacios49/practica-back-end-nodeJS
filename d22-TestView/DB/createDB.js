const { options } = require("../options/mariaDB")

const knex = require('knex')(options)

knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.integer('code')
    table.string('picture')
    table.integer('price')
    table.integer('stock')
    table.timestamp('timestamp').defaultTo(knex.fn.now())
})
.then(_ => { console.log("La tabla products se creó con exito")})
.catch(_ => console.log("Ocurrio un error al crear la tabla products"))

knex.schema.createTable('shopping_carts', table => {
    table.increments('id').primary()
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.integer('quantity')
    table.integer('product_id').unsigned()
})
.then(_ => { console.log("La tabla products se creó con exito")})
.catch(_ => console.log("Ocurrio un error al crear la tabla shopping_cart"))


knex.schema.table('shopping_carts', function(table) {
    table.foreign('product_id').references('id').on('products');
})
.then(_ => { console.log("Se agrego la FK")})
.catch(_ => console.log("No se agrego la FK"))
.finally(_ => {
    knex.destroy()
})

