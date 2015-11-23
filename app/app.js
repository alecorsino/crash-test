'use strict'
var APP = (function(){

    var canvas,
        ctx,
        width,
        height;

    var canvasBG = "#BADA55";
    var module={};
    var D = new DYNA();

    module.init = init;
    module.canvasResize = canvasRefresh;
    module.drawRect = drawRect;
    return module;

    function init(){
      // CT.init();
      D.init();

      canvasSetup();
      canvasRefresh();
    }

    function canvasSetup(){
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
    }

    function canvasRefresh(){
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      ctx.fillStyle = canvasBG;
      ctx.fillRect(0, 0, width, height);
    }
    function drawRect(x0,y0,x1,y1,color){
      ctx.fillStyle=color||'#AAAAAA';
      ctx.fillRect(x0,y0,x1,y1);
    }


})();
function main(){
      APP.drawRect(100,100,100,100,'#44AABB');
      APP.drawRect(400,100,50,100);
}

window.onload = function(){
    APP.init();
    main();
    console.log('Main application initialized');
    window.onresize = APP.canvasResize;
  }
