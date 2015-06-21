var Ypos,
		frameHeight;

function windowHeight() {	return window.innerHeight || document.documentElement.clientHeight }

/*var scroll = function(event) {
	// event.preventDefault();
	Ypos = window.pageYOffset || document.documentElement.scrollTop;
	event.wheelDelta < 0 ? nextFrame() : prevFrame();
} */

var nextFrame = function() {
	var scrollTo = (Ypos + frameHeight) - (Ypos % frameHeight);
	$('html,body').animate({
      scrollTop: scrollTo
	  }, 500, 'swing');
	console.log('down ', scrollTo);
}

var prevFrame = function() {
	var micro = Ypos % frameHeight || frameHeight,
			scrollTo = Ypos - micro;
	$('html,body').animate({
      scrollTop: scrollTo
	  }, 800, 'swing');
	console.log('up ', scrollTo);
}

/*window.onmousewheel = scroll;*/

window.onload = function() {
	(window.onresize = function() {
		frameHeight = windowHeight();
		document.body.style.height = frameHeight * (5 + 1) + 'px';
	})()
	blurred = document.getElementsByClassName('blurred')[0];
	header = document.getElementById('header');
	form = document.getElementsByClassName('form')[0];
	free = document.getElementsByClassName('free')[0];
	arrow = document.getElementsByClassName('arrow')[0];
	window.onscroll = function() {
		Ypos = window.pageYOffset || document.documentElement.scrollTop;
		
		function animateOpacity(frame, element) {
			var start = frameHeight * (frame - 1);
			if ((Ypos - start) >= 0) {
				element.style.opacity = ((Ypos - start) / frameHeight) > 1 ? 1 : ((Ypos - start) / frameHeight);
			} else {
				element.style.opacity = 0;
			}
		}

		animateOpacity(1, blurred);
		animateOpacity(2, header);
		animateOpacity(3, form);
		slide4();
		slide5();

		function slide4() {
			var start = frameHeight * 3;
			if ((Ypos - start) >= 0) {
				free.style.left = ((Ypos - start) / frameHeight) > 1 ? 0 
				:(-100 + parseInt(((Ypos - start) / frameHeight) * 100) + "%");
			} else {
				free.style.left = "-100%";
			}
		}
		
		function slide5() {
			var start = frameHeight * 4;
			if ((Ypos - start) >= 0) {
				arrow.style.width = (Ypos - start) * (308 / frameHeight) + 'px';
			} else {
				arrow.style.width = "0";
			}
		}

	}
}