"use strict";

// for ... of
function forOf() {
	console.clear();
	const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
	console.log('        Here is how "for ... of" works');
	for (const cat of cats) {
		console.log(cat);
	}
}

// map
function map() {
	console.log('         Here is how "map" works');
	const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
	function toUpper(string) {
		return string.toUpperCase();
	}
	const upperCats = cats.map(toUpper);
	for (const upperCat of upperCats) {
		console.log(upperCat);
	}
}

// filter
function filter() {
	const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
	console.log('         Here is how "filter" works');
	function lCat(cat) {
		return cat.startsWith("L");
	}
	const filtered = cats.filter(lCat);
	for (const filter of filtered) {
		console.log(filter);
	}
}

// test for loop
function testForLoop() {
	console.log("         This is a test for loop");
	for (let i = 1; i < 11; i++) {
		console.log(`${i} * ${i} = ${i * i}`);
	}
}

// the for loop through an array
function loopThroughAnArray() {
	console.log("         For loop through an array");
	const catNames = ["Pete", "Biggles", "Jasmine"];
	let myFavoriteCat = "My favorite cats are";
	for (let i = 0; i < catNames.length; i++) {
		if (i === catNames.length - 1) {
			myFavoriteCat += ` and ${catNames[i]}.`;
		} else {
			myFavoriteCat += ` ${catNames[i]},`;
		}
	}
	console.log(myFavoriteCat);
}

// Exit loop with break
function exitLoopWithBreak() {
	console.log("         Exit loop with break");
	const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let myChoice = 11;
	myChoice = +myChoice;
	for (i = 0; i < myNumbers.length; i++) {
		if (myChoice === myNumbers[i]) {
			console.log("Found");
			break;
		}
	}
	if (myChoice !== myNumbers[i]) {
		console.log("Not found");
	}
}

// Skipping iterations with continue
function skipWithContinue() {
	console.log("        Skipping iterations with continue");
	let num = prompt("Enter any number within the range of 1 - 100 000");
	num = +num;
	if (num >= 1 && num <= 100000000) {
		let accumulated = "";
		for (i = 1; i < num; i++) {
			let sqRoot = Math.sqrt(i);
			if (Math.floor(sqRoot) !== sqRoot) {
				continue;
			}
			accumulated += ` ${i}`;
		}
		console.log(accumulated);
	} else alert("Wrong input!");
}

// While
function whileLoop() {
	console.log("        While");
	const catNames = ["Pete", "Biggles", "Jasmine"];
	let myFavoriteCat = "My favorite cats are";
	let i = 0;
	while (i < catNames.length) {
		if (i === catNames.length - 1) {
			myFavoriteCat += ` and ${catNames[i]}.`;
		} else {
			myFavoriteCat += ` ${catNames[i]},`;
		}
		i++;
	}
	console.log(myFavoriteCat);
}

// do....while
function doWhileLoop() {
	console.log("        do...while");
	const catNames = ["Pete", "Biggles", "Jasmine"];
	let myFavoriteCat = "My favorite cats are";
	let i = 0;
	do {
		if (i === catNames.length - 1) {
			myFavoriteCat += ` and ${catNames[i]}.`;
		} else {
			myFavoriteCat += ` ${catNames[i]},`;
		}
		i++;
	} while (i < catNames.length);
	{
	}
	console.log(myFavoriteCat);
}

// test for loop that runs forever
function foreverLoop() {
	console.log("         loop that runs forever. Just remove the i++ line.");
	let i = 0;
	while (i < 3) {
		console.log(i);
		i++;
	}
}

// output odd values using continue
function oddWithContinue() {
	console.log("         output odd values using continue ");
	let accumulated = "";
	for (let i = 1; i < 100; i++) {
		if (i % 2 == 0) continue;
		accumulated += ` ${i}`;
	}
	console.log(accumulated);
}

// labels for break/continue
function labelsForBreakOrContinue() {
	console.log("         labels for break/continue");
	outer: for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let input = prompt(`Value at coord (${i}, ${j})`);
			if (!input || isNaN(input)) {
				alert("Incorrect input. The operation will be finished");
				break outer; // here is where break with label steps in
			}
			console.log(`the value for ${i}, ${j} is ${input}`);
		}
	}
	alert("Done!");
}

labelsForBreakOrContinue();
