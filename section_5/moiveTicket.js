// Movie Ticket System

let age = 25;
let numberOfTickets  = 3;

if(age <= 12){
    let totalTicketPrice = 100 * numberOfTickets;
    console.log("Total ticket price.",totalTicketPrice);
}else if(age >12 && age <= 59){
    let totalTicketPrice = 200 * numberOfTickets;
    console.log("Total ticket price.",totalTicketPrice);
}else if(age >= 60){
    let totalTicketPrice = 120 * numberOfTickets;
    console.log("Total ticket price.",totalTicketPrice);
}else {
    console.log("You enterd Wrong ");
}