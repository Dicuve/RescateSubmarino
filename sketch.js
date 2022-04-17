
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bckIMG2;
var explosivo;
var A, B;
var g1, g2, g3, g4, g5, g6, g7, g8, g9, g10;
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10;
var u1;
var b1;
var r1, r2, r3, r4;
var gameState = 1;

function preload(){
  backgroundImg=loadImage("FondoMarino.png");
  bckIMG2 = loadImage ("fondo.jpg");

}


function setup() {
  createCanvas(1536,745);
  engine = Engine.create();
  world = engine.world;
  explosivo = new Bomba (350,100,100,100,200)
  g1 = new Grieta (1200,520,100,100);
  g2 = new Grieta (1150,370,100,100);
  g3 = new Grieta (1275,500,100,100);
  g4 = new Grieta (1150,500,100,100);
  g5 = new Grieta (1200,455,100,100);
  g6 = new Grieta (1230,350,100,100);
  g7 = new Grieta (1285,450,100,100);
  g8 = new Grieta (1145,420,100,100);
  g9 = new Grieta (1250,400,100,100);
  g10 = new Grieta (1100,470,100,100);
  r1 = new Ins (1536/2, 658, 1536, 2);
  r2 = new Ins (1536/2, 87, 1536, 2);
  r3 = new Ins (1, 745/2, 2, 745);
  r4 = new Ins (1536, 745/2, 2, 745);
  u1 = new Union (explosivo.body, {x:300,y:400})


}  


function draw() {

  background(backgroundImg); 
  Engine.update(engine);

  strokeWeight(2);
  stroke("blue");
  fill("red");
  textSize (30);
  text ("Usa el mouse para jalar la mina e impulsarla como catapulta.", 50, 50);
  text ("El buzo desaparece al lanzar la mina por riesgo a la explosión, para volver a lanzar presiona la tecla de espacio.", 20, 695);
  stroke("white");
  textSize (20);
  text ("Eres un rescatista y has recibido una llamada de que unos turistas se atraparon en una cueva submarina que sufrió un derrumbe. ", 50, 150);
  text ("Tira las rocas con tu mina para que salves a las personas!",50, 175);
  stroke("blue");


  // suelo

  r1.display();
  r2.display();
  r3.display();
  r4.display();

  //GRIETA

  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  g7.display();
  g8.display();
  g9.display();
  g10.display();

  //Constraint

  u1.display();

  //Bomba

   explosivo.display();

  //COLISIONES

  Fall(g1,explosivo);
  Fall(g2,explosivo);
  Fall(g3,explosivo);
  Fall(g4,explosivo);
  Fall(g5,explosivo);
  Fall(g6,explosivo);
  Fall(g7,explosivo);
  Fall(g8,explosivo);
  Fall(g9,explosivo);
  Fall(g10,explosivo);
    
}


function C(bodyB){
  	  Matter.Body.setStatic(bodyB.body,false);
  }



function Fall(bodyA,bodyB){
  var b = bodyA.body.position.y - bodyB.body.position.y;
  var a = bodyA.height/2 + bodyB.height/2;

  var c = bodyA.body.position.x - bodyB.body.position.x;
  var d = bodyA.width/2 + bodyB.width/2;

  var e = bodyB.body.position.y - bodyA.body.position.y;
  var f = bodyA.height/2 + bodyB.height/2;

  var g = bodyB.body.position.x - bodyA.body.position.x;
  var h = bodyA.width/2 + bodyB.width/2;
  
  if  ( b < a && c < d && e < f && g < h){
    C(bodyA);
  }

}

function mouseDragged (){
  if (explosivo.body.position.x < 1000){
  Matter.Body.setPosition(explosivo.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  u1.suelta();

}

function keyPressed(){
  if(keyCode === 32  && explosivo.body.speed < 3){
      Matter.Body.setPosition(explosivo.body,{x:200,y:400});
     u1.attach(explosivo.body);
  }
}

