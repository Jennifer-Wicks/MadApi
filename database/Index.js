const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'happyfeet3*',
    port: 5432,
    database: 'madbookings'
  }
});

module.exports = knex;