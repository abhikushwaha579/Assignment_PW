// Student Result System

let studentName = "Abhishek Kushwaha";
let rollNumber = 2511755060005;
let mathMarks = 90;
let scienceMarks = 90;
let englishMarks = 97;

let totalMarks = mathMarks+ scienceMarks+englishMarks;
let percentage = totalMarks /3;



console.log("-----------------------");
console.log("    STUDENT RESULT     ");
console.log("-----------------------");
console.log("");
console.log("Name      :",studentName );
console.log("Roll No   :",rollNumber);
console.log("");
console.log("Math      :",mathMarks);
console.log("Science   :",scienceMarks);
console.log("English   :",englishMarks);
console.log("\n");
console.log("Total     :",totalMarks);
console.log("Percentage:",percentage);
if(percentage >= 90 && percentage <=100){
    console.log("Grade     : A");
}else if(percentage >=80 && percentage <=89){
    console.log("Grade     : B");
}else if(percentage >=70 && percentage <=79){
    console.log("Grade     : C");
}
else if(percentage >=60 && percentage <=69){
    console.log("Grade     : D");
}
else if(percentage >=40 && percentage <=59){
    console.log("Grade    : E");
}
else if(percentage <= 40){
    console.log("Grade    : F");
}
if(mathMarks >= 40 && scienceMarks >= 40 && englishMarks >=40){
    console.log("Result    : Pass");
}else {
    console.log(" Result  : Fail");
}