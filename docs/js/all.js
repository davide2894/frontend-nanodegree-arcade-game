!function(){var e={},t=[];function i(i){if(e[i])return e[i];var a=new Image;a.onload=function(){e[i]=a,n()&&t.forEach(function(e){e()})},e[i]=!1,a.src=i}function n(){var t=!0;for(var i in e)e.hasOwnProperty(i)&&!e[i]&&(t=!1);return t}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){i(e)}):i(e)},get:function(t){return e[t]},onReady:function(e){t.push(e)},isReady:n}}();const modalC=document.getElementById("c-modal"),modalWin=document.getElementById("win-modal"),modalGameOver=document.getElementById("game-over-modal"),modalBtnWin=document.getElementById("modal-btn-win"),modalBtnC=document.getElementById("modal-btn-c");var characters=modalC.getElementsByClassName("modal__character"),isCharSelected=!0,heartN1=document.getElementById("heart1"),heartN2=document.getElementById("heart2"),heartN3=document.getElementById("heart3");characters.item(localStorage.getItem("myValue")).classList.add("selected"),isCharSelected=!0;class Character{constructor(e,t,i,n,a,s){this.x=e,this.y=t,this.width=i,this.height=n,this.speed=a,this.sprite=s}render(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}}class Enemy extends Character{constructor(e,t,i,n,a,s){super(e,t,i,n,a,s)}}Enemy.prototype.update=function(e){let t=Math.floor(3*Math.random()+1);this.x>520&&(this.x=-120,1===t?(this.y=60,this.speed=500):2===t?(this.y=140,this.speed=600):3===t&&(this.y=230,this.speed=700)),this.x+=this.speed*e},Enemy.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},Enemy.prototype.handleCollisions=function(){this.x<player.x+player.width&&this.x+this.width>player.x&&this.y<player.y+player.height&&this.y+this.height>player.y&&(3===player.lives?player.loseLife(player.life1):2===player.lives?player.loseLife(player.life2):(player.isGameOver=!0,setTimeout(function(){player.endGame()},1e3)))};class Player extends Character{constructor(e,t,i,n,a,s,r,o,l,c,d,h,p){super(e,t,i,n,a,s),this.isKeyUp=!0,this.direction="",this.lives=3,this.life1=heartN1,this.life2=heartN2,this.life3=heartN3,this.isGameOver=!1}}Player.prototype.update=function(e){"right"===this.direction?(this.x+=this.speed*e,this.speed=0):"left"===this.direction?(this.x-=this.speed*e,this.speed=0):"up"===this.direction?(this.y-=this.speed*e,this.speed=0):"down"===this.direction&&(this.y+=this.speed*e,this.speed=0)},Player.prototype.handleInput=function(e){"right"===e&&this.isKeyUp&&this.x<380?(this.direction="right",this.speed=4e3):"left"===e&&this.isKeyUp&&this.x>33?(this.direction="left",this.speed=4e3):"up"===e&&this.isKeyUp&&this.y>45?(this.direction="up",this.speed=3100):"up"===e&&this.isKeyUp&&this.y<45?player.winGame():"down"===e&&this.isKeyUp&&this.y<400&&(this.direction="down",this.speed=3100)},Player.prototype.loseLife=function(e){player.lives--,e.style.display="none",player.x=200,player.y=400},Player.prototype.winGame=function(){modalWin.style.display="block",document.addEventListener("keydown",function(e){13===e.keyCode&&reloadAfterWin()}),modalBtnWin.addEventListener("click",function(){reloadAfterWin()})},Player.prototype.endGame=function(){player.isGameOver=!0,modalGameOver.style.display="block",["keydown","ontouchstart"].forEach(e=>document.addEventListener(e,function(t){("keydown"===e&&32===t.keyCode||13===t.keyCode||"ontouchstart"===e)&&window.location.reload(!1)},!1))};var player=new Player(200,400,80,45,0);player.sprite=localStorage.myChar?localStorage.myChar:"images/char-boy.png";var enemy0=new Enemy(-120,60,80,40,500,"images/enemy-bug.png"),enemy1=new Enemy(-120,60,80,40,500,"images/enemy-bug.png"),enemy2=new Enemy(-120,60,80,40,500,"images/enemy-bug.png"),allEnemies=[];function reloadAfterWin(){window.location.reload(!1)}allEnemies.push(enemy0,enemy1,enemy2),document.addEventListener("keyup",function(e){player.isKeyUp=!0,player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});for(let e of characters)e.addEventListener("click",function(t){for(let e of characters)e.classList.remove("selected"),isCharSelected=!1;this.classList.add("selected"),savedChar=getIndex(e),isCharSelected=!0,localStorage.setItem("myValue",savedChar),"boy"===t.target.id?player.sprite="images/char-boy.png":"cat-girl"===t.target.id?player.sprite="images/char-cat-girl.png":"horn-girl"===t.target.id?player.sprite="images/char-horn-girl.png":"pink-girl"===t.target.id?player.sprite="images/char-pink-girl.png":player.sprite="images/char-princess-girl.png",localStorage.setItem("myChar",player.sprite),console.log(localStorage)});function getIndex(e){let t=e.parentElement.children;for(let i=0,n=t.length;i<n;i++)if(t[i]===e)return i}modalBtnC.addEventListener("click",function(){0!=isCharSelected&&(modalC.style.display="none")});var Engine=function(e){var t,i=e.document,n=e.window,a=i.createElement("canvas"),s=a.getContext("2d");function r(){var e=Date.now(),i=(e-t)/1e3;0==player.isGameOver&&function(e){(function(e){allEnemies.forEach(function(t){t.update(e)}),player.update(e)})(e),allEnemies.forEach(function(e){e.handleCollisions()})}(i),function(){var e,t,i=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(s.clearRect(0,0,a.width,a.height),e=0;e<6;e++)for(t=0;t<5;t++)s.drawImage(Resources.get(i[e]),101*t,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),t=e,0==player.isGameOver&&n.requestAnimationFrame(r)}a.width=505,a.height=606,i.body.appendChild(a),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png","images/char-horn-girl.png","images/char-pink-girl.png","images/char-princess-girl.png"]),Resources.onReady(function(){t=Date.now(),r()}),e.ctx=s}(this);
//# sourceMappingURL=all.js.map
