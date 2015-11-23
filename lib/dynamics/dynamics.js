'use strict'
module.exports = DYNA;

var Vector = require('../crashtest/vectors.js');

function DYNA(){

}

DYNA.prototype.init = function init(){
  var v = new Vector(1,2);
  console.log('Dynamics module initialized');
  console.log('v:',v.getX());
}


 //

// console.log("DYNA!!!",DYNA);
