const express = require('express')

const { is_admin } = require("../middlewares/is_admin")

const productController = require('../controllers/productController')

const mongoDB = require('../dbs/MongoDB')

const conexion = mongoDB.connect()

const router_product = express.Router()


router_product.get("/vista-test/", is_admin, productController.test)


router_product.get("/", productController.index.bind(conexion))

router_product.post("/", is_admin, productController.store.bind(conexion))

router_product.put("/:id", is_admin, productController.update.bind(conexion))

router_product.get("/:id", productController.show.bind(conexion))

router_product.delete("/:id", is_admin, productController.destroy.bind(conexion))




module.exports = router_product