function tweenaway() {
	var welcome = document.getElementById("welcome")
	TweenMax.to(welcome, 2, {right:40, ease: Elastic.easeOut, delay:0.5})

	TweenMax.staggerTo(".icon", 2, {opacity:1, x:0, delay:2.5})

}
