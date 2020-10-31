window.onload = function() {
    let rippleElements = document.getElementsByClassName("ripples");
    for(var i = 0; i < rippleElements.length; i++) {
        rippleElements[i].onclick = function(e) {
          let clienttBounds = this.getBoundingClientRect();
          let X = clienttBounds.left + e.layerX;
          let Y = clienttBounds.top + e.layerY;
          let rippleDiv = document.createElement("div");
          rippleDiv.classList.add('ripple');
          rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
          let customColor = this.getAttribute('ripple-color');
          if(customColor) rippleDiv.style.background = customColor;
          this.appendChild(rippleDiv);
          setTimeout(function(){
            rippleDiv.parentElement.removeChild(rippleDiv);
          }, 1100);
    }
  }
  }