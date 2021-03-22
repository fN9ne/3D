$(document).ready(function() {
	$('.timetable').click(function(e) {
		if (!e.target.closest('.timetable__close')) {
			$(this).addClass('_active');
		}
	});
	$('.timetable__close').click(function() {
		$('.timetable').removeClass('_active');
	});
	if ($(".researches").length > 0) {
		let main_tab = $(".researches-tab");
		let slide = $(".researches-slide");
		main_tab.click(function() {
			main_tab.removeClass("_current");
			slide.removeClass("_current");
			$(this).addClass("_current");
			slide.eq($(this).index()).addClass("_current");
			if (slide.eq($(this).index()).hasClass("type")) {
				new Swiper('.services-slider', {
					observer: true,
					navigation: {
						nextEl: '.services-next',
						prevEl: '.services-prev',
					},
					pagination: {
						el: '.services-pagination',
						clickable: true,
					},
				});
			}
			if (slide.eq($(this).index()).hasClass("prices")) {
				new Swiper('.prices__content', {
					observer: true,
					slidesPerView: 3,
					spaceBetween: 20,
					navigation: {
						nextEl: '.prices-next',
						prevEl: '.prices-prev',
					},
					pagination: {
						el: '.prices-pagination',
						clickable: true,
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						769: {
							slidesPerView: 2,
						},
						1051: {
							slidesPerView: 3,
						}
					},
				});
			}
		});
	}
	if ($(".faq").length > 0) {
		let spoiler = $(".question__head");
		spoiler.click(function() {
			$(this).parent().toggleClass("_active");
		});
	}
	if ($(".types-method").length > 0) {
		let tab = $(".method-tab");
		let slide = $(".method-slide");
		tab.click(function() {
			tab.removeClass("_current");
			slide.removeClass("_current");
			$(this).addClass("_current");
			slide.eq($(this).index()).addClass("_current");
		});
	}
	if ($(".tomography").length > 0) {
		let tab = $(".tomography__tab");
		tab.click(function() {
			slide = $(this).closest(".tomography__item").find(".tomography-slide");
			tab = $(this).closest(".tomography__item").find(".tomography__tab");
			tab.removeClass("_current");
			slide.removeClass("_current");
			$(this).addClass("_current");
			slide.eq($(this).index()).addClass("_current");
		});
	}
});