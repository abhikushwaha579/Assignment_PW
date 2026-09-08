// Create a user object and use the spread operator to create a copy of it

// const user = { 
// name: "Rahul", 
// role: "developer" 
// }; 

// const newUser  = {
//     ...user
// }

// console.log(newUser);

// Create a user object containing name and role. Use the spread operator to create a new object and 
 // update the role to "developer". 

//  const user = { 
// name: "Rahul", 
// role: "student" 
// }; 

// user.role = "Developer"

// console.log(user);

// Create one array containing frontend technologies and another containing backend technologies. Use 
 // the spread operator to combine them into a single array. 

//  const frontend = ["HTML", "CSS", "JavaScript"]; 
//  const backend = ["Node.js", "Express"]; 

//  const combine = [...frontend , ...backend];
//  console.log(combine);

//Create a function named showSkills that accepts a developer's name as the first parameter and any 
// number of skills using a rest parameter. Display the name and skills. 

function showSkills(name , ...skills) {
    console.log("Name:" , name);
    console.log("Skills:" , skills.join(","));
}

showSkills("Rahul", "HTML", "CSS", "JavaScript"); 