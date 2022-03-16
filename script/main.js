/* Data module */
let stopwatch = document.querySelector(".stopwatch");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let tens = 0;
let sec = 0;
let secZero = 0;
let tensZero = 0;
let timeOut;


/* Functions */
start.addEventListener("click", ()=>{
    timer();
})
stop.addEventListener("click", ()=>{
    stopTimer()
})
reset.addEventListener("click", ()=>{
    tens = 0;
    sec = 0;
    secZero = 0;
    tensZero = 0;
    stopwatch.innerHTML = `${secZero}${sec}:${tens}${tensZero}`;
})

function timer(){
    tens++;
    if(tens === 99){
        sec++;
        tens = 0;
    }
    if(sec === 10){
        secZero = "";
    }
    if(tens > 0){
        tensZero = "";
    }

    stopwatch.innerHTML = `${secZero}${sec}:${tens}${tensZero}`;
    timeOut = setTimeout(timer, 10);;
}

function stopTimer(){
    clearTimeout(timeOut)
}