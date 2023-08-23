const gridContainer = document.querySelector('.grid-container');
  
  // Generate an array of numbers
  const numbersArray = Array.from({ length: 25 }, (_, i) => i + 1);
  
  // Populate the grid with the numbers
  const randomNumbersArray = randomNumbersGenerator(25,25);
  randomNumbersArray.forEach(number => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = number;
    gridContainer.appendChild(gridItem);
  });

  app.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("grid-item")) {
      const number = clickedElement.dataset.number;
      clickedElement.textContent = number; // Display the number
    }
  });

  function randomNumbersGenerator(size,max) {
    const result = [];
    const trackNumers = new Set();
  
    while (result.length < size) {
      const generateRandomNumbers = Math.floor(Math.random() * (max)) + 1;
  
      if (!trackNumers.has(generateRandomNumbers)) {
        result.push(generateRandomNumbers);
        trackNumers.add(generateRandomNumbers);
      }
    }
    return result;
  }
  
  

