/*
var  counter = 0;
var timeleft = 300;


function convertSecond(s){
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min ,2)+ ';' + nf(sec,2);
}
function setup(){

    var timer = select('#timer');
    timer.html(convertSecond(timeleft - counter))

var interval = setInterval(timeIt, 1000);

    function timeIt(){
    counter++;
     timer.html(convertSecond(timeleft - counter));
}
setInterval(timeIt, 1000);
}
*/

let countdown = document.getElementById("timer")
let btnstart= document.getElementById("start")
let btnend = document.getElementById("end")

let countdown = 0
let intervalid = -1



start.addEventListener('click',() => {

   intervalid= window.setInterval(()=>{

        countdown++

        timer.innerHTML = countdown
      }, 1000)
    
})
end.addEventListener('click',() => {

    console.log(intervalId)

  
    window.clearInterval(intervalId)
})


/*

btnStart.addEventListener('click',() => {
    // start the timer 
    intervalId = window.setInterval(() => {
        
        counter++
        // update the UI with the current timer value 
        timerH1.innerHTML = counter 

    },1000)
})
*/