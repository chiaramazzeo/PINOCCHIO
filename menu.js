
var sfondo;
var gioca;
var storia;
var crediti;
var click_counter;




var menustate={

  create: function (){


  crediti_sfondo=game.add.sprite(0,0,'creditisfondo');
  exitt=game.add.sprite(62,47,'exit');
  exitt.inputEnabled=false;
  exitt.alpha=0;
  crediti_sfondo.fixedToCamera = true;
  exitt.fixedToCamera = true;


  sfondo = game.add.sprite(0,0,'immaginesfondo');
  sfondo.fixedToCamera=true;

  titolo= game.add.sprite(495,140,'titolo');
  titolo.fixedToCamera =true;
  titolo.anchor.x = 0.5;
  titolo.anchor.y = 0.5;

  storia=game.add.sprite(495,410,'storia');
  storia.fixedToCamera = true;
  blurstoria = game.add.sprite(495,410, 'blurstoria');
  blurstoria.anchor.x = 0.5;
  blurstoria.anchor.y = 0.5;
  storia.anchor.x = 0.5;
  storia.anchor.y = 0.5;
  blurstoria.fixedToCamera = true;
  blurstoria.alpha = 0;

  storia.events.onInputOver.add(glowFilter2, this);
  storia.events.onInputOut.add(noglowFilter2, this);
  storia.events.onInputUp.add(noglowFilter2);


  gioca= game.add.sprite(495, 340,'gioca');
  gioca.fixedToCamera = true;
  blurgioca = game.add.sprite(495,340, 'blurgioca');
  blurgioca.anchor.x = 0.5;
  blurgioca.anchor.y = 0.5;
  gioca.anchor.x = 0.5;
  gioca.anchor.y = 0.5;
  blurgioca.fixedToCamera = true;
  blurgioca.alpha = 0;

  gioca.events.onInputOver.add(glowFilter1, this);
  gioca.events.onInputOut.add(noglowFilter1, this);
  gioca.events.onInputUp.add(noglowFilter1);



  autori=game.add.sprite(495,480,'autori');
  autori.fixedToCamera = true;
  blurautori = game.add.sprite(495,480, 'blurautori');
  blurautori.anchor.x = 0.5;
  blurautori.anchor.y = 0.5;
  autori.anchor.x = 0.5;
  autori.anchor.y = 0.5;
  blurautori.fixedToCamera = true;
  blurautori.alpha = 0;

  autori.events.onInputOver.add(glowFilter3, this);
  autori.events.onInputOut.add(noglowFilter3, this);
  autori.events.onInputUp.add(noglowFilter3);



  crediti=game.add.sprite(495,550,'crediti');
  crediti.fixedToCamera = true;
  blurcrediti = game.add.sprite(495,550, 'blurautori');
  blurcrediti.anchor.x = 0.5;
  blurcrediti.anchor.y = 0.5;
  crediti.anchor.x = 0.5;
  crediti.anchor.y = 0.5;
  blurcrediti.fixedToCamera = true;
  blurcrediti.alpha = 0;

  crediti.events.onInputOver.add(glowFilter4, this);
  crediti.events.onInputOut.add(noglowFilter4, this);
  crediti.events.onInputUp.add(noglowFilter4);



  gioca.inputEnabled=true;
   gioca.input.useHandCursor =true;

  storia.inputEnabled=true;
   storia.input.useHandCursor =true;


  autori.inputEnabled=true;
  autori.input.useHandCursor =true;


  crediti.inputEnabled=true;
  crediti.input.useHandCursor =true;





  function glowFilter1(){
    blurgioca.alpha = 1;
  }

  function noglowFilter1(){
    blurgioca.alpha = 0;
  }

  function glowFilter2(){
    blurstoria.alpha = 1;
  }

  function noglowFilter2(){
    blurstoria.alpha = 0;
  }

  function glowFilter3(){
    blurautori.alpha = 1;
  }

  function noglowFilter3(){
    blurautori.alpha = 0;
  }

  function glowFilter4(){
    blurcrediti.alpha = 1;
  }

  function noglowFilter4(){
    blurcrediti.alpha = 0;
  }



  },



  update: function() {
 gioca.events.onInputDown.add(clickgioca, this);
 storia.events.onInputDown.add(clickstoria, this);
 autori.events.onInputDown.add(clickautori, this);
 crediti.events.onInputDown.add(clickcrediti,this);

 exitt.events.onInputDown.add(clickexittcrediti,this);

function clickgioca (){

  slideshow = true;
  livello1Preso = false;
  fineGioco = false;
  inizio = false;
  storiamenu = false;
  autorimenu = false;
  intermedio = false;
  finale1 = false;
  slideshow = false;


  game.camera.fade(0x000000, 250);


}
function clickstoria (pointer,targets) {

  finale1 = false;
  autorimenu = false;
  inizio = true;
  storiamenu = true;
  fineGioco = false;
  livello1Preso = false;
  intermedio = false;



  game.camera.fade(0x000000, 350);
}

function clickautori(pointer,targets)
{
console.log('autori');


autorimenu = true;
inizio = true;
storiamenu = false;
finale1 = false;
fineGioco = false;
livello1Preso = false;
intermedio = false;
game.camera.fade(0x000000, 350);

}

function clickcrediti(pointer,targets){
  titolo.alpha= 0;
  sfondo.alpha=0;
  gioca.alpha=0;
  storia.alpha=0;
  autori.alpha=0;
  crediti.alpha=0;
  gioca.inputEnabled=false;
  storia.inputEnabled=false;
  autori.inputEnabled=false;
  crediti.inputEnabled=false;
  exitt.inputEnabled=true;
  exitt.input.useHandCursor=true;
  game.add.tween(crediti_sfondo).to( {alpha: 1}, 800).start();
  game.camera.flash(0x000000, 800);

  }

function clickexittcrediti(pointer,targets){
  titolo.alpha= 1;
  sfondo.alpha=1;
  gioca.alpha=1;
  storia.alpha=1;
  autori.alpha=1;
  crediti.alpha=1;
  gioca.inputEnabled=true;
  gioca.input.useHandCursor=true;
  storia.inputEnabled=true;
  storia.input.useHandCursor=true;
  autori.inputEnabled=true;
  autori.input.useHandCursor=true;
  crediti.inputEnabled=true;
  crediti.input.useHandCursor=true;
  exitt.inputEnabled=false;
  game.add.tween(crediti_sfondo).to( {alpha: 0}, 800).start();
  game.camera.flash(0x000000, 350);


}







},
  render: function () {
       /*game.debug.inputInfo(32, 32);
       game.debug.pointer( game.input.activePointer);*/
     }
}
