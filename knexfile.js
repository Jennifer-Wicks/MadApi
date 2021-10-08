require('dotenv').config()

const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './madbookings.db'
    }
  },
  production: {
    ...sharedConfig,
    connection: {
      filename: './madbookings.db'
    },
    pool: { min: 2, max: 10 },
  },
};
