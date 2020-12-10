var sounds = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3','tom-1.mp3','tom-2.mp3','tom-3.mp3','tom-4.mp3']


function soundToPlay(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/'+sounds[3]);
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/'+sounds[4]);
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/'+sounds[5]);
            tom3.play();
            break;


        case "d":
            var tom4 = new Audio('sounds/'+sounds[6]);
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/'+sounds[0]);
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/'+sounds[1]);
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/'+sounds[2]);
            snare.play();
            break;

        default:
            break;
        }
}

for(var i =0;i<document.querySelectorAll("button").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var key = this.innerHTML;
        soundToPlay(key); 
        buttonStyle(key);   
    });
       
}


document.addEventListener("keydown", function(evt){
    soundToPlay(evt.key);
    buttonStyle(evt.key);
});


function buttonStyle(Key){
    document.querySelector("."+Key).classList.add("pressed");
    setTimeout(function(){
         document.querySelector("."+Key).classList.remove("pressed");
         },100);

}