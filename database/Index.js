require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    // filename: './madbookings.db',
    filename: './knexfile.js',
    port: 5432,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

module.exports = knex;
