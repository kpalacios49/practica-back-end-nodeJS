const { productos } = require("./productos_array")

exports.index = function(){
    if(!productos.length) return {error : "no hay productos cargados"}

    return productos
}

exports.store = function(){
    productos.push({...producto, id : productos.length + 1})
    return {status: "ok"} 
}

exports.update = function(){

}

exports.destroy = function(){

}

exports.show = function(id){
    let producto = productos.filter(e => e.id == id)

    if(!producto.length){producto = {error : "producto no encontrado"}}

    return producto
}