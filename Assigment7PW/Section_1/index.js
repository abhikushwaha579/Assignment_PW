// Create a heading with an id of title and use getElementById() to select it and change its text

// let heading = document.getElementById("title")

//  heading.textContent = "Hello JavaScript";


 // Create a paragraph with a class description and use querySelector() to select it and change its text 
   //content. 


  //  let des = document.querySelector(".description")

  //  des.textContent = "New  Description"

//   Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change 
// their text color using the style property. 


// let item = document.querySelectorAll(".item")

// item.forEach(function(item){
//   item.style.color = "blue";
// });

 //Create a paragraph containing some text and use textContent to replace its content with a new message.
 
//  let message = document.querySelector("#message")

//  message.textContent = "Welcome to javaScript"

 
// Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it. 

let container = document.querySelector("#container")


container.innerHTML = `
<h2>My Website</h2>
<p>Welcome to my website!</p>`;

