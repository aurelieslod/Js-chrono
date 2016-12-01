
var chrono = document.getElementById("chrono");

var staart = "";
var itv = 0;
var now = "";
var dat = "";
var curentTime = 0;

function update(){
    now = new Date();
    dat = new Date(now - staart);
    chrono.innerHTML = "<p>"+dat.getMinutes()+"mns . "+dat.getSeconds()+"s . "+dat.getMilliseconds()+"ms </p>";
}
function start(){
  staart = new Date();
  itv = setInterval( update, 10);
}
function stop(){
  clearInterval(itv);
  curentTime = dat.getTime();
}
function reset(){
  chrono.innerHTML = "<p>00.00.0000</p>"
}
function update2(){
  now = new Date();
  dat = new Date(now - staart + curentTime);
  chrono.innerHTML = "<p>"+dat.getMinutes()+"mns . "+dat.getSeconds()+"s . "+dat.getMilliseconds()+"ms </p>";
}
function resume(){
  staart = new Date();
  itv = setInterval(update2, 10);
}
