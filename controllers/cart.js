///This is my controllers/cart.js

'use strict';

var Bracket = require('../models/bracketModel');
var Banda = require('../models/bandaModel');

module.exports = function (router) {

  router.get('/', function (req, res) {

    var cart = req.session.cart;
    var displayCart = {items:[], total:0};
    var total = 0;

    for (var item in cart){
      displayCart.items.push(cart[item]);
      total +=(cart[item].qty*cart[item].price);
    }
    displayCart.total=total;

    res.render('cart/index', {
      cart:displayCart
    });

  });


    ///for brackets products
  router.post('/:id', function (req, res) {
    req.session.cart=req.session.cart || {};
    var cart = req.session.cart;
    
    Bracket.findOne({_id:req.params.id}, function (err, bracket) {
      
      if (err) {
          console.log(err);
          
      }
      if (cart[req.params.id]) {
        cart[req.params.id].qty++
      }else{
        cart[req.params.id]={
          item:bracket._id,
          title:bracket.title,
          price:bracket.price,
          qty:1
        }
      }
      
    
      res.redirect('/cart');

  });
  });
  
 
  ///for bandas products 

  router.post('/:id', function (req, res) {
    req.session.cart=req.session.cart || {};
    var cart = req.session.cart;
    
    Banda.findOne({_id:req.params.id}, function (err, banda) {
      
      if (err) {
          console.log(err);
          
      }
      if (cart[req.params.id]) {
        cart[req.params.id].qty++
      }else{
        cart[req.params.id]={
          item:banda._id,
          title:banda.title,
          price:banda.price,
          qty:1
        }
      }
      
    
      res.redirect('/cart');

  });
  });

 
}