const startButton = document.querySelector(".button")


const button = document.querySelector(".button")

button.addEventListener("click",()=>{
  const player1 = document.querySelector(".input1").value
const player2 = document.querySelector(".input2").value
  localStorage.setItem('player1Name',player1)
  localStorage.setItem('player2Name',player2)
  location.href ="game.html"
  
})



// console.log(button)