/***************** Smile animations *****************/

function animateSmile() {
	// Great reference and due credit: http://jakearchibald.com/2013/animated-line-drawing-svg/
	var svgDocument = document.getElementById('blinking-face-obj').contentDocument;
	var paths = svgDocument.querySelectorAll('#duplii-logo-face path');
	var delay = 0.8;
	for (var i = 0; i < paths.length; i++) {
		var path = paths[i];
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		path.style.stroke = '#FFFFFF';
		path.style.fill = 'transparent';
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		delay = delay + 0.1;
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset .7s ease-in-out '+ delay +'s, fill .2s ease-in 1.7s';
		// Go!
		path.style.strokeDashoffset = '0';
		path.style.fill = '#FFFFFF';
	}
}

function animateSvgSmil(objId, animation) {
	var svgDocument = document.getElementById(objId).contentDocument;
	svgDocument.getElementById(animation).beginElement();
}
