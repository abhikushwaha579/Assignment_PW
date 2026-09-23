//12 Question: 
// Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event 
// delegation to identify which button was clicked. 

// let buttons = document.getElementById("buttons"); 
// buttons.addEventListener("click", function(event) { 
// if (event.target.tagName === "BUTTON") { 
// console.log(`${event.target.textContent} button clicked`); 
// } 
// }); 

// 13 Question: 
// Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of 
// the clicked list item. 

let list = document.getElementById("list");

    list.addEventListener("click" ,function(event){
        if(event.target.tagName ==="LI"){
            console.log(`You clicked: ${event.target.textContent}`);
        }
    })
