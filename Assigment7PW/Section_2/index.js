

// Create an image element and use setAttribute() to change its src and alt attributes.

let image = document.getElementById("myImage")
image.setAttribute("src","new.jpg")
image.setAttribute("alt","New Image")


//Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class


// let button = document.getElementById("myButton")
// button.classList.add("active")
// button.classList.remove("active")


// Create a heading and use the style property to change its color, fontSize, and backgroundColor

let heading = document.getElementById("heading")
heading.style.color = "blue";
heading.style.fontSize= "40px";
heading.style.backgroundColor = "yellow";

//Create a button with a custom data-id attribute and use the dataset property to read its value

let button= document.getElementById("productBtn");
console.log(button.dataset.id);