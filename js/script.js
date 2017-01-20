" use strict ";

var display = document.getElementById("display");

var n ;
var random = 0;
var printOut = 0;
var o;
var answer;
var i;
var j;

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
    for(var i = 0; i <= o; i++){
      printOut = (Math.pow(2, i));
      display.innerHTML += (printOut) + "<br>";
    }
}

var exerciseSeven = function(){
  display.innerHTML = "";
  answer = prompt("Are we there yet?", "no");
      while(answer !== "yes"){
        answer = prompt("Are we there yet?", "no");
        if(answer == "yes"){
         display.innerHTML += "Good!";
       }
    }
}

var exerciseEight = function(){
  display.innerHTML = "";
  for(i = 0; i <= 5; i++){
    for(j = 0; j < i; j++){
      display.innerHTML += "*";
    }
    display.innerHTML += "<br>";
  }
}

var exerciseNine = function(){
  display.innerHTML = "";
  for(i = 1; i <= 4; i++){
    display.innerHTML += "<br>";
    for(j = 1; j <= 4; j++){
      display.innerHTML += "| " + i*j;
    }
      display.innerHTML += "|";
  }
}

var exerciseTen = function(n){
  display.innerHTML = "";
  for(i = 1; i <= n; i++){
    display.innerHTML += "<br>";
    for(j = 1; j <= n; j++){
      display.innerHTML += "| " + i*j;
    }
      display.innerHTML += "|";
  }
}