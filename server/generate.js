var faker = require('faker')
var database = {barbers : [] };

for (var i=1; i<=500; i++) 
{
    database.products.push({
        id: i,
        name: faker.commerce.barbersName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        quantity: faker.random.barbers()
    });
}

console.log(JSON.stringify(database));