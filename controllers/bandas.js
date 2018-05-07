'use strict';

var Banda = require('../models/bandaModel');

module.exports = function (router) {

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

