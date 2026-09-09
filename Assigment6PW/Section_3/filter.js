//Create an array of product objects containing name and inStock. Use filter() to create a new array 
// containing only the products that are in stock. 

// let product = [
//     { name: "Laptop", inStock: true }, 
//     { name: "Mouse", inStock: false },
//     { name: "Mouse", inStock: true }
// ]

// let newproduct = product.filter((item) => item.inStock ===true)
// console.log(newproduct);

//Create an array of user objects containing name and role. Use filter() to get all users whose role is 
// "developer". 

// let user = [
//     { name: "Rahul", role: "developer" }, 
//     { name: "Priya", role: "student" } 
// ]

// let devUser = user.filter((role)=>role.role ==="developer")
// console.log(devUser);

//Create an array of product objects containing name and price. Use filter() to get products with a price 
// greater than 1000. 

// let product = [
//     { name: "Mouse", price: 500 }, 
//     { name: "Keyboard", price: 1500 } 
// ]

// let newproduct = product.filter((prize) =>prize.price >=1000)
// console.log(newproduct);

//Create an array of users containing name and isActive. Use filter() to get only the active users. 

let user = [ 
     { name: "Rahul", isActive: true }, 
     { name: "Priya", isActive: false } 
] 

let isactive = user.filter(isactive => isactive.isActive === true)
console.log(isactive);

//Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 

let email =["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

let corectemail = email.filter((info)=> info.endsWith("@gmail.com"))
console.log(corectemail);