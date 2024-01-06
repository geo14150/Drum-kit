 // Assuming you have a button with a specific class, e.g., "drum-button"
  var buttons = document.querySelectorAll(".drum").length;
  for (var i=0; i<buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
     });  
  };
  document.addEventListener("keypress", function (event) {
     makeSound(event.key);
    buttonAnimation(event.key);
  });
function makeSound(key){
    switch (key) {
      case "w":
        var audio = new Audio("sound1.wav");
        audio.play();
      break;

      case "a":
        var audio = new Audio("sound2.wav");
        audio.play();
      break;
      
      case "s":
        var audio = new Audio("sound3.wav");
        audio.play();
      break;
      
      case "d":
        var audio = new Audio("sound4.wav");
        audio.play();
      break;
      
      case "j":
        var audio = new Audio("sound5.wav");
        audio.play();
      break;
      
      case "k":
        var audio = new Audio("sound6.wav");
        audio.play();
      break;
      
      case "l":
        var audio = new Audio("sound7.wav");
        audio.play();
      break;
      default: console.log(buttonText);
     }
  }

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    //Add animation to the button
    activeButton.classList.add("pressed");
    setTimeout(function()  {
      activeButton.classList.remove("pressed");
    }, "100");
  }

function anotherAddEventListener(typeofevent,calback) {
  var eventThatHappened = { 
  eventType: "keypress",
  key: "p",       
  durationofkeypres: 2 
 }
}

if (eventThatHappened.eventType === typeofevent){
  callback(eventThatHappened);
}
anotherAddEventListener("keypress", function(event) {               
     console.log(event);   
      });

