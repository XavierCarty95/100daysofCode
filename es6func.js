// mapping functions in block body syntax.

const upperizedssNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});



// If you recall, the parameter list appears before the arrow function's 
// arrow (i.e. =>). If there's only one parameter in the list, then you can write it just like the example above. But, if there are two or more items in the parameter list, or 
// if there are zero items in the list, then you need to wrap the list in parentheses:

const sayHi = () => console.log('Hello Udacity Student!');
sayHi();


// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

// All of the arrow functions we've been looking at have only had a single expression as the function body:
const upperizedseNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
// If you need more than just a single line of code in your arrow function's body, then you can use the "block body syntax"

// With regular functions, the value of this is set based on how the function is called. With arrow functions, the value of this is based on the function's surrounding context. In other words, the value of this inside an arrow function 
// is the same as the value of this outside the function.
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log('scoop added!');
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();







// The code above will work because instead of using this inside the function, 
// // it sets the cone variable to this and then looks up the cone variable when the function is called. This works because it's using the value of the this outside the function. So if we check the number of scoops in our dessert right now, 
// we'll see the correct value of 1
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

//  ES6 has introduced a new way to create defaults. It's called default function parameters

function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

// 

function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid