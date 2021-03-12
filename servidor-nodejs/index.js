const express = require("express");

const app = express();

const router = express.Router();

router.get('users', (req , res) => {
  res.send("hola")
})

app.use('/v1/api/users', router)

app.use('/static', express.static('static'))


app.listen( 8080, () =>{
  console.log("running")
} )