//get the variable from html
const player0El = document.querySelector('.player_0');
const player1El = document.querySelector('.player_1');
const score0El = document.getElementById('score_0');
const score1El = document.getElementById('score_1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current_0'); 
const current1El = document.getElementById('current_1'); 
//declare new variable
let scores, currentScore, activePlayer, playGame;

// initialised function
const init = function(){
score0El.textContent = 0;
score1El.textContent = 0;
scores = [0, 0];
activePlayer = 0;
currentScore = 0;
playGame = true;
current0El.textContent = 0;
current1El.textContent = 0;

player0El.classList.remove('player_winner');
player1El.classList.remove('player_winner');
player0El.classList.add('player_active');
player1El.classList.remove('player_active');
};
init();

//switch player function
const switchPlayer = function(){
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 :0 ;
    currentScore = 0;
    player0El.classList.toggle("player_active");
    player1El.classList.toggle("player_active"); 
}

// buttons
const btnHold = document.querySelector('.btn_hold');
const btnRoll = document.querySelector('.btn_roll');
const btnNew = document.querySelector('.btn_new');

btnRoll.addEventListener('click', function(){
    if(playGame){
                // generate random number
    const dice = Math.floor(Math.random() * 6) + 1;
                //display the random image
    diceEl.src = `./img/dice-${dice}.png`;
             
    if (dice!==1) {
                //display the score
        currentScore += dice;
        document.getElementById(`current_${activePlayer}`).textContent = currentScore;
} else {         //switch the player
   switchPlayer();
}}
});

                // btn hold event
btnHold.addEventListener('click', function(){
    if (playGame){
        scores[activePlayer] += currentScore;
        document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];

    if( scores[activePlayer] >= 100){
        playGame = false;// when > or = 100, you can't play nomore
        document.querySelector(`.player_${activePlayer}`).classList.add('.player_winner');
        document.querySelector(`.player_${activePlayer}`).classList.add('.player_active');
}else{
   //switch player
   switchPlayer();
}
}
});

btnNew.addEventListener('click', init);