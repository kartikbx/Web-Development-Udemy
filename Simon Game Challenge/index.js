var started = 0;
$('body').on('keypress',function(){     //function called when any key on keyboard is pressed
    if(started==0){
        nextSequence();
        $('h1').text('Level '+level);
    }
    
})


level = 0;
var gamePattern = [];                               //stores the color pattern in nextSequence
var buttonColor = ['red','blue','green','yellow']   //list of button colors

function nextSequence(){        //function for generating the next next sequence and play it
    level=level+1;
    started = 1;
    $('h1').html('Level '+level);
    var btnNumber = Math.floor(Math.random()*4);        //generating a number from 0-3
    colorChosen = buttonColor[btnNumber];           
    gamePattern.push(colorChosen);
    
    $('#'+colorChosen).fadeOut(100).fadeIn(100);        //adding animation to the button
    // console.log(colorChosen);
    playSound(colorChosen);                           
}


userClickedPattern = [];
$('.btn').click(function(){                             //function called whenever user clicks any button
    var userChosenColour = $(this).attr("id");          //assigns id value i.e color to userChosenColor
    userClickedPattern.push(userChosenColour);          //push the color in our user list
    checkAnswer(userClickedPattern.length-1);          
});

function checkAnswer(indexCheck){                       //function to check if passed value matches gamePattern
    if(userClickedPattern[indexCheck]===gamePattern[indexCheck]){
        playSound(userClickedPattern[indexCheck]);
        if(indexCheck==gamePattern.length-1){           //check if user finished the pattern
            setTimeout(function(){
                nextSequence();
            }, 1000); 
            
            userClickedPattern=[];                      //reinitialize userClickedPattern
        }
    }
    else{
        $('body').addClass('game-over')                 //adding animation for body when game over
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        playSound('w');
        $('h1').text('Game Over! presss any key to start again');   //change h1 text
        startOver();
    }
}

function startOver(){       //function resets everything
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = 0;
}


function playSound(name){       //function to play sound passed in parameter
    switch(name){
        case 'red':
            var red = new Audio('sounds/red.mp3');
            var r = red.play();
            animateButton('red');
            break;
        case 'green':
            var green = new Audio('sounds/green.mp3');
            green.play();
            animateButton('green');

            break;
        case 'blue':
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            animateButton('blue');
            break;

        case 'yellow':
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            animateButton('yellow');
            break;

        case 'w':
            var w = new Audio('sounds/wrong.mp3');
            w.play();
            break;
           default:
    }
}


function animateButton(color){      //function used to add animation when sequnce generated or button clicked
    $("#"+color).addClass('pressed');
    setTimeout(function(){
        $("#"+color).removeClass('pressed');
    },100);
}



