var database;
var game, form, player;
var gameState, playerCount, allPlayerInformation;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  gameState = 0;

  game = new Game();
  game.getGameState();
  game.createForm();
}

function draw(){

}
