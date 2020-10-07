let startbtn = document.getElementById("start")
let stopbtn = document.getElementById("stop")
let resetbtn = document.getElementById("reset")

let interval = 0;
var x;
var millisec = 0;
var sec = 0;

startbtn.addEventListener("click", start)
stopbtn.addEventListener("click", stop)
resetbtn.addEventListener("click", reset)


function start() {
    x = setInterval(timer, 10);
} 

function stop() {
    clearInterval(x);
}

function reset() {
    millisec = 0;
    sec = 0;
    document.getElementById("millisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}

function timer() {
    secOut = checkTime(millisec);
    minOut = checkTime(sec);
    millisec = ++millisec
    if (millisec == 60) {
        sec = ++sec;
        millisec = 0;
    }

    document.getElementById("millisec").innerHTML = secOut;
    document.getElementById("sec").innerHTML = minOut;
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}