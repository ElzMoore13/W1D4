var wrapLog = function (callback, name) {

  /*

  var aFunction = function(x, y, z){
    if(z == null)
      console.log(name + "(" + x + ', ' + y + ') => ' + callback(x,y));
    //if(z != null)
    else
      console.log(name + "(" + x + ', ' + y + ', ' + z + ') => ' + callback(x,y,z));
    return callback;
  }

  return aFunction;
  //console.log(aFunction.x)

  */

  var aFunction = function(...args){
    var output = name + "(";
    for(arg in args){
      if (arg == args.length-1)
        output+= args[arg]
      else
        output += args[arg] + ', '
    }
    output += ') => ' + callback(...args);
    console.log(output);

    return callback;
  }

  return aFunction;
  //console.log(aFunction.x)


  //return callback;



};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24