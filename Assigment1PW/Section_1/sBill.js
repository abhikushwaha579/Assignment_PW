//  Shopping Bill

let productPrice = 199;
let quantity= 7;

let originalBill = productPrice * quantity;
console.log("Original Bill",originalBill);

let discountAmount = (originalBill * 10) / 100;
console.log("Discount Amount",discountAmount);
let finalBill = originalBill - discountAmount;
console.log("Final Bill :",finalBill);