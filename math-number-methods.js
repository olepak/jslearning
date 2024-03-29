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

// Number object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// Number.isFinite() method determines whether the passed value is a finite number - that is, it checks
// that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(10 / 5));
console.log(Number.isFinite("df"));

// Number.isInteger() static method determines whether the passed value is an integer or not
console.log(Number.isInteger(10));
console.log(Number.isInteger(5.2));
console.log(Number.isInteger(NaN));

// Number() constructor creates Number object. When called as a function, it returns primitive values of type Number
// You should rarely find yourself using Number as a constructor
const aN = new Number("123"); // a === 123 is false
const bN = Number("123"); /// bN === 123 is true
console.log(typeof aN);
console.log(typeof bN);

// Number.isNaN determines whether the passed value is the number value NaN, and returns false if the input
// is not of the Number type. It is a more robust  version of the original global isNaN() function.
console.log(Number.isNaN(1));
function typeOfNaN(x) {
	if (Number.isNaN(x)) {
		return "Number NaN";
	}
	if (isNaN(x)) {
		return "NaN";
	}
}
console.log(typeOfNaN("100f"));
console.log(typeOfNaN(NaN));
// Number.isNaN() and isNaN() behaves differently. Number.isNaN does not force-convert the parameter to a number.
// Where as isNaN() coerces its parameter to a number, and than it failed it gives true.
console.log(isNaN("100f"));
console.log(Number.isNaN("100f"));
// Number.isNaN() provide a convenient way to check for equality with NaN. You cannot test for
// equality with NaN using either the == or === operators, because unlike all other value comparisons in JavaScript, these evaluate to false whenever one operand is NaN, even if the operand is also NaN.
// Since x !== x is only true for NaN among all possible JavaScript values, Number.isNaN(x) can also be replaced
// with a test for x !== x, despite the latter being less readable.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// Number.parseFloat() parses an argument and returns a floating point number. If a number cannot be parsed from an argument, it returns NaN
function circumference(r) {
	if (Number.isNaN(Number.parseFloat(r))) {
		return 0;
	}
	return Number.parseFloat(r) * 2 * Math.PI;
}
circumference("1.434f");
circumference("234");
// return value - a floating point number parsed from the given string.
// or NaN when the first non-whitespace character cannot be converted to a number
// This method has the same functionality as the global parseFloat() function

// Number.parseInt() parses a string argument and returns an integer of the specified radix or base.
function roughScale(x, base) {
	const parsed = Number.parseInt(x, base);
	if (Number.isNaN(parsed)) {
		return 0;
	}
	return parsed * 100;
}
roughScale("0xF", 16);
roughScale("321", 2);
// Number.parseInt(string, radix)
// string - the value to parse, coerced to a string.
// radix - an integer between 2 and 36 that represents radix(the base in mathematical numeral systems) of the string
// if radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or OX, in which case a radix if 16 is assumed.
// return value - an integer parsed from the given string. if the radix is smaller than 36, or the first non-whitespace character cannot me converted to a number, NaN is returned.
// it has the same functionality as the global parseInt() function.

// Number.toExponential() method of Number values returns a string representing this number in exponential notation
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
expo(12345, 2);

// Number.toFixed() method formats this number using fixed-point-notation
function financial(x) {
	return Number.parseFloat(x).toFixed(2);
}
financial("12345");

//Number.toPrecision() method returns a string representing this number to the specified precision
function precise(x) {
	return x.toPrecision(4);
}
precise(123.456);
precise(0.0004);

// Number.toString() returns a string representing this number value
function hexColor(c) {
	if (c < 256) {
		return Math.abs(c).toString(16);
	}
	return 0;
}
hexColor(246);
// toString(radix) radix - is an integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to
