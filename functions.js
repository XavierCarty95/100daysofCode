//Functions allow you to package up lines of code that you can use (and often reuse) in your programs. 

function reheatPizza(numSlices) {
  // code that figures out reheat settings!
}

function reverseString(reverseMe) {
  // code to reverse a string!
}



function doubleGreeting(name, otherName) {
  // code to greet two people!
}

// accepts no parameters! parentheses are empty
function sayHello() {
  var message = "Hello!"
  console.log(message);
}

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

//A function that is passed into another function is called a callback.
// function inside a variable is called a function expression 

// Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console

function laugh() {
    return "hahahahahahahahahaha!"
}
console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
    var stringLaugh = '';
    for(var i =0; i < num; i++) {
        stringLaugh += 'ha';
    }
    return stringLaugh + '!';
}
console.log(laugh(3));