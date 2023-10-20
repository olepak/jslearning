// at() method returns an indexed character from a string
// it returns the same as []
// string.at(index)
// index - optional. The index of the character to be returned. Default is 0. -1 returns the last character
// return value - the character in given position
function at() {
	let text = "W3Schools";
	let char = text.at(0);
	console.log(char);
	// returns the same as []
	let char2 = text[3];
	console.log(char2);
}

// charAt method returns the character at a specified index(position) in a string
// string.charAt(index)
// index - optional. default = 0
// return value - the character at a specified position. empty string ("") if the index is out of range
function charAt() {
	// get the second character of a string
	let text = "Hello World";
	let letter = text.charAt(1);
	console.log(letter);
	// get the last character in a string
	let letter1 = text.charAt(text.length - 1);
	console.log(letter1);
}

// charCodeAt() method returns the Unicode of the character
// charCodeAt() is UTF-16 and returns values only between 0 and 65535
// the index of the last character is string length -1
// return value - unicode value of the character. NaN if the index is invalid
// string.charCodeAt(index)
// index - Optional. Position of a character. default is 0
// https://www.youtube.com/watch?v=x16Z_U1tGrc&t=3472s
function charCodeAt() {
	// get the Unicode of the first character in a string
	let text = "Hello word";
	let code = text.charCodeAt(0);
	console.log(code);
	// get the unicode of the 15th character (shows NaN)
	let text2 = "Hello world";
	let code2 = text2.charCodeAt(15);
	console.log(code2);
}

// codePointAt() returns the Unicode value at an index(position) in a string
// generally the same as charCodeAt() method except two differences:
// 1- can return the full value of a Unicode value greater than 0xFFFF (65536)
// 2 - returned undefined if the index is invalid
// https://www.youtube.com/watch?v=x16Z_U1tGrc&t=3472s
function codePointAt() {
	// get code point value at the first position in a string
	let text = "Hello world";
	let code = text.codePointAt(0);
	console.log(code);
	// get the code point value at the last position
	let code2 = text.codePointAt(text.length - 1);
	console.log(code2);
	// get the code point value at the 15th position
	let code3 = text.codePointAt(15);
	console.log(code3);
}

// concat() method joins two or more strings
// it does not change the existing string
// it returns a new string
//string.concat(string1, string2,...., stringX)
// string1 - required
// string2, ..., stringX - the strings to be joined
// it is strongly recommended to use assignment operator (+, +=) instead of the concat() method, because it is way faster
function concat() {
	// join two strings
	let text1 = "sea";
	let text2 = "food";
	let result = text1.concat(text2);
	console.log(result);
	// join two strings
	let text3 = "Hello";
	let text4 = "World!";
	console.log(text3.concat(" ", text4));
	// join three strings
	let text5 = "Have a nice day!";
	console.log(text3.concat(" ", text4, " ", text5));
	// it is strongly recommended to use assignment operator (+, +=) instead of the concat() method, because it is way faster
	let result3 = text1 + text2;
	console.log(result3);
}

// constructor property returns the function that created the String prototype
function constructor() {
	let text = "Hello world";
	let message = text.constructor;
	console.log(message);
}

// endsWith() method returns true if a string ends with a specified string.
// otherwise it returns false
// it is case sensitive
// return value - boolean
// string.endsWith(searchvalue, length)
// searchvalue - required. the string to search for
// length - optional. the length of the string to search. default - string length
function endsWith() {
	let text = "Hello world";
	console.log(text.endsWith("world"));
	console.log(text.endsWith("World"));
	// check if the first 11  characters of a string ends with "world"
	let text2 = "Hello world, welcome to the universe.";
	console.log(text2.endsWith("world", 11));
}

// String.fromCharCode() method converts Unicode values to characters
// it is a static method of the String object
// the syntax is always String.fromCharCode()
// you cannot use myString.fromCharCode()
// there is a String.fromCodePoint() method.
// Explanation of both methods https://youtu.be/x16Z_U1tGrc?t=3906
function fromCharCode() {
	// convert Unicode values to characters
	let char = String.fromCharCode(65);
	console.log(char);
	let text = String.fromCharCode(72, 69, 76, 79);
	console.log(text);
	// difference between fromCharCode and fromCodePoint is that fromCodePoint() method can take the full value of a Unicode value greater than 0xFFFF (65536)
	// fromCharCode() method cannot take values greater than 65535. it results in a broken character
	let char1 = String.fromCharCode(128007);
	console.log(char1); // broken value
	// fromCodePoint() method can take the full value of a Unicode value greater than 0xFFFF (65536)
	let char2 = String.fromCodePoint(128077);
	console.log(char2);
	// fromCharCode() method cannot take values greater than 65536
	let char3 = String.fromCharCode(79, 107, 32, 55357, 56397);
	console.log(char3);
	let char4 = String.fromCodePoint(79, 107, 32, 128077);
	console.log(char4);
}

// includes() method returns true if a string contains a specified string.
// otherwise it returns false
// it is case sensitive
// string.includes (searchvalue, start)
// searchvalue - required. the string to search for
// start - optional. the position to start from. default value - 0
// return value - boolean
function includes() {
	// check if a string includes "world"
	let text = "Hello world, welcome to the universe.";
	console.log(text.includes("world"));
	// start at position 12
	let text2 = "Hello world, welcome to the universe.";
	console.log(text2.includes("world", 12));
}

// indexOf() method returns the position of the first occurrence in a string
// it returns -1 i the value was not found
// it is case sensitive
// string.indexOf(searchvalue, start)
// searchvalue - required. the string to search for
// start - optional. the position to start from
// return value - a number, the first position where the value occurs, -1 if it never occurs
function indexOf() {
	// search a string for welcome
	let text = "Hello world, welcome to the universe.";
	let result = text.indexOf("welcome");
	console.log(result);
	// search a string for "Welcome"
	let result2 = text.indexOf("Welcome");
	console.log(result2);
	// find the first occurrence of "o"
	console.log(text.indexOf("o"));
	// find the first occurrence of "e", starting at position 5
	console.log(text.indexOf("e", 5));
	// negative start value is always considered as 0
	console.log(text.indexOf("world", -5));
	// empty string as a searchvalue always returns 0
	console.log(text.indexOf(""));
}

// lastIndexOf() method returns the position of the last occurrence in a string
// starting position by default +Infinity
// it searches from right to left
function lastIndexOf() {
	let text = "Hello world, welcome to the universe.";
	console.log(text.lastIndexOf("e"));
	// searching from the position 23
	let s = "The code undefined code code !";
	console.log(s.lastIndexOf("code", 23));
	// negative start value is always considered as 0 and therefore returns -1
	// https://youtu.be/x16Z_U1tGrc?t=350
	console.log(s.lastIndexOf(-5));
	// empty string as a searchvalue always returns string length
	console.log(s.length);
	console.log(s.lastIndexOf(""));
}

// length() property returns the length of a string
// the length property of an empty string is 0
function length() {
	let text = "Hello world";
	console.log(text.length);
}
length();

// localeCompare() method compares two strings in the current locale.
// it returns sort order -1, 1, or 0 ( for before, after, or equal).
// the current locale is based on the language settings of the browser
// string.localeCompare(compareString, locales)
// compareString - the string to compare with
// locales - optional. indicates the language setting of a browser ("uk", "de", "ua" etc.)
function localeCompare() {
	// compare "ab" with "cd"
	let text1 = "ab";
	let text2 = "cd";
	let result = text1.localeCompare(text2);
	console.log(result);
}

// match() method matches a string against a regular expression
// if the search value is a string it is converted to a regular expression
// it returns an array of matches
// it returns null if no match is found
// string.match(match)
// match - required. the search value. a regular expression ( or a string thar will be converted to a regular expression)
function match() {
	let text = "The rain in SPAIN stays mainly in the plain";
	let result = text.match("ain");
	console.log(result);
	// global search for ain
	console.log(text.match(/ain/g));
	// a global case-insensitive search
	console.log(text.match(/ain/gi));
	// match is not found
	console.log(text.match(/w/));
}

// padEnd() method pads a string at the end
// it pads a string with another string  multiple times until it reaches a given length
// it is a string method. to pad a number, convert the number to a string first
// it creates a new string
//string.padEnd(length, string)
// length - required. the length of the resulting string
// string - optional. the string to pad with. default is space
// return value - a string of the specified length.
function padEnd() {
	let text = "5";
	let padded = text.padEnd(4, "0");
	console.log(padded);
	let padded2 = text.padEnd(4, "x");
	console.log(padded2);
	// to pad a number, convert the number to a string first
	let numb = 5;
	let text2 = numb.toString();
	let padded3 = text2.padEnd(4, "v");
	console.log(padded3);
	// it pads a string with multiple times until it reaches a given length and truncates it when the specified length is reached
	let string = "abc";
	let paddedString = string.padEnd(10, "foo");
	console.log(paddedString);
}

// padStart() method is the same as padEnd() method.
// the only difference - it pads a string at the start
function padStart() {
	let text = "5";
	let padded = text.padStart(4, "0");
	console.log(padded);
}

// prototype is a property available with all JavaScript objects.
// it allows to add new properties and methods to strings

// repeat() method returns a string with a number of copies of a string
// it returns a new string
// it does not change the original string
// string.repeat(count)
//count - required. the number of copies
function repeat() {
	let text = "Hello world";
	let result = text.repeat(4);
	console.log(result);
}

// replace() method searches a string for a value or a regular expression
// it returns a new string with the values replaced
// it does not change the original array
// if you replace a value, only the first value will be replaced. to replace all instances use a regular expression with the g modifier
// string.replace(searchValue, newValue(or function))
// searchValue - required. the value, or regular expression, to search for
// newValue - required. the new value(to replace with)
function replace() {
	//replace Microsoft
	let text = "Visit Microsoft!";
	let result = text.replace("Microsoft", "W3School");
	console.log(result);
	// a global replacement
	let text2 = "Mr Blue has a blue house and a blue car";
	let result2 = text2.replace(/blue/g, "red");
	console.log(result2);
	// a global, case-insensitive replacement
	let result3 = text2.replace(/blue/gi, "red");
	console.log(result3);
	// a function to return the replacement text
	let result4 = text2.replace(/blue|house|car/gi, (match) => {
		return match.toUpperCase();
	});

	console.log(result4);
}

// replaceAll() method searches a string for a value or a regular expression
// it returns a new string with all values replaced
// it does not change the original string
// if the parameter is a regular expression, the global flag(g) must be set, otherwise a TypeError is thrown
// string.replaceAll(searchValue, newValue(or function))
// searchValue - required. the value, or regular expression, to search for
// newValue - required. the new value(to replace with).This parameter can be a JavaScript function.
// it was introduced in ES2021
function replaceAll() {
	let text = "I love cats. Cats are very easy to love. Cats are very popular";
	let result = text.replaceAll("Cats", "Dogs");
	console.log(result);
}

// search() method matches a string against a regular expression
// it returns the index (position) of the first match
// it returns -1 if no match is found
// it is case sensitive
// string.search(searchValue)
// searchValue - required. the search value. a regular expression, or a string that will be converted to a regular expression
function search() {
	let text = "Mr.Blue has a blue house";
	let position = text.search("Blue");
	console.log(position);
	// search for "blue"
	let position2 = text.search("blue");
	console.log(position2);
	// search case insensitive
	let position3 = text.search(/blue/i);
	console.log(position3);
}

// slice() method extracts a part of a string
// it returns the extracted part in a new string
// it does not change the original string
// string.slice(start, end)
// start - required. the start position
// end - optional. the end position (up to but not including). default is string length
// a negative number selects from the end of the string
// difference between slice() and substring() https://youtu.be/x16Z_U1tGrc?t=1168
function slice() {
	// slice the first five positions
	let text = "Hello world";
	let result = text.slice(0, 5);
	console.log(result);
	// from position 3 to the end
	let result2 = text.slice(3);
	console.log(result2);
	// from position 3 to 8
	console.log(text.slice(3, 8));
	// only the first character
	console.log(text.slice(0, 1));
	// only the last character
	console.log(text.slice(-1));
	// the whole string
	console.log(text.slice(0));
	//
}

// substring() method extracts characters, between two indices(positions), from a string, and returns the substring
// it extracts characters from start to end(exclusive)
// it returns a string containing the extracted characters
// it does not change the original string
// string.substring(start, end)
// start - required. start position.
// end - optional. end position(up to but not including). if omitted - the rest of the string
// if start is greater than end, arguments are swapped (4, 1) = (1, 4)
// start or end values less than 0 are treated as 0
function substring() {
	let text = "Hello world";
	let result = text.substring(1, 4);
	console.log(result);
	// start from position 2
	let result2 = text.substring(2);
	console.log(result2);
	// if start is greater than end, parameters are swapped
	let result3 = text.substring(4, 1);
	console.log(result3);
	// if start is less than 0, it will start from 0
	let result4 = text.substring(-3);
	console.log(result4);
	// only the first
	let result5 = text.substring(0, 1);
	console.log(result5);
	// only the last
	let result6 = text.substring(text.length - 1);
	console.log(result6);
}

// difference between slice() and substring() https://youtu.be/x16Z_U1tGrc?t=943
function differenceSlSub() {
	// negative values are treated differently. slice() treats it as the position from the end of the string. substring() converts it to 0
	let text = "The morning is upon us";
	console.log(text.slice(-11));
	console.log(text.substring(-11));
	// if end value is greater than start value, slice() returns empty string, substring() swaps the values and returns respective substring
	console.log(text.slice(16, 13));
	console.log(text.substring(16, 13));
}

// substr() method is a deprecated method and extracts a part of a string
// use substring() or slice() instead
// it begins at specified position and returns a specified number of characters
// it does not change the original string
// to extract characters from the end of the string use a negative start position
// string.substr(start, length)
// start - required. the start position if start greater than length it returns ""
// if start is negative, it counts from the end of the string
// length - optional. the number of characters to extract. if omitted, it extracts the end of the string
function substr() {
	let text = "Hello world";
	let result = text.substr(1, 4);
	console.log(result);
}

// split() method splits a string into an array of substrings
// it returns the new array
// it does not change the original string
// if (" ") used as a separator, the string is split between words
// string.split(separator, limit)
// separator - optional. a string or regular expression to use for splitting
// if omitted, an array with the original string is returned
// limit - optional, an integer that limits the number of splits. items after the limit are excluded
function split() {
	// split the words
	let text = "Hello world, welcome to the universe.";
	let result = text.split(" ");
	console.log(result);
	// return the second word
	let word = result[1];
	console.log(word);
	// split the characters, including spaces
	let result2 = text.split("");
	console.log(result2);
	// split with "e"
	let result3 = text.split("e");
	console.log(result3);
	// split with "e" two times, the rest is omitted
	let result4 = text.split("e", 2);
	console.log(result4);
}

// startsWith() method returns true if a string starts with a specified string
// otherwise it returns false
// it is case sensitive
// string.startswith(searchValue, start)
// searchValue - required. the string to search for
// start - optional. start position. default is 0
function startsWith() {
	// start at position 0 (true)
	let text = "Hello world, welcome to the universe.";
	let result = text.startsWith("Hello");
	console.log(result);
	// starts at position 1 (false)
	console.log(text.startsWith("Hello", 1));
}

// toLocaleLowerCase() method converts a string to lowercase letters, using current locale
// the locale is based on the language of the browser
// it does not change the original string
// it returns the same result as toLowerCase(), except for locales that conflict withe the regular Unicode case mappings (such as Turkish)
// returned value - a new string converted to lowercase according to current locale
function toLocaleLowerCase() {
	let text = "Hello world";
	let result = text.toLocaleLowerCase();
	console.log(result);
}

// toLocaleUpperCase() method converts a string to uppercase letters, using current locale
// everything else - the same as for toLocaleLowerCase
function toLocaleUpperCase() {
	let text = "Hello world";
	let result = text.toLocaleUpperCase();
	console.log(result);
	// example for Turkish
	let text2 = "istanbul";
	console.log(text2.toLocaleUpperCase());
	console.log(text2.toLocaleUpperCase("tr"));
}

// toLowerCase() and toUpperCase() methods acts the same as toLocaleLowerCase() and toLocaleUpperCase accordingly, but without taking into consideration current locale
// they both return uppercased or lowercased  string
// they do not change the original string

//toString() and valueOf() methods return a string as a string
// they can be used to convert a string object into a string
// they are used internally by JavaScript when an object needs to be displayed as text (like in HTML), or when an object needs to be used as a string
// normally,they are  not used it own code
function toString() {
	// get the content of the text
	let text = "Hello world";
	let result = text.toString();
	console.log(result);
	// same as
	result = text;
	// get the value of a String object
	let text2 = new String("Hello world");
	console.log(text2);
	console.log(typeof text2);
	let result2 = text.valueOf();
	console.log(result2);
	console.log(typeof result2);
}

// trim() method removes whitespace from both sides of a string
// it does not change the original string
function trim() {
	let text = "        Hello world        ";
	let result = text.trim();
	console.log(result);
}

// trimStart() and trimEnd() methods work as trim(),but remove whitespaces only from the start or the end of a string accordingly

const path = "c:\\windows\\registration\\name\\filename.js";
console.log(path);
