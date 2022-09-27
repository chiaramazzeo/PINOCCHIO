var player
var platforms;
var cursors;
var jumpButton;
var pulsantePausa;
var tastiMenuPausa;
var fata;
var mendicante;
var unoButton;
var dueButton;
var terraTot;
var gattoeVolpe;
var coins;
var totCoin = 29;
var score;
var score2;
var muri;
var spostaButton;
var noButton;
var yesButton;
var bg1;
var bg2;
var bg3;
var davanzali;
var tegola_1;
var davanzaliTetto;
var tetti;
var birds;
var casse;
var casseI;
var pushing = false;
var checkpoints;
var lampioni_check;
var fumi;
var filo;
var camini;
var eccezioneRimbalzoFilo = false;
var noGravity= false;
var animazioni_scalata_non_richieste=false;
var noGravity2 = false;
var bancarelle;
var eccezioneScaletta = false;
var inizioInseguimento = false;
var slidaButton;
var istruzioni;
var scoreIcon;
var vignettatura_viewport;
var td= 30000; //touching down per caduta
var joj; //just one jump
var facing = 'right';
var salita =false;
var carrucola;
var parallax1;
var bosco2;
var bosco3;
var tronco;
var colline;
var scalini;
var merletti_municipio;
var cx = 50;//3500 12224 12072  16840 18094   20000 179
var cy= 3900; //3800 3900  1495

var sceltaMendicante = false;
var sceltaFatta = false;
var dialogoFatto = false;
var inizioDialogo = false;
var codaBotteghino = false;
var allaCassa = false;

var respawnCounter =0;
var coda;
var cespugli;
var pinocchioBloccato = false;
var profilo_teatro;
var pausaButton;
var riprovaText;
var riprovaBlur;
//var triggerIstruzioni;

//var glowFilter;
var yesButtonCounter = 0;
var joy;
var follaInCoda;
var tornaMenu;
var trigger_pensiero1;
var pensieroFatto1 = false;
var inizioPensiero1 = false;
var pensiero1;
var trigger_pensiero2;
var inizioPensiero2 = false;
var pensiero2;
var pensieroFatto2 = false;
var inizioPensiero3 = false;
var pensieroFatto3= false;
var pensiero3;
var trigger_pensiero3;



//VARIABILI PER RACCOLTA COINS

var c=[];
for(var i =0; i<30; i++) {
  c[i]=true;
  //console.log(c);
}

var values =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var sc = false;


var fontana;

//STATO DEI LAMPIONI
 var ch=[false,false,false];


var filtro;


function resetVariabili1(){

  console.log('monete');
  respawnCounter = 0;
  ch=[false,false,false];
  inizioInseguimento =false;
  cx = 50;
  cy = 3900;
  checkpoint1.kill();
  checkpoint2.kill();
  checkpoint3.kill();
  sceltaMendicante = false;
  sceltaFatta = false;
  inizioDialogo = false;
  dialogoFatto = false;
  inizioPensiero1 = false;
  pensieroFatto1 = false;
  inizioPensiero2 = false;
  pensieroFatto2 = false;
  inizioPensiero3 = false;
  pensieroFatto3 = false;
  codaBotteghino = false;
  allaCassa = false;
  totCoin = 29;
  td = 30000;
  sc = false;


  var c=[];
  for(var i =0; i<30; i++) {
    c[i]=true;
  }
  for(var i =0; i<coins.length; i++)
  { c[i]=true;
    var temp = coins.getChildAt(i);
    temp.exists = c[i];
    temp.value = values[i];
    temp.index = i;

  }


}

function tornaMenu(){
  game.paused = false;
  resetVariabili1();
  inizio = true;
  livello1Preso = false;
  game.camera.fade(0x000000, 250);
}



var level1 = {

create: function (){

  game.world.setBounds (0, 0, 31245, 4207);

  game.physics.arcade.OVERLAP_BIAS = 40;


  parallax1 = game.add.sprite(0,0, 'parallax1');

  game.physics.arcade.enable(parallax1);
  parallax1.body.immovable= false;


  colline = game.add.sprite(0, 4207, 'colline_sfondo');
  game.physics.arcade.enable(colline);
  colline.body.immovable= false;
  colline.anchor.y = 1;


  bosco3 = game.add.sprite(20475,4207, 'bosco_livello3');
  game.physics.arcade.enable(bosco3);
  bosco3.body.immovable= false;
  bosco3.anchor.y = 1;


  bosco2 = game.add.sprite(20475,4207, 'bosco_livello2');
  game.physics.arcade.enable(bosco2);
  bosco2.body.immovable= false;
  bosco2.anchor.y = 1;


  bg1 = game.add.image(0,2264, 'background1');
  bg2 = game.add.image(9005,0, 'background2');
  bg3 = game.add.image(19255,0, 'background3');



    checkpoints = game.add.physicsGroup();
     checkpoint1=checkpoints.create(4554,4057, 'checkpoint');
     checkpoint2=checkpoints.create(12168,1640, 'checkpoint_campanile');
     checkpoint3=checkpoints.create(19668,4057, 'checkpoint');

     for(var a =0; a<checkpoints.length; a++)
     {  var temp = checkpoints.getAt(a);
        temp.index = a;
     }

     checkpoints.setAll('checkCollision', false);
     checkpoints.enableBody=false;
     checkpoints.setAll('anchor.y', 1);
     checkpoints.setAll('alpha', 0);


     //SCALA


     scale = game.add.physicsGroup();

     scala1 = scale.create(8183,3255, 'scala');
     scala2 = scale.create(12124,1643, 'scala');
     scala3 = scale.create(13622,3780, 'scala');
     scala4 = scale.create(14262,3408, 'scala');
     scala5 = scale.create(14967,3780, 'scala');
     scala6 = scale.create(16262,3685, 'scala');


     scala1.enableBody = true;
     scala2.enableBody = true;
     scala3.enableBody = true;
     scala4.enableBody = true;
     scale.setAll('body.immovable', true);
     scala1.body.setSize(83,220,0,30);
     scala2.body.setSize(83,185,0,37);
     scala3.body.setSize(83,143,0,37);
     scala4.body.setSize(83,165,0,37);
     scala5.body.setSize(83,143,0,37);
     scala6.body.setSize(83,235,0,37);


    //TEGOLE

    tegole = game.add.physicsGroup();
    tegola1 = tegole.create(5270,3500, 'vasetto');
    tegola1.body.setSize(52,18,0,0);
    tegola2 = tegole.create(5700,3420, 'vasetto');
    tegola2.body.setSize(52,18,0,0);
    tegola3 = tegole.create(6747,3543, 'vasetto');
    tegola3.body.setSize(52,18,0,0);
    tegola4 = tegole.create(11745,3310, 'mattone_chiesa');
    tegola4.body.setSize(48,20,5,5);
    tegola5 = tegole.create(15578,2769, 'muro_municipio'); //pezzo che crolla dal munìcipio
    tegole.enableBody = true;
    tegole.setAll('body.immovable', false);
    tegole.setAll('alpha', 0);
    tegola5.alpha = 1;


    //TERRA

    terraTot = game.add.physicsGroup();
    terra1 = terraTot.create(0,4057,'terra1'); //2638
    terra2 = terraTot.create(2788,4057,'terra2'); //4000
    terra3 = terraTot.create(6738,4057,'terra2'); //4000
    terra4 = terraTot.create(10737,4057,'terra2'); //4000
    terra5 = terraTot.create(14736,4057,'terra2'); //4000
    terra6 = terraTot.create(18734,4057,'terra2'); //4000
    terra7 = terraTot.create(22734,4057,'terra3'); //1422
    terra8 = terraTot.create(24306,4057,'terra2'); //4000
    terra9 = terraTot.create(28306,4057,'terra4'); //3771

    terraTot.enableBody = true;
    terraTot.setAll('body.immovable', true);
    terraTot.setAll('alpha', 0);



    //DAVANZALI

    davanzali = game.add.physicsGroup();
    davanzale_a = davanzali.create(4815, 3836, 'davanzale_1');
    davanzale_b = davanzali.create(5235, 3836, 'davanzale_1');
    davanzale_parapetto = davanzali.create(6025,3655,'grondaia1_o');
    davanzale_c = davanzali.create(5650, 3760, 'davanzale_1');
    davanzale_d = davanzali.create(6683, 3836, 'davanzale_1');
    davanzale_e = davanzali.create(6940, 3836, 'davanzale_1');
    davanzale_f = davanzali.create(9568, 3791, 'davanzale_1');
    davanzale_g = davanzali.create(9958, 3791, 'davanzale_1');
    davanzale_sottoscala = davanzali.create(8132, 3639, 'davanzale_sottoscala');
    davanzale_h = davanzali.create(10336, 3791, 'davanzale_1');
    davanzale_i = davanzali.create(10714, 3791, 'davanzale_1');
    davanzale_j = davanzali.create(13708, 3766, 'davanzale_170');
    davanzale_k = davanzali.create(14023, 3686, 'davanzale_1');
    davanzale_l = davanzali.create(14262, 3616, 'davanzale_170');
    davanzale_m = davanzali.create(14535, 3686, 'davanzale_1');
    davanzale_n = davanzali.create(14806, 3197, 'davanzale_chiesa_1');
    davanzale_o = davanzali.create(16057, 3197, 'davanzale_chiesa_1');
    davanzale_p = davanzali.create(17563, 3538, 'tetto_685');
    davanzale_q = davanzali.create(18951, 3626, 'davanzale_170');

    davanzali.enableBody = true;
    davanzali.setAll('body.immovable', true);
    davanzali.setAll('alpha', 0);


     //DAVANZALI CHIESA
    davanzali_chiesa = game.add.physicsGroup();
    davanzale1 = davanzali_chiesa.create(10944, 3671, 'davanzale_chiesa_1');
    davanzale2 = davanzali_chiesa.create(11157, 3600, 'davanzale_chiesa_2');
    davanzale3 = davanzali_chiesa.create(11373, 3600, 'davanzale_chiesa_2');
    davanzale4 = davanzali_chiesa.create(11706, 3600, 'davanzale_chiesa_2');
    davanzale5 = davanzali_chiesa.create(11933, 3600, 'davanzale_chiesa_2');
    davanzale6 = davanzali_chiesa.create(12143, 3640, 'davanzale_chiesa_1');
    davanzale7 = davanzali_chiesa.create(12285, 3567, 'davanzale_chiesa_1');
    davanzale8 = davanzali_chiesa.create(12235, 3434, 'davanzale_chiesa_2_40');
    davanzale9 = davanzali_chiesa.create(12057, 3319, 'davanzale_chiesa_2');
    davanzale10 = davanzali_chiesa.create(12234, 3204, 'davanzale_chiesa_2_40');
    davanzale11 = davanzali_chiesa.create(12000, 3089, 'davanzale_chiesa_1');
    davanzale12 = davanzali_chiesa.create(11888, 2974, 'davanzale_chiesa_2_40');
    davanzale13 = davanzali_chiesa.create(12080, 2859, 'davanzale_chiesa_2'); // AGGIUNGERE COIN
    davanzale14 = davanzali_chiesa.create(12234, 2744, 'davanzale_chiesa_2_40');
    davanzale15 = davanzali_chiesa.create(11888, 2540, 'davanzale_chiesa_2_40');
    davanzale16 = davanzali_chiesa.create(12054, 2425, 'davanzale_chiesa_1');
    davanzale17 = davanzali_chiesa.create(12234, 2310, 'davanzale_chiesa_2_40');
    davanzale18 = davanzali_chiesa.create(12056, 2195, 'davanzale_chiesa_2');
    davanzale19 = davanzali_chiesa.create(11888, 2080, 'davanzale_chiesa_2_40');

    davanzali_chiesa.enableBody = true;
    davanzali_chiesa.setAll('body.immovable', true);
    davanzali_chiesa.setAll('alpha', 0);



    //GRADINI
    scalini = game.add.physicsGroup();
    scalino_chiesa1 = scalini.create(11575, 4057, 'scalini_chiesa1');
    scalino_chiesa2 = scalini.create(11575, 4027, 'scalini_chiesa2');
    scalino_chiesa2 = scalini.create(11575, 3997, 'scalini_chiesa3');
    gradino1 = scalini.create(17916, 3941, 'gradino_58');
    gradino2 = scalini.create(17971, 3891, 'gradino_58');
    gradino3 = scalini.create(18026, 3841, 'gradino_58');
    gradino4 = scalini.create(18081, 3791, 'gradino_58');
    gradino5 = scalini.create(18136, 3741, 'gradino_58');

    scalini.setAll('enableBody', true);
    scalini.setAll('body.immovable', true);
    scalini.setAll('anchor.y', 1);
    scalini.setAll('anchor.x', .5);
    scalini.setAll('alpha', 0);


    //PIATTAFORME ATTRAVERSABILI

    tetti = game.add.physicsGroup();
    tetto1 = tetti.create(5708, 3408, 'tettoplatform_1');
    tetto2 = tetti.create(6749, 3400, 'tettoplatform_2');
    tetto3a = tetti.create(7740, 3257, 'tettoplatform_3a');
    tetto3b = tetti.create(8263, 3257, 'tettoplatform_3b');
    tetto4 = tetti.create(11928, 1965, 'piattaforma_campanile_scala');
    tetto5a = tetti.create(11914, 1643, 'cima_campanile_1');
    tetto5b = tetti.create(12207, 1643, 'cima_campanile_2');
    tetto6 = tetti.create(13373, 3302, 'tetto_575');
    tetto_atterraggio = tetti.create(14257, 3097, 'tetto_atterraggio');
    davanzale_particolare = tetti.create(14307,3380,'davanzale_chiesa_1');
    tetto_lungo_atterraggio_a = tetti.create(13956, 3270, 'tetto_lungo_atterraggio');
    tetto_lungo_atterraggio_b = tetti.create(14433, 3270, 'tetto_lungo_atterraggio');
    tetto_municipio = tetti.create(14867, 3080, 'tetto_municipio');
    davanzale_municipio_a = tetti.create(14974, 3775, 'davanzale_100');
    davanzale_municipio_b = tetti.create(15195, 3775, 'davanzale_100');
    davanzale_municipio_c = tetti.create(15631, 3775, 'davanzale_100');
    davanzale_municipio_d = tetti.create(15837, 3775, 'davanzale_100');
    tetto7 = tetti.create(16057, 3392, 'tetto_460');
    davanzale_p = tetti.create(16160, 3680, 'tetto_185');
    tetto8 = tetti.create(16520, 3598, 'tetto_185');
    tetto9 = tetti.create(16934, 3598, 'tetto_185');
    piano_rialzato = tetti.create(18164, 3685, 'tetto_710');
    tetto10 = tetti.create(18300, 3394, 'tetto_185');

    tetti.enableBody = true;
    tetti.setAll('body.immovable', true);
    tetti.setAll('body.checkCollision.down', false);
    tetti.setAll('alpha', 0);
    tetto_municipio.alpha = 0;


    //SASSOLINI
    sassolini = game.add.physicsGroup();
    sassolino1 = sassolini.create(4200,4044,'sassolino');
    sassolino2 = sassolini.create(6530,4044,'sassolino');
    sassolino3 = sassolini.create(9373,4044,'sassolino');
    sassolino4 = sassolini.create(11000,4044,'sassolino');
    sassolino5 = sassolini.create(18300,3673,'sassolino');
    sassolino6 = sassolini.create(18782,3673,'sassolino');

    sassolini.enableBody = true;
    sassolini.setAll('body.immovable', true);


    //FONTANA
     fontana = game.add.physicsGroup();
     f1=fontana.create(12830,4011,'fontana_1');
     f2=fontana.create(12830,3951,'fontana_2');
     f3=fontana.create(12830,3847,'fontana_3');
     f4=fontana.create(12830,3725,'fontana_4');

     fontana.setAll('anchor.x',.5);
     fontana.enableBody=true;
     fontana.setAll('body.immovable', true);
     f3.body.setSize(222, 80, 0 ,0);
     f4.body.checkCollision.down=false;
     fontana.setAll('alpha', 0);


    //DAVANZALI TETTO

    davanzaliTetto = game.add.physicsGroup();
    davanzaleTetto1 = davanzaliTetto.create(5800,3530,'davanzaliTetto');

    davanzaliTetto.enableBody = true;
    davanzaliTetto.setAll('body.immovable', true);
    davanzaliTetto.setAll('alpha', 0);


    //CAMINI
    camini = game.add.physicsGroup();
    camino1 = camini.create(6905,3400,'camino');
    camino2 = camini.create(8060,3257,'camino');
    camino3 = camini.create(16275,3392,'camino');
    camini.setAll('anchor.x', (.5));
    camini.setAll('anchor.y', (1));
    camini.enableBody = true;
    camini.setAll('body.immovable', true);
    camini.setAll('alpha',0);




filo = game.add.sprite(6880,3590,'filo')
game.physics.arcade.enable(filo);
filo.body.setSize(345,1,290,20);
filo.body.immovable = true;
filo.checkCollisionDown = false;
filo.checkCollisionLeft = false;
filo.checkCollisionRight = false;
filo.alpha =0;


//BANCARELLE

bancarella = game.add.sprite(8495,3587,'bancarellona');

bancarelle = game.add.physicsGroup();
bancarella1t= bancarelle.create(8535, 3615,'bancarella1');
bancarella1b= bancarelle.create(8535, 3970,'bancarella1b');
sgabbiotto1 = bancarelle.create(9005, 3857,'sgabbiotto1');

bancarelle.alpha=0;
bancarelle.enableBody = true;
bancarelle.setAll('body.immovable', true);



//CARRUCOLA
carrucola = game.add.sprite(12203, 1544, 'carrucola');
game.physics.arcade.enable(carrucola);
carrucola.body.collideWorldBounds = true;
carrucola.body.immovable = true;
carrucola.alpha=0;


//RAMI BOSCO


rami= game.add.physicsGroup();

rami.create(20685,3920,'ramo_dx');//1
rami.create(20970,3818,'ramo_sx');//2
rami.create(21142,3732,'ramo_dx');//3
rami.create(21141,3600,'ramo_dx');//4
rami.create(20970,3505,'ramo_sx');    //5
rami.create(21249,3385,'ramo_sx');//6
rami.create(21426,3438,'ramo_dx');//7
rami.create(21595,3562,'ramo_sx');//8
rami.create(21939,3574,'ramo_dx');//9
rami.create(22185,3456,'ramo_sx');    //10
rami.create(22362,3340,'ramo_dx');//11
rami.create(22608,3430,'ramo_sx');//12
rami.create(22783,3334,'ramo_dx');//13
rami.create(22889,3577,'ramo_sx');//14
rami.create(23314,3533,'ramo_sx');    //15
rami.create(23489,3430,'ramo_dx');//16
rami.create(23780,3333,'ramo_sx');//17
rami.create(23489,3213,'ramo_dx');//18
rami.create(23780,3093,'ramo_sx');//19
rami.create(24054,3159,'ramo_sx');    //20
rami.create(24230,3256,'ramo_dx');//21
rami.create(24400,3381,'ramo_sx');//22
rami.create(24574,3569,'ramo_dx');//23
rami.create(24741,3771,'ramo_dx');//24
rami.create(24995,3674,'ramo_sx');    //25
rami.create(25170,3569,'ramo_dx');//26
rami.create(25208,3444,'ramo_sx');//27
rami.create(25170,3334,'ramo_dx');//28
rami.create(25208,3226,'ramo_sx');//29
rami.create(25630,3305,'ramo_sx');    //30
rami.create(25805,3484,'ramo_dx');//31
rami.create(26100,3666,'ramo_sx');//32
rami.create(26367,3562,'ramo_sx');//33
rami.create(26542,3450,'ramo_dx');//34
rami.create(26367,3335,'ramo_sx');    //35
rami.create(26715,3220,'ramo_sx');//36
rami.create(27056,3327,'ramo_dx');//37
rami.create(27168,3465,'ramo_sx');//38
rami.create(27339,3750,'ramo_dx');//39
rami.create(27610,3635,'ramo_sx');    //40
rami.create(27782,3520,'ramo_dx');//41
rami.create(28066,3724,'ramo_dx');//42

rami.enableBody = true;
rami.setAll('body.immovable', true);
rami.setAll('body.checkCollision.down', false);
rami.setAll('body.checkCollision.left', false);
rami.setAll('body.checkCollision.right', false);


tronco = game.add.sprite(28000, 4300,'tronco');
tronco.anchor.y =1;
game.physics.arcade.enable(tronco);
tronco.body.setSize(0,0,0,0);
tronco.alpha =0;
tronco.checkCollisionLeft=false;
tronco.checkCollisionUp=false;
tronco.body.immovable = true;


filtro = game.add.image(0,0,'filtro');
filtro.fixedToCamera=true;


if (respawnCounter ==0){
istruzioni= game.add.physicsGroup();

usaFreccette = istruzioni.create(300,3916,'usa_freccette');
usaFreccette.scale.setTo(1.2);

salta = istruzioni.create(2815,3750,'salta');
salta.scale.setTo(1.2);


istruzioneSpinta = istruzioni.create(4170,4085,'premi_s');
istruzioneSpinta.scale.setTo(1.2);


istruzioni.setAll('alpha',0);
}

istruzioneScale = game.add.sprite(8268,3045,'usa_scaletta');
istruzioneScale.scale.setTo(1.2);
istruzioneScale.alpha = 0;

premi_d = game.add.sprite(12259,1494,'premi_d');
premi_d.scale.setTo(1.2);



    //FUMI
     fumi = game.add.physicsGroup();
     fumo1 = fumi.create(6905, 3341, 'fumata');
     fumo2 = fumi.create(8059, 3197, 'fumata');
     fumo3 = fumi.create(16275, 3332, 'fumata');



     fumi.enableBody = true;
     fumi.setAll('anchor.x', (.5));
     fumi.setAll('anchor.y', (1));
     fumi.setAll('scale.x', 1.3);
     fumi.setAll('scale.y', 1.3);

   fumi.callAll('play', null, 'geyser');

   fumi.children.forEach(function(fumo) {
   fumo.body.setSize(22, 145, 27, 0);
   fumo.frame = 13;
   fumo.animations.add('geyser', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 12);
   game.time.events.loop(1000 + 1900 * Math.random(), function() {
     fumo.animations.play('geyser');
   });
 })


       //COINS

       coins = game.add.physicsGroup();

         coins.create(2900, 3870, 'coin'); //1

         coins.create(5315, 3750, 'coin');

         coins.create(5667, 3920, 'coin');

         coins.create(6144, 3300, 'coin');

         coins.create(6985, 3780, 'coin');

         coins.create(7305, 3570, 'coin');

         coins.create(8762, 3480, 'coin');

         coins.create(10015, 3700, 'coin');

         coins.create(11955, 3480, 'coin');

         coins.create(12092, 2789, 'coin');

         coins.create(12485, 3867, 'coin');

         coins.create(12825, 3631, 'coin'); //11

         coins.create(13590, 3230, 'coin');

         coins.create(14395, 3000, 'coin');

         coins.create(14605, 3600, 'coin');

         coins.create(15615, 2970, 'coin');

         coins.create(15670, 3700, 'coin');

         coins.create(17010, 3315, 'coin'); //16

         coins.create(18375, 3290, 'coin');

         coins.create(21980, 3486, 'coin');

         coins.create(22820, 3250, 'coin');

         coins.create(24270, 3190, 'coin');

         coins.create(24785, 3710, 'coin');

         coins.create(27380, 3700, 'coin');

         coins.create(29000, 4000, 'coin'); //22 DA TOGLIERE DOPO


     for(var i =0; i<coins.length; i++)
     {
       if (respawnCounter ==0){
         c[i]=true;
       }
       var temp = coins.getChildAt(i);
       temp.exists = c[i];
       temp.value = values[i];
       temp.index = i;
     }

       coins.enableBody = true;
       coins.setAll('body.immovable', true);
       coins.callAll('animations.add', 'animations', 'coinflip', [0,1,2,3,4,5], 12, true);
       coins.callAll('play', null, 'coinflip');


       if (!sc) {
         sacco_coin = game.add.sprite(11990, 1530, 'sacco_coin');

         sacco_coin.animations.add('saccoscilla',[0,1,2,3,4,5,4,3,2,1], 10, true);
         sacco_coin.animations.play('saccoscilla');
       }


       game.physics.arcade.enable(sacco_coin);
       sacco_coin.enableBody = true;
       sacco_coin.body.setSize(40,50,28,39);
       sacco_coin.body.immovable = true;


//LAMPIONI CHECKPOINTS

lampioni_check = game.add.physicsGroup();
lampione1 = lampioni_check.create(4474,4057,'lampione_check');
lampione2 = lampioni_check.create(12215,1749,'lampione_campanile');
lampione3 = lampioni_check.create(19745,4057,'lampione_check');


for(var a=0; a<checkpoints.length; a++){
  if(ch[a]){
    lampioni_check.getAt(a).frame=0;
  }else{
    lampioni_check.getAt(a).frame=1;
  }

}

lampioni_check.setAll('anchor.y',1);

//CASSE
casse = game.add.physicsGroup();
cassa1 = casse.create(4300,3957,'cassa');
cassa2 = casse.create(9495,3957,'cassa');
cassa3 = casse.create(18400,3616,'cassa');

casse.enableBody = true;
casse.setAll('body.immovable', true);
cassa3.scale.setTo(.7);


//GATTO e VOLPE
gattoeVolpe=game.add.sprite(2000,3852, 'gattoevolpe');
game.physics.arcade.enable(gattoeVolpe);
gattoeVolpe.body.immovable= true;
gattoeVolpe.animations.add('scodinzolo', [0,1,,2,3,4,5,6,7], 8, true);
gattoeVolpe.animations.play('scodinzolo');


if (!dialogoFatto){

trigger_gattoeVolpe = game.add.sprite(1920,3657,'trigger_mendicante');
game.physics.arcade.enable(trigger_gattoeVolpe);
trigger_gattoeVolpe.alpha =0;

}

//PENSIERI

if(!pensieroFatto1){
  trigger_pensiero1 = game.add.sprite(7030,3400,'trigger_mendicante');
  trigger_pensiero1.anchor.y =1;
  game.physics.arcade.enable(trigger_pensiero1);
  trigger_pensiero1.alpha = 0;
}

if(!pensieroFatto2){
  trigger_pensiero2 = game.add.sprite(19830,4057,'trigger_mendicante');
  trigger_pensiero2.anchor.y =1;
  game.physics.arcade.enable(trigger_pensiero2);
  trigger_pensiero2.alpha =0;
}


if(!pensieroFatto3){
  trigger_pensiero3 = game.add.sprite(29750,4057,'trigger_mendicante');
  trigger_pensiero3.anchor.y =1;
  game.physics.arcade.enable(trigger_pensiero3);
  trigger_pensiero3.alpha =0;
}

if(!allaCassa){

trigger_Botteghino = game.add.sprite(30370,4057,'trigger_mendicante');
game.physics.arcade.enable(trigger_Botteghino);
trigger_Botteghino.alpha = 0;
trigger_Botteghino.anchor.y =1;
}


//MENDICANTE

if (!sceltaFatta){
mendicante = game.add.sprite(17610,4045, 'mendicante')
mendicante.scale.setTo(1.2);
mendicante.anchor.y = 1;
game.physics.arcade.enable(mendicante);
trigger_mendicante = game.add.sprite(17525,3657,'trigger_mendicante');
game.physics.arcade.enable(trigger_mendicante);
trigger_mendicante.alpha = 0;
}



//PLAYER

player = game.add.sprite(cx,cy, 'player');  // posizione di start player   5759, 3500    50, 3900   6144, 3288,  6835, 3041   7938, 3100    11936, 3490   3000, 3900  12082, 1443
player.scale.setTo(0.8);


player.animations.add('rest_r', [38,39,40,41,42,43], 12, true);
player.animations.add('rest_l', [32,33,34,35,36,37], 12, true);
player.animations.add('walk_r', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 18, true);
player.animations.add('walk_l', [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 18, true);
player.animations.add('push_r', [51,52,53,54,55,56,57,58,59,60,61], 10, true);
player.animations.add('push_l', [62,63,64,65,66,67,68,69,70,71,72], 10, true);
player.animations.add('jump', [44,45,46,47,48,49,50], 10, true);
player.animations.add('salita', [75,74,73,74,75,76,77,76], 12, true);
player.animations.add('discesa', [76,77,76,75,74,73,74,75], 12, true);


game.physics.arcade.enable(player);
player.body.collideWorldBounds = true;


bancarella_davanti = game.add.sprite(8495,3587,'bancarellona_davanti');


//CESPUGLI
cespugli = game.add.physicsGroup();

cespuglio2 = cespugli.create(21302,3865,'cespuglio4') //457,242
cespuglio2.body.setSize(324,152,56,90);

cespuglio1 = cespugli.create(21015,3895,'cespuglio1');
cespuglio1.body.setSize(276,132,70,60);

cespuglio3 = cespugli.create(22075,3857,'cespuglio3'); //525,250
cespuglio3.body.setSize(355,170,80,60);

cespuglio4 = cespugli.create(23130,3904,'cespuglio2'); //387,203
cespuglio4.body.setSize(232,113,65,50);


cespuglio5 = cespugli.create(24438,3857,'cespuglio3'); //525,250
cespuglio5.body.setSize(355,170,80,60);

cespuglio6 = cespugli.create(24900,3895,'cespuglio1');
cespuglio6.body.setSize(276,132,70,60);

cespuglio8 = cespugli.create(26340,3865,'cespuglio4'); //457,242
cespuglio8.body.setSize(324,152,56,90);


cespuglio7 = cespugli.create(25982,3857,'cespuglio3'); //525,250
cespuglio7.body.setSize(355,170,80,60);


cespuglio9 = cespugli.create(27550,3857,'cespuglio3'); //525,250
cespuglio9.body.setSize(355,170,80,60);

cespuglio10 = cespugli.create(22620,3857,'cespuglio3'); //525,250
cespuglio10.body.setSize(355,170,80,60);

cespuglio11 = cespugli.create(22530,3857,'cespuglio3'); //525,250
cespuglio11.body.setSize(455,170,80,-10);

cespuglio12 = cespugli.create(23960,3857,'cespuglio3'); //525,250
cespuglio12.body.setSize(355,170,80,60);

cespuglio13 = cespugli.create(25480,3807,'cespuglio3'); //525,250
cespuglio13.body.setSize(355,170,80,60);

cespuglio14 = cespugli.create(23500,3857,'cespuglio3'); //525,250
cespuglio14.body.setSize(455,170,80,60);

cespuglio15 = cespugli.create(26940,3857,'cespuglio3'); //525,250
cespuglio15.body.setSize(355,170,80,60);

cespuglio16 = cespugli.create(21750,3857,'cespuglio3'); //525,250
cespuglio16.body.setSize(355,170,80,60);

cespuglio17 = cespugli.create(22430,3757,'cespuglio3'); //525,250
cespuglio17.body.setSize(355,170,80,60);


cespugli.enableBody = true;
cespugli.setAll('body.immovable', true);



merletti_municipio = game.add.sprite(14867,3040, 'merletti_municipio');


//BIRDS

birds = game.add.physicsGroup();
bird1 = birds.create(5829,3250,'bird');
bird1.body.velocity.x = 200;

bird2 = birds.create(8234,3250,'bird');
bird2.body.velocity.x = 200;

bird3 = birds.create(11739,2584,'bird');
bird3.body.velocity.x = 200;

bird4 = birds.create(12585,1800,'bird');
bird4.body.velocity.x = 200;
bird4.scale.x *= -1;

bird5 = birds.create(16430,3452,'bird');
bird5.body.velocity.x = 200;
bird5.scale.x *= -1;




birds.enableBody = true;
birds.setAll('body.immovable', true);
birds.setAll('anchor.x', (.5, .5));


birds.callAll('animations.add', 'animations', 'fly', [9,8,7,6,5,4,3,2,1,0], 16, true);
birds.callAll('play', null, 'fly');
bird1.body.setSize(70,30,15,72);
bird2.body.setSize(70,30,15,72);
bird3.body.setSize(70,30,15,72);
bird4.body.setSize(70,30,15,72);
bird5.body.setSize(70,30,15,72);     //90,30,5,72



coda= game.add.sprite(29600,3757,'coda_botteghino');
game.physics.arcade.enable(coda);
coda.alpha=0;
coda.body.setSize(150,150,150,150);

follaInCoda = game.add.sprite(29600,3853,'folla_in coda');
follaInCoda.scale.setTo(1.2);



//FATA
fata = game.add.sprite(20000, 3500, 'fata');
fata.scale.setTo(1.2);
game.physics.arcade.enable(fata);


fata.animations.add('sbattito', [0,1,2,3,2,1,0], 12, true);
fata.animations.play('sbattito');
 fata.body.setSize(28,28,48,48);



  profilo_teatro = game.add.sprite(29830,4207, 'profilo_teatro');
  game.physics.arcade.enable(profilo_teatro);
  profilo_teatro.body.immovable= false;
  profilo_teatro.anchor.y=1;




//HUD
vignettatura_viewport = game.add.sprite(0,0,'vignettatura');
vignettatura_viewport.fixedToCamera = true;

score = game.add.text(100, 44, '...', style1); //100, 44,
score.fixedToCamera = true;
score.alpha =1;

score2 = game.add.text(100, 44, '...', style1); //100, 44,
score2.fixedToCamera = true;
score2.alpha =0;

scoreIcon = game.add.sprite(55,48,'coin') //55
scoreIcon.fixedToCamera = true;
scoreIcon.animations.add('coinflip',[0,1,2,3,4,5], 12, true )
scoreIcon.animations.play('coinflip');

lives = game.add.physicsGroup();
outline= lives.create(974,50,'life_outline');

if (respawnCounter ==0){
life5 = lives.create(974,50,'life5');
}
if (respawnCounter ==1){
life4 = lives.create(974,50,'life4');
}
if (respawnCounter ==2){
  life3 = lives.create(974,50,'life3');
}
if (respawnCounter == 3){
  life2 = lives.create(974,50,'life2');
}
if (respawnCounter ==4){
  life1 = lives.create(974,50,'life1');
}



lives.setAll('anchor.x',1);
lives.setAll('fixedToCamera', true);

if(!dialogoFatto){
dialogoGattoVolpe = game.add.physicsGroup();
dialogo0 = dialogoGattoVolpe.create(0,0,'dialogo_gattovolpe_0');
dialogo1 = dialogoGattoVolpe.create(0,0,'dialogo_gattovolpe_1');
dialogo2 = dialogoGattoVolpe.create(0,0,'dialogo_gattovolpe_2');
dialogoGattoVolpe.setAll('alpha', 0);
dialogoGattoVolpe.setAll('fixedToCamera', true);
}


if(!pensieroFatto1){
  pensiero1 = game.add.sprite(0,0,'pensiero1');
  pensiero1.alpha =0;
  pensiero1.fixedToCamera = true;
}

if(!pensieroFatto2){
  pensiero2 = game.add.sprite(0,0,'pensiero2');
  pensiero2.alpha =0;
  pensiero2.fixedToCamera = true;
}

pensiero3 = game.add.sprite(0,0,'pensiero3');
pensiero3.alpha =0;
pensiero3.fixedToCamera = true;



if(!sceltaFatta){
  domanda_mendicante = game.add.physicsGroup();
  dialogoM0 = domanda_mendicante.create(0,0,'dialogo_mendicante_0');
  dialogoM1 =domanda_mendicante.create(0,0,'dialogo_mendicante_1');
  dialogoM2 = domanda_mendicante.create(0,0,'dialogo_mendicante_2');

  domanda_mendicante.setAll('alpha', 0);
  domanda_mendicante.setAll('fixedToCamera', true);
}

if(!allaCassa){

  dialogo_botteghino = game.add.physicsGroup();
  botteghino0 = dialogo_botteghino.create(0,0,'botteghino0');
  botteghino1 =dialogo_botteghino.create(0,0,'botteghino1');
  botteghinoA = dialogo_botteghino.create(0,0,'botteghinoA');
  botteghinoA2 = dialogo_botteghino.create(0,0,'botteghinoA2');
  botteghinoB = dialogo_botteghino.create(0,0,'botteghinoB');
  botteghinoB2 = dialogo_botteghino.create(0,0,'botteghinoB2');


  dialogo_botteghino.setAll('alpha', 0);
  dialogo_botteghino.setAll('fixedToCamera', true);
}

//pausa

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

pulsantePausa = game.add.sprite(974, 718, 'pulsante_pausa');
pulsantePausa.anchor.x = 1;
pulsantePausa.anchor.y = 1;
pulsantePausa.fixedToCamera = true;
pulsantePausa.scale.setTo(.7);
pulsantePausa.inputEnabled = true;
pulsantePausa.input.useHandCursor = true;
pulsantePausa.events.onInputUp.add(pauseGame);


  tastoMenu.events.onInputUp.add(tornaMenu);


    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.2);
    game.camera.deadzone = new Phaser.Rectangle((1024-500)/2, (768-450)/2, 250, 100);


    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spostaButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    slidaButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
    yesButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    noButton = game.input.keyboard.addKey(Phaser.Keyboard.N);
    pausaButton = game.input.keyboard.addKey(Phaser.Keyboard.P);
    unoButton = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    dueButton = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    pausaButton.onDown.add(pauseGame,this);



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



schermata_game_over = game.add.sprite(0,0,'game_over');
schermata_game_over.fixedToCamera = true;
schermata_game_over.alpha = 0;

textGameOver= game.add.sprite (512,90, 'textgame_over')
textGameOver.fixedToCamera = true;
textGameOver.alpha = 0;
textGameOver.anchor.x = 0.5
textGameOver.anchor.y = 0.5

blurGameOver= game.add.sprite (512,90, 'blur_gameover');
blurGameOver.fixedToCamera = true;
blurGameOver.alpha = 0;
blurGameOver.anchor.x = 0.5;
blurGameOver.anchor.y = 0.5;



riprovaText = game.add.sprite(521, 421, 'riprova_button');
riprovaText.fixedToCamera = true;
riprovaText.alpha = 0;
riprovaText.anchor.x =.5;
riprovaText.anchor.y = .5;
riprovaText.scale.setTo(0.8);

riprovaBlur = game.add.sprite(521, 421, 'riprova_blur');
riprovaBlur.fixedToCamera = true;
riprovaBlur.alpha = 0;
riprovaBlur.anchor.x =.5;
riprovaBlur.anchor.y = .5;
riprovaBlur.scale.setTo(0.8);


},


update: function() {



  player.body.velocity.x = 0;

  blur.alpha = 0;

  if(pausa.alpha==0){
    blurMenu.alpha = 0;
    blurContinua.alpha = 0;
  }


  fineGioco = false;
  pushing= false;
  salita = false;
  eccezioneRimbalzoFilo = false;
  eccezioneScaletta = false;
  noGravity=false;
  animazioni_scalata_non_richieste=false;
  noGravity2=false;
  premi_d.alpha = 0; //istruzione per scivolare
  pinocchioBloccato = false;
  pulsantePausa.alpha =1;

  if (respawnCounter == 0) {
    istruzioni.setAll('alpha', 0);
    if (player.x > 0 && player.x < 200) {
      usaFreccette.alpha = 1;
    } else if (player.x > 2740 && player.x < 3000) {
      salta.alpha = 1;
    } else if (player.x > 3885 && player.x < 4250) {
      istruzioneSpinta.alpha = 1;
    }
  }

if((player.x >8090 && player.x<8296)&&(player.y>3138 && player.y<3260)){
  istruzioneScale.alpha =1;
}




parallax1.x = .8 * game.camera.x ;

colline.x = .7*game.camera.x;

bosco2.x = .3*game.camera.x+14000;
bosco3.x = .5*game.camera.x+10150;



  game.physics.arcade.collide(player, terraTot);
  game.physics.arcade.collide(player, tetti);
  game.physics.arcade.overlap(player, gattoeVolpe);

  //COINS
  game.physics.arcade.overlap(player, coins, collect);

  game.physics.arcade.overlap(player, cespugli, pinocchioStuck);

  game.physics.arcade.overlap(player, sacco_coin, collectS);


  //CASSE
  game.physics.arcade.collide(player, casse, sposta);
  game.physics.arcade.collide(sassolini, casse);
  game.physics.arcade.collide(casseI, player);


  game.physics.arcade.collide(player, tronco);

  game.physics.arcade.collide(player, davanzali);
  game.physics.arcade.collide(player, rami);


  game.physics.arcade.overlap(player, checkpoints, cp);
  game.physics.arcade.overlap(player, tegole, respawn);
  game.physics.arcade.collide(tegole, davanzali);
  game.physics.arcade.collide(tegole, davanzali_chiesa);
  game.physics.arcade.collide(player, davanzali_chiesa);

  game.physics.arcade.collide(tegole, terraTot);
  game.physics.arcade.collide(tegole, tetti);


  game.physics.arcade.collide(tetti, player);

  game.physics.arcade.collide(davanzaliTetto, player);

  game.physics.arcade.collide(birds, player);
  //game.physics.arcade.collide(player, g_1_o);
  //game.physics.arcade.overlap(player, g_1_v);

  game.physics.arcade.collide(player, filo, rimbalzo);
  game.physics.arcade.collide(player, camini);
  game.physics.arcade.collide(player, bancarelle);
  game.physics.arcade.overlap(player, scale, noG);

  game.physics.arcade.collide(player, fata);

  game.physics.arcade.overlap(player, carrucola, slaida);
  game.physics.arcade.overlap(player, trigger_mendicante, triggerMendicante);
  game.physics.arcade.overlap(player, trigger_gattoeVolpe, triggerGattoeVolpe);
  game.physics.arcade.overlap(player, trigger_pensiero1, triggerPensiero1);
  game.physics.arcade.overlap(player, trigger_pensiero2, triggerPensiero2);
  game.physics.arcade.overlap(player, trigger_pensiero3, triggerPensiero3);
  game.physics.arcade.overlap(player, trigger_pensiero3, pinocchioInCoda);
  game.physics.arcade.overlap(player, trigger_Botteghino, triggerBotteghino);

  game.physics.arcade.collide(player, scalini);
  game.physics.arcade.collide(player, fontana);

  game.physics.arcade.overlap(player, coda, pinocchioInCoda);



function triggerBotteghino() {
  allaCassa = true;
  trigger_Botteghino.body.setSize(50, 400, -30, 0);

  if (allaCassa) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;


    if (yesButton.isDown) {
      if (!joy) {
        yesButtonCounter = yesButtonCounter + 1;
        joy = true;
      }
    }

    if (yesButtonCounter == 0) {
      botteghino0.alpha = 1;
    }
    if (yesButton.isDown && yesButtonCounter == 1) {
      botteghino0.alpha = 0;
      botteghino1.alpha = 1;

    }

    if (yesButton.isDown) {

      if (totCoin > 24) {
        if (yesButtonCounter == 2) {
          botteghino1.alpha = 0;
          botteghinoA.alpha = 1;
        }

        if (yesButton.isDown && yesButtonCounter == 3) {
          botteghinoA.alpha = 0;
          botteghinoA2.alpha = 1;
        }
        if (yesButton.isDown && yesButtonCounter == 4) {
          botteghinoA2.alpha = 0;
          allaCassa = false;
          trigger_Botteghino.kill();
          score.alpha = 0;
          score2.alpha = 1;
          yesButtonCounter = 0;
        }

      } else if (totCoin < 25) {
        if (yesButtonCounter == 2) {
          botteghino1.alpha = 0;
          botteghinoB.alpha = 1;
        }

        if (yesButton.isDown && yesButtonCounter == 3) {
          botteghinoB.alpha = 0;
          botteghinoB2.alpha = 1;
        }
        if (yesButton.isDown && yesButtonCounter == 4) {
          botteghinoB2.alpha = 0;
          fineGioco = true;
          game.time.events.add(Phaser.Timer.SECOND * 1.5, compareschermata, this);
          game.time.events.add(Phaser.Timer.SECOND * 4, riprova, this);

        }
      }
    }
  }
}


if (player.x > 30900) {
  livello1Preso = true;
  fineGioco = false;
  inizio = false;
  intermedio = true;
  finale1 = false;
  storiamenu = false;
  autorimenu = false;
  score2.alpha = 0;
  resetVariabili1();

  game.camera.fade(0x000000, 1000);

}

  function triggerPensiero1() {
  inizioPensiero1 = true;
  trigger_pensiero1.body.setSize(50, 400, -30, 0);

  if (inizioPensiero1) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;

  }
  if (yesButton.isDown) {
    if (!joy) {
      yesButtonCounter = yesButtonCounter + 1;
      joy = true;
    }
  }

  if (yesButtonCounter == 0) {
    pensiero1.alpha = 1;
  }
  if (yesButton.isDown && yesButtonCounter == 1) {
    pensiero1.alpha = 0;
    inizioPensiero1 = false;
    trigger_pensiero1.kill();
    pensieroFatto1 = true;
    yesButtonCounter = 0;

  }
}


  function triggerPensiero2() {
  inizioPensiero2 = true;
  trigger_pensiero2.body.setSize(50, 400, -30, 0);

  if (inizioPensiero2) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;

  }
  if (yesButton.isDown) {
    if (!joy) {
      yesButtonCounter = yesButtonCounter + 1;
      joy = true;
    }
  }

  if (yesButtonCounter == 0) {
    pensiero2.alpha = 1;
  }
  if (yesButton.isDown && yesButtonCounter == 1) {
    pensiero2.alpha = 0;
    inizioPensiero2 = false;
    trigger_pensiero2.kill();
    pensieroFatto2 = true;
    yesButtonCounter = 0;

  }
}

function triggerMendicante() {
  sceltaMendicante = true;
  trigger_mendicante.body.setSize(50, 400, -30, 0);

  if (sceltaMendicante) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;


    if (yesButton.isDown) {
      if (!joy) {
        yesButtonCounter = yesButtonCounter + 1;
        joy = true;
      }
    }

    if (yesButtonCounter == 0) {

      dialogoM0.alpha = 1;
    }
    if (yesButton.isDown && yesButtonCounter == 1) {

      dialogoM0.alpha = 0;
      dialogoM1.alpha = 1;
    }
    if (yesButton.isDown && yesButtonCounter == 2) {

      dialogoM1.alpha = 0;
      dialogoM2.alpha = 1;
    }
    if (dialogoM2.alpha == 1) {
      if (unoButton.isDown && totCoin > 4) {
        totCoin = totCoin - 5;
        dialogoM2.alpha = 0;
        sceltaMendicante = false;
        sceltaFatta = true;
        trigger_mendicante.kill();
        yesButtonCounter = 0;

      } else if (unoButton.isDown && totCoin < 5) {
        totCoin = totCoin - totCoin;
        dialogoM2.alpha = 0;
        sceltaMendicante = false;
        sceltaFatta = true;
        trigger_mendicante.kill();
        yesButtonCounter = 0;
      } else if (dueButton.isDown) {
        totCoin = totCoin - 0;
        dialogoM2.alpha = 0;
        sceltaMendicante = false;
        sceltaFatta = true;
        trigger_mendicante.kill();
        yesButtonCounter = 0;
      }
    }
  }
}



  function triggerGattoeVolpe() {
  inizioDialogo = true;
  trigger_gattoeVolpe.body.setSize(50, 400, -30, 0);


  if (inizioDialogo) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;

    if (yesButton.isDown) {
      if (!joy) {
        yesButtonCounter = yesButtonCounter + 1;
        joy = true;
      }
    }

    if (yesButtonCounter == 0) {
      dialogo0.alpha = 1;
    }

    if (yesButton.isDown && yesButtonCounter == 1) {
      dialogo0.alpha = 0;
      dialogo1.alpha = 1;

    }

    if (yesButton.isDown && yesButtonCounter == 2) {
      dialogo1.alpha = 0;
      dialogo2.alpha = 1;

    }

    if (yesButton.isDown && yesButtonCounter == 3) {
      dialogo2.alpha = 0;
      inizioDialogo = false;
      trigger_gattoeVolpe.kill();
      dialogoFatto = true;
      yesButtonCounter = 0;

    }
  }
}



if (yesButton.isUp){
  joy = false;
}



function slaida(p, c) {
  noGravity2 = true;
  premi_d.alpha = 1;

  if (noGravity2 && slidaButton.isDown) {

    premi_d.alpha = 0;
    player.frame = 44;
    player.body.gravity.y = 0;
    player.body.velocity.y = 0;
    game.input.keyboard.cursorsKeys = false;

    if (player.x < 14300 && player.y < 2950) {

      player.x = carrucola.x;
      player.y = carrucola.y;

      carrucola.body.velocity.y = 900 * (1 / 3)
      carrucola.body.velocity.x = 900 * (1 / 1.965)

    } else {
      noGravity2 = false;
      carrucola.body.velocity.y = 0
      carrucola.body.velocity.x = 0


    }

    if (player.x > 14083 && player.x < 14455) {
      td = 40000;
    }

  }
}

if (!noGravity2) {
  player.body.gravity.y = 1400;
  carrucola.body.velocity.y = 0
  carrucola.body.velocity.x = 0
  carrucola.x = 12203;
  carrucola.y = 1544;

}


 //NO GRAVITY SCALETTA
  function noG(p, o) {
    salita = true;
    noGravity = true;
    eccezioneScaletta = true;

  }



  score.setText('' + totCoin);

  score2.setText('' + totCoin-25);


  casse.setAll('body.velocity.x', 0);



// CAMMINATA

if (cursors.right.isDown && !inizioInseguimento && !sceltaMendicante &&!codaBotteghino && !pinocchioBloccato) {
  player.body.velocity.x = 350;
  if (!pushing && !salita && !noGravity2){
  player.animations.play('walk_r');
  player.body.setSize(96,120,12,18);
  facing = 'right';


}

} else if (cursors.left.isDown && !sceltaMendicante && !inizioInseguimento &&!codaBotteghino && !pinocchioBloccato) {
  player.body.velocity.x = -350;
  if (!pushing && !salita && !noGravity2){
  player.animations.play('walk_l');
  player.body.setSize(96,120,12,18);}
  facing = 'left';


}else if (inizioInseguimento){
   if (cursors.right.isDown  && !sceltaMendicante && !pushing && !salita && !noGravity2 && !codaBotteghino && !pinocchioBloccato){
     player.body.velocity.x = 450;

    player.animations.play('walk_r');
    player.body.setSize(96,120,12,18);
    facing = 'right';

  }else if (cursors.left.isDown && !sceltaMendicante && !pushing && !salita && !noGravity2 &&!codaBotteghino && !pinocchioBloccato) {
    player.body.velocity.x = -450;
    player.animations.play('walk_l');
    player.body.setSize(96,120,12,18);
    facing = 'left';


  }else{

    if (facing == 'right' && !salita){
    player.animations.play('rest_r');
    player.body.setSize(44,120,44,18);
    }
    if (facing == 'left' && !salita){
      player.animations.play('rest_l');
      player.body.setSize(44,120,34,18);
    }

}

}else{
  if (facing == 'right' && !salita){
  player.animations.play('rest_r');
  player.body.setSize(44,120,44,18);
  }
  if (facing == 'left' && !salita){
    player.animations.play('rest_l');
    player.body.setSize(44,120,34,18);
  }
}




//SALITA SCALETTA

if (noGravity && !cursors.down.isDown && !cursors.up.isDown){
   player.body.gravity.y=0;
   player.frame=73;

   }else{player.body.gravity.y = 1400;}

   if (noGravity && cursors.down.isDown){

     player.animations.play('discesa');
     player.body.setSize(60,120,33,18);
     player.body.velocity.y=300;
   } else if (noGravity && cursors.up.isDown){

      player.animations.play('salita');
      player.body.setSize(60,120,33,18);
      player.body.velocity.y=-300;
   } else if(noGravity){
     player.animations.stop('salita');
     player.body.setSize(66,120,30,18);
     player.animations.stop('discesa');
     player.body.velocity.y=0;

   }




//CADUTA TEGOLE

tegole.children.forEach( function(tegola) {
 if (player.x > tegola.left-100 && player.x < tegola.right+100 && Math.abs(player.y-tegola.y)<230) {
   tegola.alpha = 1; tegola.body.gravity.y = 800
   tegola.angle -= 3*Math.random()
  };
 if (tegola.body.touching.down || tegola.body.touching.up){
   tegola.kill()}
})


birds.children.forEach( function(bird) {
bird.body.setSize(60,30,12,72);
 bird.checkCollisionLeft = true;
 bird.checkCollisionRight = true;
 if (bird.body.touching.left){
    bird.destroy();
   respawn();
   return false;
 }
 if (bird.body.touching.right){

   bird.destroy();
  respawn();
  return false;
 }

})


//IMPEDIRE SPOSTAMENTO CASSA SE CI SI TROVA SOPRA

casse.children.forEach( function(cassa) {
 cassa.checkCollisionUp = true;

 if (cassa.body.touching.up){
   cassa.body.immovable= true;
 }

 if (cassa.body.touching.left && cassa.body.touching.right){cassa.body.immovable= true;}


})



if(player.body.touching.down && !eccezioneRimbalzoFilo ){
       if(player.y-td>450){
         respawn();
       }

       td=player.y

   }


//SALTO


if (jumpButton.isDown && (player.body.touching.down|| eccezioneScaletta) && !sceltaMendicante){
  if(!joj){
  player.body.velocity.y = -580;
  joj = true;
}
}


 if (jumpButton.isUp){
  joj = false;
}



  // SPOSTAMENTO BIRDS

    // 1
  if (bird1.x < 5830) {
    bird1.scale.x *= -1;
    bird1.body.velocity.x = 200;

  }

  if (bird1.x > 6700) {
    bird1.scale.x *= -1;
    bird1.body.velocity.x = -200;

  }
  //2
  if (bird2.x < 8235) {
    bird2.scale.x *= -1;
    bird2.body.velocity.x = 200;
  }

  if (bird2.x > 8830) {
    bird2.scale.x *= -1;
    bird2.body.velocity.x = -200;
  }

  //3
  if (bird3.x < 11740) {
    bird3.scale.x *= -1;
    bird3.body.velocity.x = 200;
  }

  if (bird3.x > 12590) {
    bird3.scale.x *= -1;
    bird3.body.velocity.x = -200;
  }

  //4
  if (bird4.x < 11740) {
    bird4.scale.x *= -1;
    bird4.body.velocity.x = 200;
  }

  if (bird4.x > 12590) {
    bird4.scale.x *= -1;
    bird4.body.velocity.x = -200;
  }

  //5
  if (bird5.x < 16429) {
    bird5.scale.x *= -1;
    bird5.body.velocity.x = 200;
  }

  if (bird5.x > 16970) {
    bird5.scale.x *= -1;
    bird5.body.velocity.x = -200;
  }



function sposta() {

  if (spostaButton.isDown && cursors.right.isDown && player.body.touching.down) {

    pushing =true;
    player.animations.play('push_r')
    casse.setAll('body.immovable', false);


  } else if (spostaButton.isDown && cursors.left.isDown && player.body.touching.down) {
    player.animations.play('push_l')
    casse.setAll('body.immovable', false);
    pushing =true;

  } else {
    casse.setAll('body.immovable', true);
  }

}


  function collect(p, coin) {
    c[coin.index]= false;
    coin.exists = false;

    totCoin = totCoin + coin.value;
  }


  function collectS(p, s) {
    s.kill();
    sc = true;
    totCoin = totCoin + 5;
  }




  function respawn() {

    carrucola.body.velocity.x = 0;
    carrucola.body.velocity.y = 0;


    game.camera.fade(0x000000, 250);

     game.camera.onFadeComplete.add( function() {resetCaduta()} );
     game.time.events.add(Phaser.Timer.SECOND * 1, fadeReset, this);

     respawnCounter = respawnCounter+1;


}

if (respawnCounter ==5){

  fineGioco = true;

  game.time.events.add(Phaser.Timer.SECOND * 1, compareschermata, this);
  game.time.events.add(Phaser.Timer.SECOND * 4, riprova, this);

}

function compareschermata(){
  schermata_game_over.alpha =1;
  game.add.tween(textGameOver).to( {alpha: 1}, 400).start();
  game.add.tween(blurGameOver).to( {alpha: 0.7}, 400).start();



}


function riprova(){

game.add.tween(riprovaText).to( {alpha: 1}, 400).start();
riprovaText.inputEnabled = true;
riprovaText.input.useHandCursor = true;
riprovaText.events.onInputUp.add(ricomincia1);

riprovaText.events.onInputOver.add(riprovaGlowFilter, this);
riprovaText.events.onInputOut.add(noriprovaGlowFilter, this);
riprovaText.events.onInputUp.add(noriprovaGlowFilter);

}

function riprovaGlowFilter() {
riprovaBlur.alpha = 1;
}

function noriprovaGlowFilter() {
  riprovaBlur.alpha = 0;
}

function ricomincia1(){
resetVariabili1();
game.camera.fade(0x000000, 250);
}



function resetCaduta(){
  td= 30000;
}

function fadeReset(){
  game.camera.resetFX(500);
}


  function cp(p,c){
  cx= c.x;
  cy = c.y-100;
  ch[c.index]=true;
  lampioni_check.getAt(c.index).frame=0;
  }



 game.physics.arcade.overlap(player, fumi, fumoUccide);

  function fumoUccide(player, fumo) {
    if (fumo.frame >= 3 && fumo.frame <= 10) {
      fumo.destroy();
      respawn();
      return false;
    }
  }


function rimbalzo(p,f){
    player.body.velocity.y = -1150;
    eccezioneRimbalzoFilo = true;
}


//INSEGUIMENTO FATA


if(player.x>20100 && player.x<29500){
  inizioInseguimento = true;

}else{
  inizioInseguimento = false;

}


fata_dx = player.x - fata.x;
fata_dy = player.y - fata.y;

if (inizioInseguimento && !codaBotteghino)
    {
         if (player.x - fata.x < 0) {
        fata.body.velocity.x = -195
      } else if (player.x - fata.x > 0 && player.x - fata.x<530) {
        fata.body.velocity.x = 195
      }  else if (player.x - fata.x > 531){
        fata.body.velocity.x = 470; //470
      }


      if (player.y - fata.y < -5) {
        fata.body.velocity.y = -150
      } else if (player.y - fata.y > 5){
        fata.body.velocity.y = 150
      }
      else{
        fata.body.velocity.y = 0;
      }

      }else{

        fata.body.velocity.x = 0
        fata.body.velocity.y = 0
    }


  fata.checkCollisionLeft = true;
  fata.checkCollisionRight = true;
  fata.checkCollisionLUp = true;
  fata.checkCollisionDown = true;
  if (fata.body.touching.left){

    fata.x = 0;
    fata.y =0;

    respawn();
    return false;
  }
  if (fata.body.touching.right){

    fata.x = 0;
    fata.y =0;

    respawn();
    return false;
  }
  if (fata.body.touching.up){

    fata.x = 0;
    fata.y =0;
   respawn();
   return false;
  }
  if (fata.body.touching.down){

    fata.x = 0;
    fata.y =0;

    respawn();
    return false;
  }



  if(codaBotteghino){
    //console.log('coda');
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;
    player.body.velocity.y =0;
    fata.body.velocity.x = 150;
    fata.body.velocity.y = fata.body.velocity.y-250;
    tronco.alpha =1;
    tronco.body.setSize(396,440,0,0);

  }


  function triggerPensiero3() {
  inizioPensiero3 = true;
  trigger_pensiero3.body.setSize(50, 400, -30, 0);


  if (inizioPensiero3) {
    pulsantePausa.alpha = 0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;

  }
  if (yesButton.isDown) {
    if (!joy) {
      yesButtonCounter = yesButtonCounter + 1;
      joy = true;
    }
  }

  if (yesButtonCounter == 0) {
    pensiero3.alpha = 1;
  }
  if (yesButton.isDown && yesButtonCounter == 1) {
    pensiero3.alpha = 0;
    inizioPensiero3 = false;
    trigger_pensiero3.kill();
    pensieroFatto3 = true;
    yesButtonCounter = 0;

  }

}



  if (codaBotteghino && fata.y<player.y-630){

      coda.x = 0;
      coda.y = 0;
      codaBotteghino=false;
      fata.x=0;
      fata.y=0;
      fata.alpha=0;

  }else if(player.x-fata.x>12000){
    fata.body.velocity.x=0
    fata.body.velocity.y=0;
  }else{
    fata.alpha=1;
  }



  rami.children.forEach(function(ramo) {
    if (ramo.body.touching.up) {
      game.time.events.add(285, cadutaRamo, this);

      function cadutaRamo() {
        if (ramo.body.touching.up) {
          game.time.events.add(300, riduciRamoBoundingBox, this);

          ramo.body.gravity.y = 800;
          ramo.angle += 1.5 * Math.random()
        }
      }

      function riduciRamoBoundingBox() {
        ramo.body.setSize(0, 0, 0, 0);
      }
    }
  });


  function pinocchioStuck(p,c){
    td=30000;
    p.animations.stop();
    cespuglio1.body.setSize(406,212,0,0);
    cespuglio2.body.setSize(457,242,0,0);
    cespuglio3.body.setSize(525,250,0,0);
    cespuglio4.body.setSize(387,203,0,0);
    cespuglio5.body.setSize(525,250,0,0);
    cespuglio6.body.setSize(406,212,0,0);
    cespuglio7.body.setSize(525,250,0,0);
    cespuglio8.body.setSize(457,242,0,0);
    cespuglio9.body.setSize(525,250,0,0);
    cespuglio10.body.setSize(525,250,0,0);
    cespuglio11.body.setSize(525,250,0,0);
    cespuglio12.body.setSize(525,250,0,0);
    cespuglio13.body.setSize(525,250,0,0);
    cespuglio14.body.setSize(525,250,0,0);
    cespuglio15.body.setSize(525,250,0,0);
    cespuglio16.body.setSize(525,250,0,0);
    cespuglio17.body.setSize(525,250,0,0);
    pinocchioBloccato = true;
    p.body.velocity.x =0;
    p.body.velocity.y =0;
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    jumpButton.isDown = false;
  }


 function pinocchioInCoda(){
   inizioInseguimento =false;
   codaBotteghino = true;
 }

// CAMERA DEADZONE
if (player.y < 3000) {
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 1, 0.05);
  game.camera.deadzone = new Phaser.Rectangle((1024 - 500) / 2, (768 - 150) / 2, 250, 100);
} else if (player.y > 3000 && (player.x > 11600 && player.x < 15000)) {
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.1);
  game.camera.deadzone = new Phaser.Rectangle((1024 - 500) / 2, (768 - 450) / 2, 250, 100);
} else if (inizioInseguimento) {
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, .03, 0.1);
  game.camera.deadzone = new Phaser.Rectangle((1024 - 820), (768 - 150) / 2, 50, 100);
} else {
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.2);
  game.camera.deadzone = new Phaser.Rectangle((1024 - 500) / 2, (768 - 450) / 2, 250, 100);

}

},


 render: function() {

   /*game.debug.inputInfo(32, 32);
   game.debug.pointer(game.input.activePointer);

   //game.debug.body(sacco_coin);
   game.debug.body(bird1);
   game.debug.body(bird2);
   //  game.debug.body(filo);
   //game.debug.body(tronco);

   //game.debug.body(checkpoint2);

   //game.debug.body(fata);
   //game.debug.body(trigger_gattoeVolpe);
   //game.debug.body(cespuglio2);
   //game.debug.body(cespuglio3);
   //game.debug.body(cespuglio4);

   //game.debug.body(ramo8);
   //game.debug.body(scala6);
   //game.debug.body(carrucola);*/
 }
 }
