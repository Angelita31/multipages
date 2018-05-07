'use strict';

var mongoose = require('mongoose');

var bandaModel = function () {
  var bandaSchema = mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    cover:String
  });
  return mongoose.model('Banda', bandaSchema);

};
module.exports = new bandaModel();
