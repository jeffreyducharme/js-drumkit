/*jshint devel:true */

function playAudio (e) {
	var $audio = $('audio[data-key='+ e.originalEvent.keyCode + ']')[0];
	var $key = $('.key[data-key='+ e.originalEvent.keyCode + ']');
	if(!$audio){
		return;
	}
	$audio.currentTime = 0;
	$audio.play();
	$key.addClass('playing');
	
}

function removeTransitionClass(e) {
	if(e.originalEvent.propertyName !== 'transform'){
		return;
	}
	console.log($(this).text());
	$(e.target).removeClass('playing');
}

$(document).ready(function(){
	$('.keys').bind( 'transitionend', removeTransitionClass);
	$(window).keydown( playAudio );

});
