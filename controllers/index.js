'use strict';

var Bracket = require('../models/bracketModel');
var Banda = require('../models/bandaModel');


module.exports = function (router) {

    router.get('/', function (req, res) {
        Bracket.find({}, function (err, brackets) {
            if (err) {
                console.log(err);
                
            }
         
             var model ={
                brackets:brackets
            };
            res.render('index', model);

        });
              
    });
    router.get('/bandas', function (req, res) {
        Banda.find({}, function (err, bandas) {
            if (err) {
                console.log(err);
                
            }
         
             var model ={
                bandas:bandas
            };
           
              res.render('bandas/index', model);
        });
        
    });

 
};

