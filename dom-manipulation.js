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

// getElementById   https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
// The document.getElementById("id") returns a DOM element specified by an id of null if no matching
// element found.
// If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters
document.getElementById("id");

// getElementsByName https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/
// returns a live NodeList of elements with a specified name
// The NodeList is an array-like object, not an array object
document.getElementsByName("name");

// getElementsByTagName() https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
let elements = document.getElementsByTagName("tagName");
// it is a method of the document or element object
// it accepts a tag name and returns a list of elements with the matching tag name
// it returns a live HTMLCollection of elements. The HTMLCollection is an array-like object

//getElementsByClassName() https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
// it returns an array-like of objects of the child elements with a specified class name. It available on the document element or any other elements.
// when calling the method on the document element, it searches the entire document and returns the child elements of the document
let elementsClass = document.getElementsByClassName(names);
// however, when calling the method on a specific element, it returns the descendants of that specific element with the given class name
let elementsClass2 = rootElement.getElementsByClassName(names);
// the names parameter is a string which represent one or more class names to match; to use multiple class names,
// separate them by space

// querySelector https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
let elementSelector = document.querySelector("selector");
// "selector" - is a CSS selector or a group of CSS selectors to match the descendant elements of the parentNode
// returns null of no element matches
// querySelectorAll() method returns a static NodeList of elements that match the CSS selector.
// If no element matches, it returns an empty NodeList.
// NodeList is is an array-like object, not an array object. However in modern browsers you can use the forEach() or the for...of loop.

// To convert the NodeList to an array use the Array.from() method:
let nodelist = document.document.querySelectorAll("selector");
let elementsFromNodeList = Array.from(nodeList);

// Universal selector "*" matches all elements of any type
let elementUniversal = document.querySelector("*"); // selects the first element in the document
let elementUniversalAll = document.querySelectorAll("*"); // selects all elements in the document

// Type selector selects element by node name e.g "a" selects all <a> elements
let firstHeading = document.querySelector("h1"); // selects the first h1 element in the document
let heading2 = document.querySelectorAll("h2"); // selects all h2 elements

// Class selector finds the element with a given CSS class name, e.g. ".className"
let note = document.querySelector(".menu-item"); // finds the first element with the menu-item class
let notes = document.querySelectorAll(".menu-item"); // finds all elements with the menu-item class

// ID selector select an element based on the value of its id, e.g. "#id"
let logo = document.querySelector("#logo"); // finds the first element with the id #logo
// since the id should be unique in the document, the querySelectorAll is not relevant

// Attribute selector selects elements that have a given attribute, e.g "[attribute]"
let autoplay = document.querySelector("[autoplay]"); // finds the first element with the attribute [autoplay]
let autoplays = document.querySelector("[autoplay]"); // finds all elements that have [autoplay] attribute

// Grouping selectors group multiple selectors
let elementsGroup = document.querySelectorAll("div, p"); // match any element with one of the selectors in the group

// Combinators
// Descendant combinator uses the space ( ) to find descendant of a node
// selector selector
let links = document.querySelector("p a"); // matches all <a> elements inside the p element

// Child combinator > finds all elements that are direct children of the first element
// selector > selector
let listItems = document.querySelectorAll("ul > li"); // finds all li elements tha are directly inside a ul element
let listItemsClass = document.querySelectorAll("ul.nav > li"); // finds all elements that are directly inside a ul element with class nav

// General sibling combinator ~ selects siblings that share the same parent
// selector ~ selector
let linksSibling = document.querySelectorAll("p ~ a"); // finds all elements that follow the p element , immediately or not

// Adjacent sibling combinator + selects adjacent siblings
// selector + selector
let linksAdjacent = document.querySelectorAll("h1 + a"); // matches all elements that directly follow an h1
let linkAdjacent = document.querySelector("h1 + a"); // selects the first a that follows an h1

// Pseudo
// Pseudo-class : matches elements based on their states
// element:state
let listItemPseudo = document.querySelectorAll("li:nth-child(2)"); // selects the second element in a list

//Pseudo-elements :: represent entities that are not included in the document
let linksPseudoElement = document.querySelector("p::first-line"); // matches the first line of all p elements

// JavaScript Events https://www.javascripttutorial.net/javascript-dom/javascript-events/
// It is an action that occurs in the web browser e.g. mouse click
// Event Flow has two main models: event bubbling and event capturing

// Event flow
// Event bubbling - an event starts at the most specific element and then flows upward toward the least specific element  ( the document or even window).
// The click event first occurs on the button which is the element that was clicked. Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.
// Event capturing - an event starts at the leas specific element and flows downward toward the most specific element
// DOM Level 2 Event flow specify that event flow has three phases:
// - first, event capturing occurs, which provides the opportunity to intercept the event
// - then, the actual target receives the event
// - finally, event bubbling occurs, which allows a final response to the event

// Event object
// When the event occurs, the web browser passes an Event object to the event handler
let btn2 = document.querySelector("#btn");
btn2.addEventListener("click", (event) => {
	console.log(event.type);
}); // Output: "click"
// Event object has a lot of properties. Event object is accessible inside the event handler.Once the event handler have been executed, the event object is automatically destroyed.
// preventDefault() - prevents default behavior of an event. It does not stop the event from bubbling up the DOM
// stopPropagation() - immediately stops the flow of an event through the DOM tree. it does not stop the browsers default behavior

// Handling Events in JavaScript https://www.javascripttutorial.net/javascript-dom/handling-events-in-javascript/
// There are three ways to assign event handlers:

// 1) HTML event handler attributes typically have names that begin with on (e.g. "onclick")
// <input type="button" value="Save" onclick="alert("Clicked!")"
// Assigning event handlers using HTML attributes is considered a bad practice and should be avoided as much as possible

// 2) DOM Level 0 event handlers
//  Each element has event handler properties such as onclick.
let btn3 = document.querySelector("#btn");
btn3.onclick = function () {
	alert("Clicked!");
}; // in this case the anonymous function becomes the method of the button element
// by using the this value inside the event handler, you can access the element's properties and methods
btn3.onclick = function () {
	alert(this.id); // output "btn"
};
// to remove the vent handler, you set the value of the event handler property to null
btn3.onclick = null;

// 3) DOM level 2 event handlers provide two main methods for dealing with the registering/deregistering event listeners:
addEventListener(); // register an event handler
removeEventListener(); // remove an event handler
// The addEventListener() method accepts three arguments: an event name, an event handler function, and a Boolean value that instructs the method to call the event handler during the capture phase (true) or during the bubble phase (false)
let btn4 = document.querySelector("#btn");
btn4.addEventListener("click", function (event) {
	alert(event.type);
}); // click
// It is possible to add multiple event handlers to handle a single event
// The removeEventListener() removes an event listener that was added via the addEventListener(). However, you need to pass the same arguments as were passed to the addEventListener()
let btn5 = document.querySelector("#btn");
let showAlert = function () {
	alert("clicked");
};
btn5.addEventListener("click", showAlert); // add the event listener
btn5.removeEventListener("click", showAlert); // remove event listener
// Using an anonymous event listener ae the following will not work
btn5.addEventListener("click", function () {
	alert("clicked");
});
btn5.removeEventListener("click", function () {
	alert("clicked");
}); // will not work

// Page Load Events https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/
// When you open a page, the following events occur in sequence:

// DOMContentLoaded - the browser fully loaded HTML and completed building the DOM tree. It hasn't loaded external resources like stylesheets and images. In this event you can start selecting DOM nodes or initialize the interface
document.addEventListener("DOMContentLoaded", () => {
	//handle DOMContentLoaded event
});
// Only handle DOMContentLoaded event if you place the JavaScript in the head, which references elements in the body section

// load - the browser fully loaded the HTML and also external resources like images and stylesheets
document.addEventListener("load", () => {
	//handle load event
});
// or use the onload property of the window object:
window.onload = (event) => {
	console.log("The page has fully loaded");
};
// for legacy system, you may find that the load event is registered in the body element of the HTML document
<body onload="console.log('Loaded')"></body>;
// it is a good practice to use the addEventListener() method.
// the <img> and <script> elements also support the load event.
