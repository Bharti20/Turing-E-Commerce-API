require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Bharti@1234',
        database: 'turing_project'
    }

});
console.log('Database is connected')

module.exports = knex