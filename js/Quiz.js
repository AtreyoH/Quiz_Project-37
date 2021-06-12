class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  updateState(state){
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
    
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
    var resultTitle=createElement("h2")
    resultTitle.html("Result Of Quiz")
    resultTitle.position(350, 0,)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      var display_position = 300;
      fill("blue")
      textSize(20)
      text("*NOTE:Contestant who answered correctly are highlighed in green color",100,250)
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer){
          fill("green")
        }
        else{
          fill("red")
        }
        textSize(20)
        text(allContestants[plr].name+": "+allContestants[plr].answer,250,display_position)
        display_position+=25;   
      }
    }  
  }
}
