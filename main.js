x = 0;
y = 0;
sw=0;
sh=0;
apple="";
sd="";
tn="";
// i got some problems //
draw_apple = "apple.png";

function preload(){
  loadImage(apple="apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
  tn= Number(content);
  if(Number.isInteger(tn)){
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
  draw_apple = "set";
  }
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  
}

function setup() {
  sw=window.innerWidth; 
  sh=window.innerHeight; 
  createCanvas()
}

function draw() {
  if(draw_apple == "set")
  {
  document.getElementById("status").innerHTML = to_number + " Apples drawn";
  draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
