
// Create a list containing three items and remove one item using either removeChild() or remove().

// let cssItem = document.getElementById("css");
// cssItem.remove()


// Create a button and use cloneNode() to create a copy of the button. Add the cloned button to the
// webpage.

let button = document.getElementById("myButton")
let clonedButton = button.cloneNode(true);
let container = document.getElementById("container");
container.append(clonedButton);

