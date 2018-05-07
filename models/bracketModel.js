'use strict';

var mongoose = require('mongoose');

var bracketModel = function () {
  var bracketSchema = mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    cover:String
  });
  return mongoose.model('Bracket', bracketSchema);

};
module.exports = new bracketModel();
