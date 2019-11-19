
var scores, roundScore, activePlayer, gamePlaying, previous, set, div, textNode, maxScore;


initFunc();

function initFunc () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
            
            // 1. Random number
            var dice =  Math.floor(Math.random() * 6) + 1;
            console.log(previous, dice);
            // 2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';


            // 3. Update the round score IF the rolled number was not a 1
             if (previous === 6 && dice === 6) {
                scores[activePlayer] = 0; 
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else if (dice !== 1) {
                //Add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
            } else {
                //Next Player
                nextPlayer();
            }
            previous = dice;
        }
    
        
});


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
            
            // 1. Random number
            var dice =  Math.floor(Math.random() * 6) + 1;
            // 2. Display the result
            var diceDOM = document.querySelector('.dice1');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';


            // 3. Update the round score IF the rolled number was not a 1
            if (dice !== 1) {
                //Add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
            } else if (dice === 1) {
                scores[activePlayer] = 0; 
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
                
            } else {
                //Next Player
                nextPlayer();
            }

        }
});




document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        
        var input = document.querySelector('.input').value;
        
        if (input) {
            maxScore = input;
        } else {
            maxScore = 100;
        }
        
        
        // Check if player won the game
        if (scores[activePlayer] >= maxScore) {
            // declar winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // continue playing
            nextPlayer();
        }
    }
        
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', initFunc);


























