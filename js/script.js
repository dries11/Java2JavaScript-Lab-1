" use strict ";

var display = document.getElementById("display");

var n ;
var random = 0;
var printOut = 0;
var o;

var exerciseOne = function(){
    for (var i = 0; i <= 10; i++) {
        display.innerHTML += i + "<br>";
    }
}

var exerciseTwo = function(){
  display.innerHTML = "";
  for(var i = 0; i <= 20; i++){
    if((i%2 != 0)){
      display.innerHTML += i + "<br>";
    }
  }
}

var exerciseThree = function(){
  display.innerHTML = "";
  for(var i = 1; i <= 10; i++){
    display.innerHTML += (i*i) + "<br>";
  }
}
    
var exerciseFour = function(){
  display.innerHTML = "";
  for(var i = 0; i < 4; i ++){
    random = (Math.ceil((Math.random()*10)));
    display.innerHTML += (random) + "<br>";
  }
}
    
var exerciseFive = function(n){
  display.innerHTML = "";
  for(var i = 0; i < n; i ++){
    if((i%2 == 0)){
      display.innerHTML += (i) + "<br>";
    }
  }
}
    
var exerciseSix = function(o){
  display.innerHTML = "";
    for(var o = 0; i < o; o++){
      printOut = (Math.pow(2, o));
      display.innerHTML += (printOut) + "<br>";
    }
}

