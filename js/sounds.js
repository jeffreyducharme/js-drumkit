function playAudio (e) {
	var identifier = e.target.dataset.key || e.originalEvent.keyCode;
	
	var $audio = $('audio[data-key='+ identifier + ']')[0];
	var $key = $('.key[data-key='+ identifier + ']');

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
	$(e.target).removeClass('playing');
}

$(document).ready(function(){
	$('.keys').bind( 'transitionend', removeTransitionClass);
	$(window).keydown( playAudio );
	$('.keys').click( playAudio );  
});
