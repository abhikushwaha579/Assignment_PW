// Create a user object containing name, email, and role. Use object destructuring to extract name and 
// email into separate variables.  

// const user = { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// }

// const {name , email} = user;
// console.log(name);
// console.log(email);

//Create a product object containing name and price. Use destructuring to store the name property in a 
 // variable named productName. 

//  const product = { 
// name: "Laptop", 
// price: 50000 
// }; 

// const {name : productName } = product;
// console.log(productName);

// Create variables named name, email, and role. Use shorthand property syntax to create a user object 
// using these variables.

// const name = "Abhi"; 
// const email = "kabhi@example.com"; 
// const role = "developer"; 

// let user = {
//     name ,
//     email ,
//     role
// }
// console.log(user);

//Create a function named displayUser that receives a user object. Use object destructuring in the function 
 // parameters to access and display name and email. 

function displayUser({name , email }){
    console.log(name);
    console.log(email);
}

  displayUser({ 
     name: "Rahul", 
     email: "rahul@example.com" 
}); 