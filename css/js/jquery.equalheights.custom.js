//Make sure it's in a window.load if it has images so that the heights are correctly calculated
window.onload = function () {
	$('.featured-content .midrow .midcard').equalHeight({
		wait: false,
		responsive: true
	});

	$('.midrow .midcard').equalHeight({
		wait: false,
		responsive: true
	});
}