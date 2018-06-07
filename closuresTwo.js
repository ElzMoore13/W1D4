var countdownGenerator = function (x) {

  /* your code here */

  return function() {
    var output = x;
    x -= 1;
    if(output > 0)
      console.log("T-minus " + output +"...");
    else if(output == 0)
      console.log("Blast Off!");
    else
      console.log("Rockets already gone, bub!")
  }


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!