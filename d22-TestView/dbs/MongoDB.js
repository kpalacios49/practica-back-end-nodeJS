const  mongoose  = require("mongoose")

module.exports = class MongoDB{
    constructor(){
        this.db = null
    }

    static connect = async function(controller){
        console.log(this.db)
        if(!this.db){
           console.log("Conectado a MongoDB...")
            const url = "mongodb://localhost:27017/ecommerce"
            let db_conexion = await mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            this.db = db_conexion
        }
        return this.db
    }

}