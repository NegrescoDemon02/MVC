const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemonvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})