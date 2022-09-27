var bootState = {
preload: function (){
  game.stage.backgroundColor = '0x000000';
  game.load.baseURL = '';
  game.load.spritesheet('loading', 'asset/loading/loading_spritesheet.png', 1024, 768, 6);

},

  create: function(){
    //game.stage.disableVisibilityChange = true;
    //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.state.start('loadingState');
  }
}




var loadingState = {



preload: function (){
  game.stage.backgroundColor = '0x000000';

  loading =game.add.sprite(0,0, 'loading');
  loading.animations.add('load', [1,2,3,4,5],5,true);
  loading.animations.play('load');

  //game.load.baseURL = 'http://examples.phaser.io/assets/';

  //game.load.crossOrigin = 'anonymous';

  game.load.baseURL = '';
  game.load.image('background1', 'asset/mondo_1/sketch1.png');
  game.load.image('background2', 'asset/mondo_1/sketch2.png');
  game.load.image('background3', 'asset/mondo_1/sketch3.png');



  //PINOCCHIO
  game.load.spritesheet('player', 'asset/pinocchio_provvisorio.png', 120, 149, 96);



  //TERRA
  game.load.image ('terra1', 'asset/mondo_1/terra/terra1.png');
  game.load.image ('terra2', 'asset/mondo_1/terra/terra2.png');
  game.load.image ('terra3', 'asset/mondo_1/terra/terra3.png');
  game.load.image ('terra4', 'asset/mondo_1/terra/terra4.png');
  game.load.image ('terra5', 'asset/mondo_1/terra/terra5.png');

  game.load.spritesheet('gattoevolpe', 'asset/mondo_1/ilgattoelavolpe.png', 216, 220, 8);

  //COINS
  game.load.spritesheet('coin', 'asset/mondo_1/coin_2.png', 32, 32, 6);
  game.load.spritesheet('sacco_coin', 'asset/mondo_1/sacco_monete.png', 96, 118, 6);


  // CASSE
  game.load.image ('cassa', 'asset/mondo_1/cassa1.png');

  // SASSOLINO
  game.load.image ('sassolino', 'asset/mondo_1/sassolino.png');

  //BOTTEGHINO
  game.load.image ('coda_botteghino', 'asset/mondo_1/codaBotteghino.png');
  game.load.image ('folla_in coda', 'asset/mondo_1/coda_botteghino.png');


  //RAMI
  game.load.image ('ramo_dx', 'asset/mondo_1/rami_destra.png');
  game.load.image ('ramo_sx', 'asset/mondo_1/rami_sinistra.png');



  //DAVANZALI
  game.load.image ('davanzale_1', 'asset/mondo_1/davanzale_1.png');
  game.load.image ('davanzale_1c2', 'asset/mondo_1/davanzale_1c2.png');
  game.load.image ('davanzale_sottoscala', 'asset/mondo_1/davanzale_sottoscala.png');
  game.load.image ('davanzaliTetto', 'asset/mondo_1/davanzale_finestra_tetto.png');
  game.load.image ('davanzale_chiesa_1', 'asset/mondo_1/davanzale_chiesa_1.png');
  game.load.image ('davanzale_chiesa_2', 'asset/mondo_1/davanzale_chiesa_2.png');
  game.load.image ('davanzale_chiesa_2_40', 'asset/mondo_1/davanzale_chiesa_2_40px.png');
  game.load.image ('piattaforma_campanile_scala', 'asset/mondo_1/piattaforma_campanile_scala.png');
  game.load.image ('cima_campanile_1', 'asset/mondo_1/cima_campanile-01.png');
  game.load.image ('cima_campanile_2', 'asset/mondo_1/cima_campanile-02.png');
  game.load.image ('davanzale_170', 'asset/mondo_1/davanzale_170.png');
  game.load.image ('davanzale_100', 'asset/mondo_1/davanzale_100.png');
  game.load.image ('tetto_685', 'asset/mondo_1/tetto_685.png');


  //PEZZI CHE CROLLANO
  game.load.image ('vasetto', 'asset/mondo_1/vasetto.png');
  game.load.image ('mattone_chiesa', 'asset/mondo_1/mattonechiesa.png');
  game.load.image ('muro_municipio', 'asset/mondo_1/muro_municipio.png');



  game.load.spritesheet('bird', 'asset/mondo_1/bird_100x146px_scuro.png',100,146,10);

  //GRONDAIE

  //1
  game.load.image ('grondaia1_o', 'asset/mondo_1/grondaia1/grondaia1_o.png');
  //game.load.image ('grondaia1_v', 'asset/mondo_1/grondaia1/grondaia1_v.png');


  //TETTI INVISIBILI
  game.load.image ('tettoplatform_1', 'asset/mondo_1/tettoplatform_1.png');
  game.load.image ('tettoplatform_2', 'asset/mondo_1/tettoplatform_2.png');
  game.load.image ('tettoplatform_3a', 'asset/mondo_1/tettoplatform_3-01.png');
  game.load.image ('tettoplatform_3b', 'asset/mondo_1/tettoplatform_3-02.png');
  game.load.image ('tetto_atterraggio', 'asset/mondo_1/tetto_atterraggio.png');
  game.load.image ('tetto_lungo_atterraggio', 'asset/mondo_1/tetto_lungo_atterraggio.png');
  game.load.image ('tetto_575', 'asset/mondo_1/tetto_575.png');
  game.load.image ('tetto_460', 'asset/mondo_1/tetto_460.png');
  game.load.image ('tetto_185', 'asset/mondo_1/tetto_185.png');
  game.load.image ('tetto_municipio', 'asset/mondo_1/tetto_municipio.png');
  //merletti del tetto
  game.load.image ('merletti_municipio', 'asset/mondo_1/merletti_municipio.png');
  game.load.image ('tetto_710', 'asset/mondo_1/tetto_710.png');

  //SCALINI
  game.load.image ('scalini_chiesa1', 'asset/mondo_1/scalini_chiesa-01.png');
  game.load.image ('scalini_chiesa2', 'asset/mondo_1/scalini_chiesa-02.png');
  game.load.image ('scalini_chiesa3', 'asset/mondo_1/scalini_chiesa-03.png');
  game.load.image ('gradino_58', 'asset/mondo_1/gradino_58.png');



  //CHECKPOINT
  game.load.spritesheet ('lampione_check', 'asset/mondo_1/lampione.png', 182,464,2);
  game.load.spritesheet ('lampione_campanile', 'asset/mondo_1/lampione_torre.png', 182,464,2);

  game.load.image ('checkpoint', 'asset/mondo_1/checkpoint.png');
  game.load.image ('checkpoint_campanile', 'asset/mondo_1/checkpoint_campanile.jpeg');

  //CAMINO
  game.load.image ('camino', 'asset/mondo_1/camino.png');

  //FUMI
  game.load.spritesheet('fumata', 'asset/mondo_1/fumo.png',68,147,14);

  //CESPUGLI
  game.load.image ('cespuglio1', 'asset/mondo_1/cespuglio1.png');
  game.load.image ('cespuglio2', 'asset/mondo_1/cespuglio2.png');
  game.load.image ('cespuglio3', 'asset/mondo_1/cespuglio3.png');
  game.load.image ('cespuglio4', 'asset/mondo_1/cespuglio4.png');


  //FILO PANNI
  game.load.image ('filo', 'asset/mondo_1/filo_panni.png');

  //CARRUCOLA CAMPANILE
  game.load.image ('carrucola', 'asset/mondo_1/carrucola.png');

  //COLLINETTA
  game.load.image ('collinetta', 'asset/mondo_1/collinetta.png');

  game.load.image ('tronco', 'asset/mondo_1/tronco.png');

  //BANCARELLE
  game.load.image ('bancarella1', 'asset/mondo_1/bancarella_frutta_1_tetto_e_banco.png');
  game.load.image ('bancarella1b', 'asset/mondo_1/bancarella frutta_1_tetto_e_banco-02.png');
  game.load.image ('sgabbiotto1', 'asset/mondo_1/sgabbiotto_bancarella1.png');
  game.load.image ('bancarellona', 'asset/mondo_1/bancarella.png');
  game.load.image ('bancarellona_davanti', 'asset/mondo_1/bancarella_davanti.png');


  //SCALA
  game.load.image ('scala', 'asset/mondo_1/scala.png');

  //FATA
  game.load.spritesheet('fata', 'asset/mondo_1/fatinaturchina.png', 120,120,4);

  //MENDICANTE
  game.load.image ('mendicante', 'asset/mondo_1/mendicante.png');
  game.load.image ('trigger_mendicante', 'asset/mondo_1/triggerMendicante.png');

  // MANGIAFUOCO
    game.load.image ('trigger_mangiafuoco', 'asset/mondo_1/triggerMendicante.png');


  //FONTANA
  game.load.image ('fontana_1', 'asset/mondo_1/fontana-01.png');
  game.load.image ('fontana_2', 'asset/mondo_1/fontana-02.png');
  game.load.image ('fontana_3', 'asset/mondo_1/fontana-03.png');
  game.load.image ('fontana_4', 'asset/mondo_1/fontana-04.png');




  //PARALLASSE
  game.load.image ('parallax1', 'asset/mondo_1/sfondocielo_corto.png');
  game.load.image ('bosco_livello2', 'asset/mondo_1/bosco_livello2.png');
  game.load.image ('bosco_livello3', 'asset/mondo_1/bosco_livello3.png');
  game.load.image ('profilo_teatro', 'asset/mondo_1/nero_teatro.png');
  game.load.image ('colline_sfondo', 'asset/mondo_1/sfondocolline.png');





  //ISTRUZIONI

  game.load.image ('usa_freccette', 'asset/ISTRUZIONI/usa frecce.png');
  game.load.image ('premi_d', 'asset/ISTRUZIONI/Tieni premuto D.png');
  game.load.image ('salta', 'asset/ISTRUZIONI/Premi SPAZIO.png');
  game.load.image ('usa_scaletta', 'asset/ISTRUZIONI/Istruzione scale.png');
  game.load.image ('premi_s', 'asset/ISTRUZIONI/Premi S per spingere la cassa.png');

  game.load.image ('domanda_mendicante', 'asset/mondo_1/scelta_mendicante-01.png');
  game.load.image ('yes', 'asset/mondo_1/scelta_mendicante-02.png');
  game.load.image ('no', 'asset/mondo_1/scelta_mendicante-03.png');
  game.load.image ('box_istruzioni_filo', 'asset/mondo_1/box_istruzioni_filo.png');
  game.load.image ('istruzioni_panni', 'asset/mondo_1/istruzioni_panni.png');
  game.load.image ('premi_a', 'asset/ISTRUZIONI/Premi A per abbassarti.png');
  game.load.image ('premi_m', 'asset/ISTRUZIONI/Premi M per vedere la mappa.png');
  game.load.image ('istruzioni_sipario', 'asset/ISTRUZIONI/Non puoi entrare.png');
  game.load.image ('pensiero_leva', 'asset/livello 2/pensierino leva.png');
  game.load.image ('pensiero_pezzi', 'asset/livello 2/pensierino pezzi.png');



  //VITE
  game.load.image ('life1', 'asset/mondo_1/cuore_riempimento_1.png');
  game.load.image ('life2', 'asset/mondo_1/cuore_riempimento_2.png');
  game.load.image ('life3', 'asset/mondo_1/cuore_riempimento_3.png');
  game.load.image ('life4', 'asset/mondo_1/cuore_riempimento_4.png');
  game.load.image ('life5', 'asset/mondo_1/cuore_riempimento_5.png');
  game.load.image ('life_outline', 'asset/mondo_1/cuori_outline.png');

  //VIGNETTATURA VIEWPORT
  game.load.image ('vignettatura', 'asset/mondo_1/vignettatura_viewport.png');
  game.load.image ('filtro', 'asset/mondo_1/filtro_viewport.png');




  //DIALOGHI LIVELLO 1
  game.load.image ('dialogo_gattovolpe_0', 'asset/mondo_1/dialogo_gattovolpe-00.png');
  game.load.image ('dialogo_gattovolpe_1', 'asset/mondo_1/dialogo_gattovolpe-01.png');
  game.load.image ('dialogo_gattovolpe_2', 'asset/mondo_1/dialogo_gattovolpe-02.png');
  game.load.image ('pensiero1', 'asset/mondo_1/pensiero1.png');
  game.load.image ('pensiero2', 'asset/mondo_1/pensiero2.png');
  game.load.image ('pensiero3', 'asset/mondo_1/pensiero3.png');

  game.load.image ('dialogo_mendicante_0', 'asset/mondo_1/dialogo_mendicante0.png');
  game.load.image ('dialogo_mendicante_1', 'asset/mondo_1/dialogo_mendicante1.png');
  game.load.image ('dialogo_mendicante_2', 'asset/mondo_1/dialogo_mendicante2.png');

  game.load.image ('botteghino0', 'asset/mondo_1/botteghino0-05.png');
  game.load.image ('botteghino1', 'asset/mondo_1/botteghino1-05.png');
  game.load.image ('botteghinoA', 'asset/mondo_1/botteghinoA-05.png');
  game.load.image ('botteghinoA2', 'asset/mondo_1/botteghinoA2-05.png');
  game.load.image ('botteghinoB', 'asset/mondo_1/botteghinoB-05.png');
  game.load.image ('botteghinoB2', 'asset/mondo_1/botteghinoB2-05.png');






//LIVELLO 2-------------------------------------------------------------------------------------


game.load.image('backgroundl2', 'asset/livello 2/livello 2.png');


//paravento DAVANTI
game.load.image('paravento', 'asset/livello 2/paravento.png');
game.load.image('sediakermit', 'asset/livello 2/sedia da dietro kermit.png');


//MAPPA APPESA
game.load.image('mappa', 'asset/livello 2/spritesheet mappa.png');
game.load.image('mappaGrande', 'asset/livello 2/mappa grande.png');
game.load.image('mappacollect', 'asset/livello 2/mappat.png');

//PAVIMENTO TEATRO
game.load.image('pavimento', 'asset/livello 2/pavimento teatro.png');
game.load.image('pavimentopiano2', 'asset/livello 2/Pezzettino pavimento.png');
game.load.image('pavimentoscala', 'asset/livello 2/pavimento scala.png');
game.load.image('pavpiano3primo', 'asset/livello 2/pavimento-03-1.png');
game.load.image('pavpiano3secondo', 'asset/livello 2/pavimento-03-2.png');
game.load.image('pavpiano3terzo', 'asset/livello 2/pavimento-03-3.png');
game.load.image('pavpiano3quarto', 'asset/livello 2/pavimento-03-4.png');
game.load.image('piano2intero', 'asset/livello 2/piano 2 pavimento intero.png');
game.load.image('piano2a', 'asset/livello 2/piano2_primo.png');
game.load.image('piano2b', 'asset/livello 2/piano2_secondo.png');
game.load.image('pavimento2a', 'asset/livello 2/PAVIMENTO2A.png');
game.load.image('pavimento2b', 'asset/livello 2/PAVIMENTO2B.png');
game.load.image('pavimento2c', 'asset/livello 2/PAVIMENTO2C.png');
game.load.image('pavimento3a', 'asset/livello 2/PAVIMENTO3A.png');
game.load.image('pavimento3b', 'asset/livello 2/PAVIMENTO3B.png');
game.load.image('pavimento3c', 'asset/livello 2/PAVIMENTO3C.png');
game.load.image('pavimento3d', 'asset/livello 2/PAVIMENTO3D.png');
game.load.image('pavimento4', 'asset/livello 2/pavimento4.png');
game.load.image('pavimento5', 'asset/livello 2/pavimento 5 a.png');
game.load.image('pavimento6a', 'asset/livello 2/pavimento 6 a.png');
game.load.image('pavimento6b', 'asset/livello 2/pavimento 6 b.png');
game.load.image('pavimento7', 'asset/livello 2/pavimento 7.png');

//SIPARIO
game.load.spritesheet('sipario', 'asset/livello 2/spritesheet sipario.png', 3026, 1266, 2);
game.load.image('occhio', 'asset/livello 2/occhio di bue.png');
game.load.image('buiofinale', 'asset/livello 2/buio arlecchino.png');

//MURO
game.load.image('muro', 'asset/livello 2/muro grigio.png');
game.load.image('muro_piccolo', 'asset/livello 2/muro_piccolo.png');
game.load.image('muro3', 'asset/livello 2/muro 3.png');
game.load.image('muro5a', 'asset/livello 2/muro 5 a.png');
game.load.image('muro5b', 'asset/livello 2/muro 5 b.png');

//LEVA
game.load.image('levabluup', 'asset/livello 2/LEVA_BLU_UP.png');
game.load.image('levabludown', 'asset/livello 2/LEVA_BLU_DOWN.png');
game.load.image('levaarancioneup', 'asset/livello 2/LEVA_ARANCIONE_UP.png');
game.load.image('levaarancionedown', 'asset/livello 2/LEVA_ARANCIONE_DOWN.png');
game.load.image('levarossadown', 'asset/livello 2/LEVA_ROSSA_DOWN.png');
game.load.image('levarossaup', 'asset/livello 2/LEVA_ROSSA_UP.png');

//COSE SCALE BLOCCATE
game.load.image('coperchio_blu', 'asset/livello 2/coperchio_blu.png');
game.load.image('carrucola_arancione', 'asset/livello 2/carrucola_arancione.png');
game.load.image('carrucola2', 'asset/livello 2/carrucola_arancione.png');
game.load.spritesheet('coperchio_scale', 'asset/livello 2/spritesheet botola piano 3.png', 165, 156, 2);
game.load.image('coperchio_scala_collide', 'asset/livello 2/coperchio_scala_collide.png');

//on off teatro
//Tasto per acccendere
game.load.spritesheet('onoff', 'asset/livello 2/spritesheet interruttore.png', 50, 68, 2)
game.load.image('spenta', 'asset/livello 2/SWITCHON-2.png');
//quando si accende
game.load.image('accesa', 'asset/livello 2/switchoff-2.png');



//light instruction
game.load.image('lightinstruction', 'asset/livello 2/turn on the light.png');

//BUIO
game.load.image('buio', 'asset/livello 2/buio.png');


// CASSE MOBILI
game.load.image('cassa2', 'asset/livello 2/cassa.png');


// SACCHI
game.load.image('sacco', 'asset/livello 2/sacco di iuta.png');

//CHECKPOINT
game.load.spritesheet('faro_check', 'asset/livello 2/spritesheet_checkpoint2.png', 164, 314, 2);
game.load.image('checkpoint', 'asset/livello 2/checkpoint.png');

//CAMERINI
game.load.image('camerini', 'asset/livello 2/camerinni.png');
game.load.image('piattaforma_camerini', 'asset/livello 2/piattaforma camerini.png')

//PIATTAFORME camerini
game.load.image('p_camerini', 'asset/livello 2/camerini p1.png');
game.load.image('p_camerini2', 'asset/livello 2/camerini p2.png');

//pianoforte
game.load.image('pianoforte', 'asset/livello 2/pianoforte.png');

//piattaformine varie
game.load.image('lampadario', 'asset/livello 2/lampadario_piano2.png');
game.load.image('lampadario_disegno', 'asset/livello 2/lampadario.png');
game.load.image('acquario', 'asset/livello 2/acquario_piano2.png');
game.load.image('poltrona', 'asset/livello 2/poltrona_piano2.png');
game.load.image('letto', 'asset/livello 2/letto_piano3.png');
game.load.image('mensola', 'asset/livello 2/mensola.png');
game.load.image('antenna', 'asset/livello 2/antenna.png');
game.load.image('tv', 'asset/livello 2/tv.png');

//botola
game.load.spritesheet('botola', 'asset/livello 2/spritesheet botola piano 2.png', 313, 33, 2);

// pavimento botola
game.load.image('pavimentoBotola', 'asset/livello 2/pavimento davanti alla botola.png')

//SCENOGRAFIA piattaforme
game.load.image('aereo', 'asset/livello 2/aereo.png');
game.load.image('aereodisegno', 'asset/livello 2/aereo disegno.png');
game.load.image('luna', 'asset/livello 2/luna.png');
game.load.image('lunadisegno', 'asset/livello 2/luna disegno.png');
game.load.image('macchina', 'asset/livello 2/macchina.png');
game.load.image('macchinadisegno', 'asset/livello 2/carretto disegno.png');
game.load.image('mongolfiera', 'asset/livello 2/mongolfiera.png');
game.load.image('mongolfieradisegno', 'asset/livello 2/mongolfiera disegno.png');
game.load.image('nave', 'asset/livello 2/nave.png');
game.load.image('navedisegno', 'asset/livello 2/barca disegno.png');
game.load.image('nuvola', 'asset/livello 2/nuvola.png');
game.load.image('nuvoladisegno', 'asset/livello 2/nuvola disegno.png');


//scale
game.load.image('scale', 'asset/livello 2/scala frontale.png');
game.load.image('scala_laterale', 'asset/livello 2/scala laterale.png')
game.load.image('piattaformascala', 'asset/livello 2/piattaforma scaletta.png')


//piano2
game.load.image('piano2', 'asset/livello 2/pavimento piu corto.png');


//ARLECCHINO

game.load.spritesheet('scarpe', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/scarpet.png', 24, 37, 6);
game.load.spritesheet('calze', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/calzet.png', 36, 49, 6);
game.load.spritesheet('gambe', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/gambet.png', 24, 58, 6);
game.load.spritesheet('pantaloni', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/pantalonit.png', 56, 49, 6);
game.load.spritesheet('casacca', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/casaccat.png', 61, 76, 6);
game.load.spritesheet('braccia', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/bracciat.png', 38, 47, 6);
game.load.spritesheet('cappello', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/cappellot.png', 41, 47, 6);
game.load.spritesheet('testa', 'asset/livello 2/arlecchinot/animazioni_arlecchinot/testaprofilot.png', 24, 48, 6);

// animazione mangiafuoco
game.load.spritesheet('mangiafuoco', 'asset/livello 2/spritesheet animazione manona con arlecchino.png', 384, 768, 80);
game.load.spritesheet('mangiafuoco2', 'asset/livello 2/spritesheet animazione manona con Pinocchio.png', 384, 768, 80);


//viewport
game.load.image('vignettatura', 'asset/livello 2/viewport/view port con elementi da aggiungere.png');
game.load.image('outline_arlecchino', 'asset/livello 2/viewport/outline arlecchino.png');
game.load.image('arlecchino_glow','asset/livello 2/viewport/outline arlecchino glow.png');
game.load.image('arlecchino_trasparente', 'asset/livello 2/viewport/arlecchinot.png');
game.load.image('pezzo1', 'asset/livello 2/viewport/arlecchino_spezzatino/01.png');
game.load.image('pezzo2', 'asset/livello 2/viewport/arlecchino_spezzatino/02.png');
game.load.image('pezzo3', 'asset/livello 2/viewport/arlecchino_spezzatino/03.png');
game.load.image('pezzo4', 'asset/livello 2/viewport/arlecchino_spezzatino/04.png');
game.load.image('pezzo5', 'asset/livello 2/viewport/arlecchino_spezzatino/05.png');
game.load.image('pezzo6', 'asset/livello 2/viewport/arlecchino_spezzatino/06.png');
game.load.image('pezzo7', 'asset/livello 2/viewport/arlecchino_spezzatino/07.png');
game.load.image('pezzo8', 'asset/livello 2/viewport/arlecchino_spezzatino/08.png');

//VITE
game.load.image('life1', 'asset/mondo_1/cuore_riempimento_1.png');
game.load.image('life2', 'asset/mondo_1/cuore_riempimento_2.png');
game.load.image('life3', 'asset/mondo_1/cuore_riempimento_3.png');
game.load.image('life4', 'asset/mondo_1/cuore_riempimento_4.png');
game.load.image('life5', 'asset/mondo_1/cuore_riempimento_5.png');
game.load.image('life_outline', 'asset/mondo_1/cuori_outline.png');

//PIATTAFORMA GATTONA
game.load.image('overlapGattona', 'asset/livello 2/overlap gattona.png');
game.load.image('overlapNonsaltare', 'asset/livello 2/overlapNonsaltare.png');
game.load.image('rella', 'asset/livello 2/rastrelliiera.png');

//TRAVI
game.load.image('trave', 'asset/livello 2/trave.png');

//RINGHIERA ULTIMO piano
game.load.image('ringhiera', 'asset/livello 2/ringhiera.png')

//casa
game.load.image('casa', 'asset/livello 2/scenografia casa enorme.png');



//-------------------------------------------------------------------------

//MENUSTATE
 game.load.image('immaginesfondo','asset/ASSETMENU/copertina_definitiva.jpg');
 game.load.image('gioca','asset/ASSETMENU/gioca.png');
 game.load.image('storia','asset/ASSETMENU/storia.png');
 game.load.image('autori','asset/ASSETMENU/autori.png');
 game.load.image('titolo','asset/ASSETMENU/avvepinocchio2.png');
 game.load.image('crediti','asset/ASSETMENU/crediti.png');

 //STORIA
 game.load.image('immagine1','asset/ASSETMENU/ASSETSTORIA/1_casageppetto.jpg');
 game.load.image('immagine1t','asset/ASSETMENU/ASSETSTORIA/1_casageppetto_t.jpg');
 game.load.image('immagine2','asset/ASSETMENU/ASSETSTORIA/2_casageppetto.jpg');
 game.load.image('immagine2t','asset/ASSETMENU/ASSETSTORIA/2_casageppetto_t.jpg');
 game.load.image('immagine3','asset/ASSETMENU/ASSETSTORIA/3_facciasorpresa.jpg');
 game.load.image('immagine3t','asset/ASSETMENU/ASSETSTORIA/3_facciasorpresa_t.jpg');
 game.load.image('immagine4','asset/ASSETMENU/ASSETSTORIA/4_fata.jpg');
 game.load.image('immagine4t','asset/ASSETMENU/ASSETSTORIA/4_fata_t.jpg');
 game.load.image('immagine5','asset/ASSETMENU/ASSETSTORIA/5_facciaspaventata.jpg');
 game.load.image('immagine5t','asset/ASSETMENU/ASSETSTORIA/5_facciaspaventata_t.jpg');
 game.load.image('immagine6','asset/ASSETMENU/ASSETSTORIA/6_fuga.jpg');
 game.load.image('immagine6t','asset/ASSETMENU/ASSETSTORIA/6_fuga_t.jpg');

 game.load.image('prevImage', 'asset/ASSETMENU/ASSETSTORIA/prevImage.png');
 game.load.image('nextImage', 'asset/ASSETMENU/ASSETSTORIA/nextImage.png');
game.load.image('exitStoria', 'asset/ASSETMENU/ASSETSTORIA/EXIT.png');



 //AUTORI
 game.load.image('autori_sfondo','asset/ASSETMENU/asset_autori/autori_sfondo.jpg');
 game.load.image('invisibile','asset/ASSETMENU/asset_autori/invisibile.png');
 game.load.image('exit','asset/ASSETMENU/asset_autori/uscita.png');
 game.load.image('alemail','asset/ASSETMENU/asset_autori/mail/alemail.png');
 game.load.image('andremail','asset/ASSETMENU/asset_autori/mail/andremail.png');
 game.load.image('animail','asset/ASSETMENU/asset_autori/mail/animail.png');
 game.load.image('beamail','asset/ASSETMENU/asset_autori/mail/beamail.png');
 game.load.image('camimail','asset/ASSETMENU/asset_autori/mail/camimail.png');
 game.load.image('ceciamail','asset/ASSETMENU/asset_autori/mail/ceciamail.png');
 game.load.image('chiaramail','asset/ASSETMENU/asset_autori/mail/chiaramail.png');
 game.load.image('elmomail','asset/ASSETMENU/asset_autori/mail/elmomail.png');
 game.load.image('martimail','asset/ASSETMENU/asset_autori/mail/martimail.png');
 game.load.image('nancymail','asset/ASSETMENU/asset_autori/mail/nancymail.png');
 game.load.image('pacmail','asset/ASSETMENU/asset_autori/mail/pacmail.png');
 game.load.image('valemail','asset/ASSETMENU/asset_autori/mail/valemail.png');

 //CREDITI
 game.load.image('creditisfondo','asset/ASSETMENU/assetcrediti/sfondocrediti.jpg');



  //TASTO PAUSA
  game.load.image ('pulsante_pausa', 'asset/menu_pausa/tasto_menu_pausa.png');

 //MENU PAUSA
 game.load.image ('menu_pausa', 'asset/menu_pausa/menu_pausa.png');
 game.load.image ('tasto_continua', 'asset/menu_pausa/tasto_continua.png');
 game.load.image ('tasto_menu', 'asset/menu_pausa/tasto_menu.png');

 //blur
 game.load.image('blurgioca','asset/ASSETMENU/blur_gioca.png');
 game.load.image('blurstoria','asset/ASSETMENU/blur_storia.png');
 game.load.image('blurautori','asset/ASSETMENU/blur_autori.png');
 game.load.image('blurcrediti','asset/ASSETMENU/blur_crediti.png');
 game.load.image ('blur_continua', 'asset/menu_pausa/blur_doppio_continua.png');
 game.load.image ('blur_menu', 'asset/menu_pausa/blur_menu.png');







//GAME OVER
game.load.image ('game_over', 'asset/game_over/schermata_game_over.jpg');
game.load.image ('textgame_over', 'asset/game_over/gameover.png');
game.load.image ('blur_gameover', 'asset/game_over/blur_gameover.png');

game.load.image ('riprova_button', 'asset/game_over/riprova_button.png');
game.load.image ('riprova_blur', 'asset/game_over/riprova_button_blur.png');





//Intermezzo --------------------------------------------------------------------------------------------------------------------------------------------------------------------

game.load.image ('terraintermezzo', 'asset/intermezzo/terra_intermezzo.png');
game.load.image ('sfondointermezzo', 'asset/intermezzo/sfondo_intermezzo.png');
game.load.image ('gradino1', 'asset/intermezzo/gradino1.png');
game.load.image ('gradino2', 'asset/intermezzo/gradino2.png');
game.load.image ('gradino3', 'asset/intermezzo/gradino3.png');
game.load.image ('gradino4', 'asset/intermezzo/gradino4.png');
game.load.image ('gradino5', 'asset/intermezzo/gradino5.png');
game.load.image ('gradino6', 'asset/intermezzo/gradino6.png');
game.load.image ('gradino7', 'asset/intermezzo/gradino7.png');


game.load.image ('gradinosu1', 'asset/intermezzo/gradinosu1.png');
game.load.image ('gradinosu2', 'asset/intermezzo/gradinosu2.png');

//DIALOGHI Intermezzo
game.load.image ('dialogo_mangiafuoco_-1', 'asset/intermezzo/dialogo mangiafuoco/puntini mangiafuochini.png');
game.load.image ('dialogo_mangiafuoco_0', 'asset/intermezzo/dialogo mangiafuoco/dialogo mangiafuoco 1.png');
game.load.image ('dialogo_mangiafuoco_1', 'asset/intermezzo/dialogo mangiafuoco/risposta a mangiafuoco.png');
game.load.image ('dialogo_mangiafuoco_2', 'asset/intermezzo/dialogo mangiafuoco/dialogo mangiafuoco 2.png');

//Finale ------------------------------------------------------------------------------------------------------------------------------------------------------------

game.load.image ('sfondofinale', 'asset/vittoria/lunapark.png');
game.load.image ('haivinto', 'asset/vittoria/haivinto.png');
game.load.image ('blur_haivinto', 'asset/vittoria/blur_haivinto.png');




},

create: function() {
  game.stage.backgroundColor = "0x000000";
game.camera.fade(0x000000, 100);


game.camera.onFadeComplete.add(function() {

  if (inizio && !livello1Preso && !fineGioco && !finale1 && !autorimenu && !storiamenu && !intermedio && !slideshow) {

    console.log('menu inizio')

    game.state.start('menustate');
  }

  else if (storiamenu && !finale1 && !autorimenu && !fineGioco && !livello1Preso && !intermedio && inizio && !slideshow) {
      console.log('storia')
    //game.state.start('storiastate');
    game.state.start('storiaManuale');
  }

  else if (autorimenu && inizio && !storiamenu && !finale1 && !fineGioco && !livello1Preso && !intermedio && !slideshow) {
    console.log('autori');

    game.state.start('autoristate');
  }

  else if (!livello1Preso && !fineGioco && !inizio && !finale1 && !storiamenu && !autorimenu && !intermedio && !slideshow) {
      console.log('livello1')
    game.state.start('level1')

  }
  else if (!livello1Preso && !fineGioco && !inizio && !finale1 && !storiamenu && !autorimenu && !intermedio && slideshow) {
      console.log('slideshow')
    game.state.start('slideshowState')

  } else if (livello1Preso && !fineGioco && !inizio && intermedio && !finale1 && !storiamenu && !autorimenu && !slideshow) {
    console.log('intermezzo vai')
    game.state.start('intermezzo')

  } else if (!fineGioco && livello1Preso && !inizio && !intermedio && !finale1 && !storiamenu && !autorimenu && !slideshow) {
    console.log('start2')
    game.state.start('level2')

  } else if (!fineGioco && livello1Preso && !inizio && !intermedio && finale1 && !storiamenu && !autorimenu && !slideshow) {
    console.log('finale')
    game.state.start('finale');
  }


});
}
}
