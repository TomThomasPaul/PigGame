/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores,  activePlayer, roundScore, gamePlaying,round,dice;


init();
//dice = Math.floor((Math.random() * 6) +1 );
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</m>';
 //initialize all values to 0
/*document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// set dice visibility to none
document.querySelector('.dice').style.display = 'none';  */

//set event listener

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
        
         //set dice number
    
     dice[round] = Math.floor((Math.random() * 6) +1 );
    //assign dice number to dice image
    var diceDOM = document.querySelector('.dice');
    diceDOM.src= 'dice-' +dice[round] + '.png';
    
    //display dice image 
    diceDOM.style.display='block';
    console.log(activePlayer,round,dice[round]);
    
    //
    
    //Add DICE value to Roundscore to display current score while dice =1..else switch player
    
    if(dice[round] !== 1){
        
    roundScore += dice[round];
    document.getElementById('current-' + activePlayer).textContent =roundScore;
       
        //check if the previous two rolls are 6;then switch player and zero all scores.**done differently by using new variable by instructor
        if(dice[round] ===6 && dice[round-1] === 6){
           console.log("entered");
            scores[activePlayer] =0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            round =0;
            dice =[];
            
            nextPlayer();
            
            
        }

        
        round++;
    } 
        

        
        else {
        //Switch player and zero the roundscore
        round=0;
        nextPlayer();
    }
    }
   
    
    
    
    
});

//HOLD functionality

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        
        //add round score to global score
    scores[activePlayer]+= roundScore;
    
    //add global score to UI
    
    document.getElementById('score-' + activePlayer).textContent= scores[activePlayer];
        
        //Get final scopre value from input
        var input = document.querySelector('.final-score').value;
        var winningscore;
        
        if(input){
            winningscore=input;
        }else {
            
            winningscore=100;
            
        }
        
    
  //check if player won
    
    if(scores[activePlayer] >=winningscore){
        
          document.querySelector('.dice').style.display='none ';
        document.querySelector('#name-' + activePlayer).textContent= 'WINNER!!!!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        gamePlaying = false;
       
       
       } else {
           
           
         //switch active player     
   nextPlayer();
       }
    }
    
    
   
  
   
    
    
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {
    
    
       //Switch player and zero the roundscore
        
        activePlayer ===0 ? activePlayer =1 : activePlayer = 0;
        roundScore=0;
    
    
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        //add and remove..toggle the active class to switch active player css stuff
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display='none ';
}


function init(){
    
scores =[0,0];
roundScore=0;
activePlayer=0;
gamePlaying = true;   
    round=0;
    dice=[];
     //initialize all values to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player1';
document.getElementById('name-1').textContent = 'Player2'; 
document.querySelector('.player-0-panel').classList.remove('winner'); 
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');    
    
    

// set dice visibility to none
document.querySelector('.dice').style.display = 'none';
    
    
    
    
}  




//Start of Advanced Javascript 