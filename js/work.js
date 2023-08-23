const gridContainer = document.querySelector('.grid-container');

  // Organize the grid with the numbers
  const randomNumbersArray = randomNumbersGenerator(9,9);
  randomNumbersArray.forEach(number => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = number;
    gridContainer.appendChild(gridItem);
  });
  const grids = document.querySelectorAll("div");

  //Generate the random function
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

  //Time delay to show the numbers
  const gridItems = document.querySelectorAll('.grid-item');
  setTimeout(() => {
    gridItems.forEach(item => {
      item.style.fontSize = '0px';
    });
  } ,10000)

  //On click logic
  let tracker= 0;
  let firstChance = true;
  let currentScore = 0;
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      if(item.textContent-tracker == 1){
        item.style.backgroundColor= 'green';
        tracker++;
        currentScore += 10;
        item.style.fontSize = '20px';
      }
      else{
        if(firstChance){
          shakeButton.classList.add('shake');
          setTimeout(() => {
            shakeButton.classList.remove('shake');
          }, 500);
          firstChance = false;
        }
        else{
        item.style.backgroundColor= 'red';
        currentScore -=5;
        item.style.fontSize = '20px';
        }
      }
    })
    console.log(currentScore);
  })



