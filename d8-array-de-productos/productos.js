const { productos } = require("../d8/productos")

exports.index = function(){
    if(!productos.length) return {error : "no hay productos cargados"}

    return productos
}

exports.store = function(producto){
    productos.push({...producto, id : productos.length + 1})
    return {status: "ok"} 
}

exports.show = function(id){
    let producto = productos.filter(e => e.id == id)

    if(!producto.length){producto = {error : "producto no encontrado"}}

    return producto
}