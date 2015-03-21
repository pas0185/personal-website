function tweenaway() {

	// Welcome Text
	var welcome = document.getElementById("welcome-text")
	TweenMax.to(welcome, 2, {right:40, ease: Elastic.easeOut, delay:0.5})

	// Social Icon
	TweenMax.staggerTo(".icon", 2, {opacity:1, x:0, delay:2.5})

	// Winston Head
	// launchCursorFollower()
}

function launchCursorFollower() {

	// Detect if the browser is IE or not.
	// If it is not IE, we assume that the browser is NS.
	var IE = document.all?true:false

	// If NS -- that is, !IE -- then set up for mouse capture
	if (!IE) document.captureEvents(Event.MOUSEMOVE)

	// Set-up to use getMouseXY function onMouseMove
	document.onmousemove = adjustRotation

	// Temporary variables to hold mouse x-y pos.s
	var tempX = 0
	var tempY = 0
	var deg = 0

	var winston = document.getElementById("winston-head")

	function adjustRotation(e) {

		// Get cursor position
		if (IE) { // grab the x-y pos.s if browser is IE
		    tempX = event.clientX + document.body.scrollLeft
		    tempY = event.clientY + document.body.scrollTop
		} 
		else {  // grab the x-y pos.s if browser is NS
		    tempX = e.pageX
		    tempY = e.pageY
		}  
  
		// catch possible negative values in NS4
		if (tempX < 0){tempX = 0}
		if (tempY < 0){tempY = 0}  

		// show the position values in the form named Show
		// in the text fields named MouseX and MouseY

		console.log("x = " + tempX + ", y = " + tempY)

		var rect = winston.getBoundingClientRect()

		var deltaX = tempX - rect.right
		var deltaY = tempY - rect.top
		
		var rad = Math.atan2(tempX, tempY); // In radians
		var deg = rad * (180 / Math.PI)

		// Set rotation of winston

	    winston.style.webkitTransform = 'rotate('+deg+'deg)'; 
	    winston.style.mozTransform    = 'rotate('+deg+'deg)'; 
	    winston.style.msTransform     = 'rotate('+deg+'deg)'; 
	    winston.style.oTransform      = 'rotate('+deg+'deg)'; 
	    winston.style.transform       = 'rotate('+deg+'deg)'; 

	}
}
