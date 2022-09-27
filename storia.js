var current = 3;
var time = 9000;
var time0 = 500;
var delay = 500;

var storiastate = {
  create: function (){
    game.camera.flash(0x000000, 350);
immagineB = game.add.sprite(0,0,'immagine2');
immagineB.fixedToCamera = true;
textB = game.add.sprite(0,0, 'immagine2t');
textB.alpha=0;
textB.fixedToCamera = true;
immagineA = game.add.sprite (0,0,'immagine1');
immagineA.fixedToCamera = true;
textA = game.add.sprite (0,0,'immagine1t');
textA.alpha=0;
textA.fixedToCamera = true;

game.add.tween(textA).to( {alpha: 1}, 250).delay(delay).start();
game.time.events.add(time, crossfade, this);

function crossfade(){
   if (immagineA.alpha==1){
   tween = game.add.tween(immagineA).to( {alpha: 0}, 800).start();
   game.add.tween(textA).to( {alpha: 0}, 800).start();
   game.add.tween(immagineB).to( {alpha: 1}, 800).start();
   game.add.tween(textB).to( {alpha: 1}, 800).delay(delay).start();
   }
   else {
    game.add.tween(immagineA).to( {alpha: 1}, 800).start();
    game.add.tween(textA).to( {alpha: 1}, 800).delay(delay).start();
    tween = game.add.tween(immagineB).to( {alpha: 0}, 800).start();
    game.add.tween(textB).to( {alpha: 0}, 800).start()
   }

   tween.onComplete.add(changePic,this);

 }

function changePic()
{
  if (immagineA.alpha==0) {
                immagineA.loadTexture('immagine'+current);
                textA.loadTexture('immagine'+current+'t')}

    else {
                immagineB.loadTexture('immagine'+current);
                textB.loadTexture('immagine'+current+'t');
                }
            current++;
            if (current >7) {game.time.events.add(time, backToMenu, this)};
            if (current <=7) {game.time.events.add(time, crossfade, this)};

        }

function backToMenu()
{ current=3;
  console.log('fine');



 livello1Preso=false;
 fineGioco = false;
 storiamenu = false;
 autorimenu = false;
 intermedio = false;
 finale1= false;
 inzio = true;
  game.camera.fade(0x000000, 350);
}




  },
  update: function(){

},
  render: function ()
  {

  }
}
