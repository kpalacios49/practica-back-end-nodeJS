const express = require('express')

const { is_admin } = require("../middlewares/is_admin")

const shoppingCartController = require('../controllers/shoppingCartController')

const mongoDB = require('../dbs/MongoDB')

const conexion = mongoDB.connect()

const router_shopping_cart = express.Router()


router_shopping_cart.get("", shoppingCartController.index.bind(conexion))

router_shopping_cart.get("/:id", shoppingCartController.show.bind(conexion))

router_shopping_cart.post("/:id", shoppingCartController.store.bind(conexion))

router_shopping_cart.delete("/:id", shoppingCartController.destroy.bind(conexion))

module.exports = router_shopping_cart