//  ATM Transaction

let balance = 10000;
let withdrawAmount  = 3000;

if(withdrawAmount > 0 && withdrawAmount <= balance){
    let remBalance = balance - withdrawAmount;
    console.log("Withdrawal successful ");
    console.log("Remaining balance :",remBalance);
}else {
    console.log("Something Went Wrong \n Try Again");
}