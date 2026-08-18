//  Electricity Bill

let unitConsumed = 250;

if(unitConsumed >=1 && unitConsumed <=100){
    console.log("final Bill",unitConsumed *5);
}else if(unitConsumed >=101 && unitConsumed <=200){
      console.log("final Bill",unitConsumed *7);
}else if(unitConsumed >=201){
      console.log("final Bill",unitConsumed *10);
}else {
    console.log("Something went wrong\n Try again");
}

