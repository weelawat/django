// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function add(name){
    roster.push(name)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name){
    roster.splice(roster.indexOf(name), 1)    
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
    for (x of roster){
        console.log(x)
    }
}
// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app
var start = prompt("Do you want to start program?[y/n]")
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var command = NaN
while (start == "y" && command != "quit"){
    command = prompt("add,remove, display or quit") 

    if (command == "add"){
        y = prompt("Enter name")
        add(y)
    }
    else if (command == "remove"){
        y = prompt("Enter name")
        remove(y)
    }
    else if (command == "display"){
        display()
    }
}
