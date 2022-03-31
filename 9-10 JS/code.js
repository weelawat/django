var fname = prompt("Enter your first name:");
var lname = prompt("Enter your last name:");
var age = prompt("Enter your age:");
var tall = prompt("Enter your height:");
var pet = prompt("Enter your pet name:");

if ((fname[0] === lname[0]) && (age >= 20 && age <= 30) && (tall >= 170) && (pet.includes("y"))){
    console.log("Spy!")
}else {
    console.log("Not Spy")
}