/* Output prime numbers.
https://javascript.info/while-for#output-prime-numbers
*/

// My solution
"use strict";
function outputPrimeNumbers() {
	let n;
	while (isNaN(n)) {
		n = parseInt(prompt("Enter any number"));
		if (isNaN(n)) {
			alert("Incorrect input");
		}
	}
	const divArray = [];
	let primeNumbers = "";
	for (let i = 2; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			let divideResult = i % j;
			if (divideResult === 0) {
				divArray.push(j);
			} else {
				continue;
			}
		}
		if (divArray.length === 2) {
			primeNumbers += ` ${i}`;
		}
		divArray.length = 0;
	}
	console.log(primeNumbers);
}

// javascript.info solution
function primeUsingLabel() {
	let n;
	while (isNaN(n)) {
		n = parseInt(prompt("Enter any number"));
		if (isNaN(n)) {
			alert("Incorrect input");
		}
	}
	nextPrime: for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}
		alert(i);
	}
}
outputPrimeNumbers();
