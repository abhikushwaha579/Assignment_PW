// Create an array of product names and use map() to create a new array where every product name is 
// converted to uppercase. 

// let productName = ["laptop","mobile","headphone"]

// let uppercaseProduct = productName.map(product => product.toUpperCase())
// console.log(uppercaseProduct);

// Create an array of user objects containing name and email. Use map() to create a new array containing 
// only the names.

// let detail = [
//     {
//         name : "Abhi",
//         email :"kabhi@gmail.com"
//     },

//     {
//         name : "Aman",
//         email :"aman@gmail.com"
//     },

//     {
//         name : "Amit",
//         email :"amit@gmail.com"
//     }
// ]

// let name = detail.map(name => name.name)
// console.log(name);

//Create an array of product prices and use map() to create a new array where each price is displayed with 
// a ₹ symbol. 

// let productPrices = [100,200,500]

// let symbolProductPrices = productPrices.map(prices => `₹${productPrices}` );
// console.log(symbolProductPrices);

//Create an array of product prices. Use map() to create a new array where every price is increased by 
 // 10%. Keep the original array unchanged.
 
//  let productPrize = [ 499,299,99,199,2399]
//  let newProductPrize = productPrize.map((discount) => discount * 0.9)
//  console.log(newProductPrize);

// Create an array of user objects with name and role. Use map() and the spread operator to create a new 
// array where the role of every user  is changed to "developer" without modifying the original array.

// let user = [
//     {
//         name : "Amit",
//         role : "Student"
//     },
//     {
//         name : "Rahul",
//         role : "Student"
//     }
// ]

// let userDetail = user.map(user =>({...user,role :"developer"}))
// console.log(userDetail);

// Create an array of product objects containing name and price. Use map() to create a new array where 
// each product also has an inStock property with the value true.

let product = [
    {
        name : "Laptop",
        price : 50000
    },
    {
        name : "Mouse",
        price : 500
    }
]

let newProduct = product.map(product => ({...product, inStock : true}))
console.log(newProduct);