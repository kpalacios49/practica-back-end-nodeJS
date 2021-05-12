const  mongoose  = require("mongoose")

module.exports = class MongoDB{
    async connect(controller){
        console.log("Connectado MongoDB...")

        const url = "mongodb://localhost:27017/ecommerce"
        let rta = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectados!")
        this.db = rta
        this.controller = new controller(this.db)
    }

    index(req, res){
        this.controller.index(req, res)
    }
    store(req, res){
        this.controller.store(req, res)
    }
    show(req, res){
        this.controller.show(req, res)
    }
    update(req, res){
        this.controller.update(req, res)
    }
    destroy(req, res){
        this.controller.destroy(req, res)
    }

}