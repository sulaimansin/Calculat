
var myt = setInterval(function () {
    window.h1.innerHTML = new Date().toLocaleTimeString();
}, 100);


function show(num) {
    window.text.innerHTML += num;
}

function showf(num) {
    window.text.innerHTML = num += window.text.innerHTML;
}

function clean() {
    document.getElementById("text").innerHTML = " ";
}

function calc() {
    var equation = document.getElementById("text").innerHTML;
    equation = equation.replace("×", "*");
    var c = eval(equation);
    c=c*100;
    c=Math.round(c);  
    c/=100;
    document.getElementById("text").innerHTML = c;
}

function UtoS(){
    var cont = document.getElementById("text").innerHTML;
    var sum = (cont / 3.5 );
     document.getElementById("text").innerHTML = sum ;
    
}

function StoU(){
    var cont = document.getElementById("text").innerHTML;
    var sum = (cont * 3.5 );
     document.getElementById("text").innerHTML = sum ;
    
}

function StoE(){
    var cont = document.getElementById("text").innerHTML;
    var sum = (cont / 3.89 );
     document.getElementById("text").innerHTML = sum ;
    
}

function EtoS(){
    var cont = document.getElementById("text").innerHTML;
    var sum = (cont * 3.89 );
     document.getElementById("text").innerHTML = sum ;
    
}

function delet(){
     var number = document.getElementById("text").innerHTML;
    number = number.substr(0 , number.length-1);
       document.getElementById("text").innerHTML = number ;
    
}










