const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const productos_module = require('./productos')



app.get("/api/productos",(req, res) => { 
    res.json(productos_module.index())
})

app.get("/api/productos/:id", (req, res) => {
    res.json(productos_module.show(req.params.id))
})

app.post("/api/productos", (req, res) => {
    res.json(productos_module.store(req.body))

})

const server = app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080`)
})

server.on("error", error => console.log(`Error en el servidor ${error}`))

