"use strict";

//variables personales 
var chica, chicaC, chicaM, chicaAtras, chicaTira, chicaNeutra, chicaAbajo;
var zombie1, zombieI1, zombieG1;
var zombie2, zombieI2, zombieT2, zombieG2;
var zombie3, zombieT3, zombieG3;
var zombie4, zombieT4, zombieG4; //variables de historia

var historia, play, playI, ima0, ima1, ima2, ima3, ima4, ima5, ima6, ima7, ima8, ima9, ima10, ima105, ima11, ima12, ima13, ima14, ima15, ima16, ima17, ima18, ima19, ima20, ima21, ima22, ima22, ima23, ima24, ima25, ima26, ima27; //variables estados

var estadoNivel, estadoHistoria, estadoJuego1, estadoJuego2, estadoJuego3, estado;
estadoHistoria = 1;
estadoNivel = 1;
estado = 0; //variables fondos

var fondo1, fondo2, fondo3, fondoi1, fondoi2, fondoi3; //variables objetos del nivel 1

var arbol, arbolI, rama, ramaI;
var flecha, flechaI;
var ramaG, flechaG, arbolG; // variable de objetos del nivel 2

var cura, curaI;
var plasma, plasmaI, plasmaG;
var moco, mocoI, mocoG; // variables de objetos del nivel 3

var torre, torreI;
var bala, balaI, balaG;
var bullet, bulletI, bulletG, bullet2, bulletI2, bulletG2; // objeto de suelo 

var sueloI; // imagen de perdiste 

var perdiste, perdisteI; // contadores y valores utiles del nivel 1

var score; // contadores y valores utiles del nivel 2

var contador, estadoT, r;
contador = 5;
var estadoSalto1;
estadoSalto1 = 1;
var vidaZ1;
vidaZ1 = 3;
var estadop;
estadop = 2;
var estadoTex;
estadoTex = 0; // contadores y valores utiles del nivel 3

var estadoT2, estadoTex2;
var contador2;
contador2 = 6;
var estadoSalto2;
estadoSalto2 = 1;
var vidaZ3, vidaZ4;
vidaZ3 = 3;
vidaZ4 = 3; // variables de sonidos

var Shistorias, ShistoriaF, SNnivel3, Snivel1, Snivel2, grillosS, buhoS;
var charge, spit, shootG, shootZ, perdi;
var estadoC;
estadoC = 1;
var f;

function preload() {
  ima0 = loadAnimation("I1.PNG");
  ima1 = loadAnimation("niña1.png");
  ima2 = loadAnimation("asteroide1.PNG");
  ima3 = loadAnimation("asteroide2.PNG");
  ima4 = loadAnimation("asteroide3.PNG");
  ima5 = loadAnimation("humanos1.PNG");
  ima6 = loadAnimation("genetica.jpeg");
  ima7 = loadAnimation("humano2.jpeg");
  ima8 = loadAnimation("humanos3.JPG");
  ima9 = loadAnimation("niña2.png");
  ima10 = loadAnimation("cura1.PNG");
  ima105 = loadAnimation("ppistola.PNG");
  ima11 = loadAnimation("niña3.png");
  ima12 = loadAnimation("Zombie1.PNG");
  ima13 = loadAnimation("instrucciones1.PNG"); //historia 2

  ima14 = loadAnimation("chicagane1.PNG");
  ima15 = loadAnimation("zombieP2.PNG");
  ima16 = loadAnimation("zombie3.PNG");
  ima17 = loadAnimation("instrucciones2.PNG"); // historia 3

  ima18 = loadAnimation("niña5.PNG");
  ima19 = loadAnimation("niña4.PNG");
  ima20 = loadAnimation("nivel3p1.PNG");
  ima21 = loadAnimation("nivel3p2.PNG");
  ima22 = loadAnimation("instrucciones3.PNG"); // historia 4

  ima23 = loadAnimation("niña6.PNG");
  ima24 = loadAnimation("niña.PNG");
  ima25 = loadAnimation("salvados1.PNG");
  ima26 = loadAnimation("salvados2.JPG");
  ima27 = loadAnimation("niñaF.png");
  playI = loadImage("play.png"); // imagenes de fondos

  fondoi1 = loadImage("fondo funcionaF.jpg");
  fondoi2 = loadImage("fondo2.jpg");
  fondoi3 = loadImage("fondo3.jpg"); //imagenes de chica 

  chicaC = loadAnimation("chica corriendo .gif");
  chicaM = loadImage("chicamuerta.png");
  chicaAtras = loadAnimation("chicaRB.png", "chicaRB2.png", "chicaRB3.png");
  chicaTira = loadAnimation("chicaTB.png");
  chicaNeutra = loadAnimation("chicaNB.png");
  chicaAbajo = loadAnimation("chicaA (2).png");
  zombieI1 = loadAnimation("zombie bueno corriendo.gif");
  zombieG1 = loadImage("zombieGane.jpg");
  zombieI2 = loadAnimation("Z1.png", "Z2b.png");
  zombieT2 = loadAnimation("Z3 .png", "Z3 .png", "Z3 .png", "Z3 .png", "Z3 .png");
  zombieG2 = loadAnimation("acab.png");
  zombieI3 = loadAnimation("zb1.png", "zb2.png");
  zombieI4 = loadAnimation("zr1.png", "zr2.png");
  zombieT3 = loadAnimation("zb3.png");
  zombieT4 = loadAnimation("Z3 (3).png"); // objetos del nivel 1

  arbolI = loadImage("arbol.png");
  ramaI = loadImage("rama.png");
  flechaI = loadImage("flecha verde.png"); //objetos del nivel 2

  plasmaI = loadImage("AIP.png");
  curaI = loadImage("cura.png");
  mocoI = loadImage("moco.PNG"); // objetos del nivel 3   

  torreI = loadImage("torre.png");
  balaI = loadImage("bolaN.png");
  bulletI = loadImage("bola.png");
  bulletI2 = loadImage("bola2.png"); // imagen de perdiste

  perdisteI = loadAnimation("perdiste.gif"); // carga de sonidos 
  // Shistorias = loadSound  ("historiasBien4.mp3");
  // ShistoriaF = loadSound  ("finaSBien3.mp3"); 
  //   Snivel1 = loadSound  ("B1.mp3"); 
  // Snivel2 = loadSound  ("B2.mp3");
  // Snivel3 = loadSound  ("B3.mp3");
  // charge = loadSound  ("ScargaBien3.mp3");
  // spit = loadSound  ("escupitajoBien3.mp3");
  //  shootG = loadSound  ("SpistolaNBien3.mp3");
  //shootZ = loadSound  ("SpistolaZBien3.mp3"); 
  //perdi = LoadSound ("perdiS.mp3");
}

function setup() {
  createCanvas(935, 400);
  historia = createSprite(467, 200);
  historia.addAnimation("imag0", ima0);
  historia.addAnimation("imag1", ima1);
  historia.addAnimation("imag2", ima2);
  historia.addAnimation("imag3", ima3);
  historia.addAnimation("imag4", ima4);
  historia.addAnimation("imag5", ima5);
  historia.addAnimation("imag6", ima6);
  historia.addAnimation("imag7", ima7);
  historia.addAnimation("imag8", ima8);
  historia.addAnimation("imag9", ima9);
  historia.addAnimation("imag10", ima10);
  historia.addAnimation("imag105", ima105);
  historia.addAnimation("imag11", ima11);
  historia.addAnimation("imag12", ima12);
  historia.addAnimation("imag12", ima12);
  historia.addAnimation("imag13", ima13); // historia 2

  historia.addAnimation("imag14", ima14);
  historia.addAnimation("imag15", ima15);
  historia.addAnimation("imag16", ima16);
  historia.addAnimation("imag17", ima17); // historia 3

  historia.addAnimation("imag18", ima18);
  historia.addAnimation("imag19", ima19);
  historia.addAnimation("imag20", ima20);
  historia.addAnimation("imag21", ima21);
  historia.addAnimation("imag22", ima22); // historia 4

  historia.addAnimation("imag23", ima23);
  historia.addAnimation("imag24", ima24);
  historia.addAnimation("imag25", ima25);
  historia.addAnimation("imag26", ima26);
  historia.addAnimation("imag27", ima27);
  historia.scale = 0.7; // setup de los fondos 

  fondo1 = createSprite(934, 200);
  fondo1.addImage(fondoi1); //fondo1.scale = ;

  fondo2 = createSprite(467, 200);
  fondo2.addImage(fondoi2);
  fondo2.scale = 2.2;
  fondo3 = createSprite(467, 200);
  fondo3.addImage(fondoi3);
  fondo3.scale = 2.2;
  perdiste = createSprite(467, 200);
  perdiste.addAnimation("perdi", perdisteI);
  chica = createSprite(450, 360);
  chica.addAnimation("corriendo", chicaC);
  chica.addAnimation("muerta", chicaM);
  chica.addAnimation("reversa", chicaAtras);
  chica.addAnimation("tira", chicaTira);
  chica.addAnimation("quieta", chicaNeutra);
  chica.addAnimation("down", chicaAbajo);
  chica.scale = 0.5;
  zombie1 = createSprite(70, 280);
  zombie1.addAnimation("corriendo", zombieI1);
  zombie1.addAnimation("gane", zombieG1);
  zombie1.scale = 0.4;
  zombie1.setCollider("rectangle", 0, 90, 300, 400);
  zombie2 = createSprite(850, 310);
  zombie2.addAnimation("caminando", zombieI2);
  zombie2.addAnimation("gano", zombieG2);
  zombie2.scale = 0.3;
  zombie2.setCollider("rectangle", 0, 90, 300, 400);
  zombie3 = createSprite(740, 300);
  zombie3.addAnimation("shoot1", zombieI3);
  zombie3.scale = 0.4;
  zombie3.addAnimation("tirando", zombieT3);
  zombie4 = createSprite(380, 320);
  zombie4.addAnimation("shoot2", zombieI4);
  zombie4.scale = 0.3;
  zombie4.addAnimation("tirando", zombieT4); // setup del perdiste
  // setup de los elementos del primer nivel

  ramaG = createGroup();
  flechaG = createGroup();
  arbolG = createGroup(); // objetos del segundo nivel

  cura = createSprite(900, 360);
  cura.addImage(curaI);
  cura.scale = 0.05;
  mocoG = createGroup();
  plasmaG = createGroup(); // objetos del tercer nivel

  balaG = createGroup();
  bulletG = createGroup();
  bulletG2 = createGroup();
  torre = createSprite(860, 210);
  torre.addImage(torreI);
  torre.scale = 0.45; // setup del suelo

  sueloI = createSprite(467, 400, 935, 5);
  sueloI.visible = false;
  score = 0;
}

function draw() {
  background(0);

  if (estadoNivel === 1) {
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;
    chica.visible = false;
    perdiste.visible = false;
    fondo1.visible = false;
    fondo2.visible = false;
    fondo3.visible = false;
    cura.visible = false;
    torre.visible = false;

    if (estadoHistoria === 1) {
      historia1();
    } // inicia nivel 1


    if (estadoJuego1 === 1) {
      fondo1.visible = true;
      zombie1.visible = true;
      chica.visible = true;
      fondo1.velocityX = -15; // -(15 + score/100)
      // score = score + Math.round(getFrameRate()/60);
      // console.log (score);

      if (fondo1.x < 0) {
        fondo1.x = 935;
      }

      if (keyDown("space") && chica.y >= 360) {
        chica.velocityY = -17.79;
      }

      chica.velocityY = chica.velocityY + 1;
      aparecerObstaculos(); // flechas ();
      //arboles ();
      // ramas ();

      console.log(chica.scale);

      if (ramaG.isTouching(chica)) {
        chica.changeAnimation("muerta", chicaM);
        chica.x = chica.x - 4;
        chica.scale = 0.37;
      } else {
        chica.changeAnimation("corriendo", chicaC);
        chica.scale = 0.5;
      }

      if (ramaG.isTouching(chica) && keyDown("space") && chica.y >= 360) {
        chica.y = chica.y;
      }

      if (chica.isTouching(flechaG)) {
        chica.x = chica.x + 10;
      }

      if (arbolG.isTouching(chica)) {
        estadoJuego1 = 0;
        chica.scale = 0.37;
      }

      if (zombie1.isTouching(chica)) {
        estadoJuego1 = 0;
      }
    }

    if (estadoJuego1 === 0) {
      chica.y = 360;
      perdiste.scale = 2;
      score = 0;
      perdiste.visible = true;
      fondo1.visible = false;
      perdiste.depth = chica.depth;
      chica.depth = chica.depth + 1;
      perdiste.depth = zombie1.depth;
      zombie1.depth = zombie1.depth + 1;
      chica.changeAnimation("muerta", chicaM);
      zombie1.changeAnimation("gane", zombieG1);
      ramaG.destroyEach();
      arbolG.destroyEach();
      flechaG.destroyEach();

      if (mousePressedOver(perdiste)) {
        reset1();
      }
    }

    if (chica.x >= 550) {
      estadoNivel = 2;
      flechaG.destroyEach();
      ramaG.destroyEach();
      arbolG.destroyEach();
      historia.changeAnimation("imag14", ima14);
      historia.scale = 1.3;
    }
  } // se inicia el nivel 2


  if (estadoNivel === 2) {
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;
    chica.visible = false;
    perdiste.visible = false;
    fondo1.visible = false;
    fondo2.visible = false;
    fondo3.visible = false;
    cura.visible = false;
    torre.visible = false;

    if (estadoHistoria === 2) {
      historia2();
      chica.x = 100; // Shistorias.play ();
    }

    if (estadoJuego2 === 1) {
      //    Snivel2.play();
      chica.changeAnimation("quieta", chicaNeutra);
      b = createEdgeSprites();
      chica.bounce(b);
      zombie2.changeAnimation("corriendo", zombieI1);
      estadoTex = 1;
      chica.visible = true;
      zombie2.visible = true;
      fondo2.visible = true;
      cura.visible = true;

      if (keyDown("RIGHT_ARROW")) {
        chica.changeAnimation("corriendo", chicaC);
        chica.x = chica.x + 8;
        chica.scale = 0.85;
      } else {
        chica.changeAnimation("quieta", chicaNeutra);
        chica.scale = 0.22;
      }

      if (keyDown("LEFT_ARROW")) {
        chica.changeAnimation("reversa", chicaAtras);
        chica.x = chica.x - 8;
        chica.scale = 0.6;
      }

      if (keyDown("space") && chica.y > 330) {
        chica.velocityY = -17;
      }

      chica.velocityY = chica.velocityY + 0.8;

      if (frameCount % 130 === 0) {
        estadoT = 1;
      } else {
        estadoT === 0;
      }

      if (estadoT === 0) {
        r = "recargando arma";
      }

      if (estadoT === 1) {
        r = "arma cargada";
      }

      if (estadoT === 1 && keyIsDown(UP_ARROW) && contador >= 1) {
        //    shootG.play ();
        chica.changeAnimation("tira", chicaTira);
        chica.scale = 0.36;
        gun();
        estadoT = 0;
      }
      /*    if (estadoT === 1)
          {
            for (var i = 0; i >= 2; i++)
            {
              charge.play ();
            }
          }*/


      if (zombie2.x <= 700) {
        zombie2.velocityX = 2;
      }

      if (zombie2.x >= 850) {
        zombie2.velocityX = -2;
      }

      if (estadoSalto1 === 1) {
        zombie2.setCollider("rectangle", 0, 0, 1500, 520);

        if ((contador === 4 || contador === 3) && plasmaG.isTouching(zombie2)) {
          zombie2.velocityY = -15;
        }

        if (contador === 2 && plasmaG.isTouching(zombie2)) {
          zombie2.setCollider("rectangle", 0, 0, 470, 520);
          estadoSalto1 = 2;
        }
      }

      if (estadoSalto1 === 2) {
        if ((contador === 2 || contador === 1 || contador === 0) && plasmaG.collide(zombie2)) {
          vidaZ1 = vidaZ1 - 1;
          plasmaG.destroyEach();
        }
      }

      if (vidaZ1 != 0) {
        sustancia();
        discurso1();
      }

      if (contador === 0 && vidaZ1 === 0) {
        estadop = 3;
        zombie2.lifetime = 1;
      }

      zombie2.velocityY = zombie2.velocityY + 1;

      if (mocoG.isTouching(chica)) {
        estadoJuego2 = 0;
      }

      if (zombie2.isTouching(chica)) {
        estadoJuego2 = 0;
      }
    }

    if (estadoJuego2 === 0 && (contador === 4 || contador === 2)) {
      zombie2.velocityY = 0;
    }

    if (estadoJuego2 === 0) {
      chica.y = 360;
      perdiste.visible = true;
      perdiste.scale = 2;
      mocoG.destroyEach();
      plasmaG.destroyEach();
      perdiste.depth = chica.depth;
      chica.depth = chica.depth + 1;
      perdiste.depth = zombie2.depth;
      zombie2.depth = zombie2.depth + 1;
      zombie2.velocityX = 0;
      zombie2.x = zombie2.x;
      zombie2.setCollider("rectangle", 0, 0, 450, 600);
      zombie2.changeAnimation("gano", zombieG2);
      zombie2.scale = 0.25;
      chica.changeAnimation("muerta", chicaM);
      chica.scale = 1;

      if (mousePressedOver(perdiste)) {
        reset2();
      }
    }

    if (chica.isTouching(cura)) {
      estadoNivel = 3;
      estadoTex = 0;
      historia.changeAnimation("imag18", ima18);
      historia.scale = 0.7;
      mocoG.destroyEach();
    }
  }

  if (estadoNivel === 3) {
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;
    chica.visible = false;
    perdiste.visible = false;
    fondo1.visible = false;
    fondo2.visible = false;
    fondo3.visible = false;
    cura.visible = false;
    torre.visible = false;

    if (estadoHistoria === 3) {
      historia3();
      chica.x = 100; //    Shistorias.play ();
    }

    if (estadoJuego3 === 1 && estado === 23) {
      //  Snivel3.play ();
      chica.changeAnimation("quieta", chicaNeutra);
      b = createEdgeSprites();
      chica.bounce(b);
      zombie3.changeAnimation();
      estadoTex2 = 1;
      torre.visible = true;
      zombie3.visible = true;
      zombie4.visible = true;
      chica.visible = true;
      fondo3.visible = true;

      if (keyDown("RIGHT_ARROW")) {
        chica.changeAnimation("corriendo", chicaC);
        chica.x = chica.x + 8;
        chica.scale = 0.85;
      } else {
        chica.changeAnimation("quieta", chicaNeutra);
        chica.scale = 0.22;
      }

      if (keyDown("LEFT_ARROW")) {
        chica.changeAnimation("reversa", chicaAtras);
        chica.x = chica.x - 8;
        chica.scale = 0.6;
      }

      if (keyDown("DOWN_ARROW")) {
        chica.changeAnimation("down", chicaAbajo);
        chica.scale = 0.6;
      }

      if (keyDown("space") && chica.y >= 330) {
        chica.velocityY = -16;
      }

      chica.velocityY = chica.velocityY + 1;

      if (frameCount % 90 === 0) {
        estadoT2 = 1;
      } else {
        estadoT2 === 0;
      }

      if (estadoT2 === 0) {
        r = "recargando arma";
      }

      if (estadoT2 === 1) {
        r = "arma cargada";

        if (keyIsDown(UP_ARROW) && contador2 >= 1) {
          chica.changeAnimation("tira", chicaTira); //   shootG.play ();

          chica.scale = 0.36;
          balaN();
          estadoT2 = 0;
        }
      }

      if (zombie3.x <= 640) {
        zombie3.velocityX = 2;
      }

      if (zombie3.x >= 740) {
        zombie3.velocityX = -2;
      }

      if (vidaZ3 >= 1 && vidaZ4 >= 1) {
        if (zombie4.x <= 380) {
          zombie4.velocityX = 2;
        }

        if (zombie4.x >= 480) {
          zombie4.velocityX = -2;
        }

        disparoN3();
      }

      zombie3.debug = true;
      zombie4.debug = true;
      zombie4.setCollider("rectangle", 0, 0, 800, 600);

      if ((contador2 === 5 || contador2 === 4 || contador2 === 3) && balaG.isTouching(zombie4)) {
        zombie4.velocityY = -20;
        zombie4.velocityX = 1;
      }

      zombie4.velocityY = zombie4.velocityY + 1;

      if ((contador2 === 5 || contador2 === 4 || contador2 === 3) && balaG.isTouching(zombie3)) {
        //  estadoSalto2 = 2
        //  zombie3.setCollider ("rectangle", 0, 0, 200, 500)
        balaG.destroyEach();
        vidaZ3 = vidaZ3 - 1; //  console.log (vidaz2);
        // console.log  (contador);
      }

      if (vidaZ3 === 0) {
        bulletG.destroyEach();
        zombie3.lifetime = 1;
        zombie4.setCollider("rectangle", 0, 0, 450, 500);

        if (zombie4.x <= 380) {
          zombie4.velocityX = 2;
        }

        if (zombie4.x >= 780) {
          zombie4.velocityX = -2;
        }

        balaD();
        cambioD();
      }

      if ((contador2 === 2 || contador2 === 1 || contador2 === 0) && balaG.isTouching(zombie4)) {
        balaG.destroyEach();
        vidaZ4 = vidaZ4 - 1;
      }

      if (vidaZ4 === 0) {
        bulletG2.destroyEach();
        zombie4.lifetime = 1;
      }

      if (vidaZ3 === 0 && vidaZ4 === 0) {
        _final();
      } //  bullet3();
      //  discurso3();
      //  bullet4();
      //  discurso4();


      if (bulletG.isTouching(chica)) {
        estadoJuego3 = 0;
      }

      if (bulletG2.isTouching(chica)) {
        estadoJuego3 = 0;
      }

      if (zombie3.isTouching(chica)) {
        estadoJuego3 = 0;
      }

      if (zombie4.isTouching(chica)) {
        estadoJuego3 = 0;
      }
    }

    if (estadoJuego3 === 0 && estado === 23) {
      chica.y = 360;
      perdiste.visible = true;
      perdiste.scale = 2;
      fondo3.visible = false;
      bulletG.destroyEach();
      bulletG2.destroyEach();
      chica.changeAnimation("muerta", chicaM); // zombie3.velocityX = 0;
      // zombie4.velocityY = 0; 
    }

    if (mousePressedOver(perdiste)) {
      reset3();
    }

    if (chica.isTouching(torre)) {
      estadoNivel = 4;
      estadoTex2 = 0;
      historia.changeAnimation("imag23", ima23);
      historia.scale = 0.4; //  ShistoriaF.play ();
    }
  }

  if (estadoNivel === 4) {
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;
    chica.visible = false;
    perdiste.visible = false;
    fondo1.visible = false;
    fondo2.visible = false;
    fondo3.visible = false;
    cura.visible = false;
    torre.visible = false;

    if (estadoHistoria === 4) {
      // console.log (estado);
      historia4(); //   ShistoriaF.play ();
    }
  }

  drawSprites();
  chica.collide(sueloI);
  zombie2.collide(sueloI);
  zombie3.collide(sueloI);
  zombie4.collide(sueloI);

  if (contador === 0) {
    r = "sin balas";
  }

  if (estadoTex === 1) {
    textSize(20);
    stroke("black");
    text("balas: " + contador + ", " + r, 120, 50);
  }

  if (estadoTex2 === 1) {
    textSize(20);
    stroke("black");
    text("balas: " + contador2 + ", " + r, 120, 50);
  }

  if (frameCount % 130 === 0 && estadoC === 1) {
    estadoC = 2;
  } else {
    estadoC = 0;
  }

  if (estadoT === 1 && estadoC === 2) {
    estadoC = 100;
  }

  zombie3.changeAnimation("shoot1", zombieI3);
  zombie4.changeAnimation("shoot2", zombieI4);
} // funciones del nivel 1


function reset1() {
  estadoJuego1 = 1;
  chica.x = 450;
  perdiste.visible = false;
  fondo1.visible = true;
  chica.changeAnimation("corriendo", chicaC);
  zombie1.changeAnimation("corriendo", zombieI1);
}

function ramas() {
  /*   if ( frameCount % cuadrosR === 0 )
     {*/
  rama = createSprite(width, 375);
  rama.addImage(ramaI);
  rama.velocityX = -15;
  rama.setCollider("rectangle", -13, 0, 400, 150);
  rama.scale = 0.2; //  rama.debug = true;

  rama.lifetime = 95;
  chica.depth = rama.depth;
  rama.depth = rama.depth + 1;
  ramaG.add(rama); //console.log (rama.velocityX)
  //  }
}

function arboles() {
  // if ( frameCount % cuadrosA  === 0 )
  // {
  arbol = createSprite(width, 350);
  arbol.addImage(arbolI); // para el pino         arbol.scale = 0.16;
  // para el arbol es         arbol.scale = 0.2

  arbol.scale = 0.18;
  arbol.velocityX = -15;
  arbol.lifetime = 95;
  arbolG.add(arbol);
  arbol.debug = true;
  arbol.setCollider("rectangle", 0, 0, 490, 650); // console.log (arbol.velocityX);
  // }
}

function flechas() {
  // el numero final decisivo y que no puedes cambiar es 280
  // if ( frameCount % 10 === 0 )
  //{
  flecha = createSprite(width, 375);
  flecha.addImage(flechaI);
  flecha.scale = 0.08; //   flecha.debug = true;

  flecha.velocityX = -15;
  flecha.lifetime = 95;
  chica.depth = flecha.depth;
  flecha.depth = flecha.depth + 1;
  flechaG.add(flecha);
  flecha.setCollider("circle", 0, 0, 400); //console.log (flecha.velocityX);
  // }
}

function aparecerObstaculos() {
  if (frameCount % 42 === 0) {
    var rand = Math.round(random(1, 3));

    switch (rand) {
      case 1:
        arboles();
        break;

      case 2:
        ramas();
        break;

      case 3:
        flechas();
        break;

      default:
        break;
    }
  }
} //funciones del nivel 2


function reset2() {
  estadoJuego2 = 1;
  perdiste.visible = false;
  fondo2.visible = true;
  chica.x = 135;
  zombie2.x = 850;
  vidaZ1 = 3;
  chica.changeAnimation("corriendo", chicaC);
  zombie2.changeAnimation("caminando", zombieI2);
  estadoT = 0;
  contador = 5;
}

function gun() {
  contador = contador - 1;
  plasma = createSprite(chica.x + 60, chica.y - 50);
  plasma.addImage(plasmaI);
  plasma.velocityX = 15;
  plasma.scale = 0.03;
  plasmaG.add(plasma);
}

function sustancia() {
  if (frameCount % 80 === 0) {
    // spit.play ();
    moco = createSprite(zombie2.x, zombie2.y - 40);
    moco.addImage(mocoI);
    moco.velocityX = -25;
    moco.scale = 0.05;
    mocoG.add(moco);
  }
}

function discurso1() {
  if (frameCount % 80 === 0) {
    zombie2.addAnimation("tirando", zombieT2);
    zombie2.changeAnimation("tirando", zombieT2);
  } else {
    zombie2.changeAnimation("caminando", zombieI2);
  }
} // funciones del niveln 3


function balaN() {
  contador2 = contador2 - 1;
  bala = createSprite(chica.x + 60, chica.y - 50);
  bala.addImage(balaI);
  bala.velocityX = 12;
  bala.scale = 0.03;
  balaG.add(bala);
}

function bullet3() {
  //59
  //  if (frameCount % 59 === 0)
  // {
  // shootZ.play ();
  bullet = createSprite(zombie3.x - 80, zombie3.y - 20);
  bullet.addImage(bulletI);
  bullet.velocityX = -15;
  bullet.scale = 0.05;
  bulletG.add(bullet); // }
}

function discurso3() {
  if (frameCount % 59 === 0) {
    zombie3.addAnimation("tirando", zombieT3);
    zombie3.changeAnimation("tirando", zombieT3);
  } else {
    zombie3.changeAnimation("shoot1", zombieI3);
  }
}

function bullet4() {
  //131
  // if (frameCount % 133 === 0){
  //  shootZ.play ();
  bullet2 = createSprite(zombie4.x - 90, zombie4.y - 30);
  bullet2.addImage(bulletI2);
  bullet2.velocityX = -12;
  bullet2.velocityY = 2;
  bullet2.scale = 0.05;
  bulletG2.add(bullet2); //}
}

function balaD() {
  //131
  if (frameCount % 45 === 0) {
    //  shootZ.play ();
    bullet2 = createSprite(zombie4.x - 90, zombie4.y - 30);
    bullet2.addImage(bulletI2);
    bullet2.velocityX = -12;
    bullet2.velocityY = 2;
    bullet2.scale = 0.05;
    bulletG2.add(bullet2);
  }
}

function cambioD() {
  if (frameCount % 45 === 0) {
    zombie4.addAnimation("tirando", zombieT4);
    zombie4.changeAnimation("tirando", zombieT4);
  } else {
    zombie4.changeAnimation("shoot2", zombieI4);
  }
}

function discurso4() {
  if (frameCount % 127 === 0) {
    zombie4.addAnimation("tirando", zombieT4);
    zombie4.changeAnimation("tirando", zombieT4);
  } else {
    zombie4.changeAnimation("shoot2", zombieI4);
  }
}

function disparoN3() {
  if (frameCount % 35 === 0) {
    var rand2 = Math.round(random(1, 2));

    switch (rand2) {
      case 1:
        bullet3();
        zombie3.changeAnimation("tirando", zombieT3);
        break;

      case 2:
        bullet4();
        zombie4.changeAnimation("tirando", zombieT4);
        break;

      default:
        break;
    }
  }
}

function reset3() {
  estadoJuego3 = 1;
  perdiste.visible = false;
  chica.x = 100;
  chica.changeAnimation("corriendo", chicaC);
  zombie3.changeAnimation("shoot1", zombieI3);
  zombie4.changeAnimation("shoot2", zombieI4);
  contador2 = 7;
}

function _final() {
  f = createSprite(0, 400);
  f.scale = 0.001;
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}