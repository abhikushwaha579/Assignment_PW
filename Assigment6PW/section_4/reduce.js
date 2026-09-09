//Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 

// let product = [500, 1200, 300]

// let totalprice = product.reduce((totalprice ,item)=> totalprice + item)
// console.log(totalprice);

// Create an array of product names and use reduce() with an accumulator to count the total number of 
// products. 

// let productName = ["Laptop", "Mouse", "Keyboard"]

// let countProduct =productName.reduce((accumulator, item)=>accumulator + 1,0)
// console.log(countProduct);

//Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total 
// quantity of all items. 

// let cartItem = [ 
//       { name: "Laptop", quantity: 1 }, 
//       { name: "Mouse", quantity: 2 } 
// ]  

// let countCartItem = cartItem.reduce((accumulator ,item)=>accumulator +item.quantity,0)
// console.log(countCartItem);

// Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 

// let orderObj = [ 
//      { amount: 500 }, 
//      { amount: 1000 }, 
//     { amount: 750 } 
// ] 

// let totalAmout = orderObj.reduce((totalAmount ,item )=> totalAmount + item.amount,0)
// console.log(totalAmout);

//create an array of frontend technologies and use reduce() to combine them into a single 
//comma-separated string.

let frontend = ["HTML", "CSS", "JavaScript"] 

const result = frontend.reduce((acc, curr) => acc + "," + curr);
console.log(result);



// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final 
 // cart total by multiplying the price and quantity of each item. 


const caetItems = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

const totalAmount = caetItems.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
}, 0);

console.log(totalAmount);