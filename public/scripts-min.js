window.addEventListener("load",function(){var e=document.querySelector(".bubble-animation");celebrate(e,10),document.getElementById("end-wizard").addEventListener("click",function(){stopCelebration(),document.getElementById("magic-dot").classList.add("magic-dot-expanded"),document.querySelector(".wizard-end-container").classList.add("wizard-end-appear"),document.querySelector(".magic-text-container").classList.add("magic-text-container-appear"),animateSmile(),setTimeout(function(){animateSvgSmil("blinking-face-obj","blink")},2500)})});