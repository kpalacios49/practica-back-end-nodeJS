
// Enlance Glitch
//  https://cute-salt-humor.glitch.me/


const http = require('http');
const server = http.createServer();

server.on('request', process);
server.listen(3000, function() {
  console.log(`Servidor listo en ${this.address().port}`)
});

console.log("Servidor arrancado")

function process(request, response){

  const obj = {
    id: Math.floor(Math.random()*10)+1,
    title: "Producto " + Math.floor(Math.random()*10)+1,
    price: Math.floor(Math.random()*1000000, 2)/100,    
    thumbnail: "Foto " + Math.floor(Math.random()*10)+1,
  }
  
  response.end(JSON.stringify(obj))
}