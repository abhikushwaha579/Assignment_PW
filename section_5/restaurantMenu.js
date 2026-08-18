// Restaurant Menu

let burger = 150; 
let pizza = 250;
let pasta = 180;
let sandwich = 120;

// Choices
// 1. Burger   
// 2. Pizza   
// 3. Pasta    
// 4. Sandwich
 
let choice = 2 ; 
let quantity = 3;

switch(choice){
    case 1 :
        console.log("Total :",burger *quantity);
        break;
    case 2 :
        console.log("Total :",pizza *quantity);
        break;
    case 3 :
        console.log("Total :",pasta *quantity);
        break;
    case 4 :
        console.log("Total :",sandwich *quantity);
        break;
    default :
      console.log("Something Went Wrong \n Try Again");
      break;    
}