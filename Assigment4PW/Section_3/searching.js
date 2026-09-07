// Use indexOf() to find the index of "JavaScript". 

// let sub = ["HTML", "CSS", "JavaScript", "React"]

// console.log(sub.indexOf("CSS"));

// Create an array of programming languages and use indexOf() to find the position of "React"
// let sub = ["HTML", "CSS", "JavaScript", "React"]
// console.log(sub.indexOf("React"));

// Create an array of user objects containing name and age. Use find() to get the user whose name is 
 b// "Rahul". 

 let detail  = [
    { name: "Rahul", age: 20 } ,
    { name: "Aman", age: 20 }

 ]    
 
//Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya". 
  console.log(detail.find(user => user.name === "Rahul"));
 let detail2  = [
    { name: "Rahul", age: 20 } ,
    { name: "Aman", age: 20 }

 ]    

  console.log(detail.find(user => user.name === "Aman"));
  