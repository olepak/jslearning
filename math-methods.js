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

// Math.pow() returns the value of a base raised to a power
console.log(Math.pow(7, 3));
// where 7 is a base, 3 is a power

// Math.random() return a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over the range. It does not provide secure random numbers.
console.log(Math.random());
console.log(Math.random() * 10);
// getting a random value between two numbers
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(4, 10));
// getting a random integer between two values ( max exclusive) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values

// Math.round returns the value of a number rounded to the nearest integer
console.log(Math.round(5.49));
console.log(Math.round(5.51));

// Math.sign()returns 1 ir -1, indicating the sign if the number passed as argument. If the input is 0 or -0 it will be returned as is.
console.log(Math.sign(3));
console.log(Math.sign(-3));
console.log(Math.sign(0));

// Math.sqrt() returns the square root of a number
let squareRoot = Math.sqrt(9);

// Math.trunc returns the integer part of a number by removing any fractional digits
let trunc = Math.trunc(12.99);
