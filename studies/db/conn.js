const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemonmvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try{

    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
}catch(error){
    console.log(`Não foi possivel se conectar: ${error}`)
}

exports.default = sequelize