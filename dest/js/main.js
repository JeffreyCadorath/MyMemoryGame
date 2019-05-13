"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(){var n={},i=[];function t(e){if(n[e])return n[e];var t=new Image;t.onload=function(){n[e]=t,r()&&i.forEach(function(e){e()})},n[e]=!1,t.src=e}function r(){var e=!0;for(var t in n)n.hasOwnProperty(t)&&!n[t]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){t(e)}):t(e)},get:function(e){return n[e]},onReady:function(e){i.push(e)},isReady:r}}();var Enemy=function(){function e(){_classCallCheck(this,e),this.sprite="dest/images/enemy-bug.png",this.speed=Math.floor(200*Math.random())+100,this.reset()}return _createClass(e,[{key:"update",value:function(e){this.x+=this.speed*e,510<this.x&&this.reset()}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"reset",value:function(){var e=[-100,-75,-50,-25],t=[60,140,220];this.x=e[Math.floor(Math.random()*e.length)],this.y=t[Math.floor(Math.random()*t.length)]}}]),e}(),Player=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"lifeCounter",3),_defineProperty(this,"counter",1),this.sprite="dest/images/char-boy.png",this.reset()}return _createClass(e,[{key:"update",value:function(){-20===this.y&&(this.levelCounter(),this.reset()),this.checkCollision()}},{key:"checkCollision",value:function(){for(var e=0;e<allEnemies.length;e++){var t=allEnemies[e];t.y===this.y&&t.x>=this.x-70&&t.x<=this.x+50&&(this.lifeCounter,this.lifeCounter--,document.querySelector(".lives").textContent="Lives: ".concat(this.lifeCounter),this.reset())}}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"handleInput",value:function(e){var t=[0,400],n=[-20,380],i=this.y-80>=n[0]?80:0,r=this.x+100<=t[1]?100:0,s=this.y+80<=n[1]?80:0,o=this.x-100>=t[0]?100:0;"up"===e?this.y-=i:"right"===e?this.x+=r:"left"===e?this.x-=o:"down"===e&&(this.y+=s)}},{key:"levelCounter",value:function(){-20===this.y&&(this.counter,this.counter++,document.querySelector(".level").textContent="Level ".concat(this.counter))}},{key:"lifeCount",value:function(){this.lifeCounter,this.lifeCounter--,document.querySelector(".lives").textContent="Lives: ".concat(this.lifeCounter)}},{key:"resetGame",value:function(){"Lives: 0"===document.querySelector(".level").textContent&&(document.querySelector(".lives").textContent="Lives: 3",document.querySelector(".level").textContent="Level 1")}},{key:"reset",value:function(){this.x=200,this.y=380}}]),e}(),enemy1=new Enemy,enemy2=new Enemy,enemy3=new Enemy,allEnemies=[enemy1,enemy2,enemy3],player=new Player;document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var t,n=e.document,i=e.window,r=n.createElement("canvas"),s=r.getContext("2d");function o(){var e=Date.now();!function(e){!function(t){allEnemies.forEach(function(e){e.update(t)}),player.update()}(e)}((e-t)/1e3),function(){var e,t,n=["dest/images/water-block.png","dest/images/stone-block.png","dest/images/stone-block.png","dest/images/stone-block.png","dest/images/grass-block.png","dest/images/grass-block.png"];for(s.clearRect(0,0,r.width,r.height),e=0;e<6;e++)for(t=0;t<5;t++)s.drawImage(Resources.get(n[e]),101*t,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),t=e,i.requestAnimationFrame(o)}r.width=505,r.height=606,n.body.appendChild(r),Resources.load(["dest/images/stone-block.png","dest/images/water-block.png","dest/images/grass-block.png","dest/images/enemy-bug.png","dest/simages/char-boy.png"]),Resources.onReady(function(){t=Date.now(),o()}),e.ctx=s}(void 0);