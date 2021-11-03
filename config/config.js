require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'dev_dbt',
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'test_db',
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'prod_db',
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};
