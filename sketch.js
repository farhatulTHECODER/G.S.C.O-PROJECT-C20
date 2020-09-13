var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

//CREATING THE CAR OBJECT
car = createSprite(50,200,50,50);
 
//CREATING THE WALL OBJECT
wall = createSprite(750,200,30,200);

}

/*ALL THE FUNCTIONS
     ARE DRAWN INSIDE IT*/ 
  function draw() {

    //SETTING THE BACKGROUND
  background(255,255,255);  

  //SHAPE COLOR
  wall.shapeColor = color(80,80,80);

car.velocityX=speed;

  if (wall.x-car.x< (car.width+wall.width)/2) {
    car.velocityX=0;
   var deformation=0.5*width*speed*speed/22509;

   if (deformation>180){
     car.shapeColor=color(225,0,0);
   }
   if (deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
   }
   
   if (deformation<100){
     car.shapeColor=color(0,225,0);
   }



  }

drawSprites();
}

/* ####  #         #   #
   #    # #           #
   ##  # # #      ( #
   #  #     #         ## )
   #              ( #
    */