const mariaDB = require('../dbs/MariaDB')
const MongoDB = require('../dbs/MongoDB')


module.exports = class DBFactory {
    constructor() {
        this.db;
        // this.initialize(db_name)
    }

    initialize(db_name) {
        switch (db_name) {
            case 'mariadb':
                return new mariaDB()
            case 'mongodb':
                return new MongoDB()
            default:
                break;
        }
        // console.log(this.db)
    }

    // connect(controler) {
    //     console.log(controler)
    //     this.db.connect(controler)
    //     // return this
    // }

    // index(req, res){
    //     // console.log(this.db)
    //     this.db.index(req, res)
    // }
}