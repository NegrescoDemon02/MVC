const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemonmvc', 'root', 'vertrigo', {
    host: 'localhost',
    dialect: 'mysql',
})

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Conectamos ao MySQL!')
    } catch (error) {
        console.log(`Não foi possível se conectar: ${error}`)
    }
}

testConnection()

exports.default = sequelize