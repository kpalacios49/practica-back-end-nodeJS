const express = require('express')

const app = express()

const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const productos_module = require('./productos')


// const productos = app.route('/api/productos');


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
app.use('/static', express.static(__dirname + '/static'))

const server = app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080`)
})

server.on("error", error => console.log(`Error en el servidor ${error}`))

