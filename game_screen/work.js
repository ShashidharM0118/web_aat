const gridContainer = document.querySelector('.grid-container');

  // Populate the grid with the numbers
  const randomNumbersArray = randomNumbersGenerator(16,16);
  randomNumbersArray.forEach(number => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = number;
    gridContainer.appendChild(gridItem);
  });
  const grids = document.querySelectorAll("div");

<<<<<<< HEAD
  //Generate the random function
=======
  app.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("grid-item")) {
      const number = clickedElement.dataset.number;
      clickedElement.textContent = number; // Display the number
    }
  });

>>>>>>> 7204c5deb23a2bdfe807d3d0be280997b062b6c4
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

  const gridItems = document.querySelectorAll('.grid-item');
  setTimeout(() => {
    gridItems.forEach(item => {
      item.style.fontSize = '0px';
    });
  } ,10000)

  let tracker= 0;
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      if(item.textContent-tracker == 1){
        item.style.backgroundColor= 'green';
      }else{
        item.style.backgroundColor= 'red';
      }
      tracker = item.textContent;
      item.style.fontSize = '20px';
    })
  })


