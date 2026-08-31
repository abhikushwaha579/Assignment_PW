// Electricity Bill + Discount

let unitConsumed = 1000;

if(unitConsumed > 0 && unitConsumed <=100){
      console.log("Electricity units consumed :",unitConsumed);
      let originalBill = unitConsumed * 5;
      console.log("Original Bill :",originalBill);
      if(originalBill >= 2000){
        let discount = originalBill * 0.1;
        console.log("Discount :",discount);
        let finalBill = originalBill - discount;
        console.log("Final Bill :",finalBill);
      }
} else if(unitConsumed >= 101 && unitConsumed <= 200){ 
     console.log("Electricity units consumed :",unitConsumed);
      let originalBill = unitConsumed * 7;
      console.log("Original Bill :",originalBill);
      if(originalBill >= 2000){
        let discount = originalBill * 0.1;
        console.log("Discount :",discount);
        let finalBill = originalBill - discount;
        console.log("Final Bill :",finalBill);
}
}else if( unitConsumed > 200){
   console.log("Electricity units consumed :",unitConsumed);
      let originalBill = unitConsumed * 10;
      console.log("Original Bill :",originalBill);
      if(originalBill >= 2000){
        let discount = originalBill * 0.1;
        console.log("Discount :",discount);
        let finalBill = originalBill - discount;
        console.log("Final Bill :",finalBill);

}
}else {
   console.log("Something You Entered Wrong ");
}