x=0;
y=0;
screen_width=0;
screen_height=0;
 to_number=0;
 draw_apple="";
 apple="";
 speak_data="";

 function preload(){
apple=loadImage("apple.png");    
 }

SpeechRecognition= window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
 
 function start(){
     document.getElementById("status").innerHTML="System is listening Please Speak";
     recognition.start();

 }
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech Has Been Recognised    "+content;
    to_number=Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML="Started Drawing Apple";
        draw_apple="set";
    }
    else{
        document.getElementById("status").innerHTML="Speech has not been recognised as a number ";

    }
}

 function setup(){
screen_width=window.innerWidth;
screen_height=window.innerHeight;
canvas=createCanvas(screen_width,screen_height-150);
canvas.position(0,150);
 }

 function draw(){
if(draw_apple=="set"){
    for( var i=1;i<=to_number;i++){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
image (apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML=to_number+"    Apples Drawn";
    speak_data=to_number+"    Apples Drawn";
    speak();
    draw_apple="";

}
 }

 function speak(){
     var synth=window.speechSynthesis;
     utter_this=new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);
     speak_data="";
 }
