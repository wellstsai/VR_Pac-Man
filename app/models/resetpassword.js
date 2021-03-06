var Sequelize = require('sequelize');
var supersecret = require('../../config/config');
var sequelize = new Sequelize('PacmanVR', 'root', supersecret.dbPassword);


var ResetPassword = sequelize.define('ResetPassword', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

ResetPassword.sync({force: true});

module.exports = ResetPassword;