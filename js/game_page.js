const gridContainer = document.querySelector('.grid-container');
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
  var count = 10;
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
  

  //On click logic
  let tracker= 1;
  let firstChance = true;
  let currentScore = 0;
  
  gridItems.forEach(item => {
    item.addEventListener("click", () => {   
      playerGuide.innerHTML = "The next correct number : "+tracker;
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
     
      if(tracker == 17){
        playerGuide.innerHTML = "Game over";
      }
      if(tracker == 17 && currentScore == 160){
        playerGuide.innerHTML = "Brilliant";
      }
    })
  })
} ,11000)

//function to update tracker value
function wrongTracker (itemNumberTracker) {
  if(!wrongNumberSet.has(itemNumberTracker+1)){
      return itemNumberTracker+1;
  }
  return wrongTracker(itemNumberTracker+1);
}


