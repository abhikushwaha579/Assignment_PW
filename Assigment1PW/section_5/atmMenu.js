//  Simple ATM Menu

// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 
let currentBalance = 1144;
let deposit = 1000;
let withdraw = 700;

let menu = 3;

switch(menu){
    case 1 :
        console.log("Current balance :",currentBalance);
        break;
    case 2 :
        console.log(" Add Money To balance :",deposit);
        console.log("Current balance :", currentBalance +deposit);
        break;
    case 3 :
        if(currentBalance >= withdraw){
        console.log("Current balance :",currentBalance);   
        console.log("Withdrawl Balance :",withdraw);
        console.log("Current balance :",currentBalance -withdraw);
        }else {
            console.log("Do have  sufficient balance exists");
        }
        break;
    case 4 :
        console.log(" Goodbye \t Visit Again ");
        break;
    default :
       console.log("Error");
}     
