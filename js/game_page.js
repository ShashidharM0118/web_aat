//complete handling of the game page (Yet to be organized)

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
  const grids = document.querySelectorAll("div");


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

  var scoreCard = document.querySelector(".scoreboard");
  var  timerNote= document.querySelector(".timer-note");
  const gridItems = document.querySelectorAll('.grid-item');
  var timer =  document.getElementById("timer");
  var audio = document.getElementById("audioId");
  var countDown = 10;

  //Countdown starts for 10 seconds with countdown audio
  setInterval(() => {
    if (countDown >= 0) {
      timer.innerHTML = countDown;
      audio.play();
      countDown--;
    }
  }, 1000);
  

  let itemNumberTracker= 1;
  //The game logic which starts exhibiting after 10sec 
  setTimeout(() => {
    gridItems.forEach(item => {
      item.style.fontSize = '0px';
  //On click logic
  let firstChance = true;
  let currentScore = 0;
  

gridItems.forEach(item => {
  item.addEventListener("click", () => {
      //no number display if user clicks on wrong order griditem
      // firstChance?  timerNote.innerHTML = "":firstChance = false;

      /******************************************************************************
       wrongNumberSet -set used to store all wrong numbers if in case number correctNumber is already there
       in the set which is the next value of the  itemNumberTracker then it will increase the value of itemNUmberTracker 
       ****************************************************************************/
      if(item.textContent==itemNumberTracker){
        item.style.backgroundColor= 'green';
        item.style.fontSize = '20px'; //Now the number is visible after clicking with green background
        currentScore += 10;
        timerNote.innerHTML = "Your current score";
        timer.innerHTML = currentScore;
        itemNumberTracker = wrongNumberSetter(itemNumberTracker); //if the next number is already clicked then itemNumberTracker value is increased by 2
      }
      else{
        //nothing is shown on first wrong click
        if(firstChance){
          firstChance = false;
          timerNote.innerHTML = "1st chance";
          timer.innerHTML = currentScore;
        timerNote.appendChild(newParagraph);
        }
        //from second wrong click
        else{
        wrongNumberSet.add(item.textContent);
        item.style.backgroundColor= 'red';
        currentScore -= 5;
        item.style.fontSize = '20px'; //Now the number is visible after clicking with red background
        timerNote.innerHTML = "Your current score";
        timer.innerHTML = currentScore;
        }
      }
    })

  })
});
} ,11000)


//recurrsion function which controlls the value of itemNumberTracker
function wrongTracker (itemNumberTracker) {
  if(!trackWrongNumbers.has(itemNumberTracker+1)){
      return itemNumberTracker+1;
  }
  return wrongTracker(itemNumberTracker+1);
}

