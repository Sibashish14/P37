class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
     var result = createElement('h1');
     result.html("Result of the quiz");
     result.position(width/3,40);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      for(var plr in allContestants){
        var correctAns="4";
        if(correctAns === allContestants[plr].answer){
          fill("green");
          textSize(15);
          text(allContestants[plr].name+":"+allContestants[plr].answer,220,285); 
        }
        else{
          fill("red");
          textSize(15);
          text(allContestants[plr].name+":"+allContestants[plr].answer,215,335); 
        }
        fill(0);
    textSize(15);
    text("*Note: The ones who answered correctly and ones who answered wrongly are marked in green and red respectively",40,230);
       
      }
    }
  }

    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
   
    //write code to highlight contest who answered correctly
    
  }


