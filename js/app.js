
$(document).ready(function(){

var eachGuess = function() {
	var entry = $('#eachGuess').val();
	$('#guessList').append('<li>'+entry+'</li>');
	$('#userGuess').val('');
	//$('entry').append('#guesslist');
	event.preventDefault();
};

//'<li><input type="text" id="userGuess" class="guessBox clearfix" ::before/>'+entry+'</li>'

	//NEW GAME FUNCTION 
	//var newGame = function() {
	//function newGame() {
	/*$('.new').click(function(){
	var entry = $('#userGuess').val();
	$('#guessList').append('<li><input type="text" id="userGuess" class="guessBox clearfix"/>'+entry+'</li>');
	$('#userGuess').val('');
	$('entry').append('#guesslist');
	event.preventDefault();
});
	
});*/


/*
**SECRET NUMBER FUNCTION
	var secretNumber = function(x) {
		var randomNumber = Math.floor(Math.random()*100)+1);
		if ('#userGuess' === randomNumber)
		return x;
		} else {
		alert("Enter a number between 1 and 100");
		}
	
	
	}

**USER GUESS FUNCTION */

$(function(){
	$('form').on('submit', eachGuess);
});
});

/*
	$('#userGuess').on('submit') {
	$('#feedback').append()
	}
	

	}
	*/

	/*
}

	*/ 
	
	/*--- Display information modal box ---*/
  /*	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  /*	$("a.close").click(function(){ */
  		//$(".overlay").fadeOut(1000);
  //	}); 

//});
//*
//}
