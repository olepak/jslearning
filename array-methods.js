//  at() returns an indexed element from an array
function at() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let index = 2;
	let fruit = fruits.at(index);
	console.log(fruit);
	let fruit1 = fruits.at(3);
	console.log(fruit1);
	// the at() method returns the same as []
	let fruit3 = fruits[3];
	console.log(fruit3);
}

//  concat() joins two or more arrays and returns new joined array
function concat() {
	// 1 merges two or more arrays
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const names = ["John", "Mary", "Ivan"];
	const joinedArray = fruits.concat(names);
	console.log("1 - Merges two or more arrays: " + joinedArray);
	// 2 this method does not change initial array
	console.log("2 - Initial arrays were not changed: " + fruits + " " + "names");
	// 3 merges strings and numbers
	const arr1 = [1, 2, 3, 4];
	const arr2 = ["Cecile", "Leone"];
	const arr3 = arr1.concat(arr2);
	console.log("3 - Merges string and numbers: " + arr3);
	// 4 merges nested arrays
	const arr4 = [1, 2, [3, 4]];
	const arr5 = [[5, 6], 7, 8];
	const arr6 = arr4.concat(arr5);
	console.log("4 - Merges nested arrays:" + arr6);
	// 5 acts like push method i.e appends any values to the end
	const arr7 = fruits.concat(1, 2, "anyvalue");
	console.log(
		`5 - Acts like push method i.e appends any values to the end: ${arr7} `
	);
	// 6 creates copy of an array if no argument provided
	const arr8 = fruits.concat();
	console.log(`6 - Creates copy of an array if no argument provided: ${arr8}`);
}

//  constructor property returns the function that crated the Array prototype
function constructor() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let text = fruits.constructor;
	console.log(text);
}

//  copyWithin() copies array elements to another position in the array,
// overwrites the existing values (does not add items to the array), and returns the changed array
// syntax: array.copyWithin (target, start, end)
// target - required. The index position to copy the elements to.
// start - optional. Index of the first element of copied row. Default is 0
// end - optional. (end-1) is the index of the last element of copied row. Default is the array length
// 1 - copy the first two elements to the last two array elements
function copyWithin() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.copyWithin(2);
	console.log(
		"1 - Copy the first two elements to the last two array elements:"
	);
	console.log(fruits);
	// 2 - copy the first two array elements to the third and fourth position
	const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
	fruits2.copyWithin(2, 0, 2);
	console.log(
		"2 - Copy the first two array elements to the third and fourth position"
	);
	console.log(fruits2);
	// 3 - it can take negative values and always returns changed array
	// if the value is negative it treats like length + negative value
	const myArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
	const myArray2 = myArray.copyWithin(0, -4, -1);
	console.log(
		"3 - It can take negative values and always returns modified array"
	);
	console.log(myArray);
	console.log(myArray2);
	console.log(myArray === myArray2);
}

//  entries() method returns an Array iterator object with key/value pairs
// entries () method does not change the original array
function entries() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log("Here is the original array:");
	console.log(fruits);
	console.log(
		"Here is the iteration over key/value pair after entries() method being applied"
	);
	const f = fruits.entries();
	for (let x of f) {
		console.log(x);
	}
}

//  every() method executes function for each array element
// every() method returns true if the function returns true for all elements
// every() returns false if the function returns false for one element
// every() method does not execute the function for empty elements
// every() method does not change the original array
// return value is Boolean. true if all elements pass the test, otherwise false
// check if all values in ages[] are over 18:
function every() {
	const ages = [32, 33, 30, 19];
	function checkAge(age) {
		return age > 18;
	}
	const res = ages.every(checkAge);
	console.log(res);
}

//  fill() method fills specified elements in an array with a value
// fill() method overwrites the original array
// start and end position can be specified. If not , all elements will be filled
// syntax: array.fill (value, start, end)
// value  - Required. The value to fill in.
// start - Optional. The start index position. Default is 0.
// end - Optional. The stop index position. Not included. Default is array length.
function fill() {
	// fill all the elements with the value
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.fill("Kiwi");
	console.log(fruits);
	// fill the last two elements
	const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
	fruits2.fill("Kiwi", 2, 4);
	console.log(fruits2);
	// it always returns changed (filled) array
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numbers);
	const numbers2 = numbers.fill(1);
	console.log(numbers === numbers2);
	// filling the array with numbers
	function fillNumbers(n) {
		return Array(n)
			.fill(0)
			.map((_, idx) => idx + 1);
	}
	console.log(fillNumbers(10));
}

//  filter() method creates a new array filled with elements that pass a test provided by a function
// the filter() method does not execute the function for empty elements
// the filter() method does not change the original array
function filter() {
	// return an array of all values in ages[] that are over 18:
	const numbers = [775, 7, 985, 6, 9485, 11, 12, 85905, 47];
	function checkNumber(age) {
		return age < 18;
	}
	const numberLessThanEighteen = numbers.filter(checkNumber);
	console.log(numberLessThanEighteen);
}
// filtering unique numbers from an array https://www.youtube.com/watch?v=IXp06KekEjM&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&index=4
function filter2() {
	const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
	const nums = numbers.filter((value, index, arr) => {
		return arr.indexOf(value) === index;
	});
	console.log(nums);
}

//  find() method returns the value  of the first element that passes the test
// find() method executes a function for each array element
// find() method returns undefined if no elements are found
// find() method does not change the original array
function find() {
	// find the value of the first element with a value over 18
	const ages = [3, 18, 12, 23, 10, 17, 33, 44, 55];
	console.log(
		ages.find((age) => {
			return age > 18;
		})
	);
}

//  findIndex() method executes a function for each array element
// findIndex() method returns the index(position) of the first element that passes the test
// findIndex() returns -1 if no match is found
// findIndex() does not change the original array
function findIndex() {
	// find the index of the first element that are over than specified
	const ages = [3, 18, 12, 23, 10, 17, 33, 44, 55];
	console.log(
		ages.findIndex((age) => {
			return age === 55;
		})
	);
}

// flat() method concatenates sub-array elements
// flat() method does not change the original array
// syntax array.flat(depth)
// depth - optional, how deep a nested array should be flattened.Default is 1.
function flat() {
	const myArr = [
		[1, 2],
		[3, 4],
		[5, 6],
	];
	console.log(myArr.flat());
	const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
	console.log(myArr2.flat(2));
	// flat to infinity
	const myArr3 = [1, 2, [3, [4, 5, 6], 7], 8];
	console.log(myArr3.flat(Infinity));
}

// flatMap() method maps all array elements and creates a new flat array only with depth of 1
// flatMap() creates a new array from calling a function for every array element
// flatMap() does not change the original array
function flatMap() {
	// acts like a map() in the most easy case
	const myArr = [1, 2, 3, 4, 5, 6];
	const newArray = myArr.flatMap((x) => x * 2);
	console.log(newArray);
	// it is useful when returned  mapped value is an array and there is a need to flatten it
	const newArray2 = myArr.flatMap((x) => [x, x * 2]);
	console.log(newArray2);
	const pairs = [
		[1, 2],
		[3, 4],
		[5, 6],
	];
	const result = pairs.flatMap(function (pair) {
		return [pair[0] + pair[1]];
	});
	console.log(result);
}

// forEach() method calls a function for each element in an array
// return value - undefined
function forEach() {
	// compute the sum
	let sum = 0;
	const numbers = [33, 93, 94, 93];
	console.log(numbers);
	function sumItems(item) {
		sum += item;
	}
	numbers.forEach(sumItems);
	console.log(sum);
	// multiply each element
	function multiplyItems(item, index, arr) {
		arr[index] = item * 10;
	}
	numbers.forEach(multiplyItems);
	console.log(numbers);
}

// from() method returns an array from any object with a length property
// from() method returns an array from any iterable object
// Array.from is a static property of the JavaScript Array object.
// it can be only used as Array.from().
// Using x.from(), where x is an array will return undefined
// syntax Array.from(object, mapFunction, thisValue):
// object - Required The object to convert to an array
// mapFunction Optional A map function to call on each item
function from() {
	// create an array from a string
	let text = "ABCDEF";
	const myArr = Array.from(text);
	console.log(myArr);
	// create an array from a string of numbers
	let num = "1234567";
	const res = Array.from(num, mapFn);
	function mapFn(x) {
		return (x = +x);
	}
	console.log(res);
}

// includes() method returns true if an array contains a specified value.
// includes() method returns false if the value is not found
// includes method is case sensitive
// syntax array.includes(element, start)
// returned value - boolean
function includes() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits.includes("Banana"));
	console.log(fruits.includes("Orange", 1));
	console.log(fruits.includes("Lemon"));
	console.log(fruits.includes("Mango", 4));
}

// indexOf() method returns the first index(position) of a specified value
// it returns -1 in the value is not found
// indexOf() method starts at a specified index and searches from left to right
// By default the search starts at the first element and ends at the last
// Negative start values counts from the last element (but still searches from left to right)
// return value - the index (position) of the first element found
function indexOf() {
	// find the first index of "Apple"
	const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
	let index = fruits.indexOf("Apple");
	console.log(index);
	// Start at index 3
	let index2 = fruits.indexOf("Apple", 3);
	console.log(index2);
	// Negative start value
	let index3 = fruits.indexOf("Apple", -1);
	console.log(index3);
}
// isArray() method returns true if an object is an array, otherwise false
//  it can only be used as Array.isArray().
// Using x.isArray(), where x is an array will return false
// return value - boolean
function isArray() {
	// check if an object is an array
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(Array.isArray(fruits));
	// check if another data type is an array
	let text = "Some text";
	console.log(Array.isArray(text));
}

// join() method returns an array as a string
// join() method does not change the original array
// any separator can be specified. Default is comma
function join() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let text = fruits.join();
	console.log(text);
	// another separator
	let text2 = fruits.join(", and ");
}

// keys() method returns an Array iterator object with the keys of an array
// it does not change the original array
function keys() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const keys2 = fruits.keys();
	let text = "";
	for (let x of keys2) {
		text += x;
		// console.log(text);
		console.log(x);
	}
	console.log(typeof keys2);
}

// lastIndexOf() method returns the last index(position) of a specified value
// it returns -1 if the value is not found
// it starts at specified index and searches for right to left
// negative start values counts from the last element (but still searches from right to left)
function lastIndexOf() {
	// find the last index of Apple
	const fruits = ["Apple", "Orange", "Apple", "Mango"];
	let index = fruits.lastIndexOf("Apple");
	console.log(index);
	// more than one Apple
	const fruits2 = [
		"Apple",
		"Orange",
		"Apple",
		"Mango",
		"Banana",
		"Orange",
		"Apple",
	];
	let index2 = fruits2.lastIndexOf("Apple");
	console.log(index2);
	// start search at the position 4
	const fruits3 = [
		"Apple",
		"Orange",
		"Apple",
		"Mango",
		"Banana",
		"Orange",
		"Apple",
	];
	let index3 = fruits3.lastIndexOf("Apple", 4);
	console.log(index3);
	// start the search at the second last position
	let index4 = fruits3.lastIndexOf("Apple", -2);
	console.log(index4);
}

// length property sets or returns the number of elements in an array
function length() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let length = fruits.length;
	console.log(length);
	// setting the length of an array
	fruits.length = 1;
	console.log(fruits);
	fruits.length = 0;
	console.log(fruits);
}

// map() creates a new array from calling a function for every array element
// it does not execute the function for empty elements
// it does not change the original array
// array.map(function(currentValue, index, arr), thisValue)
function map() {
	// return a new array with the square root of all elements
	const numbers = [4, 9, 16, 25];
	const numberRoots = numbers.map(Math.sqrt);
	console.log(numberRoots);
	// multiply all the values in an array with 10
	const multiplyNumbers = numbers.map((x) => {
		return x * 10;
	});
	console.log(multiplyNumbers);
	// multiply all the values with indexes
	const multiplyNumbersWithIndex = numbers.map((x, index, array) => {
		return x * index;
	});
	console.log(multiplyNumbersWithIndex);
	// convert array of strings to an array of numbers
	const str = ["1", "2", "3", "4", "5"];
	const strNumbers = str.map(Number);
	console.log(strNumbers);
}

// pop() method removes (pops) the last element of an array
// it overwrites the original array
// it returns the removed element
// returned value - a string , a number, an array or any other type in an array
function pop() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let popped = fruits.pop();
	console.log(popped);
	console.log(fruits);
}

// prototype allows to add new properties and methods to arrays
function prototype() {
	Array.prototype.myUcase = function () {
		for (let i = 0; i < this.length; i++) {
			this[i] = this[i].toUpperCase();
		}
	};
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits);
	fruits.myUcase();
	console.log(fruits);
}

// push() method ads new items to the end of an array
// it overwrites the original array
// it changes the length of an array
// it returns the new length
function push() {
	// add a new item to an array
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Huyango");
	console.log(fruits);
	// it returns the new length
	let length = fruits.push("Anno", "Lorem");
	console.log(fruits);
	console.log(length);
}
push();

// reduce () method executes the reducer function for an array element.
// it "compresses" the array into some single value which is obtain by applying some function
// it returns a single value - the functions' accumulated result.
// it does not change the original array
// normally, array element 0 is used as an initial value, and iteration starts from array element 1
// if and initial value is supplied, this is used, and the iteration starts from array element 0
// array.reduce (function(total, currentValue, currentIndex, arr), initialValue)
// total - required. the initialValue, or the previously returned value of the function
// currentValue - required. the value of the current element
// currentIndex- optional. the index of the current element
// arr - optional. the array the current element belongs to.
// initialValue - optional. a value to be passed to the function as the initial value
// return value - the accumulated result from the last call of the callback function
function reduce() {
	// subtract all numbers in an array ( iteration starts at the second element, so the initial value of total is the value of the array's first element (position 0) = 175)
	const numbers = [175, 50, 25];
	let resultSubtraction = numbers.reduce(subtraction);
	function subtraction(total, num) {
		return total - num;
	}
	console.log(resultSubtraction);
	// round all numbers and display the sum (iteration start at the first element of the array, so the initial value of the total is specified as a second argument in a reduce() method, which is 0 in our case )
	const numbers2 = [15.5, 2.3, 1.1, 4.7];
	let resultSum = numbers2.reduce(sum, 0);
	function sum(total, num) {
		return total + Math.round(num);
	}
	console.log(resultSum);
	// searching max. value in  an array
	const numbers3 = [18, 39, 27, 18, 493, 84, 3948, 48, 1];
	let maxValue = numbers3.reduce(searchMax, -Infinity);
	function searchMax(accumulator, value) {
		if (accumulator > value) {
			return accumulator;
		} else return value;
	}
	console.log(maxValue);
	// work with objects. the total price of all products
	const store = [
		{
			product: "laptop",
			value: 1000,
			count: 3,
		},
		{
			product: "desktop",
			value: 1500,
			count: 4,
		},
		{
			product: "mobile",
			value: 500,
			count: 10,
		},
	];
	const total = store.reduce(totalCost, 0);
	function totalCost(total, item) {
		return total + item.value * item.count;
	}
	console.log(total);
}

// reduceRight() method works in the same way as reduce() method
// the only difference is the direction of the execution
// reduceRight() method starts the execution from the last element of an array

// reverse() method reverses the order of the elements in an array
// it overwrites the original array
function reverse() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.reverse();
	console.log(fruits);
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	numbers.reverse();
	console.log(numbers);
	// creating the reversed copy of an array
	const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const reversedNumbers = numbers2.concat().reverse();
	console.log(reversedNumbers);
	// reversing a string
	let str = "Coding is fun!";
	const reversedStr = str.split("").reverse().join("");
	console.log(reversedStr);
}

// shift() method removes the first element of an array
// it overwrites the original array
// it returns the shifted element
function shift() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits.shift());
	console.log(fruits);
}

// slice() method returns selected elements in an array, as a new array
// it selects from a given start, up to a ( not inclusively) given end
// it does not change the original array
// array.slice(start, end)
// start - optional. default is 0. Negative numbers select from the end of an array
// end - optional. default is the last element. Negative numbers select from the end of an array
function slice() {
	// select elements
	const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	const citrus = fruits.slice(1, 3);
	console.log(citrus);
	// select elements using negative values
	const myBest = fruits.slice(-3, -1);
	console.log(myBest);
	const fruits2 = fruits.slice();
	// can be used to copy the array
	console.log(fruits2);
}

// some (method) checks if any element pass a test (provided as a callback function)
// it executes the callback function once for each array element
// it returns true ( and stops) if the function returns true for one of the array element
// it returns false if the function returns false for all of the array elements
// it does not change the original array
// return value - boolean. true - if any of the array elements pass the test, otherwise false
function some() {
	// check if any value are over 18
	const ages = [3, 18, 10, 20];
	console.log(ages.some((age) => age > 18));
	// check if a person is in the list
	const persons = [
		{
			personName: "Florin",
			age: 25,
		},
		{
			personName: "Liam",
			age: 16,
		},
		{
			personName: "John",
			age: 32,
		},
	];
	function isAdult(person) {
		return person.age > 18;
	}
	console.log(persons.some(isAdult));
}

// sort() sorts the elements of an array
// it overwrites the original array
// it sorts the elements as strings in alphabetical and ascending order
// return value - the array with items sorted
function sort() {
	// sort array
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits.sort());
	// sort and then reverse the order
	const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits2.sort().reverse());
}
// sorting numbers can produce incorrect results - "25" is bigger than "100", because "2" is bigger than "1"
// it can be fixed by providing a compare function
// array.sort(compareFunction)
// compareFunction - optional. a function that defines a sort order.
// the function should return a negative, zero, or positive function, depending on the arguments:
// function(a, b){return a - b}
// when sort() compare two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value
function sortCompare() {
	// sort number in ascending order
	const points = [40, 100, 1, 5, 25, 10];
	points.sort((a, b) => a - b);
	console.log(points);
	// sort number in descending  order
	const points2 = [40, 100, 1, 5, 25, 10];
	points2.sort((a, b) => b - a);
	console.log(points2);
	// find the lowest value
	console.log(points[0]);
	// find the highest value
	console.log(points[points.length - 1]);
}
// sort objects
function sortObjects() {
	const products = [
		{
			name: "Laptop",
			price: 1000,
		},
		{
			name: "desktop",
			price: 1500,
		},
		{
			name: "phone",
			price: 500,
		},
	];
	products.sort((a, b) => b.price - a.price);
	console.log(products);
}

// splice() method adds and/or removes array elements
// it overwrites the original array
// it returns an array of removed elements (if any)
// array.splice (index, howmany, item1, ...., itemX)
// index - required. the position to add/remove items. Negative values defines the position from the end of the array.
// howmany - optional. Number of items to be removed
// item1, ..., itemX - optional. New elements to be added
function splice() {
	// at position 2, add 2 elements
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2, 0, "Kiwi", "Lemon");
	console.log(fruits);
	// at position 2 removes two elements
	const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
	fruits2.splice(2, 2);
	console.log(fruits2);
	// remove numbers from an array and returns deleted items
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let returned = numbers.splice(2, 4);
	console.log(numbers);
	console.log(returned);
}

// toString() method returns a string with array values separated by commas
// it does not change the original array
// the toString() method is used internally by JavaScript when an object needs to be displayed as a text (as in HTML) or when an object needs to be used as a string
// normally it is not used in the code
function toString() {
	// convert an array to a string:
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits);
	console.log(fruits.toString());
}

// unshift() method adds new elements to the beginning of an array
// it overwrites the original array
// return value - the new length of an array
function unshift() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let newLength = fruits.unshift("Lemon", "Orange");
	console.log(newLength);
	console.log(fruits);
}
unshift();

// valueOf() method returns the array itself
// it does not change the original array
//fruits.valueOf() returns the same as fruits
function valueOf() {
	// get the value of fruits
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const myArray = fruits.valueOf();
	console.log(myArray);
	// fruits.valueOf() return the same as fruits
	const myArray2 = fruits;
	console.log(myArray2);
}
