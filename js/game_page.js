const gridContainer = document.querySelector('.grid-container');
gridContainer.classList.add("four-v");
const wrongNumberSet = new Set();

// Organize the grid with the numbers
const randomNumbersArray = randomNumbersGenerator(16, 16);
randomNumbersArray.forEach(number => {
	const gridItem = document.createElement('div');
	gridItem.className = 'grid-item';
	gridItem.textContent = number;
	gridContainer.appendChild(gridItem);
});

//Generate the random Numbers and also makes sure that the numbers are not repeated within the given range
function randomNumbersGenerator(size, max) {
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
var timerNote = document.querySelector(".timer-note");
//Time delay to show the numbers
const gridItems = document.querySelectorAll('.grid-item');
var timer = document.getElementById("timer");
var audio = document.getElementById("audioId");
var count = 17;
setInterval(() => {
	if (count >= 0) {
		timer.innerHTML = count;
		if (count == 8) {
			audio.play();
		}
		count--;
		gridItems.forEach(item => {
			item.addEventListener("click", () => {
			})
		});
	}
}, 1000);
var startTime = 0;
let currentScore = 0;
var clicks = 0.0;
var accuracy = 0.0;
//working after 16 seconds
setTimeout(() => {
	startTime = performance.now();
	gameMusic.play();
	gridItems.forEach(item => {
		item.style.fontSize = '0px';
		endBtn.style.display = "inline"
	});
	//On click logic
	let tracker = 1;
	let firstChance = true;
	let rightclicks = 0.0;
	gridItems.forEach(item => {
		item.addEventListener("click", () => {
			if (item.textContent == tracker && item.style.backgroundColor != "green" && item.style.backgroundColor != "red") {
				correctChoice.play();
				clicks++;
				rightclicks++;
				item.style.backgroundColor = 'green';
				tracker = wrongTracker(tracker);
				currentScore += 10;
				item.style.fontSize = '20px';
				timerNote.innerHTML = "Your current score";
				timer.innerHTML = currentScore;
			} else if (item.style.backgroundColor != "green" && item.style.backgroundColor != "red") {
				if (firstChance) {
					firstChance = false;
					clicks++;
					item.classList.toggle("grid-shake")
					playerGuide.innerHTML = "1st chance";
					timerNote.innerHTML = "Your current score";
					timer.innerHTML = currentScore;
				} else {
					wrongChoice.play();
					clicks++;
					wrongNumberSet.add(parseInt(item.textContent));
					item.style.backgroundColor = 'red';
					currentScore -= 5;
					item.style.fontSize = '20px';
					timerNote.innerHTML = "Your current score";
					timer.innerHTML = currentScore;
				}
			} else {
				playerGuide.innerHTML = "You have already clicked :( ";
				item.classList.toggle("grid-shake")
			}
			playerGuide.innerHTML = "The correct number to choose : " + tracker;
			accuracy = (rightclicks / clicks) * 100;
			if (tracker >= 17) {
				playerGuide.innerHTML = "Game over";
					popUpfunction(currentScore)
			}
		})
	})
}, 18000)

//function to update tracker value
function wrongTracker(itemNumberTracker) {
	if (!wrongNumberSet.has(itemNumberTracker + 1)) {
		return itemNumberTracker + 1;
	}
	return wrongTracker(itemNumberTracker + 1);
}

function popUpfunction(currentScore) {
	var endTime = performance.now()
	ptitle.innerHTML = currentScore > 70 ? "Great Job! 🎊" : "Better luck next time😊";
	pscore.innerHTML = currentScore;
	ptime.innerHTML = `${(endTime - startTime)/1000} seconds`;
	paccuracy.innerHTML = accuracy + " %";
	modal.style.display = "block";
	gameMusic.pause();
	currentScore >70  ? gameWin.play() : gameFail.play();
}

var endBtn = document.getElementById("end-button");
endBtn.addEventListener("click", () => {
	popUpfunction(currentScore);
});
endBtn.addEventListener("keyup", (event) => {
	if(event.shiftKey){
	popUpfunction(currentScore);
	}
})
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
var correctChoice = document.getElementById("correct");
var wrongChoice = document.getElementById("wrong");
var gameMusic = document.getElementById("game-music");
var gameWin = document.getElementById("game-win");
var gameFail = document.getElementById("game-fail");
var ptitle = document.querySelector(".pop-title");
var pscore = document.querySelector(".score");
var ptime = document.querySelector(".time-taken");
var paccuracy = document.querySelector(".accuracy");