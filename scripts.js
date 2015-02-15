/***************** Fire them all! *****************/

window.addEventListener('load', function() {
	
	// Start the celebration! Woooo!	
	celebrate();
	
	document.querySelector('.modal-button--show-next').addEventListener('click', function() {
		stopCelebration();
		document.querySelector('.modal-page--first').classList.add('modal-page--hidden');
		document.querySelector('.modal-page--last').classList.remove('modal-page--hidden');
	});
	
	document.getElementById('end-wizard').addEventListener('click', function() {
		document.getElementById('magic-dot').classList.add('magic-dot-expanded');
		document.querySelector('.wizard-end-container').classList.add('wizard-end-appear');
		document.querySelector('.magic-text-container').classList.add('magic-text-container-appear');
		animateSmile();
		setTimeout(function(){animateSvgSmil('blinking-face-obj', 'blink');}, 1300);
	});
});