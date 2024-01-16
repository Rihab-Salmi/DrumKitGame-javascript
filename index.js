"use strict";
  let kickBass = new Audio("sounds/kick-bass.mp3");
    let crash = new Audio("sounds/crash.mp3");
    let snare = new Audio("sounds/snare.mp3");
    let tom1 = new Audio("sounds/tom-1.mp3");
    let tom2 = new Audio("sounds/tom-2.mp3");
    let tom3 = new Audio("sounds/tom-3.mp3");
    let tom4 = new Audio("sounds/tom-4.mp3");
function handleClick(){ 
  
 let choice = this.innerHTML;
 console.log(choice);
   if(choice == "w"){
    tom1.play();
   }else if(choice == "a"){
    tom2.play();
   }else if(choice == "s"){
    tom3.play();
   }else if(choice == "d"){
    tom4.play();
   }else if(choice == "j"){
    crash.play();
   }else if(choice == "k"){
    snare.play();
   }else if(choice == "l"){
    kickBass.play();
   }
}

for(let i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


document.addEventListener("keypress", function(event){
console.log(event.key);
 if (event.key == "w") {
   tom1.play();
 } else if (event.key == "a") {
   tom2.play();
 } else if (event.key == "s") {
   tom3.play();
 } else if (event.key == "d") {
   tom4.play();
 } else if (event.key == "j") {
   crash.play();
 } else if (event.key == "k") {
   snare.play();
 } else if (event.key == "l") {
   kickBass.play();
 }

})