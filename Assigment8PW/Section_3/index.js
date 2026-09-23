// 7 Question: 
// Create a button and attach a click event using addEventListener(). Create a separate function and use 
// removeEventListener() to stop the click event when required

// let button = document.getElementById("myButton");
// let removeButton = document.getElementById("removeButton");
// function showMessage(){
//     console.log("Button Clicked!");
// }

// button.addEventListener("click" , showMessage);
// removeButton.addEventListener("click",function(){
//     button.removeEventListener("click",showMessage)
// })

//8 Question: 
// Create a button and use addEventListener() with the once option so that the event runs only the first 
// time the button is clicked. 

// let button = document.getElementById("myButton"); 
// button.addEventListener("click", function() { 
// console.log("Welcome!"); 
// }, { once: true }); 

// 9 Question: 
// Create a parent <div> containing a button. Add click events to both parent and button. Use 
// stopPropagation() so that clicking the button does not trigger the parent's click event. 

let parent = document.getElementById("parent"); 
let button = document.getElementById("myButton"); 
parent.addEventListener("click", function() { 
console.log("Parent clicked")
}); 
button.addEventListener("click", function(event) { 
event.stopPropagation() 
console.log("Button clicked")
})
