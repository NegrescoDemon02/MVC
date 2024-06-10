const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemonmvc', 'root', 'vertrigo', {
    host: 'localhost',
    dialect: 'mysql',
})

try{

    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
}catch(error){
    console.log(`Não foi possivel se conectar: ${error}`)
}

module.exports =  sequelize