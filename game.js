const selectedTheme = localStorage.getItem('selectedTheme');


if (selectedTheme) {
    document.body.style.backgroundImage = `url(${selectedTheme})`;
}


const players = document.querySelector(".players")
const player1Points = document.querySelector(".player1points")
const player2Points = document.querySelector(".player2points")
const player1Name = document.querySelector(".player11")
const player2Name = document.querySelector(".player22")
const timerElement = document.querySelector(".timer")
player1Points.innerHTML = parseInt(0)
player2Points.innerHTML = parseInt(0)
// const gameOverSound = document.getElementById('gameOverSound');
// gameOverSound.play();

player1Name.innerHTML = localStorage.getItem('player1Name')
player2Name.innerHTML = localStorage.getItem('player2Name')

let player1Count = 0;
let player2Count = 0;
let timer = 30;
const clickSound = document.getElementById('clickSound');



timerElement.innerHTML = timer;

const gameInterval = setInterval(function() {
    timer -= 1;
    timerElement.innerHTML = timer;

    if (timer <= 0) {
        clearInterval(gameInterval);
        location.href = "gameover.html"
    }
}, 1000);

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const style = window.getComputedStyle(players);
    let left = parseInt(style.left.replace('px', ''), 10);

    if (key === 'l'||key === 'L') {
        left += 15;
        players.style.left = left + 'px'; // move left
        player2Count += 10;
        player1Count -= 10;
        clickSound.currentTime = 0;
      clickSound.play();
    } else if (key === 'a'||key === 'A') {
        left -= 15;
        players.style.left = left + 'px'; // move right
        player1Count += 10;
        player2Count -= 10;
        clickSound.currentTime = 0;
      clickSound.play();
    }

    if(player1Count>=50){
        player1Points.innerHTML = parseInt(player1Points.innerHTML) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player1Score', player1Points.innerHTML); 

    } else if(player2Count>=50){
        player2Points.innerText = parseInt(player2Points.innerText) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player2Score', player2Points.innerHTML); // store score

    }
    let winner=""
    if(parseInt(player1Points.innerHTML)>parseInt(player2Points.innerHTML)){
      winner = localStorage.getItem('player1Name')
      
    }
    else if(parseInt(player2Points.innerHTML)>parseInt(player1Points.innerHTML)){
      winner = localStorage.getItem('player2Name') 
    }else{
      winner =""
    }
   console.log(localStorage.setItem('winner',winner))
// console.log(winner);
    

});
const leftDiv = document.querySelector(".left")
const rightDiv = document.querySelector(".right")


leftDiv.addEventListener('click',()=>{
  clickSound.currentTime = 0;
  clickSound.play();
    leftClick()
})

rightDiv.addEventListener('click',()=>{
  clickSound.currentTime = 0;
  clickSound.play();
    rightclick()
})
let winner=""

// localStorage.setItem('winner',lastWinner)
const style = window.getComputedStyle(players);
let left = parseInt(style.left.replace('px', ''), 10);
    

    function rightclick() {
        left = parseInt(style.left.replace('px', ''), 10)
        console.log("right: "+left)

        
        left += 15;
        players.style.left = left + 'px'; // move left
        player2Count += 10;
        player1Count -= 10;
    if(player1Count>=50){
        player1Points.innerHTML = parseInt(player1Points.innerHTML) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player1Score', player1Points.innerHTML); 
    } else if(player2Count>=50){
        player2Points.innerText = parseInt(player2Points.innerText) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player2Score', player2Points.innerHTML); 
    }
    winnderDecider()
    
    
}
function leftClick() {
    left = parseInt(style.left.replace('px', ''), 10)
    console.log("left: "+left)
    left -= 15;
    players.style.left = left + 'px'; // move right
    player1Count += 10;
    player2Count -= 10;
    if(player2Count>=50){
        player2Points.innerText = parseInt(player2Points.innerText) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player2Score', player2Points.innerHTML); 
    } else if(player1Count>=50){
        player1Points.innerHTML = parseInt(player1Points.innerHTML) + 1;
        players.style.left = 205+"px";
        player1Count = 0;
        player2Count = 0;
        localStorage.setItem('player1Score', player1Points.innerHTML); 
    }
    winnderDecider()
     
   
    
  //  console.log(winner)

}
function winnderDecider(){
  if(parseInt(player1Points.innerHTML)>parseInt(player2Points.innerHTML)){
    winner = localStorage.getItem('player1Name')
    
  }
  else if(parseInt(player2Points.innerHTML)>parseInt(player1Points.innerHTML)){
    winner = localStorage.getItem('player2Name') 
  }else{
    winner =""
  }
  console.log(winner)

  localStorage.setItem('Winners', winner)

  return winner;
}