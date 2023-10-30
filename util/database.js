const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Aniket@548', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;