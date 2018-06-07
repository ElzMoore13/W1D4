
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a,b) {
  var name1 = a.name;
  var name2 = b.name;
  if(name2 < name1)
    return 1;
  else if (name1 < name2)
    return -1;
  else
    return b.age - a.age;

});

console.log(students);

