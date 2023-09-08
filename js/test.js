const wrongNumberSet = new Set();
wrongNumberSet.add(3);

var itemValue = 2;
var itemNumberTracker = 2
if(itemValue==itemNumberTracker){
    itemNumberTracker = wrongTracker(itemNumberTracker);
  }
  else{
    wrongNumberSet.add(item.textContent);
    }
    console.log(itemNumberTracker);

function wrongTracker (itemNumberTracker) {
    if(!wrongNumberSet.has(itemNumberTracker+1)){
        return itemNumberTracker+1;
    }
    return wrongTracker(itemNumberTracker+1);
}

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