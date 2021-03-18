const express = require('express');

const app = express();
const handlebars = require('express-handlebars')

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
    res.render("partials/productos")
})


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
