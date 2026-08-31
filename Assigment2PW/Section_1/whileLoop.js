// Write a program to print numbers from 1 to 10 using a while loop. 

// let i =1;
// while(i<=10){
//     console.log(i);

//     i++
// }

// Write a program to calculate the sum of all even numbers from 1 to 20.
// let i = 1;
// let SumEven = 0;
// while(i<=20){
//     if(i%2===0){
//      SumEven += i;
//     }
//     i++
// }

// console.log(SumEven);

// Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the 
// number reaches 6 using the break statement.  
// Expected Output: 1 2 3 4 5 

// let i = 1;

// while(i<=100){
//     if(i===6){
//         break;
//     }
//     console.log(i);

//     i++
// }

// Print numbers from 1 to 10, but skip the number 5 using the continue statement.
let i = 1;

while(i<=10){
    if(i===5){
        i++
        continue;
    }
    console.log(i);

    i++
}

 


