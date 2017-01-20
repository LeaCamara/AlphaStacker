console.log("we can do this!");

// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */

// *** This works!! Because we put the console.log outside of the if statement but still inside the for loop. ***

function stackLetters (theAlphabetArray) {
  var stack = ""; // We have to assign stack to something so it won't be undefined; we had to define this by making it equal to something. We need a CONTAINER to hold what we want to keep adding.
  for (var i = 0; i < theAlphabetArray.length; i++) { // We use alphabetArray because it matches our parameter.
    if (i % 3 === 0) {
      stack += " " + theAlphabetArray[i];
    } else {
      stack += theAlphabetArray[i];
    }
  console.log(stack);
  }
}
stackLetters(alphabet);



// *** This starts with ab because it doesn't start console.log until the 2nd loop ***

// function stackLetters (theAlphabetArray) {
//   var stack = ""; // We have to assign stack to something so it won't be undefined; we had to define this by making it equal to something. We need a CONTAINER to hold what we want to keep adding.
//   for (var i = 0; i < theAlphabetArray.length; i++) { // We use alphabetArray because it matches our parameter.
//       debugger
//     if (i % 3 === 0) {
//       stack += " " + theAlphabetArray[i];
//     } else {
//       stack += theAlphabetArray[i];
//       console.log(stack);
//     }
//   }
// }
// stackLetters(alphabet);



// *** This "&& i > 0" in the if statement is a way to keep it from starting with ab. ***

// HOW?? Because it makes it skip the first loop.

// function stackLetters (theAlphabetArray) {
//   var stack = ""; // We have to assign stack to something so it won't be undefined; we had to define this by making it equal to something. We need a CONTAINER to hold what we want to keep adding.
//   for (var i = 0; i < theAlphabetArray.length; i++) { // We use alphabetArray because it matches our parameter.
//     if (i % 3 === 0 && i > 0) {
//       stack += " " + theAlphabetArray[i];
//     } else {
//       stack += theAlphabetArray[i];
//       console.log(stack);
//     }
//   }
// }
// stackLetters(alphabet);



// *** This also works & makes it start at a if we add another console.log right after the if statement: ***

// function stackLetters (theAlphabetArray) {
//   var stack = ""; // We have to assign stack to something so it won't be undefined; we had to define this by making it equal to something. We need a CONTAINER to hold what we want to keep adding.
//   for (var i = 0; i < theAlphabetArray.length; i++) { // We use alphabetArray because it matches our parameter.
//     if (i % 3 === 0) {
//       stack += " " + theAlphabetArray[i];
//       console.log(stack);
//     } else {
//       stack += theAlphabetArray[i];
//       console.log(stack);
//     }
//   }
// }
// stackLetters(alphabet);


// Invoke the function and pass in the array
// this is when the alphabet variable gets tied to the parameter in the function.
// When you call it, then this variable alphabet is stored in the parameter/argument theAlphabetArray.
// Don't necessarily need ; if it's the last statement.

// DEBUGGER runs your code up until that point

// = resets it every time
// += takes what's already in that variable and added to it

// % MODULUS:
// 16 % 8 = 0
// 19 % 8 = 3
// Coin Counter:
// .67 * 100
// 67 % 25


// Ex of how what you call the parameters doesn't matter:
// function tango (person1, person2)
// tango(brenda, meg);

// a array[i]
// b array[i + 1]
// c array[i + 1 + 1]

// ***  CREATE AN EMPTY VARIABLE ANYTIME YOU NEED A CONTAINER TO HOLD YOUR RESULTS *****
