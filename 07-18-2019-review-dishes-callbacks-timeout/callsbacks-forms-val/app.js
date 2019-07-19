

// setTimeout is fired only ONCE!
/*
window.setTimeout(() => {
    console.log("Say Hello...")
},5000) // milliseconds 5000 = 5 seconds

// setInterval is fired at regular intervals 
let id = window.setInterval(() => {
    console.log("Set Interval is Fired....")
},5000)

console.log("Hey what about me! ")
*/

/*
function printCard() {
    console.log("Printing customer card....")
}

function displayCustomer(printCardCallback) {
    printCardCallback()
}

displayCustomer(printCard) */
/*
function performCalculation(a,b) {
    console.log("Performing calculation...")
}

function add(callback) {
    callback(2,3)
}

add(performCalculation)
*/

// anoymous functions as callbacks 


function add(callback) {
    // call the callback 
    //callback() 
    window.setTimeout(callback,5000)
}

/*
add(function() {

}) */

add(() => {
    console.log("Callback function called")
})




