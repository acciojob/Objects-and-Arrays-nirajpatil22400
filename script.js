// Given array
var players = ["John", "Mike", "Sarah"];

// Given object
var person = {
  name: "David",
  age: 25,
};

// Create a reference to the players array
var team = players;

// Create a copy of the players array
var team1 = [...players];

// Create a copy of the person object
var cap1 = Object.assign({}, person);
