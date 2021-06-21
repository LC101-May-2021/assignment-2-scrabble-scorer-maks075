// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }

	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = ""
function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   word = input.question("Enter a word to score: ");
   //console.log(vowelBonusScore(word));
   //console.log(oldScrabbleScorer(word));
   return word;
};


function simpleScore(word) {
  return word.length;
};


function vowelBonusScore(word) {
  let points = 0;
  let vowels = "AEIOU";
  for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toUpperCase())) {
      points += 3;
    } else {
      points += 1
    }
 }
  return points;
}

function scrabbleScore(word) {
  let points = 0;
  for (i = 0; i < word.length; i++) {
    points += Number(newPointStructure[word[i].toLowerCase()])
  }
return Number(points);



// word = word.toUpperCase();
// 	let points = 0;
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			points += Number(pointValue);
// 		 }

// 	  }
// 	}
// 	return points;
}



const scoringAlgorithms = [
  {
    name: "Simple Score",
    description : "Each letter is worth 1 point.",
    scoringFunction : simpleScore 
  },
  {
    name : "Bonus Vowels",
    description : "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction : vowelBonusScore 
  },
  {
    name : "Scrabble",
    description : "The traditional scoring algorithm.",
    scoringFunction : scrabbleScore
  }
];

function scorerPrompt() {
  let methodSelect = input.question(`Which scoring algorithm would you like to use?\n \n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
      methodSelect = Number(methodSelect);
  if (methodSelect === 0) {
    console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`)
  } else if (methodSelect === 1) {
    console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`)
  } else if (methodSelect === 2) {
    console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`)
  } 
}
// take in object
// create a new object to put the new key value pairs in
// take the first letter from the first array and put it into the new object - (loop through all letters ) (while loop)?
// assigning it the value of its orinal key - look up retreiving values from within an object
function transform(oldPointStructure){
   newObject ={};
   for (let keys in oldPointStructure) {
     for(i = 0; i < oldPointStructure[keys].length; i++) {
       newObject[oldPointStructure[keys][i].toLowerCase()] = Number(keys);
     }
   }
   return newObject
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
  scorerPrompt()


   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

