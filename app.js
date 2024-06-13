/* eslint-disable */
function cardGeneration(){

 const iconRandom= ["♦", "♥", "♠", "♣"];
 const numberChance=["2","3","4","5","6","7","8","Q","M","A","K","J",];
  
let whereverNumber = document.getElementById("number")

 let ramdonNumber = Math.floor(Math.random() * numberChance.length);
 whereverNumber.innerHTML = numberChance[ramdonNumber];

 let oneicon = document.getElementById("oneicon");
 let twoicon = document.getElementById("twoicon");

 let whereverIcon =Math.floor(Math.random()* iconRandom.length );

 if (
    iconRandom[whereverIcon]=="♥" ||
    iconRandom[whereverIcon]=="♦"
 ){
    oneicon.style.color="red";
    twoicon.style.color = "red";
 } else {
    oneicon.style.color="black";
    twoicon.style.color = "black";
 }

 oneicon.innerHTML = iconRandom[whereverIcon];
 twoicon.innerHTML = iconRandom[whereverIcon];
}

 window.onload = function() {
    //write your code here
    cardGeneration();
  
    setInterval(() => {
      cardGeneration();
    }, 10000);

    let buttomchances = document.getElementById("buttonsito");
    buttomchances.addEventListener("click",function() { cardGeneration(); } )
}