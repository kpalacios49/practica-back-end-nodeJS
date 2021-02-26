
const recorrerTexto = (texto, callback, tiempo = 1) => {
    tiempo = tiempo * 1000;
    const array_palabras = texto.split(" ");
    const cantidad_palabras = array_palabras.length;

    const array_tiempo = array_palabras.map((p, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(p);
                resolve()
            }, tiempo * i + tiempo, p)
        }
        )
    })

    return Promise.all(array_tiempo).then( () => {
        callback(cantidad_palabras);
        return cantidad_palabras;

    })

};

const callback = (cantidad_palabras) => {
    console.log(`\n////////////////////  Cantidad de palabras: ${ cantidad_palabras }  ////////////////////\n`)
}

(
    async () => {
        console.log("---------------------------------------------------")
        console.log("------------Javascript Asincrónico-----------------")
        console.log("---------------------------------------------------\n\n")

        let palabras_totales = 0;

        // Funciones
        palabras_totales += await recorrerTexto("Juan pasea el perro", callback, 2);
        palabras_totales += await recorrerTexto("Laura sale a correr", callback, 0.5);
        palabras_totales += await recorrerTexto("Ramon estudia para un final de la facultad", callback, 0.1);



        console.log("---------------------------------------------------")
        console.log("---------------------------------------------------")
        console.log(`Proceso completo!, cantidad de palabras totales: ${ palabras_totales }`)
        console.log("---------------------------------------------------")
        console.log("---------------------------------------------------")


    }
)()

