//still on working stage to create levels
const gridContainer = document.querySelector('.grid-container');
const gridItems = [];

for (let i = 0; i < 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridItem.textContent = "";
  gridContainer.appendChild(gridItem);
  gridItems.push(gridItem);
}
let n = 5;
let level =1;

  const randomNumbersArray = randomNumbersGenerator(16, 16);
for (let i = 1; i <=n; i++) {
  var number = randomNumbersArray[i];
  gridItems[number].textContent = i;
}


var counter = document.getElementById("timer").innerHTML = 0;
var scoreCard = document.querySelector(".scoreboard");
var  timerNote= document.querySelector(".timer-note");
var count = 10;

var timer =  document.getElementById("timer");
function isTimer(){return true;};
var audio = document.getElementById("audioId");
setInterval(() => {
  if (count >= 0) {
    timer.innerHTML = count;
    audio.play();
    count--;
  }
}, 1000);
setTimeout(() => {
  gridItems.forEach(item => {
    item.style.fontSize = '0px';
  });
} ,11000)
//On click logic
let tracker= 0;
let firstChance = true;
let currentScore = 0;
const newParagraph = document.createElement('p');
gridItems.forEach(item => {
  item.addEventListener("click", () => {
    firstChance?  timerNote.innerHTML = "":firstChance = false;
    if(item.textContent-tracker == 1){
      item.style.backgroundColor= 'green';
      tracker++;
      currentScore += 10;
      item.style.fontSize = '20px';
      timerNote.innerHTML = "Your current score";
      timer.innerHTML = currentScore;
    }
    else{
      if(firstChance){
        firstChance = false;
        timerNote.innerHTML = "1st chance";
        timer.innerHTML = currentScore;
      timerNote.appendChild(newParagraph);
      }
      else{
      item.style.backgroundColor= 'red';
      currentScore -= 5;
      item.style.fontSize = '20px';
      timerNote.innerHTML = "Your current score";
      timer.innerHTML = currentScore;
      }
    }
    if(tracker > n){
      tracker =0;
      n = n+2;
    }
  })
  console.log(currentScore);
})




























function randomNumbersGenerator(size, max) {
  const result = [];
  const trackNumbers = new Set();
  while (result.length < size) {
    const generateRandomNumbers = Math.floor(Math.random() * max) + 1;
    if (!trackNumbers.has(generateRandomNumbers)) {
      result.push(generateRandomNumbers);
      trackNumbers.add(generateRandomNumbers);
    }
  }
  return result;
}
