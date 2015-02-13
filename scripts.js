/***************** Fire them all! *****************/

window.addEventListener('load', function() {
	// Set a place where we want the bubble thing to fire.
	var place = document.querySelector('.bubble-animation');
	
	// Fire the thing!	
	celebrate(place, 10);
	
	document.getElementById('magic-dot').addEventListener('click', function() {
		this.classList.add('magic-dot-expanded');
		document.querySelector('.magic-text-container').classList.add('magic-text-container-appear');
		animateSmile();
		setTimeout(function(){animateSvgSmil('blinking-face-obj', 'blink');}, 2500);
	});
});