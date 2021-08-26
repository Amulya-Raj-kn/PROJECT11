
//define or call all the object names here
var trex ,trexImg ;
var canvas;
var ground , groundImg;

//load all the sounds and animation or images here.
function preload()
{
   trexImg = loadAnimation ("trex1.png","trex3.png","trex4.png");
   groundImg = loadImage ("ground2.png")
}

//give the object location and display the animation here
function setup()
{
   canvas = createCanvas(400,400);

   trex = createSprite(200,200,50,50);
   trex.addAnimation("trex",trexImg);

   ground = createSprite(0,250,400,10);
   ground.addImage("ground",groundImg);


}

//which ever functions or conditions have to be executed infinite times 
function draw()
{
   drawSprites();
}