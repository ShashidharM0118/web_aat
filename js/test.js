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

