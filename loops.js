x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 5; x < 10; x++) {
    console.log(x);
}

for ( var x = 9 ; x >= 1; x--) {
  console.log("hello " + x);
  
}

/*
 * Programming Quiz: Factorials (4-7)
 */
let solution = 1;
for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

// write how much different combinations for theatre seat 0-26

for (var x = 0; x < 26; x ++ ){
  for (var y = 0; y < 100; y ++ ){
    console.log(x +'-'+ y);
  }
}