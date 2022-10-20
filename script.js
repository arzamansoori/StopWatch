const element = document.getElementById("element");
const stopV = document.getElementById("stop");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
let count = 1;
let stopValue;
let datee;

//increasing count
function addValue(){
    element.innerHTML = count++;
}



//starting the countdown
function setValue(){
    stopValue = setInterval(addValue,500);
}

//to reset the value to zero
function reset1(){
    count = 0;
    element.innerHTML = count;
}

//to stop the counter
stopV.addEventListener("click", ()=>{
    clearInterval(stopValue);
})

reset.addEventListener("click", reset1)
