$(function() {

	new WOW().init();

	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

	/* rewies tabs */

	$('.nav_rev > div').click(function () {
		const revID = $(this).data('revid');

		$('.nav_rev > div').not(this).removeClass('active');
		$(this).addClass('active');

		$('.rev_item').not(revID).removeClass('active');
		$(revID).addClass('active');
	});

	/* rewies tabs */

	/* yakor */

	$('a.yakor').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 2000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	/* yakor */

});