'use strict';
var mongoose = require('mongoose');

var db = function () {
  return{

    config:function (conf) {
      mongoose.connect('mongodb://localhost/multipages');
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'Error de Conexion'));
      db.once('open', function () {
        console.log('DB Conexion abierta...');
        
      });
    }
  };
};
module.exports = db();