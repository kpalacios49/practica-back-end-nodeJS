
const fs = require('fs');

class Archivo {

  constructor(nombre_archivo) {
    this.nombre_archivo = nombre_archivo;
    if(!fs.existsSync(this.nombre_archivo)) fs.promises.writeFile(this.nombre_archivo, "[]");
  }

  leer(message = { show: true }) {
    return fs.promises.readFile(this.nombre_archivo, 'utf-8').then(resultado => {
      const resultado_json = JSON.parse(resultado);
      if (message.show) {

        console.log(`\n---------------------Resultado---------------------\n`)
        console.table(resultado_json)
        console.log(`\n---------------------------------------------------\n`)

      }
      return resultado_json
    })
      .catch(err => console.log(`No se encontró un archivo con ese nombre`))
  }

  async guardar(producto) {

    const archivo_json = await this.leer({ show: false });

    producto = { id: archivo_json.length + 1, ...producto }

    archivo_json.push(producto);

    try {
      await fs.promises.writeFile(this.nombre_archivo, JSON.stringify(archivo_json));

      console.log(`\n---------------Se guardó el producto---------------\n`)
      console.table(producto)
      console.log(`\n---------------------------------------------------\n`)

    }
    catch (err) {
      console.log("Error al escribir en el archivo")
    }
  }

  borrar() {

    fs.promises.unlink(this.nombre_archivo)

  }


}


///////////// Ejecución ////////////////////

(async () => {

  const productos = [
    {
      title: "Jugo en sobre",
      price: "13.54",
      thumbnail: "Url imagen jugo"
    },
    {
      title: "Monitor 24 pulgadas",
      price: "1000",
      thumbnail: "Url imagen monitor"
    },
    {
      title: "Taza color rojo",
      price: "50.12",
      thumbnail: "Url imagen taza"
    }]

  const nuevo_archivo = new Archivo("texto.txt");

  await nuevo_archivo.leer();


  await nuevo_archivo.guardar(productos[0]);
  await nuevo_archivo.guardar(productos[1]);
  await nuevo_archivo.guardar(productos[2]);

  await nuevo_archivo.leer();

  // await nuevo_archivo.borrar();
})()

