var Ypos,
		frameHeight;

function windowHeight() {	return window.innerHeight || document.documentElement.clientHeight }

function animateOpacity(frame, element) {
	var start = frameHeight * (frame - 1);
	if ((Ypos - start) >= 0) {
		element.style.opacity = ((Ypos - start) / frameHeight) > 1 ? 1 : ((Ypos - start) / frameHeight);
	} else {
		element.style.opacity = 0;
	}
}

function frame4() {
	var start = frameHeight * 3;
	if ((Ypos - start) >= 0) {
		free.style.left = ((Ypos - start) / frameHeight) > 1 ? 0 
		:(-100 + parseInt(((Ypos - start) / frameHeight) * 100) + "%");
	} else {
		free.style.left = "-100%";
	}
}

function frame5() {
	var start = frameHeight * 4;
	if ((Ypos - start) >= 0) {
		arrow.style.width = (Ypos - start) * (308 / frameHeight) + 'px';
	} else {
		arrow.style.width = "0";
	}
}

window.onload = function() {
	blurred = document.getElementsByClassName('blurred')[0];
	header = document.getElementById('header');
	form = document.getElementsByClassName('form')[0];
	free = document.getElementsByClassName('free')[0];
	arrow = document.getElementsByClassName('arrow')[0];

	(window.onresize = function() {
		frameHeight = windowHeight();
		document.body.style.height = frameHeight * (5 + 1) + 'px'; // 5 is frames qty
	})()

	window.onscroll = function() {
		Ypos = window.pageYOffset || document.documentElement.scrollTop;
		animateOpacity(1, blurred);
		animateOpacity(2, header);
		animateOpacity(3, form);
		frame4();
		frame5();
	}
}