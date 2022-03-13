// create 26 cards
const N = 13

function genrateValues(N) {
    var values = Array(N).fill().map((v,i)=>i);
    values = values.concat(values);

    return values;
}

var cards = genrateValues(N);

// random shuffle the 26 cards
function shuffle_array(array) {
    // using Fisher-Yates shuffle algorithm
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

cards = shuffle_array(cards);

// create a class to store players
class players {
    constructor(name, card, score) {
        this.name = name;
        this.card = card;
        this.score = score;

       // card = [];
    }
}

const player1 = new players("player 1", [], 0);
const player2 = new players("player 2", [], 0);

// play the cards
for (let i = 0; i < 2*N; i+=2) {
    //assign card to each player
    player1.card.push(cards[i]);
    player2.card.push(cards[i+1]);
}

// calculate the scores
for (let i = 0; i < N; i+=1) {
    if (player1.card[i] > player2.card[i]) {
        player1.score += 1;
    } else if (player1.card[i] < player2.card[i]) {
        player2.score += 1;
    }
}

// print the cards in the two players.
console.log(`The cards for player 1 is: ${player1.card}.`)
console.log(`The cards for player 2 is: ${player2.card}.`)
console.log(`After all cards have been played, the score for player 1 is ${player1.score}, 
and the score for player 2 is ${player2.score}.`);

function compareScores() {
    if (player1.score > player2.score) {
        console.log("Player 1 has won the game!");
    } else if (player1.score < player2.score) {
        console.log("Player 2 has won the game!");
    } else {
        console.log("The game is in a tie!")
    }
    return true;
}

compareScores();