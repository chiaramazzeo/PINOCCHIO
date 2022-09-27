var player
var terra
var joj; //just one jump
var pulsantePausa;
var tastiMenuPausa;
var gradinosu
var yesButton;
var yesButtonCounter = 0;
var inizioDialogoMangiafuoco = false;
var joy;

var intermezzo = {
create: function(){

game.world.setBounds (0, 0, 1024, 768);
game.stage.backgroundColor = '0x000000';
sfondo=game.add.sprite(0,0, 'sfondointermezzo');


//PLAYER

player = game.add.sprite(10,250, 'player');
player.scale.setTo(0.8);

player.animations.add('rest_r', [38,39,40,41,42,43], 12, true);
player.animations.add('rest_l', [32,33,34,35,36,37], 12, true);
player.animations.add('walk_r', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 18, true);
player.animations.add('walk_l', [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 18, true);
player.animations.add('jump', [44,45,46,47,48,49,50], 10, true);


game.physics.arcade.enable(player);
player.body.collideWorldBounds = true;




terra = game.add.sprite(0,384,'terraintermezzo'); //2638
game.physics.arcade.enable(terra);
terra.body.immovable= true;
terra.alpha = 0;


gradinosu= game.add.physicsGroup();
gradinosu.create(692,318,'gradinosu1');
gradinosu.enablebody = true;
gradinosu.setAll('body.immovable', true);
gradinosu.setAll('body.checkCollision.left', false);
gradinosu.setAll('body.checkCollision.down', false);
gradinosu.setAll('alpha', 0);











gradini= game.add.physicsGroup();

gradini.create(634,433,'gradino1');
gradini.create(634,483,'gradino2');
gradini.create(634,533,'gradino3');
gradini.create(634,583,'gradino4');
gradini.create(634,633,'gradino5');
gradini.create(634,683,'gradino6');
gradini.create(634,733,'gradino7');


gradini.create(747,268,'gradinosu2');
gradini.create(802,218,'gradinosu2');
gradini.create(857,168,'gradinosu2');
gradini.create(912,118,'gradinosu2');
gradini.create(969,64,'gradinosu2');

//gradini.create(0,0,'ramo_sx');
//gradini.create(0,0,'ramo_dx');

gradini.enableBody = true;
gradini.setAll('body.immovable', true);
gradini.setAll('alpha', 0);
//gradini.setAll('body.checkCollision.down', false);


//gradini.setAll('body.checkCollision.right', false);

trigger_mangiafuoco = game.add.sprite(800, 0,'trigger_mangiafuoco');
game.physics.arcade.enable(trigger_mangiafuoco);
trigger_mangiafuoco.body.setSize(20,800,0,0);
trigger_mangiafuoco.alpha =0;

//DIALOGHI MANGIAFUOCO
dialogoMangiafuoco = game.add.physicsGroup();
dialogo0mangiafuoco = dialogoMangiafuoco.create(0,0,'dialogo_mangiafuoco_-1');
dialogo1mangiafuoco = dialogoMangiafuoco.create(0,0,'dialogo_mangiafuoco_0');
dialogo2mangiafuoco = dialogoMangiafuoco.create(0,0,'dialogo_mangiafuoco_1');
dialogo3mangiafuoco = dialogoMangiafuoco.create(0,0,'dialogo_mangiafuoco_2');
dialogoMangiafuoco.setAll('alpha', 0);
dialogoMangiafuoco.setAll('fixedToCamera', true);








    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    yesButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    pausaButton.onDown.add(pauseGame,this);


    function tornaMenu(){
      game.paused = false;
       livello1Preso=false;
       fineGioco = false;
       inizio = true;
       storiamenu = false;
       autorimenu = false;
       intermedio = false;
       finale1= false;
       resetVariabili1();
      game.camera.fade(0x000000, 250);
      //game.camera.onFadeComplete.add(function(){game.state.start('menustate')});
    }


    pausa=game.add.sprite(0,0,'menu_pausa');
    pausa.alpha = 0;
    pausa.fixedToCamera = true;

    tastiMenuPausa = game.add.physicsGroup();
    tastoMenu = tastiMenuPausa.create(512,422,'tasto_menu');
    tastoContinua = tastiMenuPausa.create(512,330,'tasto_continua');
    tastoContinua.events.onInputUp.add(pauseGame);



    tastiMenuPausa.setAll('anchor.x', .5);
    tastiMenuPausa.setAll('anchor.y', .5);
    tastoContinua.anchor.y = .5;
    tastiMenuPausa.setAll('fixedToCamera', true);
    tastoContinua.alpha = 0;
    tastoMenu.alpha = 0;


    blurContinua = game.add.sprite(512,330, 'blur_continua');
    blurContinua.anchor.x = .5;
    blurContinua.anchor.y = .5;
    blurContinua.fixedToCamera = true;
    blurContinua.alpha = 0;

    blurMenu = game.add.sprite(512,422, 'blur_menu');
    blurMenu.anchor.x = .5;
    blurMenu.anchor.y = .5;
    blurMenu.fixedToCamera = true;
    blurMenu.alpha = 0;


          function pauseGame() {
                     game.paused = !game.paused;
                     pausa.alpha = 1 - pausa.alpha;
                     pulsantePausa.alpha = 1 - pulsantePausa.alpha;
                     tastoContinua.alpha = 1 - tastoContinua.alpha;
                     tastoMenu.alpha = 1 - tastoMenu.alpha;
                     tastoContinua.inputEnabled = (game.paused) ? true : false;
                     tastoContinua.input.useHandCursor = (game.paused) ? true : false;
                     tastoMenu.inputEnabled = (game.paused) ? true : false;
                     tastoMenu.input.useHandCursor = (game.paused) ? true : false;


                   }

                   tastoContinua.events.onInputOver.add(glowFilter1, this);
                   tastoContinua.events.onInputOut.add(noglowFilter1, this);
                   tastoContinua.events.onInputUp.add(noglowFilter1);

                   tastoMenu.events.onInputOver.add(glowFilter1b, this);
                   tastoMenu.events.onInputOut.add(noglowFilter1b, this);
                   tastoMenu.events.onInputUp.add(noglowFilter1b);

    pulsantePausa = game.add.sprite(974,718,'pulsante_pausa');
    pulsantePausa.anchor.x =1;
    pulsantePausa.anchor.y =1;
    pulsantePausa.fixedToCamera = true;
    pulsantePausa.scale.setTo(.7);
    pulsantePausa.inputEnabled = true;
            pulsantePausa.input.useHandCursor = true;
            pulsantePausa.events.onInputUp.add(pauseGame);


      tastoMenu.events.onInputUp.add(tornaMenu);


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





},

update: function() {

  blur.alpha = 0;

  if(pausa.alpha==0){
    blurMenu.alpha = 0;
    blurContinua.alpha = 0;
  }


  game.physics.arcade.collide(player, terra);
  game.physics.arcade.collide(player, gradini);
  game.physics.arcade.collide(player, gradinosu);
  game.physics.arcade.overlap(player, trigger_mangiafuoco, triggerMangiafuoco);



  player.body.velocity.x = 0;
  player.body.gravity.y = 1400;




  if (cursors.right.isDown) {
    player.body.velocity.x = 350;
    player.animations.play('walk_r');
    player.body.setSize(96,120,12,18);
    facing = 'right';


  }

   else if (cursors.left.isDown) {
    player.body.velocity.x = -350;
    player.animations.play('walk_l');
    player.body.setSize(96,120,12,18);
    facing = 'left';
  }

  else{

    if (facing == 'right' && !salita){
    player.animations.play('rest_r');
    player.body.setSize(44,120,44,18);
    }
    if (facing == 'left' && !salita){
      player.animations.play('rest_l');
      player.body.setSize(44,120,34,18);
    }



  else {
  if (facing == 'right' && !salita){
  player.animations.play('rest_r');
  player.body.setSize(44,120,44,18);
  }

  if (facing == 'left' && !salita){
    player.animations.play('rest_l');
    player.body.setSize(44,120,34,18);
  }
}
}


  if (jumpButton.isDown && player.body.touching.down){
    if(!joj){
    player.body.velocity.y = -580;
    joj = true;
  }
  }


   if (jumpButton.isUp){
    joj = false;
  }



   function triggerMangiafuoco(){
     inizioDialogoMangiafuoco = true;
     trigger_mangiafuoco.body.setSize(50,800,-30,0);


     if(inizioDialogoMangiafuoco){
       pulsantePausa.alpha =0;
       cursors.left.isDown = false;
       cursors.right.isDown = false;
       jumpButton.isDown=false;

       if (yesButton.isDown){
         if(!joy){
           yesButtonCounter = yesButtonCounter+1;
           joy = true;
         }
       }


       if(yesButtonCounter ==0){
         dialogo0mangiafuoco.alpha = 1;
       }

       if(yesButton.isDown && yesButtonCounter ==1){
         dialogo0mangiafuoco.alpha = 0;
         dialogo1mangiafuoco.alpha = 1;

       }

       if (yesButton.isDown && yesButtonCounter ==2){
           dialogo1mangiafuoco.alpha =0;
           dialogo2mangiafuoco.alpha = 1;


     }

     if (yesButton.isDown && yesButtonCounter ==3){
         dialogo2mangiafuoco.alpha =0;
         dialogo3mangiafuoco.alpha = 1;


   }

     if(yesButton.isDown && yesButtonCounter ==4){
         dialogo3mangiafuoco.alpha = 0;
         inizioDialogo = false;
         trigger_mangiafuoco.kill();
         yesButtonCounter =0;
         resetVariabili1();

         intermedio =false;
         livello1Preso = true;
         fineGioco = false;
         inizio = false;
         storiamenu = false;
         autorimenu = false;
         finale1 = false;

       game.camera.fade(0x000000, 250);


   }

 }
}

if (yesButton.isUp){
  joy = false;
}










},


render: function () {


//game.debug.inputInfo(32, 32);
//game.debug.pointer( game.input.activePointer);
//game.debug.body(terra);
}
}
