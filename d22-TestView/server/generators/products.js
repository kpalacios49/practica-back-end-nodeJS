const faker = require('faker')

faker.locale = 'es'

const get = () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    code: faker.datatype.number(),
    picture: faker.image.imageUrl(),
    price: faker.commerce.price(),
    stock: faker.datatype.number(),
    timestamp: faker.datatype.datetime()
})

module.exports = {
    get
}