const express = require('express');

const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
  })

const handlebars = require('express-handlebars')
const productos_module = require('./productos')
const router = express.Router()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
)
app.set("view engine", "hbs")
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
    const productos =  productos_module.index();
    res.render("partials/productos", {
        productos: productos,
        existenProductos: productos.length > 0
    })
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

    io.emit("actualizarProductos", productos_module.index())
})

router.put("/productos/:id", (req, res) => {
    res.json(productos_module.update(req.params.id, req.body))

    io.emit("actualizarProductos", productos_module.index())
})

router.delete("/productos/:id", (req, res) => {
    res.json(productos_module.destroy(req.params.id))

    io.emit("actualizarProductos", productos_module.index())
})


app.use('/api', router)

const server = app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080`)
})

server.on("error", error => console.log(`Error en el servidor ${error}`))

http.listen(8081, () => {
    console.log(`Escuchando en el puerto 8081`)
})

io.on('connection', (socket) => {
    console.log("Usuario conectado")

    socket.on('enviarMensaje', (mensaje) => {
        console.log(mensaje)
    })

})