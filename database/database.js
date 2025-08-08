const Sequelize = require('sequelize');

const connection = new Sequelize ('guiaperguntas','root','Rcp9482@',{
    host: 'localhost', 
    dialect: 'mysql',
});

module.exports = connection;