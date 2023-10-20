// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// arguments is an array-like object accessible inside functions that contains the values of the arguments
function func1(a, b, c) {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
func1(5, 6, 7);

// in modern code, rest parameters should be preferred
// it is available within all non-arrow functions
// the arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions. This example function accepts any number of string arguments and returns the longest one
function longestString() {
	let longest = "";
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	console.log(longest);
}
longestString("here", "I", "go", "again");

// each argument can also be reassigned
arguments[1] = "new value";

// non strict functions that only has simple parameters(that is no rest, default, or destructed parameters) will sinc the new value of parameters and vice versa
function func(a) {
	arguments[0] = 99;
	console.log(a);
}
func(10);

// non-strict functions that are passed rest, default, or destructed parameters will not sync new values assigned to parameters in the function body with the arguments object. Instead, the arguments object in non-strict functions with complex parameters will always reflect the values passed to the function when the function was called
function funcWithDefault(a = 55) {
	// here the function takes a default parameter (a = 55) which can be replaced, if the function call passed different argument value (10), but default parameter can not be replaced by arguments object
	arguments[0] = 99; // updating arguments does not also update a
	console.log(a);
}
funcWithDefault(10);

// updating a does not also update arguments[0]
function funcWithDefault2(a = 55) {
	a = 99;
	console.log(arguments[0]);
}
funcWithDefault2(10);

// An untracked default parameter
function funcWithDefault3(a = 55) {
	console.log(arguments[0]);
	console.log(arguments.length);
}
funcWithDefault3();

// arguments is an array-like object, which means that arguments has a length property and properties indexed from zero, but it does not have Array's built-in methods like forEach() or map(). However, it can be converted to a real Array, using one of slice(), Array.from(). or spread syntax.
const args = Array.prototype.slice.call(arguments);
// or
const args2 = Array.from(arguments);
// or
const args3 = [...arguments];
