//4 Create a button and use the event object to identify the element that was clicked.


// let button = document.getElementById("myButton")
// button.addEventListener("click", function(event){
//     console.log(event.target.tagName);
// })


// 5 Question: 
// Create a <div> and use a mousemove event to display the mouse coordinates using the event object's 
// clientX and clientY properties. 

// let box =document.getElementById("box")
// let coordinates = document.getElementById("coordinates")
// box.addEventListener("mouseover", function(event){
//     coordinates.textContent  = `X:${event.clientX} Y:${event.clientY}`
// })

// 6 Question: 
// Create an input field and use the event object's target.value to display the entered value. 


let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");
inputBox.addEventListener("input",function(event){
    result.textContent = `You typed :${event.target.value}`;
})