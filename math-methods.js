// full article - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// here are the most useful

// Math.E represents Euler's number 2.781
console.log(Math.E);
let mathE = 3 * Math.E;
console.log(mathE);

// Math.PI represents 3.1415
console.log(Math.PI);
let mathPi = 3 * Math.PI;
console.log(mathPi);

// Math.abs() returns the absolute value of a number. It is useful when there is a need to convert negative to a positive.
console.log(Math.abs(3 - 5));
console.log(Math.abs(5 - 3));
console.log(Math.abs(-3));

// Math.cbrt() returns the cube root of a number
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

// Math.ceil() rounds up and returns the smallest integer greater than of equal to a given number
console.log(Math.ceil(7));
console.log(Math.ceil(7.003));
console.log(Math.ceil(-7.4));

// Math.floor() rounds down and return the largest integer less that or equal to a given number
console.log(Math.floor(5.95));
console.log(Math.floor(-5.95));

// Math.max() returns the largest on=f the numbers given as input parameters, or Infinity when there is no parameters
console.log(Math.max(1, 67, 3, 186));
const maxArray = [12, 354, 5, 45, 643, 5, 15, 4];
console.log(Math.max(...maxArray));

// Math.min() returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters
const minArray = [12, 354, 5, 45, 643, 5, 15, 4];
console.log(Math.min(...minArray));
