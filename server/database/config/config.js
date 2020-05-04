require("dotenv").config();
const {
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: "0",
    pool: {
      max: 100,
      min: 0,
      idle: 200000,
      acquire: 1000000,
    },
    logging: false,
  },
  test: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: "0",
  },
  production: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: "0",
    logging: false,
  },
};
