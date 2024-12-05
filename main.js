var hour = 0;
var minute = 0;
var second = 0;
var h= document.getElementById("hour")
var m = document.getElementById("minute")
var s =document.getElementById("second")
var stopbutton = document.getElementById("stop")
var resetbutton = document.getElementById("reset")


function start(){
var interval = setInterval(() => {
    second++;
s.innerText = second;
if(second==60){
    second = 0;
    minute++;
    m.innerText=minute
}
if(minute==60){
    minute = 0;
    hour++;
    h.innerText=hour

}
},1000);
stopbutton.addEventListener("click",function(){
    clearInterval(interval)
})
resetbutton.addEventListener("click",function(){
    m.innerText = "00";
    h.innerText = "00";
    s.innerText = "00";
    second=0;
    minute=0;
    hour=0;
})
}