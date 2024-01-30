// The Odin project. DOM manipulation and events https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#dom-methods

// TARGETING NODES WITH SELECTORS
const container = document.querySelector("#container"); // selects the #container div
console.dir(container.firstElementChild); // selects the first child of #container
const controls = document.querySelector(".controls"); // selects the .controls div
console.dir(controls.previousElementSibling); // selects the prior sibling

// QUERY SELECTORS
element.querySelector(selector); // returns a reference to the first match of selector
element.querySelectorAll(selectors); // returns a "nodelist" containing references to all of the matches of the selectors

// ELEMENT CREATION
// document.createElement(tagName, [options]); // creates a new element of tag type tagName. [options] means you can add some optional parameters.
const parentElement = document.createElement("div");
document.body.appendChild(parentElement);
parentElement.textContent = "Some text";
// it does not put a new element into the DOM - it simply creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page.

// APPEND ELEMENTS
// You can place the element into the DOM with one of the following methods:
// parentNode.appendChild(childNode); // appends "childNode" as the last child of "parentNode"
// parentNode.insertBefore(newNode, referenceNode); // inserts "newNode" into "parentNode" before reference node
const nestedDiv = document.createElement("p");
parentElement.appendChild(nestedDiv);
const newParagraph = document.createElement("p");
document.body.appendChild(newParagraph);
newParagraph.textContent = "I am here! Look at me!!!";
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Hey! I am another paragraph!";
document.body.insertBefore(anotherParagraph, newParagraph);

// REMOVE ELEMENTS
// removes "child"from "parentNOde" on the DOM ant returns a reference to "child"
// parentNode.removeChild(child);
console.log(document.body.removeChild(newParagraph)); // removes element and returns a reference to removed element to the console

// ALTERING ELEMENTS
// it allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more
const div = document.createElement("div"); // creates a new div referenced in the variable "div"
div.style.color = "blue"; // adds the indicated style rule
div.style.cssText = "color:blue; background: white"; // adds several style rules
div.setAttribute("style", "color:blue; background:white"); // adds several style rules
// enlightenments from https://domenlightenment.com/#6.2
let divStyle = div.style; // or document.querySelector("div"). style if you are targeting HTML elements
// set
divStyle.backgroundColor = "red";
divStyle.border = "1px solid black"; // and so on and so forth with every css property
// get
console.log(divStyle.backgroundColor); // and so on and so forth with every css property
// remove
divStyle.border = ""; // and so on and so forth with every css property
// note that if you are accessing a kebab-cased rule from JS, you will either need to use camelCase or bracket notation instead of dash notation
divStyle.background - color; // does not work
divStyle.backgroundColor; // works
divStyle["background-color"]; // also works

// EDITING ATTRIBUTES
div.setAttribute("id", "theDiv"); // if id exists, update it to "theDiv", else create an id with the value "theDiv"
div.getAttribute("id"); // returns value of specified attribute, in this case "theDiv"
div.removeAttribute("id"); // removes specified attribute

// WORKING WITH CLASSES
div.classList.add("new"); // adds class "new" to your new div
div.classList.remove("new"); // removes "new" class from div
div.classList.toggle("active"); // if div does not have class "active" then add it, or if it does, then remove it
// it is often standard and standard (and cleaner) to toggle a css style rather than adding and removing inline css.

// ADDING TEXT CONTENT
div.textContent = "Hello world"; // creates a next node containing "Hello world" and inserts it in div

// ADDING HTML CONTENT
div.innerHTML = "<span>Hello World!</span>"; // renders HTML inside div

// ADD EVENTS https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events
const btn = document.querySelector("#btn"); // selection by id
btn.addEventListener("click", () => {
	alert("Hello world");
});
// it also can be used with a named function
function alertFunction() {
	alert("Yay! You did it!");
}
btn.addEventListener("click", alertFunction);
// using named functions can clean up the code considerably. And it is a good idea if you
// want to use it in multiple places

// EVENTS WITH PARAMETERS
btn.addEventListener("click", function (e) {
	console.log(e);
});
// the e in that function is an object that references event itself.With that object
// you have the access to many useful properties and methods ( functions that lives inside an object)
// such as which mouse button or key was pressed, or information about the events's target - the DOM
// node that was clicked
btn.addEventListener("click", function (e) {
	console.log(e.target);
});

btn.addEventListener("click", function (e) {
	e.target.style.background = "blue";
});

// ATTACHING LISTENERS TO GROUPS OF NODES
// let's have a container of buttons in HTML
<div id="container">
	<button id="1">Click me</button>
	<button id="2">Click me</button>
	<button id="3">Click me</button>
</div>;
// buttons is a node list. it looks and acts much like an array
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
	// and for each one we add a click listener
	button.addEventListener("click", () => {
		alert(button.id);
	});
});

// NODE TYPES https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/
Node.ELEMENT_NODE; // value = 1 An element node like <p> or <div>
Node.TEXT_NODE; // value = 3 The actual Text inside an Element or Attr.
Node.CDATA_SECTION_NODE; // value = 4 A CDATA Section, such as <!CDATA [[...]]>
Node.PROCESSING_INSTRUCTION_NODE; // value = 7 A ProcessingInstruction of an XML document, such as <?xml-stylesheet...?>
Node.COMMENT_NODE; // value = 8
Node.DOCUMENT_NODE; // value = 9 A Document node.
Node.DOCUMENT_TYPE_NODE; // value = 10 A Document type node , such as <!Doctype html>
Node.DOCUMENT_FRAGMENT_NODE; // value = 11 A DocumentFragment node.
// get type of node
node.nodeType;
// compare the nodeType property with the constants to determine the node type
if (node.nodeType === Node.ELEMENT_NODE) {
	// node is the element node
}
// A node has two properties: nodeName and nodeValue. Their values depend on the node type.
// For example node of type Element has the nodeName the same as the elements's tag name,
// and nodeValue is always null. It is better to test node type before using these properties.
if (node.nodeType == Node.ELEMENT_NODE) {
	let name = node.nodeName; // tag name like <p>
}
// Note that getElementById() and querySelector() returns an object with the Element type while
// getElementsByTagName() or querySelectorAll() returns NodeList which is a collection of nodes
