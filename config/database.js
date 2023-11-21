// const { Pool, Client } = require('pg');
// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "password",
//     database: "test_db"
// })

// pool.on('connect', () => {
//     console.log('Db connection Successfull!');
// });

// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 'false',
    logging: (msg) => console.log(msg),
    define: {
        freezeTableName: true,
        underscored: true,
      },
});

module.exports = sequelize;