function Circle() {
	this.canvas = 1;
	this.x;
	this.y = 0;
	this.radius;
	this.speed;
	this.color;
	
	this.draw = function(context) {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.closePath();
		context.fill();
	}
}


$(function(){
	var circles = [];
	var boxAnimationInterval = null;
	var canvasAnimationInterval = null;
	var canvases = $('.box canvas');
	
	
	

	function animateCanvases() {
		// clear all canvases
		clearCanvases();
	
		for (var i = 0; i < circles.length; i++) {
			// move down 
			circles[i].y += circles[i].speed;
			
			// Move down to next canvas
			if (circles[i].y - circles[i].radius >= 100) {
				// Reset y co-ordinate to start at the top of the canvas again
				circles[i].y -= (100 + (circles[i].radius * 2));
			
				circles[i].canvas += 4;
				
				// Move back to the first canvas of the row if necessary
				if (circles[i].canvas > 12) {
					circles[i].canvas -= 12;
				}
			}
			
			var theContextForThisCircle = 
				$('#box' + circles[i].canvas + ' canvas').get(0).getContext('2d');
			circles[i].draw(theContextForThisCircle);
		}
		
	}
	
	function clearCanvases() {
		canvases.each(function(i,v) {
			v.getContext('2d').clearRect(0, 0, 100, 100);
		});
	}

	// Flip flop
	function animateBoxes() {
		var boxes = $('.box');
		jQuery.each(boxes, function(i, x){  
			var randomFlipState = randomFromTo(0, 2);
			var thisBox = $(x);
			if (randomFlipState == 0) {
				thisBox.removeClass('flipped1');
				thisBox.removeClass('flipped2');
			} else if (randomFlipState == 1) {
				thisBox.addClass('flipped1');
				thisBox.removeClass('flipped2');
			} else {
				thisBox.addClass('flipped2');
				thisBox.removeClass('flipped1');
			}
		});
	}

	
	// init
	// generateCircles
	for (var i = 0; i < 40; i++) {
		var c = new Circle();
		c.x = randomFromTo(0, 100);
		c.radius = randomFromTo(1, 25);
		c.speed = randomFromTo(1,7);
		c.canvas = Math.floor(i / 10) + 1;
		c.color = 'rgba(' + randomFromTo(50,255) + ','+randomFromTo(50,255)+', '+randomFromTo(50,255)+', 0.6)';
		
		circles.push(c);
	}
	
	// When it's ready to play, do so
	$('#music').bind('canplay', function() {
		$('#music').get(0).play();
		
		// Unfade
		$('.box').removeClass('faded');
		
		// Canvas animation
		canvasAnimationInterval = setInterval(function() {
			animateCanvases();
		}, 40);
		
		var beatDuration = 920;
		setTimeout(function() {
			boxAnimationInterval = setInterval(function() { animateBoxes(); }, beatDuration);
		}, 4300 - beatDuration);
	});
	
	$('#music').bind('pause', stopAction);
	$('#music').bind('ended', stopAction);
	
	function stopAction() {
		clearInterval(boxAnimationInterval);
		clearInterval(canvasAnimationInterval);
		clearCanvases();
		$('.box').addClass('faded');
	}
	
	
	//controls
	$('#stop').click(function(){
		var music = $('#music').get(0);
		music.pause();
		music.currentTime = 0;
	});
	$('#start').click(function(){
		$('#music').attr('src', 'http://assets.markembling.info/experiments/transforms/testdrive.mp3');
	});
	
	// Generate a random number between the lowest and highest (inclusive)
	function randomFromTo(from, to){
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
});