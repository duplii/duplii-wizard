function makeBubble(e){function t(e,t){return Math.floor(Math.random()*(t-e+1))+e}function a(e){var t=getComputedStyle(e),a=t.getPropertyValue("animation-duration")||t.getPropertyValue("-webkit-animation-duration");return a=1e3*parseFloat(a),m=t.getPropertyValue("animation-delay")||t.getPropertyValue("-webkit-animation-delay"),m=1e3*parseFloat(m),a+m}var n,i,o,r,l,d,u,c,m;i=t(10,25),o=t(3,8)/10,r="255, 130, 76, "+o,u=t(0,100),c=t(-25,50),m=100*t(0,3),l="width:"+i+"px;height:"+i+"px;bottom:"+c+"%;left:"+u+"%;background-color:rgba("+r+");-webkit-animation-delay:"+m+"ms;animation-delay:"+m+"ms;",d=t(1,3),n=document.createElement("span"),n.classList.add("bubble","bubble-burst-"+d),n.style.cssText+=";"+l,e.appendChild(n),setTimeout(function(){n.parentNode.removeChild(n),makeBubble(e)},a(n))}function celebrate(e,t){for(var a=0;t>a;a++)makeBubble(e)}window.addEventListener("load",function(){var e=document.querySelector(".bubble-animation");celebrate(e,10),document.getElementById("magic-dot").addEventListener("click",function(){this.classList.add("magic-dot-expanded"),document.querySelector(".magic-text-container").classList.add("magic-text-container-appear"),animateSmile(),setTimeout(function(){animateSvgSmil("blinking-face-obj","blink")},2500)})});