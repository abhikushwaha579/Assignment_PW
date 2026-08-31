//Simple Calculator 

let num1 = 20;
let num2 = 5;

let operator = "*" ;

switch(operator){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default :
      console.log("Somethings went wrong /n try again");    
}