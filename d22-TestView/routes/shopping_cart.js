const express = require('express')

const { is_admin } = require("../middlewares/is_admin")

const shoppingCartController = require('../controllers/mongoDB/shoppingCartController')

const router_shopping_cart = express.Router()

const DBFactory = require('../factories/DBFactory')

const dbfactory = new DBFactory().initialize("mongodb")

dbfactory.connect(shoppingCartController)


router_shopping_cart.get("", dbfactory.index.bind(dbfactory))

router_shopping_cart.get("/:id", dbfactory.show.bind(dbfactory))

router_shopping_cart.post("/:id", dbfactory.store.bind(dbfactory))

// router_shopping_cart.delete("/:id", dbfactory.destroy.bind(dbfactory))

module.exports = router_shopping_cart