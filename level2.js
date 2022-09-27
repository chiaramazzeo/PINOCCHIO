var player;
var platforms;
var cursors;
var jumpButton;
var pullButton;
var terraTot;
var fineGioco = false;
var spostaButton;
var gameOver;
var casse2;
var casse2I;
var pushing = false;
var pavimento;
var lightinstruction;
var luce = false;
var buio;
var camerini;
var scale;
var piano2;
var facing = "right"
var colore = 1;
var pavimentoscala;
var muro;
var leva;
var salita = false;
var coperchi;
var checkpoints2;
var accendi;
var gattona = false;
var gattonaButton;
var cameriniPiattaforme1;
var pianoforte;
var scala_laterale;
var onoff;
var carrucolaSiMuove = false;
var carrucola_arancione;
var carrucola2;
var letto;
var poltrona;
var respawnCounter = 0;
var lives;
var faro_check;
var cx2 = 200;
var cy2 = 6650;
var joj;
var td = 30000; //touching down per caduta
var fa = [false, false, false]
var overlapGattona;
var overlapNonsaltare;
var arlecchino;
var riprovaText2;
var riprovaBlur2;
var timeInSeconds = 300;
var timer;
var timeText;
var aprisipario = false;
var cassespostate = false;
var leva1presa = false;
var coperchio_scala_aperto = false;
var cameradeadzone = true;
var jos1 = false;
var jos2 = false;
var jos3 = false;
var inPiedi = true;
var mappat = false;
var mappaviewport;
var arlecchinoglow = false;
var pausaButton;
var animationCounter = 1;
var istruzioniSipario = false;
var lucepalco = false;
var inizioPensieroleva1 = false;
var inizioPensieroleva3 = false;
var yesButtonCounter = 0;
var yesButton;
var joy;
var pensieroleva1 =false;
var eccezioneScaletta = false;





// RACCOLTA PEZZI MARIONETTA
var ar = [];
for (var b = 0; i < 8; b++) {
  ar[b] = true;
  //console.log(c);
}

var pezziCollezionati = 0;


function resetVariabili2() {
  checkpoint1l2.kill();
  checkpoint2l2.kill();
  checkpoint3l2.kill();
  respawnCounter = 0;
  pezziCollezionati = 0;
  fa = [false, false, false];
  carrucolaSiMuove = false;
  luce = false;
  leva1presa = false;
  coperchio_scala_aperto = false;
  aprisipario = false;  
  cx2 = 200;
  cy2 = 6650;
  jos1 = false;
  jos2 = false;
  jos3 = false;
  mappat = false;
  animationCounter = 1;
  yesButtonCounter = 0;
  inizioPensieroleva1 = false;
  inizioPensieroleva3 = false;
  pensieroleva1 =false;




  /*var*/
  ar = []
  for (var b = 0; b < arlecchino.length; b++) {
    ar[b] = true;
    var temp = arlecchino.getChildAt(b);
    temp.exists = ar[b];
    temp.index = b;
  }

  timeInSeconds = 300;
  timeText.alpha = 1;
}

function tornaMenu2() {
  game.paused = false;

  resetVariabili1();
  resetVariabili2();
  inizio = true;
  fineGioco = false;
  livello1Preso = false;
  game.camera.fade(0x000000, 250);
  //game.state.start('menustate');
  //game.camera.onFadeComplete.add(function(){game.state.start('menustate')});
}




var level2 = {


    create: function() {



      td = 30000;



      game.physics.arcade.OVERLAP_BIAS = 40

      background2 = game.add.image(0, 1707, 'backgroundl2');

      game.world.setBounds(0, 2490, 5120, 6899);





      checkpoints2 = game.add.physicsGroup();
      checkpoint1l2 = checkpoints2.create(939, 6775, 'checkpoint');
      checkpoint2l2 = checkpoints2.create(582, 4158, 'checkpoint');
      checkpoint3l2 = checkpoints2.create(4492, 3574, 'checkpoint');

      for (var a = 0; a < checkpoints2.length; a++) {
        var temp = checkpoints2.getAt(a);
        temp.index = a;
      }

      checkpoints2.setAll('checkCollision', false);
      checkpoints2.setAll('alpha', 0);

      checkpoints2.enableBody = false;
      checkpoints2.setAll('anchor.y', 1);
      checkpoint3l2.anchor.x = 1;


      faro_check = game.add.physicsGroup();
      faro1 = faro_check.create(939, 6816, 'faro_check');
      faro2 = faro_check.create(582, 4199, 'faro_check');
      faro3 = faro_check.create(4300, 3615, 'faro_check');

      for (var a = 0; a < checkpoints2.length; a++) {
        if (fa[a]) {
          faro_check.getAt(a).frame = 1;
        } else {
          faro_check.getAt(a).frame = 0;
        }
      }
      faro_check.setAll('anchor.y', 1);


      //ON OFF TEATRO
      onoff = game.add.sprite(600, 6530, 'onoff')
      onoff.frame = 1;
      onoff.animations.add('onoff', [1, 0], 4, false);
      onoff.animations.add('offon', [0, 1], 4, false);
      game.physics.arcade.enable(onoff);

      //MAPPA
      mappacollect = game.add.sprite(4440, 5900, 'mappacollect');
      game.physics.arcade.enable(mappacollect);


      //PAVIMENTO TEATRO
      pavimento = game.add.physicsGroup();
      pavimento1 = pavimento.create(0, 6774, 'pavimento');
      pavimento2a = pavimento.create(0, 6100, 'pavimento2a');
      pavimento2b = pavimento.create(2813, 6100, 'pavimento2b');
      pavimento2c = pavimento.create(4821, 6100, 'pavimento2c');
      pavimento3a = pavimento.create(0, 5419, 'pavimento3a');
      pavimento3b = pavimento.create(247, 5419, 'pavimento3b');
      pavimento3c = pavimento.create(3321, 5419, 'pavimento3c');
      pavimento3d = pavimento.create(3946, 5419, 'pavimento3d');
      //piano2a = pavimento.create(0, 6100, 'piano2a');
      //piano2b = pavimento.create(4641, 6100, 'piano2b');
      //piano3 = pavimento.create(0, 5419, 'pavimento');
      pavimento4 = pavimento.create(504, 4768, 'pavimento4');
      pavimento4.body.setSize(4116, 10, 0, 0);
      pavimento5 = pavimento.create(504, 4165, 'pavimento5');
      pavimento6a = pavimento.create(504, 3584, 'pavimento6a');
      pavimento6b = pavimento.create(4076, 3584, 'pavimento6b');
      pavimento7 = pavimento.create(0, 2428, 'pavimento7');

      pavimento.setAll('body.immovable', true);
      pavimento.setAll('alpha', 0);

      //botola
      botola = game.add.sprite(2500, 6070, 'botola')
      //botola.animations.add('botola', [0, 1], 4, false);
      botola.frame = 0;
      botolainvisibile = game.add.sprite(2500, 6070, 'botola')
      botolainvisibile.frame = 0;
      botolainvisibile.alpha = 0;
      game.physics.arcade.enable(botolainvisibile);




      //SCALE
      scale = game.add.physicsGroup();
      scale1 = scale.create(4711, 6100, 'scale');
      scale2 = scale.create(3835, 5419, 'scale');
      scale3 = scale.create(3210, 5419, 'scale');
      scale4 = scale.create(136, 5419, 'scale');
      scale1.body.setSize(50, 530, 25, 30);
      scale2.body.setSize(50, 530, 25, 30);
      scale3.body.setSize(50, 530, 25, 30);
      scale4.body.setSize(50, 530, 25, 30);
      game.physics.arcade.enable(scale);
      scale.setAll('body.immovable', true);

      //LEVA
      leva = game.add.physicsGroup();
      levabluup = leva.create(1657, 5890, 'levabluup');
      levabludown = leva.create(1657, 5890, 'levabludown');
      levaarancioneup = leva.create(1941, 5890, 'levaarancioneup');
      levaarancionedown = leva.create(1941, 5890, 'levaarancionedown');
      levabludown.alpha = 0;
      levaarancionedown.alpha = 0;
      levarossaup = leva.create(4325, 5255, 'levarossaup');
      levarossadown = leva.create(4325, 5255, 'levarossadown');
      levarossadown.alpha = 0;

      // CARRUCOLA ARANCIONE

      carrucola_arancione = game.add.sprite(-3, 3583, 'carrucola_arancione');
      game.physics.arcade.enable(carrucola_arancione);
      carrucola_arancione.body.immovable = true;
      //carrucola_arancione.body.velocity.y = 0;


      carrucola_arancione.checkCollisionUp = true;
      carrucola_arancione.checkCollisionDown = true;

      // CARRUCOLA 2
      carrucola2 = game.add.sprite(4621, 5305, 'carrucola2');
      game.physics.arcade.enable(carrucola2);
      //carrucola2.body.velocity.y = -200;
      carrucola2.body.immovable = true;
      carrucola2.checkCollisionUp = true;
      carrucola2.checkCollisionDown = true;



      //COPERCHIO SCALE BLOCCATE

      coperchio_scala = game.add.sprite(3207, 5269, 'coperchio_scale');
      coperchio_scala.frame = 0;

      coperchio_scala_collide = game.add.sprite(3207, 5392, 'coperchio_scala_collide');
      game.physics.arcade.enable(coperchio_scala_collide);
      coperchio_scala_collide.body.immovable = true;
      coperchio_scala_collide.alpha = 0;

      //rella
      rella = game.add.physicsGroup();
      rella1 = rella.create(640, 5900, 'rella');
      rella2 = rella.create(900, 5230, 'rella');
      rella.enableBody = true;
      //rella.setAll('body.gravity.y', 200);
      rella.setAll('body.immovable', true);

      //casse2 MOBILI
      casse2 = game.add.physicsGroup();
      //cassa1 = casse2.create(672, 6674, 'cassa');
      cassa1 = casse2.create(3631, 6674, 'cassa2');
      cassa3 = casse2.create(4513, 6674, 'cassa2');

      cassapiano2b = casse2.create(2050, 6000, 'cassa2');
      cassapiano2c = casse2.create(2900, 6000, 'cassa2');
      cassapiano2d = casse2.create(510, 6000, 'cassa2');
      cassapiano3a = casse2.create(1683, 5325, 'cassa2');
      cassapiano3b = casse2.create(606, 5325, 'cassa2');

      cassapiano2e = casse2.create(1480, 6000, 'cassa2');
      cassapiano5a = casse2.create(800, 3484, 'cassa2');
      cassapiano5b = casse2.create(4100, 3484, 'cassa2');
      casse2.enableBody = true;
      casse2.setAll('body.immovable', true);


      //MURO
      muro = game.add.physicsGroup();
      muro1 = muro.create(1770, 5555, 'muro');
      muro2 = muro.create(3536, 5555, 'muro');
      muro3 = muro.create(4130, 4904, 'muro');
      muro5a = muro.create(961, 3720, 'muro');
      muro5b = muro.create(4076, 3720, 'muro');

      muro.setAll('body.immovable', true);
      muro.setAll('alpha', 0)
      muro.enableBody = true;


      piattaformascala = game.add.physicsGroup();
      piattaformascala1 = piattaformascala.create(4330, 6492, 'piattaformascala');
      //piattaformascala2 = piattaformascala.create(1326, 5808, 'piattaformascala');
      piattaformascala.setAll('body.immovable', true);
      piattaformascala.setAll('alpha', 0);

      // piattaformine varie
      piattaformevarie = game.add.physicsGroup();
      lampadario = piattaformevarie.create(2500, 5895, 'lampadario');
      lampadario.body.setSize(282, 18, 20, 0);
      lampadario.alpha = 0;
      //acquario = piattaformevarie.create(2384, 5923, 'acquario');

      mensolapiano3 = piattaformevarie.create(2458, 5126, 'mensola');
      mensolapiano3.body.setSize(180, 21, 7, 0);
      antenna = piattaformevarie.create(2210, 5255, 'antenna');
      antenna.body.setSize(100, 100, 0, 0)
      tavolo = piattaformevarie.create(2180, 5330, 'antenna');

      piattaformevarie.setAll('body.immovable', true);
      piattaformevarie.setAll('alpha', 0);

      palla = game.add.sprite(2315, 5260, 'tv');
      game.physics.arcade.enable(palla);
      palla.body.immovable = true;
      palla.alpha = 0;

      poltrona = game.add.sprite(2250, 5998, 'poltrona');
      game.physics.arcade.enable(poltrona);
      poltrona.body.setSize(130, 82, 0, 0);
      poltrona.body.immovable = true;
      poltrona.alpha = 0;


      letto = game.add.sprite(2720, 5315, 'letto');
      game.physics.arcade.enable(letto);
      letto.body.setSize(321, 115, 0, 0)
      letto.body.immovable = true;
      letto.alpha = 0;


      buco = game.add.sprite(2500, 6200, 'mensola')
      game.physics.arcade.enable(buco);
      buco.body.immovable = true;
      buco.scale.x = 2
      buco.alpha = 0;



      // PIATTAFORME OSTACOLO gattona


      overlapGattona = game.add.physicsGroup();

      overlapGattona1 = overlapGattona.create(1915, 6670, 'overlapGattona');
      overlapGattona1.body.setSize(160, 150, 0, 0)
      overlapGattona2 = overlapGattona.create(2470, 6670, 'overlapGattona');
      overlapGattona2.body.setSize(400, 150, 0, 0)
      overlapGattona3 = overlapGattona.create(2085, 5343, 'overlapGattona');
      overlapGattona3.body.setSize(140, 81, 135, 0);

      overlapGattona.setAll('alpha', 0);

      overlapNonsaltare = game.add.physicsGroup();
      overlapNonsaltare1 = overlapNonsaltare.create(1915, 6670, 'overlapNonsaltare');
      overlapNonsaltare1.body.setSize(230, 81, -30, 0);
      overlapNonsaltare2 = overlapNonsaltare.create(2470, 6670, 'overlapNonsaltare');
      overlapNonsaltare2.body.setSize(480, 81, -30, 0);
      overlapNonsaltare3 = overlapNonsaltare.create(2085, 5343, 'overlapNonsaltare');
      overlapNonsaltare3.body.setSize(250, 81, 75, 0);

      overlapNonsaltare.setAll('alpha', 0);



      cameriniPiattaforme = game.add.physicsGroup();
      cameriniPiattaforme1 = cameriniPiattaforme.create(1890, 6510, 'p_camerini');
      cameriniPiattaforme2 = cameriniPiattaforme.create(2455, 6510, 'p_camerini2');


      cameriniPiattaforme.setAll('body.immovable', true);
      cameriniPiattaforme.setAll('alpha', 0);

      // pianoforte
      pianoforte = game.add.sprite(3984, 6589, 'pianoforte');
      game.physics.arcade.enable(pianoforte);
      pianoforte.body.immovable = true;


      //PLAYER

      player = game.add.sprite(cx2, cy2, 'player'); // posizione di start player   5759, 3500    50, 3900   6144, 3288,  6835, 3041   7938, 3100    11936, 3490   3000, 3900
      player.scale.setTo(0.8);


      player.animations.add('rest_r', [38, 39, 40, 41, 42, 43], 12, true);
      player.animations.add('rest_l', [32, 33, 34, 35, 36, 37], 12, true);
      player.animations.add('walk_r', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 18, true);
      player.animations.add('walk_l', [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 18, true);
      player.animations.add('push_r', [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], 10, true);
      player.animations.add('push_l', [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], 10, true);
      player.animations.add('jump', [44, 45, 46, 47, 48, 49, 50], 10, true);
      player.animations.add('salita', [75, 74, 73, 74, 75, 76, 77, 76], 12, true);
      player.animations.add('discesa', [76, 77, 76, 75, 74, 73, 74, 75], 12, true);
      player.animations.add('gattona_r', [80, 81, 82, 83, 84, 85, 86, 87, 86, 85, 84, 83, 82, 81], 18, true);
      player.animations.add('gattona_l', [95, 94, 93, 92, 91, 90, 89, 88, 89, 90, 91, 92, 93, 94], 18, true)


      game.physics.arcade.enable(player);
      player.body.collideWorldBounds = true;
      casse2.setAll('body.collideWorldBounds', true)




      //SACCHI
      //#saccopienosaccovuoto

      sacchi = game.add.physicsGroup();
      sacco3 = sacchi.create(770, 5365, 'sacco');
      sacco15 = sacchi.create(460, 5365, 'sacco');
      sacco4 = sacchi.create(1595, 5365, 'sacco');
      sacco5 = sacchi.create(1230, 6041, 'sacco');
      sacco6 = sacchi.create(61, 6041, 'sacco');
      sacco7 = sacchi.create(620, 6041, 'sacco');
      sacco8 = sacchi.create(970, 3525, 'sacco');
      sacco9 = sacchi.create(4250, 3525, 'sacco');
      sacco10 = sacchi.create(4050, 3525, 'sacco');
      sacco11 = sacchi.create(1720, 6041, 'sacco');
      sacco13 = sacchi.create(2220, 6041, 'sacco');
      sacco12 = sacchi.create(2800, 6041, 'sacco');
      sacco14 = sacchi.create(5027, 6715, 'sacco');
      sacco10.alpha = 0;
      sacco11.alpha = 0;
      sacco12.alpha = 0;
      sacco13.alpha = 0;
      sacco15.alpha = 0;
      sacchi.enableBody = true;
      sacchi.setAll('body.immovable', true);

      //SCENOGRAFIA
      scenografia = game.add.physicsGroup();
      aereo = scenografia.create(1080, 3370, 'aereo');
      aereo.body.setSize(300, 1, 1, 0)
      mongolfiera = scenografia.create(1775, 3416, 'mongolfiera');
      mongolfiera.body.setSize(60, 1, 1, 0)
      macchina = scenografia.create(2490, 3180, 'macchina');
      macchina.body.setSize(240, 1, 1, 0)
      nave = scenografia.create(2805, 3455, 'nave');
      nave.body.setSize(170, 1, 5, 0)
      luna = scenografia.create(3160, 2950, 'luna');
      luna.body.setSize(170, 1, 1, 0)
      nuvola = scenografia.create(3250, 3415, 'nuvola');
      nuvola.body.setSize(240, 1, 1, 0)

      //game.physics.arcade.enable(scenografia);
      scenografia.enableBody = true;
      scenografia.setAll('body.immovable', true);
      scenografia.setAll('alpha', 0);

      scenografiadisegni = game.add.physicsGroup();
      aereodisegno = scenografiadisegni.create(1395, 3460, 'aereodisegno');
      aereodisegno.scale.x = -1;
      lunadisegno = scenografiadisegni.create(3100, 3000, 'lunadisegno');
      macchinadisegno = scenografiadisegni.create(2440, 3280, 'macchinadisegno');
      mongolfieradisegno = scenografiadisegni.create(1679, 3426, 'mongolfieradisegno');
      navedisegno = scenografiadisegni.create(2767, 3465, 'navedisegno');
      nuvoladisegno = scenografiadisegni.create(3210, 3510, 'nuvoladisegno');
      scenografiadisegni.setAll('anchor.y', 1);

      //CASA DAVANTI
      casa = game.add.sprite(3520, 4975, 'casa');


      //TRAVI
      travi = game.add.physicsGroup();
      trave1 = travi.create(0, 3820, 'trave');
      trave2 = travi.create(0, 2670, 'trave');

      //RINGHIERA
      ringhiera = game.add.physicsGroup();
      ringhiera1 = ringhiera.create(504, 3498, 'ringhiera');
      ringhiera1 = ringhiera.create(4076, 3498, 'ringhiera');

      //BUIO
      buio = game.add.sprite(0, 0, 'buio');
      buio.alpha = 1;

      //light instruction
      lightinstruction = game.add.sprite(550, 6480, 'lightinstruction')
      lightinstruction.scale.setTo(1.2);


      //paravento DAVANTI
      paravento = game.add.sprite(3211, 6569, 'paravento');
      sediakermit = game.add.sprite(1964, 6665, 'sediakermit');

      //Lampadario DAVANTI
      lampadario_disegno = game.add.sprite(2478, 5560, 'lampadario_disegno');



      //PAVIMENTO BOTOLA
      pavimentoBotola = game.add.physicsGroup();
      pavimentoBotola1 = pavimentoBotola.create(2500, 6100, 'pavimentoBotola');
      pavimentoBotola2 = pavimentoBotola.create(2500, 6102, 'pavimentoBotola');
      pavimentoBotola1.alpha = 0;
      pavimentoBotola2.alpha = 1;
      game.physics.arcade.enable(pavimentoBotola);
      pavimentoBotola.setAll('body.immovable', true);


      //VIGNETTATURA
      vignettatura = game.add.sprite(0, 0, 'vignettatura')
      vignettatura.fixedToCamera = true;



      //ARLECCHINO
      arlecchino = game.add.physicsGroup();

      scarpe = arlecchino.create(2789, 6717, 'scarpe');
      calze = arlecchino.create(4345, 6423, 'calze');
      gambe = arlecchino.create(2863, 5044, 'gambe');
      pantaloni = arlecchino.create(1081, 6022, 'pantaloni');
      casacca = arlecchino.create(2630, 5780, 'casacca')
      braccia = arlecchino.create(810, 4002, 'braccia');
      cappello = arlecchino.create(2328, 3041, 'cappello');
      testa = arlecchino.create(2770, 4650, 'testa');

      game.physics.arcade.enable(arlecchino);
      arlecchino.enablebody = true;
      arlecchino.setAll('body.immovable', true);

      arlecchino.callAll('animations.add', 'animations', 'oscilla', [0, 1, 2, 3, 4, 5, 4, 3, 2, 1], 10, true)
      arlecchino.callAll('play', null, 'oscilla');



      for (var b = 0; b < arlecchino.length; b++) {
        if (respawnCounter == 0) {
          ar[b] = true;
        }
        var temp = arlecchino.getChildAt(b);
        temp.exists = ar[b];
        temp.index = b;
      }


      ///SIPARIO
      sipario = game.add.sprite(1050, 3559, 'sipario');
      sipario.frame = 0;
      sipariotrasparente = game.add.sprite(1050, 3559, 'sipario');
      //sipariotrasparente.frame = 0;
      sipariotrasparente.alpha = 0;
      game.physics.arcade.enable(sipariotrasparente);
      sipariotrasparente.body.immovable = true;
      sipariotrasparente.body.setSize(3026, 666, 0, 600);

      istruzioni2 = game.add.physicsGroup()

      istruzioni2.setAll('scale.setTo', '1.2')

      istruzioni_sipario1 = istruzioni2.create(850, 4500, 'istruzioni_sipario');
      //istruzioni_sipario1.alpha = 0;
      istruzioni_sipario2 = istruzioni2.create(4112, 4500, 'istruzioni_sipario');
      //istruzioni_sipario2.alpha = 0;
      istruzioni_gattona = istruzioni2.create(1790, 6800, 'premi_a');
      istruzioni_mappa = istruzioni2.create(4350, 5725, 'premi_m');
      pensiero_leva1 = istruzioni2.create(0, 0,'pensiero_leva')
      pensiero_leva1.fixedToCamera = true;
      pensiero_leva1.alpha = 0;
      pensiero_leva3 = istruzioni2.create(0, 0, 'pensiero_pezzi')
      pensiero_leva3.alpha = 0;
      pensiero_leva3.fixedToCamera = true;



      arlecchino_glow = game.add.sprite(38, 33, 'arlecchino_glow');
      //arlecchino_glow.alpha = 0;
      arlecchino_glow.fixedToCamera = true;
      arlecchino_glow.scale.setTo(1.2)

      arlecchinoV = game.add.physicsGroup();

      aTrasparente = arlecchinoV.create(50, 42, 'arlecchino_trasparente');

      pezzo_8 = arlecchinoV.create(31, 173, 'pezzo8');
      pezzo_7 = arlecchinoV.create(31, 173, 'pezzo7');
      pezzo_6 = arlecchinoV.create(31, 173, 'pezzo6');
      pezzo_5 = arlecchinoV.create(31, 173, 'pezzo5');
      pezzo_4 = arlecchinoV.create(31, 173, 'pezzo4');
      pezzo_3 = arlecchinoV.create(31, 173, 'pezzo3');
      pezzo_2 = arlecchinoV.create(31, 173, 'pezzo2');
      pezzo_1 = arlecchinoV.create(31, 173, 'pezzo1');


      pezzo_8.anchor.y = 1;
      pezzo_7.anchor.y = 1;
      pezzo_6.anchor.y = 1;
      pezzo_5.anchor.y = 1;
      pezzo_4.anchor.y = 1;
      pezzo_3.anchor.y = 1;
      pezzo_2.anchor.y = 1;
      pezzo_1.anchor.y = 1;



      pezzo_8.alpha = 0;
      pezzo_7.alpha = 0;
      pezzo_6.alpha = 0;
      pezzo_5.alpha = 0;
      pezzo_4.alpha = 0;
      pezzo_3.alpha = 0;
      pezzo_2.alpha = 0;
      pezzo_1.alpha = 0;

      aOutline = arlecchinoV.create(49, 44, 'outline_arlecchino');


      arlecchinoV.setAll('fixedToCamera', true);
      aOutline.scale.setTo(1.2);
      aTrasparente.scale.setTo(1.3);
      aTrasparente.alpha = .1;

      mappaviewport = game.add.sprite(70, 200, 'mappacollect');
      mappaviewport.fixedToCamera = true;
      mappaviewport.alpha = 0;


      mappaGrande = game.add.sprite(0, 0, 'mappaGrande');
      mappaGrande.fixedToCamera = true;
      mappaGrande.alpha = 0;

      //MANGIAFUOCO

      mangiafuoco = game.add.sprite(2427, 3972, 'mangiafuoco');
      //mangiafuoco.frame =
      //mangiafuoco.alpha = 0;

      mangiafuoco2 = game.add.sprite(2698, 4088, 'mangiafuoco2');
      //mangiafuoco2.frame = 0;
      mangiafuoco2.alpha = 0;

      mangiafuoco.animations.add('mano_mangiafuoco', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79
      ], 32, false);

      mangiafuoco2.animations.add('mano_mangiafuoco2', [79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
        59, 58, 57, 56, 55, 54, 53, 52, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27,
        26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      ], 32, false);

      //OCCHIO DI BUE
      buiofinale = game.add.sprite(0, 0, 'buiofinale');
      buiofinale.fixedToCamera = true;
      buiofinale.alpha = 0;
      occhio = game.add.sprite(2028, 4076, 'occhio');
      //occhio.fixedToCamera = true;
      occhio.alpha = 0;




      lives = game.add.physicsGroup();
      outline = lives.create(974, 50, 'life_outline');

      if (respawnCounter == 0) {
        life5 = lives.create(974, 50, 'life5');
      }
      if (respawnCounter == 1) {
        life4 = lives.create(974, 50, 'life4');
      }
      if (respawnCounter == 2) {
        life3 = lives.create(974, 50, 'life3');
      }
      if (respawnCounter == 3) {
        life2 = lives.create(974, 50, 'life2');
      }
      if (respawnCounter == 4) {
        life1 = lives.create(974, 50, 'life1');
      }


      lives.setAll('anchor.x', 1);
      lives.setAll('fixedToCamera', true);


      //TIMER CODE:
      timeText = game.add.text(974, 90, "5:00", style1);
      timeText.fixedToCamera = true;
      timeText.anchor.set(1, 0);
      timeText.scale.setTo(.7);
      timer = game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);


      function updateTimer() {
        timeInSeconds--;
        var minutes = Math.floor(timeInSeconds / 60);
        var seconds = timeInSeconds - (minutes * 60);
        var timeString = minutes + ":" + addZeros(seconds);
        timeText.text = timeString;

      }

      function addZeros(num) {
        if (num < 10) {
          num = "0" + num;
        }
        return num;
      }


      //pausa

      pausa = game.add.sprite(0, 0, 'menu_pausa');
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

      pulsantePausa = game.add.sprite(974, 718, 'pulsante_pausa');
      pulsantePausa.anchor.x = 1;
      pulsantePausa.anchor.y = 1;
      pulsantePausa.fixedToCamera = true;
      pulsantePausa.scale.setTo(.7);
      pulsantePausa.inputEnabled = true;
      pulsantePausa.input.useHandCursor = true;
      pulsantePausa.events.onInputUp.add(pauseGame);

      tastoMenu.events.onInputUp.add(tornaMenu2);




      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
      game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 420);
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      yesButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      spostaButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
      gattonaButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
      pausaButton = game.input.keyboard.addKey(Phaser.Keyboard.P);
      pausaButton.onDown.add(pauseGame, this);
      mappaButton = game.input.keyboard.addKey(Phaser.Keyboard.M);





      function glowFilter1() {
        blurContinua.alpha = 1;
      }

      function noglowFilter1() {
        blurContinua.alpha = 0;
      }

      function glowFilter1b() {
        blurMenu.alpha = 1;
      }

      function noglowFilter1b() {
        blurMenu.alpha = 0;
      }




      schermata_game_over = game.add.sprite(0, 0, 'game_over');
      schermata_game_over.fixedToCamera = true;
      schermata_game_over.alpha = 0;

      textGameOver2= game.add.sprite (512,90, 'textgame_over')
      textGameOver2.fixedToCamera = true;
      textGameOver2.alpha = 0;
      textGameOver2.anchor.x = 0.5
      textGameOver2.anchor.y = 0.5

      blurGameOver2= game.add.sprite (512,90, 'blur_gameover');
      blurGameOver2.fixedToCamera = true;
      blurGameOver2.alpha = 0;
      blurGameOver2.anchor.x = 0.5;
      blurGameOver2.anchor.y = 0.5;

      riprovaText2 = game.add.sprite(521, 421, 'riprova_button');
      riprovaText2.fixedToCamera = true;
      riprovaText2.alpha = 0;
      riprovaText2.anchor.x =.5;
      riprovaText2.anchor.y = .5;
      riprovaText2.scale.setTo(0.8);

      riprovaBlur2 = game.add.sprite(521, 421, 'riprova_blur');
      riprovaBlur2.fixedToCamera = true;
      riprovaBlur2.alpha = 0;
      riprovaBlur2.anchor.x =.5;
      riprovaBlur2.anchor.y = .5;
      riprovaBlur2.scale.setTo(0.8);

    },


    update: function() {



     eccezioneScaletta = false;

     if(pausa.alpha==0){
       blurMenu.alpha = 0;
       blurContinua.alpha = 0;
     }

      if (timeInSeconds == 0){
        timeText.alpha =0;
         respawnCounter =5;
      }



      pushing = false;
      noGravity = false;
      salita = false;
      gattona = false;
      salta = false;
      nonsaltare = false;



      game.physics.arcade.overlap(player, botolainvisibile, apribotola);
      game.physics.arcade.collide(player, pavimentoBotola1);

      game.physics.arcade.collide(player, pavimento);

      game.physics.arcade.overlap(player, onoff, lighton);

      game.physics.arcade.overlap(player, scale, noG);
      game.physics.arcade.collide(player, coperchio_scala_collide);
      game.physics.arcade.collide(player, muro);
      game.physics.arcade.overlap(player, levabluup, switchleva1_delay);
      game.physics.arcade.overlap(player, levaarancioneup, switchleva2_delay);
      game.physics.arcade.overlap(player, levarossaup, switchleva3_delay);
      game.physics.arcade.collide(player, coperchi);
      game.physics.arcade.collide(player, pianoforte);
      game.physics.arcade.overlap(player, checkpoints2, cp2);

      game.physics.arcade.collide(player, piattaformascala);

      game.physics.arcade.collide(player, casse2, sposta);

      game.physics.arcade.collide(player, cameriniPiattaforme);

      game.physics.arcade.collide(player, casse2);
      game.physics.arcade.collide(player, piattaformevarie);
      game.physics.arcade.collide(casse2, piattaformevarie);
      game.physics.arcade.collide(casse2, muro);
      game.physics.arcade.collide(casse2, pianoforte);
      game.physics.arcade.collide(casse2, rella);
      game.physics.arcade.collide(casse2, sacchi);


      game.physics.arcade.collide(player, carrucola_arancione, pinocchioSchiacciato);
      game.physics.arcade.collide(player, carrucola2, pinocchioSchiacciato);

      game.physics.arcade.overlap(player, pavimentoscala);

      game.physics.arcade.collide(player, letto, saltone);
      game.physics.arcade.collide(player, poltrona, saltone);
      game.physics.arcade.collide(player, palla, saltino);

      //ARLECCHINO
      game.physics.arcade.overlap(player, arlecchino, collect2);


      game.physics.arcade.collide(rella, casse2);
      game.physics.arcade.collide(rella, pavimento);
      game.physics.arcade.collide(pavimento, rella);
      game.physics.arcade.collide(rella, player);
      //game.physics.arcade.collide(pavimentoBotola, player);
      game.physics.arcade.collide(player, scenografia);
      game.physics.arcade.overlap(player, mappacollect, mappapresa);
      game.physics.arcade.collide(player, sipariotrasparente, nonPuoiEntrare);
      game.physics.arcade.collide(player, buco, respawn2);

      player.body.velocity.x = 0;
      player.body.gravity.y = 1400;
      casse2.setAll('body.velocity.x', 0);

      if (yesButton.isUp){
        joy = false;
      }

      function collect2(p, arlecchino) {
        ar[arlecchino.index] = false;
        arlecchino.exists = false;
        pezziCollezionati = pezziCollezionati + 1;

      }

      //console.log(pezziCollezionati);


      if (pezziCollezionati == 8) {
        pezzo_8.alpha = 1;
        timeInSeconds = 10000;
        timeText.alpha = 0;
        mappaButton = false;


        if (animationCounter == 1) {
          player.body.velocity = 0;
          player.y = 4657.6;



          //mangiafuoco2.animations.play('mano_mangiafuoco2');
          game.time.events.add(Phaser.Timer.SECOND * 1, buioarlecchino, this);
          game.time.events.add(Phaser.Timer.SECOND * 1, occhiodibue, this);
          game.time.events.add(Phaser.Timer.SECOND * 2, manoMangiafuoco1, this);
          game.time.events.add(Phaser.Timer.SECOND * 5, manoMangiafuoco2, this);
          game.time.events.add(Phaser.Timer.SECOND * 5, pinocchioKill, this);
          game.time.events.add(Phaser.Timer.SECOND * 9, fadefinale, this);


          //player.body.velocity = 0;
          console.log('mangiafuoco');
        }

      } else if (pezziCollezionati == 7) {
        pezzo_7.alpha = 1;
      } else if (pezziCollezionati == 6) {
        pezzo_6.alpha = 1;
      } else if (pezziCollezionati == 5) {
        pezzo_5.alpha = 1;
      } else if (pezziCollezionati == 4) {
        pezzo_4.alpha = 1;
      } else if (pezziCollezionati == 3) {
        pezzo_3.alpha = 1;
      } else if (pezziCollezionati == 2) {
        pezzo_2.alpha = 1;
      } else if (pezziCollezionati == 1) {
        pezzo_1.alpha = 1;



      }

      function buioarlecchino() {
        if (!lucepalco)
          buiofinale.alpha = 1;
        occhio.alpha = 0;
        lucepalco = true

      }


      function occhiodibue() {
        if (lucepalco) {
          buiofinale.alpha = 0;
          occhio.alpha = 1;

        }
      }

      function manoMangiafuoco1() {

        mangiafuoco.animations.play('mano_mangiafuoco');
        //game.time.events.add(Phaser.Timer.SECOND * 2.5, manoMangiafuocostop, this);
        animationCounter = 2;
      }

      function manoMangiafuoco2() {

        if (animationCounter == 2) {
          //mangiafuoco2.animations.play('mano_mangiafuoco2');
          mangiafuoco2.alpha = 1;

          mangiafuoco2.animations.play('mano_mangiafuoco2');

          animationCounter = 3;

        }

      }

      if (animationCounter == 3) {
        game.time.events.loop(Phaser.Timer.SECOND * 2.9, manostop, this);
      }

      function manostop() {
        mangiafuoco2.kill()
      }

      function pinocchioKill() {
        player.alpha = 0;
      }

      function fadefinale() {
        finale1 = true;
        fineGioco = false;
        livello1Preso = true;
        inizio = false;
        intermedio = false;
        storiamenu = false;
        autorimenu = false;


        game.camera.fade(0x000000, 350);
      }


      function pinocchioSchiacciato() {
        if ((carrucola_arancione.body.touching.down || carrucola2.body.touching.down) && player.body.touching.down) {
          respawn2();
          carrucola_arancione.y = 4900;
          carrucola2.y = 4900;
        }
      }

      if (mappacollect.y >= 5900) {
        mappacollect.body.velocity.y = -10;
      } else if (mappacollect.y < 5895) {
        mappacollect.body.velocity.y = 8;
      }

      function mappapresa() {
        mappat = true;
      }

      if (mappat) {
        mappacollect.kill();
        mappaviewport.alpha = 1;
        if (mappaButton.isDown) {
          mappaGrande.alpha = 1
        } else if (mappaButton.isUp) {
          mappaGrande.alpha = 0;
        }
      } else if (!mappat) {
        mappaGrande.alpha = 0
      }


      //NO GRAVITY SCALETTA
      function noG(p, o) {
        salita = true;
        noGravity = true;
        eccezioneScaletta = true;
      }
      //SALITA SCALETTA

      if (noGravity && !cursors.down.isDown && !cursors.up.isDown) {
        player.body.gravity.y = 0;
        player.frame = 73;

      } else {
        player.body.gravity.y = 1400;
      }

      if (noGravity && cursors.down.isDown) {
        player.animations.play('discesa');
        player.body.setSize(60, 120, 33, 18);
        player.body.velocity.y = 300;


      } else if (noGravity && cursors.up.isDown) {
        player.animations.play('salita');
        player.body.setSize(60, 120, 33, 18);
        player.body.velocity.y = -300;


      } else if (noGravity) {
        player.animations.stop('salita');
        player.body.setSize(66, 120, 30, 18);
        player.animations.stop('discesa');
        player.body.velocity.y = 0;
      }




      casse2.children.forEach(function(cassa) {
        cassa.checkCollisionUp = true;

        if (cassa.body.touching.up) {
          cassa.body.immovable = true;
        }
        if (cassa.body.touching.left && cassa.body.touching.right) {
          cassa.body.immovable = true;
        }

      })



      if (player.body.touching.down) {
        if (player.y - td > 450)
          respawn2();
        td = player.y
      }


      //SALTA

      if (jumpButton.isDown && (player.body.touching.down  || eccezioneScaletta)) {
        if (!joj) {
          player.body.velocity.y = -580;
          joj = true;
        }

      }
      if (jumpButton.isUp) {
        joj = false;
      }


      if (gattonaButton.isDown) {
        gattona = true;
        inPiedi = false;
      } else {
        gattona = false;
        inPiedi = true;
      }
      game.physics.arcade.overlap(player, overlapGattona, pinocchioGattona);
      game.physics.arcade.overlap(player, overlapNonsaltare, pinocchioNonsalta);

      // CAMMINATA
      if (cursors.right.isDown && inPiedi) {
        player.body.velocity.x = 350;
        if (!pushing && !salita) {
          player.animations.play('walk_r');
          player.body.setSize(96, 120, 12, 18);
          facing = 'right';
        }

      } else if (cursors.left.isDown && inPiedi) {
        player.body.velocity.x = -350;
        if (!pushing && !salita) {
          player.animations.play('walk_l');
          player.body.setSize(96, 120, 12, 18);
        }
        facing = 'left';


      } else {
        if (facing == 'right' && !salita && !gattona && inPiedi) {
          player.animations.play('rest_r');
          player.body.setSize(44, 120, 44, 18);
        }
        if (facing == 'left' && !salita && !gattona && inPiedi) {
          player.animations.play('rest_l');
          player.body.setSize(44, 120, 34, 18);
        }
      }


      if (gattona && player.body.touching.down) {
        nonsaltare = true;
        if (facing == 'right' && cursors.right.isUp) {
          player.frame = 80;
        } else if (gattona && player.body.touching.down) {
          if (facing == 'left' && cursors.left.isUp) {
            player.frame = 95;
          }
        }

        if (cursors.right.isDown) {

          player.body.velocity.x = 200;
          player.animations.play('gattona_r');
          player.body.setSize(96, 80, 12, 58);
          facing = 'right';
        }
        if (cursors.left.isDown) {

          player.body.velocity.x = -250;
          player.animations.play('gattona_l');
          player.body.setSize(96, 80, 12, 58);
          facing = 'left';
        }
      }

      function pinocchioGattona() {

        inPiedi = false;
        gattona = true;
        nonsaltare = true;
      }

      function pinocchioNonsalta() {
        nonsaltare = true;
      }

      if (nonsaltare) {

        if (jumpButton.isDown  && player.body.touching.down) {
          player.body.velocity.y = 0;
        }
      }


      function sposta() {
        if (spostaButton.isDown && cursors.right.isDown && player.body.touching.down && !pushing && !gattona) {
          player.animations.play('push_r');
          casse2.setAll('body.immovable', false);
          pushing = true;


        } else if (spostaButton.isDown && cursors.left.isDown && player.body.touching.down) {
          player.animations.play('push_l')
          casse2.setAll('body.immovable', false);
          pushing = true;

        } else {
          casse2.setAll('body.immovable', true);
        }

      }


      // ON OFF TEATRO

      function lighton(p, q) {
        if (colore == 1) {
          game.time.events.add(Phaser.Timer.SECOND * 0.5, colorecambiato, this);
        } else {
          game.time.events.add(Phaser.Timer.SECOND * 0.5, colorecambiato2, this);
        }
      }



      function colorecambiato() {
        luce = true;
      }

      if (luce) {
        colore = 2;
        buio.alpha = 0;
        onoff.frame = 0;
      }

      function colorecambiato2() {
        luce = false;
        onoff.frame = 1;

      }

      if (!luce) {
        colore = 1;
        buio.alpha = 1;

      }


      //SWITCH LEVE
      function switchleva1_delay() {
        game.time.events.add(Phaser.Timer.SECOND * 0.5, switchleva1, this);
        game.time.events.add(Phaser.Timer.SECOND * 1, apricoperchio_scala, this);
        //game.time.events.add(Phaser.Timer.SECOND * 1, inizioPensiero1l2, this);

      }

      function switchleva1() {
        if (!jos1) {
          game.camera.shake(0.008, 500, false);

        }
      jos1 = true;
      leva1presa = true;
    }


      if (leva1presa) {
        levabluup.alpha = 0;
        levabludown.alpha = 1;
}

      function apricoperchio_scala() {
        coperchio_scala_aperto = true;
        inizioPensieroleva1 = true;
      }

      if (coperchio_scala_aperto) {
        coperchio_scala.frame = 1;
        coperchio_scala_collide.kill();

      }
console.log(yesButtonCounter);


if(inizioPensieroleva1){

if(yesButton.isDown){
  if(!joy){
    yesButtonCounter = yesButtonCounter+1;
    joy = true;
  }
}

if(yesButtonCounter ==0){
  pensiero_leva1.alpha = 1;
  pulsantePausa.alpha = 0;
}

if(yesButton.isDown && yesButtonCounter ==1){
  levabluup.body.setSize(0, 0, 0, 0)

    pensiero_leva1.alpha = 0;
    pulsantePausa.alpha = 1;
    inizioPensieroleva1 = false;
    pensieroleva1 = false;
    //yesButtonCounter =0;

}
}


      function switchleva2_delay() {

        game.time.events.add(Phaser.Timer.SECOND * 0.5, switchleva2, this);


      }


      function switchleva2() {
        if (!jos2) {
          game.camera.shake(0.008, 500, false);
        }
        jos2 = true;
        console.log('leva arancione')
        carrucolaSiMuove = true;
      }

      if (carrucolaSiMuove) {

        levaarancioneup.alpha = 0;
        levaarancionedown.alpha = 1;

        if (carrucola_arancione.y > 5294) {
          carrucola_arancione.body.velocity.y = -300;

        } else if (carrucola_arancione.y < 3584) {
          carrucola_arancione.body.velocity.y = 300;
        }

      } else {
        carrucola_arancione.body.velocity.y = 0;
      }

    //  if (carrucola_arancione.body.touching.up) {
        //td = 1000;
    //  }

      if (carrucola2.y >= 5300) {
        carrucola2.body.velocity.y = -300;
      }

      if (carrucola2.y <= 3584) {
        carrucola2.body.velocity.y = 300;
      }

      /*if (carrucola2.body.touching.up) {
        td = 30000;
      }*/




      function switchleva3_delay() {
        game.time.events.add(Phaser.Timer.SECOND * 0.5, switchleva3, this);
        //game.time.events.add(Phaser.Timer.SECOND * 0.1, stopglow, this);

      }

      function switchleva3() {
        if (pezziCollezionati == 7) {
          console.log('leva rossa')
          aprisipario = true;
          arlecchinoglow = false;

          //jos = just one shake
          if (!jos3) {
            game.camera.shake(0.008, 500, false);

  jos3 = true;

          }

        }


       else if (pezziCollezionati < 7) {

        arlecchinoglow = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.5, stopglow, this);


        aprisipario = false;
        inizioPensieroleva3 = true;

        console.log('non abbastanza pezzi')
        //game.camera.shake(0.05, 1, false);
      }

    }

    function stopglow () {
    arlecchinoglow = false;
    }

    if(inizioPensieroleva3){
    if(yesButton.isDown){
      if(!joy){
        yesButtonCounter = yesButtonCounter+1;
        joy = true;
      }
    }

    if(yesButtonCounter ==0){
      pensiero_leva3.alpha = 1;
      pulsantePausa.alpha = 0;
    }

    if(yesButton.isDown && yesButtonCounter ==1){
      levabluup.body.setSize(0, 0, 0, 0)

        pensiero_leva3.alpha = 0;
        inizioPensieroleva3 = false;
        pulsantePausa.alpha = 1;
    }
    }


    function stopglow() {
      arlecchinoglow = false;
    }

    if (arlecchinoglow) {
      arlecchino_glow.alpha = 1;
      console.log('arlecchinoglow')
    } else if (!arlecchinoglow) {
      arlecchino_glow.alpha = 0;
    }


    if (aprisipario) {
      sipariotrasparente.kill();
      istruzioni_sipario1.kill();
      istruzioni_sipario2.kill();
      sipario.frame = 1
      levarossaup.alpha = 0;
      levarossadown.alpha = 1;
    }

    function apribotola() {
      game.time.events.add(Phaser.Timer.SECOND * .7, distruggibotola, this);

    }

    function distruggibotola() {
      //botola.animations.play('botola');
      botola.frame = 1;
      botolainvisibile.kill();
      pavimentoBotola1.kill();
    }


    function cp2(p, c) {
      cx2 = c.x
      cy2 = c.y - 100;
      fa[c.index] = true;
      faro_check.getAt(c.index).frame = 1;
    }


    letto.checkCollisionLeft = false;
    letto.checkCollisionRight = false;
    letto.checkCollisionUp = true;
    letto.checkCollisionDown = false;

    poltrona.checkCollisionLeft = false;
    poltrona.checkCollisionRight = false;
    poltrona.checkCollisionUp = true;
    poltrona.checkCollisionDown = false;

    palla.checkCollisionLeft = false;
    palla.checkCollisionRight = false;
    palla.checkCollisionUp = true;
    palla.checkCollisionDown = false;

    sipariotrasparente.checkCollisionLeft = true;
    sipariotrasparente.checkCollisionRight = true;
    sipariotrasparente.checkCollisionUp = true;
    sipariotrasparente.checkCollisionDown = false;

    function saltone(p, l) {
      console.log('salto');
      if (l.body.touching.up) {
        player.body.velocity.y = -850;
      }

    }

    function saltino(p, l) {
      console.log('salto');
      if (l.body.touching.up) {
        player.body.velocity.y = -550;

      }

    }

    function nonPuoiEntrare(p, s) {
      if (s.body.touching.up) {
        respawn2(),
          sipariotrasparente.body.setSize(1, 1, 100, 100);
      }
    }

    if (player.x > istruzioni_sipario2.left - 100 && player.x < istruzioni_sipario2.right + 100 && player.y < istruzioni_sipario2.y + 300) {
      istruzioni_sipario2.alpha = 1;
    } else {
      istruzioni_sipario2.alpha = 0;
    }

    if (player.x > istruzioni_sipario1.left - 100 && player.x < istruzioni_sipario1.right + 100 && player.y < istruzioni_sipario1.y + 300) {
      istruzioni_sipario1.alpha = 1;
    } else {
      istruzioni_sipario1.alpha = 0;
    }


    if (player.x > lightinstruction.left - 100 && player.x < lightinstruction.right + 100 && player.y < lightinstruction.y + 300) {
      lightinstruction.alpha = 1;
    } else {
      lightinstruction.alpha = 0;
    }

    if (player.x > istruzioni_gattona.left - 100 && player.x < istruzioni_gattona.right + 100 && player.y < istruzioni_gattona.y + 300 && player.y > istruzioni_gattona.y - 300) {
      istruzioni_gattona.alpha = 1;
    } else {
      istruzioni_gattona.alpha = 0;
    }

    if (player.x > istruzioni_mappa.left - 100 && player.x < istruzioni_mappa.right + 100 && player.y < istruzioni_mappa.y + 300 && player.y > istruzioni_mappa.y - 300 && mappat) {
      istruzioni_mappa.alpha = 1;
    } else {
      istruzioni_mappa.alpha = 0;
    }




    // RELLA

    if (rella1.x > 1000) {
      rella1.body.velocity.x = -200;
    }

    if (rella1.x <= 640) {
      rella1.body.velocity.x = 200;
    }

    if (rella2.x > 1300) {
      rella2.body.velocity.x = -200;
    }

    if (rella2.x <= 900) {
      rella2.body.velocity.x = 200;
    }


    // SCENOGRAFIA
    if (aereo.x <= 1080) {
      aereo.body.velocity.x = 150;
    }

    if (aereo.x > 1580) {
      aereo.body.velocity.x = -150;
    }

    if (aereodisegno.x <= 1395) {
      aereodisegno.body.velocity.x = 150;
    }

    if (aereodisegno.x > 1895) {
      aereodisegno.body.velocity.x = -150;
    }

    if (mongolfiera.y < 3166) {
      mongolfiera.body.velocity.y = 75;
    }

    if (mongolfiera.y >= 3416) {
      mongolfiera.body.velocity.y = -75;
    }

    if (mongolfieradisegno.y < 3176) {
      mongolfieradisegno.body.velocity.y = 75;
    }

    if (mongolfieradisegno.y >= 3426) {
      mongolfieradisegno.body.velocity.y = -75;
    }

    if (macchina.x < 1990) {
      macchina.body.velocity.x = 150;
    }

    if (macchina.x >= 2490) {
      macchina.body.velocity.x = -150;
    }

    if (macchinadisegno.x < 1940) {
      macchinadisegno.body.velocity.x = 150;
    }

    if (macchinadisegno.x >= 2440) {
      macchinadisegno.body.velocity.x = -150;
    }

    if (nave.y < 2955) {
      nave.body.velocity.y = 150;
    }

    if (nave.y >= 3455) {
      nave.body.velocity.y = -150;
    }

    if (navedisegno.y < 2965) {
      navedisegno.body.velocity.y = 150;
    }

    if (navedisegno.y >= 3465) {
      navedisegno.body.velocity.y = -150;
    }

    if (luna.y <= 2950) {
      luna.body.velocity.y = 150;
    }

    if (luna.y > 3450) {
      luna.body.velocity.y = -150;
    }

    if (lunadisegno.y <= 3000) {
      lunadisegno.body.velocity.y = 150;
    }

    if (lunadisegno.y > 3500) {
      lunadisegno.body.velocity.y = -150;
    }

    if (nuvola.x <= 3250) {
      nuvola.body.velocity.x = 150;
    }

    if (nuvola.x > 3750) {
      nuvola.body.velocity.x = -150;
    }

    if (nuvoladisegno.x <= 3210) {
      nuvoladisegno.body.velocity.x = 150;
    }

    if (nuvoladisegno.x > 3710) {
      nuvoladisegno.body.velocity.x = -150;
    }


    function respawn2() {
      respawnCounter = respawnCounter + 1;
      buco.x = 0;

      game.camera.fade(0x000000, 250);


      //game.camera.onFadeComplete.add( function() {resetCaduta()} );

      game.time.events.add(Phaser.Timer.SECOND * 1, fadeReset, this);
      //game.camera.onFadeComplete.add( function() {game.camera.resetFX()} );
      resetCaduta();
      //game.state.start('level2');
      //console.log(respawnCounter);



    }

    if (respawnCounter == 5) {
      fineGioco = true;
      game.time.events.add(Phaser.Timer.SECOND * 1, compareschermata2, this);
      game.time.events.add(Phaser.Timer.SECOND * 4, riprova2, this);

    }

    function compareschermata2() {
      schermata_game_over.alpha =1;
      game.add.tween(textGameOver2).to( {alpha: 1}, 400).start();
      game.add.tween(blurGameOver2).to( {alpha: 0.7}, 400).start();

    }


    function riprova2() {

      game.add.tween(riprovaText2).to( {alpha: 1}, 400).start();


      riprovaText2.inputEnabled = true;
      riprovaText2.input.useHandCursor = true;
      riprovaText2.events.onInputUp.add(ricomincia2);

      riprovaText2.events.onInputOver.add(riprovaGlowFilter2, this);
      riprovaText2.events.onInputOut.add(noriprovaGlowFilter2, this);
      riprovaText2.events.onInputUp.add(noriprovaGlowFilter2);

    }

    function riprovaGlowFilter2() {
    riprovaBlur2.alpha = 1;
    }

    function noriprovaGlowFilter2() {
      riprovaBlur2.alpha = 0;
    }

    function ricomincia2() {
      livello1Preso = true;
      fineGioco = false;
      resetVariabili2();
      game.camera.fade(0x000000, 250);

      //game.state.start('level2');
    }


    function resetCaduta() {
      td = 30000;
    }


    if (respawnCounter > 0) {
      //  console.log('time2 è vera')
      time2 = true;
    }


    function fadeReset() {
      game.camera.resetFX(500)

    }


    if (player.y > 6103) {
      //console.log('0');
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, .08);
      game.camera.deadzone = new Phaser.Rectangle(450, 520, 20, 20);
    } else if (player.y < 6103 && player.y > 5423 && player.x < 4620 && player.x > 0) {
      //console.log('1');
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, .08);
      game.camera.deadzone = new Phaser.Rectangle(450, 520, 20, 20);






    } else if (player.y < 5423 && player.y > 4737 && player.x < 4220 && player.x > 500) {
      //  console.log('2');
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, .08);
      //game.camera.deadzone = new Phaser.Rectangle(450, 110, 20, 800);
      game.camera.deadzone = new Phaser.Rectangle(450, 200, 20, 350);

    } else if (player.y < 4737 && player.y > 1000 && player.x < 4220 && player.x > 0) {
      //  console.log('3');
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, .08);
      game.camera.deadzone = new Phaser.Rectangle(450, 350, 20, 190);
    } else if (player.y < 5500 && player.x > 4220 && player.y > 0) {
      //  console.log('4');
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.9, .08);
      game.camera.deadzone = new Phaser.Rectangle(450, 410, 20, 100);
    }


  },




  render: function() {

    //game.debug.inputInfo(32, 32);
    //game.debug.pointer(game.input.activePointer);

    //game.debug.body(levabluup);
    //game.debug.body(player);
    //game.debug.body(bird1);
    /*game.debug.body(scale2);
    game.debug.body(scale3);
    game.debug.body(pianoforte);
    game.debug.body(cassa3);
    game.debug.body(scale4);
    //game.debug.body(pavimentoscala1);
    //game.debug.body(pavimentoscala2);
    //game.debug.body(pavimentoscala3);
    //game.debug.body(pavimentoscala4);
    game.debug.body(overlapGattona1);
    game.debug.body(overlapGattona2);
    game.debug.body(overlapGattona3);
    //game.debug.body(overlapGattona4);
    game.debug.body(overlapNonsaltare1);
    game.debug.body(overlapNonsaltare2);
    game.debug.body(overlapNonsaltare3);
    game.debug.body(pavimento2b);*/
    //game.debug.body(mensolapiano3);




  }




}
