const { productos } = require("./productos_array")

exports.index = function () {
    if (!productos.length) return { error: "no hay productos cargados" }

    return productos
}

exports.store = function (producto) {
    productos.push({ ...producto, id: productos[productos.length - 1].id + 1 })
    return { status: "ok" }
}

exports.update = function (id, producto) {
    productos.map(p => {
        if (p.id == id) {
            p.title = producto.title
            p.price = producto.price
            p.thumbnail = producto.thumbnail
        }
    })
    return producto
}

exports.destroy = function (id) {

    const producto_eliminado = productos.filter(p => p.id == id)
    const index = productos.findIndex(p => p.id == id)
    
    if (index != -1) productos.splice(index, 1)

    return producto_eliminado
}

exports.show = function (id) {
    let producto = productos.filter(e => e.id == id)
    if (!producto.length) { producto = { error: "producto no encontrado" } }

    return producto
}