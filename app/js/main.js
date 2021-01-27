$(function () {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
		asNavFor: '.slider-dotshead'
	});
	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.header__slider',
		focusOnSelect: true,
	});
	$('.surf-slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
		asNavFor: '.slider-map',
	});
	$('.slider-map').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		focusOnSelect: true,
		// fade: true,
		arrows: false,
		asNavFor: '.surf-slider',
	});
	// $('div').on('click', function () {
	// 	$('.slick-current').addClass('.slick-current');
	// });
});