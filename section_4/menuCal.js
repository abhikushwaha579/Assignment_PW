// Menu-Based Calculator 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("----- MENU -----");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus");

rl.question("Enter your choice (1-5): ", function(choice) {

    rl.question("Enter first number: ", function(num1) {

        rl.question("Enter second number: ", function(num2) {

            choice = Number(choice);
            num1 = Number(num1);
            num2 = Number(num2);

            switch (choice) {
                case 1:
                    console.log("Addition =", num1 + num2);
                    break;

                case 2:
                    console.log("Subtraction =", num1 - num2);
                    break;

                case 3:
                    console.log("Multiplication =", num1 * num2);
                    break;

                case 4:
                    if (num2 !== 0) {
                        console.log("Division =", num1 / num2);
                    } else {
                        console.log("Cannot divide by zero!");
                    }
                    break;

                case 5:
                    console.log("Modulus =", num1 % num2);
                    break;

                default:
                    console.log("Invalid choice!");
            }

            rl.close();
        });
    });
});