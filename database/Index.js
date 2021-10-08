require('dotenv').config();

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './madbookings.db'
  }
});

module.exports = knex;