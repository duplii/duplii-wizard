function animateSmile(){for(var e=document.getElementById("blinking-face-obj").contentDocument,t=e.querySelectorAll("#duplii-logo-face path"),n=.4,s=0;s<t.length;s++){var l=t[s],o=l.getTotalLength();l.style.transition=l.style.WebkitTransition="none",l.style.strokeDasharray=o+" "+o,l.style.strokeDashoffset=o,l.style.stroke="#FFFFFF",l.style.fill="transparent",l.getBoundingClientRect(),n+=.1,l.style.transition=l.style.WebkitTransition="stroke-dashoffset .7s ease-in-out "+n+"s, fill .2s ease-in 1.3s",l.style.strokeDashoffset="0",l.style.fill="#FFFFFF"}}function animateSvgSmil(e,t){var n=document.getElementById(e).contentDocument;n.getElementById(t).beginElement()}