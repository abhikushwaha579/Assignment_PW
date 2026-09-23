//10 Question: 
// Create a parent <div> containing a child button. Add click events to both elements and observe the 
// order in which the events execute when the button is clicked


// let parent = document.getElementById("parent"); 
// let button = document.getElementById("myButton"); 
// button.addEventListener("click", function() { 
// console.log("Button clicked"); 
// }); 
// parent.addEventListener("click", function() { 
// console.log("Parent clicked"); 
// }); 

// Question: 
// Create a parent <div> containing a button. Add click event listeners to both using the capturing phase 
// and observe the order in which the events execute. 

let parent = document.getElementById("parent"); 
let button = document.getElementById("myButton"); 
parent.addEventListener("click", function() { 
console.log("Parent clicked"); 
}, true); 
button.addEventListener("click", function() { 
console.log("Button clicked"); 
}, true); 