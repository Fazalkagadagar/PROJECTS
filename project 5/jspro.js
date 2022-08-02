// GENERATE A RANDOM NUMBER BETWEEN 1 AND 50 //💋
const generateRandomNumber = (max) => {
    const randomNumber = Math.random()*max+1 ;
    const number = Math.floor(randomNumber) ;
    return number;
  }
   let luckynumber= generateRandomNumber(50);
   
//   RESET OF THE GAME AGAIN BUTTON
    const resetGame = () => {
      luckynumber= generateRandomNumber(50);
      score = 20;
      scorecard.textContent = score;
      message.textContent = "START GUESSING...😜";
      emojibox.textContent = "🤨";
      userInputFlied.value = "0";
    }
   const resetButton = document.getElementById("again");
// TAKE INPUT FROM USER // 🔎
const userInputFlied=document.getElementById('user-input');

// GRAB THE MESSGAE TO SHOW THE RESULT //  
   const message = document.getElementsByClassName("message")[0];

// CHANGE OF EMOJI
const emojibox=document.getElementById('emoji');
emojibox.textContent = "🤨";

// CHANGE OF SCORE ://😎
   let score = 20;
   const scorecard = document.getElementsByClassName("score")[0];
   scorecard.textContent= score;

// CHANGE OF HIGH-SCORE🙌
    let highscore= 0;
    const highscorecard = document.getElementById("highscore");
    highscorecard.textContent= highscore;


// CHANGE OF COLOR // 
const container = document.getElementsByTagName ("main")[0];

// GRAB THE BUTTON WHICH IS GOING TO CHECK THE NUMBER BY CALLING THE BELOW FUNCTION // 😜
    const checkButton=document.getElementById('check');
// FUNCTION TO CHECK THE NUMBER//🙌
     const checkNumber = ()=> {
      const userNumber = userInputFlied.value;

      if (userNumber > 50 || userNumber < 1) {
        message.textContent = "PLEASE ENTER A NUMBER BETWEEN 1 - 50";
        score=score-1;
        scorecard.textContent= score;
        emojibox.textContent="😤"
        // container.style.backgroundColor="red";
        return;
      }
        
      if (userNumber == luckynumber) {
        message.textContent = "YOU WIN" ;
        emojibox.textContent="🙌" 
      if (highscore <score ){
        highscore = score;
        highscorecard.textContent=highscore;
      } 
        // container.style.backgroundColor="red";
      }else{

        if (luckynumber < userNumber){
          message.textContent= "TOO HIGH";
          score=score-1;
          scorecard.textContent= score;
          emojibox.textContent="🤥"
          // container.style.backgroundColor="red";
        }
        if (luckynumber > userNumber){
          message.textContent= "TOO LOW";
          score=score-1;
          scorecard.textContent= score;
          emojibox.textContent="😔"
          // container.style.backgroundColor="red";
        }

        if(score == 0){
           message.textContent = "GAME-OVER!😣";
           emojibox.textContent = "👺";
           return;
        }
        
      }
    };

// SET UP THE EVENT LISTENER FOR THE BUTTON //
     checkButton.addEventListener("click",checkNumber);

    resetButton.addEventListener("click",resetGame);


