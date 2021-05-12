const { options } = require("../options/mariaDB")

module.exports = class mariaDB{
    connect(controller){
        console.log("Connectado mariaDB...")
        this.db = require('knex')(options)
        this.controller = new controller(this.db)
        // console.log(new controller())
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