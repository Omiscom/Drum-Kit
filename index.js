var numberOfButton = document.querySelectorAll(".drum").length;

// FOR LOOP THAT LISTEN TO BUTTON CLICK THROUGH THE FUNCTION MAKE SOUND

for (i = 0; i < numberOfButton; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });
}

//KEY PRESSED THAT LISTEN TO MAKESOUND FUNCTION
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


//MAKE SOUND FUNCTION THAT PLAY AUDIO SOUND
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

//BUTTONANIMATION
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 30);
}