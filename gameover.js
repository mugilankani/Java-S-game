const player1Score = localStorage.getItem('player1Score');
const player2Score = localStorage.getItem('player2Score'); 

let winnerName= localStorage.getItem('Winners')

// let statement = document.querySelector(".")


document.querySelector('.player1points').innerText = player1Score || 0;
document.querySelector('.player2points').innerText = player2Score || 0; 

document.querySelector(".player-won").innerText = winnerName;

// console.log(player1Score)


let winnerMessage;
const winningStatements = ['won the game!', 'is the champion!', 'came out on top!', 'is victorious!', 'is the winner!'];

if (player1Score > player2Score) {
    const randomIndex = Math.floor(Math.random() * winningStatements.length);
    winnerMessage = winningStatements[randomIndex];
} else if (player2Score > player1Score) {
    const randomIndex = Math.floor(Math.random() * winningStatements.length);
    winnerMessage = winningStatements[randomIndex];
} else {
    winnerMessage = 'The game is a tie!';
}

document.querySelector('.statement-woo-won').innerText = winnerMessage;
document.querySelector('.gameoverButton').addEventListener('click',()=>{
  localStorage.removeItem('player2Score')
  localStorage.removeItem('player1Score')
  location.href ="game.html"
})

let winner =localStorage.getItem('Winners')

console.log(winner)