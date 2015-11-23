'use strict'

module.exports = CT;

function CT(){
    var module = {};

    module.init = init;
    module.caca = function(){return 'caca'};
    return module;

    function init(){
      console.log('Crash Test module initialized');
    }

}
