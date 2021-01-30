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
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
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

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',

	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="../images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.quantity-button').on('click', function () {
		const parents = $(this).parents('.holder-slider__info');
		let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
		$('.summ').html('$' + summ.toFixed(0));
	});

	$('.quantity').each(function () {
		const parents = $(this).parents('.holder-slider__info');
		let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
		$('.summ', parents).html('$' + summ);
	});

	$('.surfboard-box__circle').on('click', function () {
		$(this).toggleClass('active')
	});
});