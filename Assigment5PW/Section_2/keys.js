// Create a user object containing name, email, and role. Use Object.keys() to get all the property names. 

// const user = { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// }
// console.log(Object.keys(user));

//Create a product object containing name, price, and category. Use Object.values() to get all the values 
// from the object. 

// const product = { 
// name: "Laptop", 
// price: 50000, 
// category: "Electronics" 
// }; 
// console.log(Object.values(product));

// Create a settings object and use Object.entries() to convert its properties into key-value pairs. 

// const settings = { 
// theme: "dark", 
// language: "English", 
// notifications: true 
// } 

// console.log(Object.entries(settings));

// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each 
 // key along with its value.  

 const user = { 
name: "Rahul", 
email: "rahul@example.com" 
}

Object.entries(user).forEach(([key ,value])  => {
    console.log(`${key} : ${value}`);
    
}
)