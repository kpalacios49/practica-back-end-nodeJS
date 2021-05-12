const express = require('express')

const { is_admin } = require("../middlewares/is_admin")

const productController = require('../controllers/mongoDB/productController')

const DBFactory = require('../factories/DBFactory')

const dbfactory = new DBFactory().initialize("mongodb")

dbfactory.connect(productController)

const router_product = express.Router()


router_product.get("/", dbfactory.index.bind(dbfactory))

router_product.post("/", is_admin, dbfactory.store.bind(dbfactory))

router_product.put("/:id", is_admin, dbfactory.update.bind(dbfactory))

router_product.get("/:id", dbfactory.show.bind(dbfactory))

router_product.delete("/:id", is_admin, dbfactory.destroy.bind(dbfactory))


module.exports = router_product