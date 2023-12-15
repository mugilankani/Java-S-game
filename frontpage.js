const startButton = document.querySelector(".button")
document.body.addEventListener('click', function() {
  const sound = document.getElementById('mySound');
  sound.play();
});

const button = document.querySelector(".button")

button.addEventListener("click",()=>{
  const player1 = document.querySelector(".input1").value
const player2 = document.querySelector(".input2").value
if (!player1 || !player2) {
  alert("Please fill in both player names");
  return;
}
  localStorage.setItem('player1Name',player1)
  localStorage.setItem('player2Name',player2)
  location.href ="game.html"
  
})



// console.log(button)