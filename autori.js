
var click_counter;
var autoriSfondo;
var clickc;
var in_exit;
var in_ale;
var in_andre;
var in_ani;
var in_bea;
var in_cami;
var in_cecia;
var in_chiara;
var in_elmo;
var in_marti;
var in_pac;
var in_vano;
var in_nancy;


var autoristate = {


 create: function (){

   console.log('vava');

   autoriSfondo=game.add.sprite(0,0,'autori_sfondo');
   autoriSfondo.alpha = 1;
   autoriSfondo.fixedToCamera = true;

   clickc=game.add.sprite(0,0,'autori_sfondo');
   clickc.inputEnabled=true;
   clickc.alpha=0;
   clickc.fixedToCamera = true;
   click_counter=0;

   in_exit=game.add.sprite(62,47,'exit');
   in_exit.inputEnabled=true;
   in_exit.input.useHandCursor=true;
   in_exit.alpha=0;
   in_exit.fixedToCamera = true;

   in_ale=game.add.sprite(155,167,'invisibile');
   in_ale.alpha=0;
   in_ale.inputEnabled=true;
   in_ale.input.useHandCursor=true;
   ale=game.add.sprite(0,0,'alemail');
   ale.alpha=0;
   in_ale.fixedToCamera = true;
   ale.fixedToCamera = true;



   in_andre=game.add.sprite(275,435,'invisibile');
   in_andre.alpha=0;
   in_andre.inputEnabled=true;
   in_andre.input.useHandCursor=true;
   andre=game.add.sprite(0,0,'andremail');
   andre.alpha=0;
   andre.fixedToCamera = true;
   in_andre.fixedToCamera = true;


   in_ani=game.add.sprite(150,435,'invisibile');
   in_ani.alpha=0;
   in_ani.inputEnabled=true;
   in_ani.input.useHandCursor=true;
   ani=game.add.sprite(0,0,'animail');
   ani.alpha=0;
   in_ani.fixedToCamera = true;
   ani.fixedToCamera = true;

   in_bea=game.add.sprite(530,435,'invisibile');
   in_bea.alpha=0;
   in_bea.inputEnabled=true;
   in_bea.input.useHandCursor=true;
   bea=game.add.sprite(0,0,'beamail');
   bea.alpha=0;
   in_bea.fixedToCamera = true;
   bea.fixedToCamera = true;

   in_cami=game.add.sprite(402,435,'invisibile');
   in_cami.alpha=0;
   in_cami.inputEnabled=true;
   in_cami.input.useHandCursor=true
   cami=game.add.sprite(0,0,'camimail');
   cami.alpha=0;
   in_cami.fixedToCamera = true;
   cami.fixedToCamera = true;

   in_cecia=game.add.sprite(663,167,'invisibile');
   in_cecia.alpha=0;
   in_cecia.inputEnabled=true;
   in_cecia.input.useHandCursor=true;
   cecia=game.add.sprite(0,0,'ceciamail');
   cecia.alpha=0;
   in_cecia.fixedToCamera = true;
   cecia.fixedToCamera = true;



   in_chiara=game.add.sprite(395,167,'invisibile');
   in_chiara.alpha=0;
   in_chiara.inputEnabled=true;
   in_chiara.input.useHandCursor=true;
   chiara=game.add.sprite(0,0,'chiaramail');
   chiara.alpha=0;
   in_chiara.fixedToCamera = true;
   chiara.fixedToCamera = true;


   in_elmo=game.add.sprite(530,167,'invisibile');
   in_elmo.alpha=0;
   in_elmo.inputEnabled=true;
   in_elmo.input.useHandCursor=true;
   elmo=game.add.sprite(0,0,'elmomail');
   elmo.alpha=0;
   in_elmo.fixedToCamera = true;
   elmo.fixedToCamera = true;


   in_marti=game.add.sprite(788,435,'invisibile');
   in_marti.alpha=0;
   in_marti.inputEnabled=true;
   in_marti.input.useHandCursor=true;
   marti=game.add.sprite(0,0,'martimail');
   marti.alpha=0;
   in_marti.fixedToCamera = true;
   marti.fixedToCamera = true;



   in_nancy=game.add.sprite(275,167,'invisibile');
   in_nancy.alpha=0;
   in_nancy.inputEnabled=true;
   in_nancy.input.useHandCursor=true;
   nancy=game.add.sprite(0,0,'nancymail');
   nancy.alpha=0;
   in_nancy.fixedToCamera = true;
   nancy.fixedToCamera = true;



   in_pac=game.add.sprite(663,435,'invisibile');
   in_pac.alpha=0;
   in_pac.inputEnabled=true;
   in_pac.input.useHandCursor=true;
   pac=game.add.sprite(0,0,'pacmail');
   pac.alpha=0;
   in_pac.fixedToCamera = true;
   pac.fixedToCamera = true;



   in_vano=game.add.sprite(788,167,'invisibile');
   in_vano.alpha=0;
   in_vano.inputEnabled=true;
   in_vano.input.useHandCursor=true;
   vano=game.add.sprite(0,0,'valemail');
   vano.alpha=0;
   in_vano.fixedToCamera = true;
   vano.fixedToCamera = true;



   clickc.events.onInputDown.add(counter,this);
   in_ale.events.onInputDown.add(counter,this);
   in_andre.events.onInputDown.add(counter,this);
   in_ani.events.onInputDown.add(counter,this);
   in_bea.events.onInputDown.add(counter,this);
   in_cami.events.onInputDown.add(counter,this);
   in_cecia.events.onInputDown.add(counter,this);
   in_chiara.events.onInputDown.add(counter,this);
   in_elmo.events.onInputDown.add(counter,this);
   in_marti.events.onInputDown.add(counter,this);
   in_nancy.events.onInputDown.add(counter,this);
   in_pac.events.onInputDown.add(counter,this);
   in_vano.events.onInputDown.add(counter,this);


   function counter(){
     console.log('click');
     click_counter=click_counter + 1;
     if (click_counter>1)
     {
       console.log('backtoautori');
       game.add.tween(autoriSfondo).to( {alpha: 1}, 200).start();
       game.add.tween(ale).to( {alpha: 0}, 200).start();
       game.add.tween(ani).to( {alpha: 0}, 200).start();
       game.add.tween(andre).to( {alpha: 0}, 200).start();
       game.add.tween(bea).to( {alpha: 0}, 200).start();
       game.add.tween(cecia).to( {alpha: 0}, 200).start();
       game.add.tween(cami).to( {alpha: 0}, 200).start();
       game.add.tween(chiara).to( {alpha: 0}, 200).start();
       game.add.tween(elmo).to( {alpha: 0}, 200).start();
       game.add.tween(marti).to( {alpha: 0}, 200).start();
       game.add.tween(nancy).to( {alpha: 0}, 200).start();
       game.add.tween(pac).to( {alpha: 0}, 200).start();
       game.add.tween(vano).to( {alpha: 0}, 200).start();
       in_exit.inputEnabled=true;
       in_exit.input.useHandCursor=true;
       click_counter=0;
     }

   }

},
update: function(){

console.log('geo')
  in_ale.events.onInputDown.add(clickale,this);
  in_andre.events.onInputDown.add(clickandre,this);
  in_ani.events.onInputDown.add(clickani,this);
  in_bea.events.onInputDown.add(clickbea,this);
  in_cami.events.onInputDown.add(clickcami,this);
  in_cecia.events.onInputDown.add(clickcecia,this);
  in_chiara.events.onInputDown.add(clickchiara,this);
  in_elmo.events.onInputDown.add(clickelmo,this);
  in_marti.events.onInputDown.add(clickmarti,this);
  in_nancy.events.onInputDown.add(clicknancy,this);
  in_pac.events.onInputDown.add(clickpac,this);
  in_vano.events.onInputDown.add(clickvano,this);
  in_exit.events.onInputDown.add(clickexit,this);

  function clickale (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(ale).to( {alpha: 1}, 200).start();

  }

  function clickandre (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(andre).to( {alpha: 1}, 200).start();

  }

  function clickani (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(ani).to( {alpha: 1}, 200).start();

  }

  function clickbea (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(bea).to( {alpha: 1}, 200).start();

  }

  function clickcami (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(cami).to( {alpha: 1}, 200).start();

  }

  function clickcecia (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(cecia).to( {alpha: 1}, 200).start();

  }

  function clickchiara (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(chiara).to( {alpha: 1}, 200).start();

  }

  function clickelmo (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(elmo).to( {alpha: 1}, 200).start();

  }

  function clickmarti (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(marti).to( {alpha: 1}, 200).start();

  }

  function clicknancy (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(nancy).to( {alpha: 1}, 200).start();

  }

  function clickpac (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(pac).to( {alpha: 1}, 200).start();

  }

  function clickvano (pointer,targets) {
      click_counter=1;
      in_exit.inputEnabled=false;
      game.add.tween(autoriSfondo).to( {alpha: 0}, 200).start();
      game.add.tween(vano).to( {alpha: 1}, 200).start();

  }

  function clickexit (pointer,targets)
  { console.log('exit');
    click_counter=0;
    autorimenu=false;
    inizio = true;
    livello1Preso = false;
    fineGioco = false;
    finale1 = false;
    storiamenu = false;
    intermedio = false;
    game.camera.fade(0x000000, 350);


  }

},
render: function (){

}
}
