const players = document.querySelector(".players")

// document.addEventListener('keydown', function(event) {
//   const key = event.key; // 'a' or 'l'
//   const style = window.getComputedStyle(players);
//   const left = parseInt(style.left, 10);
// let leftCount = 0;

// let rightCount = 0;

//   if (key === 'l') {
//       players.style.left = (left - 10) + 'px'; // move left
//       leftCount +=10
//   } else if (key === 'a') {
//       players.style.left = (left + 10) + 'px'; // move right
//       rightCount +=10;
//   }
// });
let moveInterval;

let leftCount = 0
let rightCount =0

document.addEventListener('keydown', function(event) {
    const key = event.key; // 'a' or 'l'
    const style = window.getComputedStyle(players);
    let left = parseInt(style.left.replace('px', ''), 10);

    if (moveInterval) {
        clearInterval(moveInterval);
    }
  
    if (key === 'l') {
        moveInterval = setInterval(function() {
            left += 10;
            players.style.left = left + 'px'; // move left
            leftCount += 10
            rightCount -=10
            console.log("left count : "+leftCount)
        }, 100);
    } else if (key === 'a') {
        moveInterval = setInterval(function() {
            left -= 10;
            players.style.left = left + 'px'; // move right
            rightCount += 10
            leftCount -=10
           console.log("right click"+ rightCount)
        }, 100);
    }
});

document.addEventListener('keyup', function(event) {
    if (moveInterval) {
        clearInterval(moveInterval);
    }
});