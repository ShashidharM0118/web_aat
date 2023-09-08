
const gridContainer = document.querySelector('.grid-container');
gridContainer.classList.add("four-v");
const wrongNumberSet = new Set();

 // Organize the grid with the numbers
 const randomNumbersArray = randomNumbersGenerator(16,16);
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
  var count = 18;
  setInterval(() => {
    if (count >= 0) {
      timer.innerHTML = count;
      if(count == 8){  audio.play();}
      count--;
      gridItems.forEach(item => {
        item.addEventListener("click", () => {
          item.classList.toggle("grid-shake")
        })
        });
    }
  }, 1000);

  let currentScore = 0;
  var clicks = 0.0;
  var accuracy = 0.0;
  //working after 16 seconds
  setTimeout(() => {
    gameMusic.play();
    gridItems.forEach(item => {
      item.style.fontSize = '0px';
      endBtn.style.display = "inline"
      item.addEventListener("click", () => {
        item.classList.toggle("grid-shake")
      })
    });
  //On click logic
  let tracker= 1;
  let firstChance = true;
  let rightclicks = 0.0;
  
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      if(item.textContent==tracker && item.style.backgroundColor !="green" && item.style.backgroundColor !="red"){
        correctChoice.play();
        clicks++;
        rightclicks++;
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
          clicks++;
          item.classList.toggle("grid-shake")
          playerGuide.innerHTML = "1st chance";
          timerNote.innerHTML = "Your current score" ;
          timer.innerHTML = currentScore;

        }
        else{
        wrongChoice.play();
        clicks++;
        wrongNumberSet.add(parseInt(item.textContent));
        item.style.backgroundColor= 'red';
        currentScore -= 5;
        item.style.fontSize = '20px';
        timerNote.innerHTML = "Your current score";
        timer.innerHTML = currentScore;
        }
      }
      else{
        playerGuide.innerHTML = "You have already clicked :( ";
        item.classList.toggle("grid-shake")
      }
      playerGuide.innerHTML = "The correct number to choose : "+tracker;
      accuracy = (rightclicks/clicks)*100;
      if(tracker >= 17){
        playerGuide.innerHTML = "Game over";
        if(currentScore > 80){
          ptitle.innerHTML = "Great Job!";
          pscore.innerHTML = currentScore;
          ptime.innerHTML = " seconds";
          paccuracy.innerHTML = accuracy+" %";
        }else{
          ptitle.innerHTML = "Well tried!";
          pscore.innerHTML = currentScore;
          ptime.innerHTML = " seconds";
          paccuracy.innerHTML = accuracy+" %";
        }
        modal.style.display = "block";
      }
      if(tracker == 17 && currentScore == 160){
        playerGuide.innerHTML = "Brilliant";
        if(currentScore > 80){
          popUpfunction(currentScore)
        }else{
          popUpfunction(currentScore)
          ptitle.innerHTML = "Well tried!";
        }
        modal.style.display = "block";
      }
    })
  })
} ,19000)

//function to update tracker value
function wrongTracker (itemNumberTracker) {
  if(!wrongNumberSet.has(itemNumberTracker+1)){
      return itemNumberTracker+1;
  }
  return wrongTracker(itemNumberTracker+1);
}
function popUpfunction(currentScore){
  ptitle.innerHTML = currentScore >80?"Great Job! 🎊":"Better luck next time😊";
  pscore.innerHTML = currentScore;
  ptime.innerHTML = " seconds";
  paccuracy.innerHTML = accuracy+" %";
  modal.style.display = "block";
}

var endBtn = document.getElementById("end-button");
endBtn.addEventListener("click",()=>{
  ptitle.innerHTML = currentScore >80?"Great Job! 🎊":"Better luck next time😊";
  pscore.innerHTML = currentScore;
  ptime.innerHTML = " seconds";
  paccuracy.innerHTML = accuracy+" %";
  modal.style.display = "block";
});


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close-btn")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.location.reload();

}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var correctChoice = document.getElementById("correct");
var wrongChoice = document.getElementById("wrong");
var gameMusic = document.getElementById("game-music");

var ptitle = document.querySelector(".pop-title");
var pscore = document.querySelector(".score");
var ptime = document.querySelector(".time-taken");
var paccuracy = document.querySelector(".accuracy");



