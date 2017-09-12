/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();
		$("#investRegret").hover(
				function() {
					$(this).attr("src", "https://media.giphy.com/media/xT9IgG3XL0zisjYYWQ/giphy.gif");
				},
				function() {
					$(this).attr("src", 'images/investRegret.png');
					
				
				}                         
			);
			$("#dasher").hover(
				function() {
					$(this).attr("src", "https://j.gifs.com/qjPL5y.gif");
				},
				function() {
					$(this).attr("src", 'images/dasher.jpg');
					
				
				}                         
			);
	});

})(jQuery);