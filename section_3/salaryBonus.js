//  Salary Bonus

let salary = 70000;
let yearOfExperience = 11;

if(yearOfExperience >= 10){
    console.log( "Salary :",salary);
    let bounus = salary * .2;
    console.log("Bounus :",bounus);
    console.log("Final Salary :",salary+bounus);
}else if(yearOfExperience >= 5){
    console.log( "Salary :",salary);
    let bounus = salary * .1;
    console.log("Bounus :",bounus);
    console.log("Final Salary :",salary+bounus);
}else if(yearOfExperience >= 2){
    console.log( "Salary :",salary);
    let bounus = salary * .05;
    console.log("Bounus :",bounus);
    console.log("Final Salary :",salary+bounus);
}else if(yearOfExperience < 2){
    console.log("No Bonus");
    console.log( "Salary :",salary);
   
}else {
    console.log("Something went wrong \n try Again");
}