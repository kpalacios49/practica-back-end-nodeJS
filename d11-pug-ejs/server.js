const express = require('express');

const app = express();
const handlebars = require('express-handlebars')
const productos_module = require('./productos')
const router = express.Router()
const ejs = require('ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.set("views", "./views")

app.use(express.static("public"))


app.get("/", (req, res) => {
    const productos =  productos_module.index();
    res.render("main", {
        productos: productos,
        existenProductos: productos.length > 0
        })
})

app.get("/productos", (req, res) => {
    res.render("pages/productos")
})


//////////////////// API /////////////////////


router.get("/productos",(req, res) => { 
    res.json(productos_module.index())
})

router.get("/productos/:id", (req, res) => {
    res.json(productos_module.show(req.params.id))
})

router.post("/productos", (req, res) => {
    res.json(productos_module.store(req.body))
})

router.put("/productos/:id", (req, res) => {
    res.json(productos_module.update(req.params.id, req.body))
})

router.delete("/productos/:id", (req, res) => {
    res.json(productos_module.destroy(req.params.id))
})


app.use('/api', router)

const server = app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080`)
})

server.on("error", error => console.log(`Error en el servidor ${error}`))
