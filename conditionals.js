// // // To use the ternary operator, first provide a conditional statement on the left-side of the ?. 
// Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the 
// // condition is false. For example, you can rewrite the example code above as:

// conditional ? (if condition is true) : (if condition is false)

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

// Prints Green

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore": eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined; 

console.log(category);

// If you find yourself repeating else if statements in your code, where each condition is based on the same value, then it might be time to use a switch statement.x
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}