// var color = 0;
// setInterval(() => {
// if(color <=100000){
// var body = document.querySelector("body");
// var colorOne = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")";
// var colorTwo = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")";
// body.style.background = 'linear-gradient(to right ,'+colorOne+','+ colorTwo+')';
// color++;
// }
// }, 500);






const gridContainer = document.querySelector('.grid-container');
gridContainer.classList.add("three-v");
const wrongNumberSet = new Set();

 // Organize the grid with the numbers
 const randomNumbersArray = randomNumbersGenerator(9,9);
 randomNumbersArray.forEach(number => {
   const gridItem = document.createElement('div');
   gridItem.className = 'grid-item';
   gridItem.textContent = number;
   gridContainer.appendChild(gridItem);
 });



 //Generate the random Numbers and also makes sure that the numbers are not repeated within the given range
 function randomNumbersGenerator(size,max) {
   const result = [];
   const trackNumbers = new Set();
   while (result.length < size) {
     const generateRandomNumbers = Math.floor(Math.random() * (max)) + 1;
     if (!trackNumbers.has(generateRandomNumbers)) {
       result.push(generateRandomNumbers);
       trackNumbers.add(generateRandomNumbers);
     }
   }
   return result;
 }

  var playerGuide = document.querySelector(".guide");
  var  timerNote= document.querySelector(".timer-note");
  //Time delay to show the numbers
  const gridItems = document.querySelectorAll('.grid-item');
  var timer =  document.getElementById("timer");
 
  var audio = document.getElementById("audioId");
  var count = 8;
  setInterval(() => {
    if (count >= 0) {
      timer.innerHTML = count;
      audio.play();
      count--;
      gridItems.forEach(item => {
        item.addEventListener("click", () => {
          item.classList.toggle("grid-shake")
        })
        });
    }
  }, 1000);
  setTimeout(() => {
    gridItems.forEach(item => {
      item.style.fontSize = '0px';
      item.addEventListener("click", () => {
        item.classList.toggle("grid-shake")
      })
    });
  

  //On click logic
  let tracker= 1;
  let firstChance = true;
  let currentScore = 0;
  
  gridItems.forEach(item => {
    item.addEventListener("click", () => {   
     
      if(item.textContent==tracker && item.style.backgroundColor !="green" && item.style.backgroundColor !="red"){
        item.style.backgroundColor= 'green';
        tracker = wrongTracker(tracker);
        currentScore += 10;
        item.style.fontSize = '20px';
        timerNote.innerHTML = "Your current score";
        timer.innerHTML = currentScore;
      }
      else if(item.style.backgroundColor != "green" && item.style.backgroundColor != "red"){
        if(firstChance){
          firstChance = false;
          item.classList.toggle("grid-shake")
          playerGuide.innerHTML = "1st chance";
          timerNote.innerHTML = "Your current score" ;
          timer.innerHTML = currentScore;

        }
        else{
        wrongNumberSet.add(parseInt(item.textContent));
        item.style.backgroundColor= 'red';
        currentScore -= 5;
        item.style.fontSize = '20px';
        timerNote.innerHTML = "Your current score";
        timer.innerHTML = currentScore;
        }
      }else{
        playerGuide.innerHTML = "You have already clicked :( ";
        item.classList.toggle("grid-shake")
      }
      playerGuide.innerHTML = "The correct number to choose : "+tracker;
     
      if(tracker >= 10){
        playerGuide.innerHTML = "Game over";
        if(currentScore >=90){
          ptitle.innerHTML = "Great Job!";
          pscore.innerHTML = currentScore;
          ptime.innerHTML = " seconds";
          paccuracy.innerHTML = " 100%";
        }else{
          ptitle.innerHTML = "Well tried!";
          pscore.innerHTML = currentScore;
          ptime.innerHTML = " seconds";
          paccuracy.innerHTML = " 100%";
        }
        modal.style.display = "block";
      }
      if(tracker == 10 && currentScore == 90){
        playerGuide.innerHTML = "Brilliant";
      
          ptitle.innerHTML = "Brilliant!";
          pscore.innerHTML = currentScore;
          ptime.innerHTML = " seconds";
          paccuracy.innerHTML = " 100%";
        modal.style.display = "block";
      }
    })
  })
} ,9000)

function wrongTracker (itemNumberTracker) {
  if(!wrongNumberSet.has(itemNumberTracker+1)){
      return itemNumberTracker+1;
  }
  return wrongTracker(itemNumberTracker+1);
}



var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close-btn")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var ptitle = document.querySelector(".pop-title");
var pscore = document.querySelector(".score");
var ptime = document.querySelector(".time-taken");
var paccuracy = document.querySelector(".accuracy");
var restart = document.querySelector(".restart");
