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


const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});