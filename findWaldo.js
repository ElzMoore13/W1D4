function findWaldo(arr, found) {

  var loopNum = 0;
  //use forEach loop instead
  arr.forEach(function(person){

    if (person === 'Waldo') {
      found(loopNum);
    }
    loopNum += 1;

  });

}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
