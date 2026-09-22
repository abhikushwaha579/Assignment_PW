
// Create a new <p> element using createElement(), add some text to it using textContent, and display it 
// on the webpage.

// let paragraph = document.createElement("p")
// paragraph.textContent = "This paragraph was created using JS";
// let container = document.getElementById("container");
// container.appendChild(paragraph)


//Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using
// appendChild

// let list = document.getElementById("list");
// let newItem = document.createElement("li");
// newItem.textContent = "JS";
// list.append(newItem);


//Create a list and use append() to add an item at the end and prepend() to add an item at the beginning

// let list = document.getElementById("list");
// let firstItem = document.createElement("li");
// firstItem.textContent = "HTML";
// let lastItem = document.createElement("li");
// lastItem.textContent = "React";
// list.prepend(firstItem);
// list.append(lastItem);

// Create a list containing three items and use insertBefore() to insert a new item before the second item


let list  = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "CSS";
let secondItem = list.children[1];
list.insertBefore(newItem , secondItem);