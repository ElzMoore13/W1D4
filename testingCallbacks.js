// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);
// console.log(myFn);

// function feedCat(){
//     console.log("Kibble, tinned food and water");
// }
// console.log(feedCat instanceof Object);

// feedCat.food = "kibble";
// console.log(feedCat.food);
// console.log(feedCat.constructor);

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);