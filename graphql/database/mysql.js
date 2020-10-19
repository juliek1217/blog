require('dotenv').config()

let config = {
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: '1206',
        database: process.env.MYSQL_DB,
        multipleStatements: true,
    },
}

module.exports = require('knex')(config)
