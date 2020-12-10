//Selecting an HTML Element

$("h1").css("color", "yellow"); //$() == document.querySelector in Java Script
//In Above one it will find all H1 element and add css property Yellow

$("h1.c2").css("color","blue");    //selects h1 with class c2


//MANIPULATING CSS
// Add css Same as above examples

console.log($("h1").css("color"));      //outputs rgb color code in console
console.log($("h1").css("font-size"));  //outputs the font size of the element selected

$("#p1").addClass("fontshift");             //we add .fontshift property toelement with id p1
$('#p2').addClass("fontshift giveMargin");  //we add fontshift and givemargin property from styles.css to p2

//to remove a class - $('element').remove('cssselector')

console.log($("h1").hasClass('fontshit'));  //returns true or false depending if elemnt is having the class specified or not


//INSERTING TEXT/HTML
$(".b1").text("Text changed");          //works like .text in DOM
$(".b2").text("<em>button2</em>");      //will display this as it is
$(".b3").html("<em>button3</em>");      //works like innerHTML in DOM / will italicize the text
$(".b4").html("<a>Search</a>");

//MANIPULATING ATTRIBUTES
$("a").attr("href","https://www.google.com/");  //adds value to the attribute href 


//ADDING EVENT LISTENERS
//Method 1
$("button").click(function(){
    $("div h1").css("color","green");
})

$("body").keypress(function(evt){
    $("div h1").text(evt.key);
})

//Method 2
$("h1.c2").on("mouseover", function(){
    $("h1.c2").css("color","cyan");
})


//ADDING AND REMOVING ELEMENT
$('h1.c2').after("<button>after</button>");
$('h1.c2').append("<button>append</button>");

$('h1.c2').before("<button>Before</button>");   //<tag>before</tag><h1>h1</h1>
$('h1.c2').prepend("<button>prepend</button>"); //<h1> <b>prepend</b> h1 </h1>

//to remove - $('tagname').remove()


//ADDING ANIMATIONS
$('button').on('click', function(){
    $('h1.c2').animate({margin:10});
});

$('#p1').on('mouseover', function(){
    $("div h1").slideToggle();
})

$('#s1').on('click',function(){
    $('button').slideUp().slideDown().animate({margin:10});
});