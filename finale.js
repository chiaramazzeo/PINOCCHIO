var sfondofinale;
var textfinale;
var blurfinale;




var finale = {
create: function(){
 console.log('ok');


game.camera.flash(0x000000, 1500)  //game.stage.backgroundColor = '0x000000';
  sfondofinale=game.add.sprite(0,0, 'sfondofinale');
  sfondofinale.fixedToCamera = true;


  textfinale= game.add.sprite(512,100, 'haivinto');
  textfinale.anchor.x = .5;
  textfinale.anchor.y = .5;
  textfinale.alpha= 0;
  //textfinale.scale.setTo(0.8);
  textfinale.fixedToCamera = true;


  blurfinale= game.add.sprite(512,100, 'blur_haivinto');
  blurfinale.anchor.x = .5;
  blurfinale.anchor.y = .5;
  blurfinale.alpha= 0;
  //blurfinale.scale.setTo(0.8);
  blurfinale.fixedToCamera = true;



  game.time.events.add(Phaser.Timer.SECOND * 3, vittoria, this);


  function tornaMenufinale(){
    game.paused = false;
    resetVariabili1();
    resetVariabili2();
livello1Preso = false;
fineGioco = false;
inizio = true;
storiamenu = false;
autorimenu = false;
intermedio = false;
finale1 = false;
    game.camera.fade(0x000000, 250);
    //game.camera.onFadeComplete.add(function(){game.state.start('menustate')});
  }

  tastiMenuPausa = game.add.physicsGroup();
  tastoMenu = tastiMenuPausa.create(900,718,'tasto_menu');
  tastoMenu.fixedToCamera = true;
  tastiMenuPausa.setAll('anchor.x', .5);
  tastiMenuPausa.setAll('anchor.y', .5);
  tastiMenuPausa.setAll('fixedToCamera', true);
  tastoMenu.alpha = 0;





  blurMenu = game.add.sprite(900,718, 'blur_menu');
  blurMenu.anchor.x = .5;
  blurMenu.anchor.y = .5;
  blurMenu.fixedToCamera = true;
  blurMenu.alpha = 0;

                 tastoMenu.events.onInputOver.add(glowFilter1b, this);
                 tastoMenu.events.onInputOut.add(noglowFilter1b, this);
                 tastoMenu.events.onInputUp.add(noglowFilter1b);



    tastoMenu.events.onInputUp.add(tornaMenufinale);


    function glowFilter1(){
      blurContinua.alpha = 1;
    }

    function noglowFilter1(){
      blurContinua.alpha = 0;
    }

    function glowFilter1b(){
      blurMenu.alpha = 1;
    }

    function noglowFilter1b(){
      blurMenu.alpha = 0;
    }


      function vittoria(){
        game.add.tween(textfinale).to( {alpha: 1}, 400).start();
        game.add.tween(blurfinale).to( {alpha: 0.7}, 400).start();
        game.add.tween(tastoMenu).to( {alpha: 1}, 400).delay(1000).start();
        game.add.tween(blurMenu).to( {alpha: 1}, 400).delay(1000).start();
        //sfondofinale.alpha= 1;
        tastoMenu.inputEnabled = true;
        tastoMenu.input.useHandCursor = true;
      }




},

update: function() {




  blur.alpha = 0;

}
}
