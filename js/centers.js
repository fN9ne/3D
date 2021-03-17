$(document).ready(function() {
	let tab = $('.centers-tab');
	let slide = $('.centers-slide');
	tab.click(function() {
		tab.removeClass('_current');
		$(this).addClass('_current');
		slide.removeClass('_current');
		slide.eq($(this).index()).addClass('_current');
	});
});