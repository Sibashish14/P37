var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz,tryAgain;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
    
   tryAgain = createButton("Try again");
   tryAgain.position(369,385);
   tryAgain.mousePressed(changeState);
  }
  console.log(mouseX,mouseY);
}
function changeState(){
  quiz.update(0);
}