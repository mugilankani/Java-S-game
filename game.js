const players = document.querySelector(".players")
const player1Points = document.querySelector(".player1points")
const player2Points = document.querySelector(".player2points")
const player1Name = document.querySelector(".player11")
const player2Name = document.querySelector(".player22")
const timerElement = document.querySelector(".timer")
player1Points.innerHTML = parseInt(0)
player2Points.innerHTML = parseInt(0)
 

player1Name.innerHTML = localStorage.getItem('player1Name')
player2Name.innerHTML = localStorage.getItem('player2Name')

let player1Count = 0;
let player2Count = 0;
let timer = 10;

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

    if (key === 'l') {
        left += 15;
        players.style.left = left + 'px'; // move left
        player2Count += 10;
        player1Count -= 10;
    } else if (key === 'a') {
        left -= 15;
        players.style.left = left + 'px'; // move right
        player1Count += 10;
        player2Count -= 10;
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
    console.log(1)
    leftClick()
})

rightDiv.addEventListener('click',()=>{
    console.log(1)
    rightclick()
})
let winner=""
localStorage.setItem('winner',winner)
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
    
    if(parseInt(player1Points.innerHTML)>parseInt(player2Points.innerHTML)){
      winner = localStorage.getItem('player1Name')
      
    }
    else if(parseInt(player2Points.innerHTML)>parseInt(player1Points.innerHTML)){
      winner = localStorage.getItem('player2Name') 
    }else{
      winner =""
    }
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
     
    if(parseInt(player1Points.innerHTML)>parseInt(player2Points.innerHTML)){
      winner = localStorage.getItem('player1Name')
    }
    else if(parseInt(player2Points.innerHTML)>parseInt(player1Points.innerHTML)){
      winner = localStorage.getItem('player2Name') 
    }else{
      winner =""
    }
    
  //  console.log(winner)

}
