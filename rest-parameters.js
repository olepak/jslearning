// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// the rest parameter syntax allows a function to accept an indefinite  number of an arguments as an array, providing a way to represent variadic functions in javascript
function sum(...theArgs) {
	let total = 0;
	for (const arg of theArgs) {
		total += arg;
	}
	return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// syntax:
function f(a, b, ...theArgs) {}

// DESCRIPTION
// a function definition's last parameter can be prefixed with "..." which will cause all remaining (user supplied) parameters to be placed within an Array object
function myFun(a, b, ...manyMoreArgs) {
	console.log("a", a);
	console.log("b", b);
	console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

// a function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition
// these are wrong definition:
//function wrong1(...one, ...wrong){};
// function wrong2(...wrong, arg2, arg3){};

// the rest parameter is not counted towards the function's length property
function exampleFunction(a, b, ...rest) {
	// some code
}
console.log(exampleFunction.length);
// despite the presence of "...rest", the "length" property of the function is still 2 because it counts only the named parameters

//  THE DIFFERENCE between rest parameters and the arguments object
// - the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly
// - the arguments object has the additional (deprecated) callee property
// - in a non-strict function with simple parameters, the arguments object sync its indices with the values of parameters. the rest parameter array never updates its value when the named parameters are re-assigned.
// - the rest parameter bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam. The arguments object contains all of the parameters - including the parameters in the ...restParam array - bundled into one array-like object.

// EXAMPLES https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#examples

// Argument length. Since theArgs is an Array, a count of its elements is given by the length property.If the function's only parameter is a rest parameter, restParams.length will be equal to arguments.length.
function fun1(...theArgs) {
	console.log(theArgs.length);
}
fun1();
fun1(5);
fun1(5, 6, 7);

// using rest parameters in combination with ordinary parameters. here a rest parameter is used to collect all parameters after the first parameter into an array. each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned
function multiply(multiplier, ...theArgs) {
	return theArgs.map((element) => multiplier * element);
}
const arr = multiply(2, 15, 20, 25);
console.log(arr);

// Array methods can be used on rest parameters, but not on the arguments object:
function sortRestArgs(...theArgs) {
	const sortedArgs = theArgs.sort();
	return sortedArgs;
}
console.log(sortRestArgs(1, 5, 6, 2, 7, 5, 3, 4, 3, 5, 6));

function sortArguments() {
	const sortedArgs = arguments.sort();
	return sortedArgs;
}
console.log(sortArguments(4, 5, 6, 6, 4, 3, 2, 1));

// rest parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of arguments to an array
// before rest parameters , arguments need to be converted to a normal array before calling array methods on them.
