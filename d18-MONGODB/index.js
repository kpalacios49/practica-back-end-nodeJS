import { MongoClient } from 'mongodb'

export async function connect() {
    const url = "mongodb://localhost:27017/prueba"

    let db

    try {
        db = await MongoClient.connect(url)
        console.log("Connected succesfully")
    } catch (error) {
        console.log("Error al conectarse")
        
    }
    return db
}