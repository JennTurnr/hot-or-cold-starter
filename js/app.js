$(document).ready(function(){

	//var count = 0;
	//var i = Math.floor((Math.random()*100) +1);
	//var answer = 35;
	//var entry = $('#userGuess').val();


var eachGuess = function() {
	var entry = $('#userGuess').val();
	//console.log( 'starting eachGuess()');
	$('#guessList').append('<li>'+entry+'</li>');
	$('#userGuess').val('');
//$('li').css('border', '2px solid yellow');
//$('entry').append('#guesslist');
	event.preventDefault();
};

function invalidNumber() {
var entry = $('#userGuess').val();
if (entry >= 100 || entry <= 0 || entry === isNaN(entry)) {
	alert("Enter a number between 1 and 100!");
}
//if (entry >= 100 || entry <= 0 || entry === isNaN(entry)) {
//	$('#guesslist').off();
	//alert("Enter a number between 1 and 100!");
	//$('#guesslist').off('submit','guessList', eachGuess);
//} else {
//	$('#guessList').append('<li>'+entry+'</li>');
//	$('#userGuess').val('');
}




//}
//$('#counter').text(counter);
//	return false;
	


//function secretNumber() {
//	var entry = $('#userGuess').val();
//	if(entry != answer || entry != invalidNumber) {
//		$('#feedback').append("Freezing Cold!");
//	}
//}

//var invalidNumber = function() {
	//if (entry > 100 || entry <= 0 || isNaN(entry)) {
	//	alert("Enter a number between 1 and 100!");
//}
	//};


//Keeps track of the number of guesses per game
	//var counter = $('#guesslist').children.length();
	//$('#count').text(counter); //span div
	//event.preventDefault();

/*
var secretNumber = function() {
	if (entry >= 101 || entry <=0 || entry%1 !=0 || isNaN(entry)) {
	alert("Enter a number between 1 and 100!");
		$('#count').text
		return i;
	} else {
		alert("Enter a number between 1 and 100");
	}
	if (i >= 50){
		return $('#feedback').append('<p>You're ice cold</p>');
	} else if (i <=50 && i >= 30) {
		return $('#feedback').append("You're getting warm.");
	} else if (x <=30 && x >= 20) {
		return $('#feedback').append("You're getting hot.");
	} else if (i < 20) {
		return i;
	}
	secretNumber();

*/


$(function() {
	$('form').on('submit', eachGuess);
	$('form').on('submit', invalidNumber); //alerts to enter a number btwn 1 and 100
	//$('form').on('submit', secretNumber);
	//$('.new').on('click', newGame); 
});
});


	

















	
	/*--- Display information modal box ---*/
  /*	$(".what").click(function(){
    //	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  /*	$("a.close").click(function(){ */
  		//$(".overlay").fadeOut(1000);
  //	}); 

//});
//*}
