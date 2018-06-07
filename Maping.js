var words = ["ground", "control", "to", "major", "tom"];



function map(anArray, aFunction){
  var output = []
  anArray.forEach(function(word){

    output.push(aFunction(word));

  });
  console.log(output);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


