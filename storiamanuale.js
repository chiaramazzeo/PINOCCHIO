
var currentImage = 0;

var renders;
var tastoAvanti;
var tastoIndietro;
var delayStoria = 500;




var storiaManuale = {

  create: function (){


    

    renders = game.add.physicsGroup();
    render0 = renders.create(0,0,'immagine1t');
    render1 = renders.create(0,0,'immagine2t');
    render2 = renders.create(0,0,'immagine3t');
    render3 = renders.create(0,0,'immagine4t');
    render4 = renders.create(512,384,'immagine5t');
    render5 = renders.create(0,0,'immagine6t');

    renders.setAll('fixedToCamera',true);
    renders.setAll('alpha',0);
    render4.anchor.x =.5;
    render4.anchor.y =.5;
    render4.scale.setTo(1.01);




    tastoAvanti = game.add.sprite(1024-53,400,'nextImage');
    tastoAvanti.scale.setTo(.5)
    tastoAvanti.alpha =1;
    tastoAvanti.anchor.y =.5;
    tastoAvanti.anchor.x =.5;
    tastoAvanti.fixedToCamera = true;
    tastoAvanti.inputEnabled = true;
    tastoAvanti.input.useHandCursor =true;

    tastoIndietro = game.add.sprite(53,400, 'prevImage');
    tastoIndietro.scale.setTo(.5)
    tastoIndietro.alpha =1;
    tastoIndietro.anchor.y =.5;
    tastoIndietro.anchor.x =.5;
    tastoIndietro.fixedToCamera = true;
    tastoIndietro.inputEnabled = true;
    tastoIndietro.input.useHandCursor =true;

    tastoAvanti.events.onInputUp.add(nextImage);
    tastoIndietro.events.onInputUp.add(prevImage);




    function nextImage(){

      currentImage++

    }

    function prevImage(){
      currentImage--
    }


function ritornaAlMenu(){
  livello1Preso = false;
 fineGioco = false;
 inizio = true;
 storiamenu = false;
 autorimenu = false;
 intermedio = false;
 finale1 = false;
 slideshow = false;
 currentImage =0;
 totCoin =0;

 game.camera.fade(0x000000, 250);
}



        exitStoria = game.add.sprite(62,47,'exitStoria');
        exitStoria.fixedToCamera = true;
        exitStoria.inputEnabled = true;
        exitStoria.input.useHandCursor =true;
        exitStoria.events.onInputUp.add(ritornaAlMenu);
  },

  update:function (){


    if (currentImage ==0){

      game.add.tween(render0).to( {alpha: 1}, 100).start();
      game.add.tween(render1).to( {alpha: 0}, 100).start();

    }else if(currentImage ==1){

      game.add.tween(render1).to( {alpha: 1}, 100).start();
      game.add.tween(render2).to( {alpha: 0}, 100).start();

    }else if(currentImage ==2){

      game.add.tween(render2).to( {alpha: 1}, 100).start();
      game.add.tween(render3).to( {alpha: 0}, 100).start();

    }else if(currentImage ==3){

      game.add.tween(render3).to( {alpha: 1}, 100).start();
      game.add.tween(render4).to( {alpha: 0}, 100).start();

    }else if(currentImage ==4){

      game.add.tween(render4).to( {alpha: 1}, 100).start();
      game.add.tween(render5).to( {alpha: 0}, 100).start();
    }else if(currentImage ==5){

      game.add.tween(render5).to( {alpha: 1}, 100).start();

    }


    if (currentImage ==0){

      //render0.alpha=1

      tastoIndietro.alpha =0;
      tastoIndietro.inputEnabled = false;
      tastoIndietro.input.useHandCursor =false;
      tastoAvanti.alpha =1;
      tastoAvanti.inputEnabled = true;
      tastoAvanti.input.useHandCursor =true;



    }else if(currentImage == 1){

     tastoIndietro.alpha =1;
      tastoIndietro.inputEnabled = true;
      tastoIndietro.input.useHandCursor =true;
      tastoAvanti.alpha =1;
      tastoAvanti.inputEnabled = true;
      tastoAvanti.input.useHandCursor =true;




    }else if(currentImage == 2){

    tastoIndietro.alpha =1;
      tastoIndietro.inputEnabled = true;
      tastoIndietro.input.useHandCursor =true;
      tastoAvanti.alpha =1;
      tastoAvanti.inputEnabled = true;
      tastoAvanti.input.useHandCursor =true;



    }else if(currentImage == 3){

     tastoIndietro.alpha =1;
      tastoIndietro.inputEnabled = true;
      tastoIndietro.input.useHandCursor =true;
      tastoAvanti.alpha = 1;
      tastoAvanti.inputEnabled = true;
      tastoAvanti.input.useHandCursor =true;



    }else if(currentImage == 4){

      tastoIndietro.alpha =1;
      tastoIndietro.inputEnabled = true;
      tastoIndietro.input.useHandCursor =true;
      tastoAvanti.alpha =1;
      tastoAvanti.inputEnabled = true;
      tastoAvanti.input.useHandCursor =true;



    }else if(currentImage == 5){

      tastoIndietro.alpha =1;
      tastoIndietro.inputEnabled = true;
      tastoIndietro.input.useHandCursor =true;
      tastoAvanti.alpha =0;
      tastoAvanti.inputEnabled = false;
      tastoAvanti.input.useHandCursor =false;
    }




}
}
