//  Number Classification  Challenge Questions 

let num = 150;

if(num > 0){
    console.log("Positive");
    if(num % 2 == 0){
        console.log("Even");  
    }else {
        console.log("Odd");
    }
    if(num > 100 ){
        console.log("Greater than 100");
    }else{
        console.log("Less than 100");
    }
}else if(num < 0){
    console.log("Negative");
    if(num % 2 == 0){
        console.log("Even");  
    }else {
        console.log("Odd");
    }
    if(num > 100 ){
        console.log("Greater than 100");
    }else{
        console.log("Less than 100");
    }
}else {
    console.log("Something Went Wrong");
}