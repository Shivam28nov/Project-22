// variable sprites

var starImg,bgImg;
var star, starBody;

//create variable for fairy sprite and fairyImg
var fairy,fairyAni;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// create variable for music
var music


function preload(){

	// loading Images
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");

	//load animation for fairy here
	fairyAni = loadAnimation("fairyImage1.png","fairyImage2.png");

	// load Sound
    music = loadSound("JoyMusic.mp3");

}


function setup() {

	// crating canvas
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    music.play();


	//create fairy sprite and add animation for fairy
    fairy = createSprite(375,520,20,20);
	fairy.addAnimation("fairy",fairyAni);
	fairy.scale = 0.2;

	//create star sprite and add animation for star
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	// to update engine
	Engine.run(engine);

}


function draw() {

  // create background
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //code to stop star in the hand of fairy
  if ( star.y > 470 && starBody.position.y > 470 ){

		Matter.Body.setStatic(starBody,true); 
       
  }

  // to draw sprites
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW){
          fairy.x = fairy.x-20;
	}


	if (keyCode === RIGHT_ARROW){
          fairy.x = fairy.x+20;
	}


}
