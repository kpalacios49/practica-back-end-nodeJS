
// import express from 'express'
// import fs from 'fs'

const fs = require('fs');

const express = require('express');

const app = express();

const port = 3000;

// Declaro variables globales

const productos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));

const cantidad_visitas = {
  visitas: {
    items : 0,
    item : 0
  }
}

const items = {
    items : [...productos],
    cantidad: productos.length,
};

// Rutas

app.get('/items', (req, res) => {
  cantidad_visitas.visitas.items++;

  res.json(items)
})

app.get('/item-random', (req, res) => {
  cantidad_visitas.visitas.item++;

  const numero_random = Math.floor( Math.random() * (productos.length - 0) )
  res.status(200).json({ item: productos[numero_random]})
})

app.get('/visitas', (req, res) => res.json(cantidad_visitas))



//

const server = app.listen( port, () => {
  console.log(`Escuchando en el puerto ${port}`)
} )

server.on("error", error => console.log(`Error en el servidor ${error}`))