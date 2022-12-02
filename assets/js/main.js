jQuery(document).ready(function($) {
	$(".slider-carousel").owlCarousel({
		items : 1,
		loop : true,
		nav :false,
		dots :true,
		autoplay :true,
	});

	$(".our-carousel-secation").owlCarousel({
		items : 5,
		margin : 30,
		loop :true,
		nav : false,
		dots : true,
		autoplay : false,
	});
});