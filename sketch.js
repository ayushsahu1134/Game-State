var canvas,backgroundImage;

var gameState = 0;
var playerCount=0;
var database;

var form,player,game;


function setup(){
    createCanvas(500,500);
database=firebase.database();
game=new Game();
    game.getState();
    game.start();


   
    dbball = createSprite(250,250,10,10);
    dbball.shapeColor = "red";
}

function draw(){
    background("blue");
if (playerCount == 4){
    game.updateState(1)
    
    if(gameState===1){
        clear();
        game.play();
    }

}

}






