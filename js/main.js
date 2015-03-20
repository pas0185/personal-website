function tweenaway() {
	var elem = document.getElementById("welcome")
	TweenMax.to(elem, 2, {bottom:20, ease: Elastic.easeOut})
}

// function dropWelcomeText() {

// 	var elem = document.getElementById("welcome")
// 	var vPos = 50

// 	function frame() {
// 		vPos += 2
// 		elem.style.top = vPos + 'px'

// 		var rect = elem.getBoundingClientRect()
// 		var bottom = rect.bottom
// 		var height = window.innerHeight

// 		if (height - bottom < 20)
// 			clearInterval(id)
// 	}

// 	var id = setInterval(frame, 0.25)
// }

