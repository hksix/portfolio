/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

function Portfolio3D( element ) {
	//define a Portfolio3D object
	this.element = element;
	this.navigation = this.element.children('.cd-3d-portfolio-navigation');
	this.rowsWrapper = this.element.children('.projects');
	this.rows = this.rowsWrapper.children('.row');
	this.visibleFace = 'front';
	this.visibleRowIndex = 0;
	this.rotationValue = 0;
	//animating variables
	this.animating = false;
	this.scrolling = false;
	// bind portfolio events
	this.bindEvents();
}
 
if( $('.cd-3d-portfolio').length > 0 ) {
	var portfolios3D = [];
	$('.cd-3d-portfolio').each(function(){
		//create a Portfolio3D object for each .cd-3d-portfolio
		portfolios3D.push(new Portfolio3D($(this)));
	});
}

Portfolio3D.prototype.bindEvents = function() {
	var self = this;
 
	this.navigation.on('click', 'a:not(.selected)', function(event){
		//update visible projects when clicking on the filter
		event.preventDefault();
		if( !self.animating ) {
			self.animating = true;
			var index = $(this).parent('li').index();
			
			//show new projects
			self.showNewContent(index);
 
			//update filter selected element
			//..
		}
	});
 
	//...
};

Portfolio3D.prototype.showNewContent = function(index) {
	var self = this,
		direction = ( index > self.visibleRowIndex ) ? 'rightToLeft' : 'leftToRight',
		rotationParams = this.getRotationPrameters( direction ),
		newVisibleFace = rotationParams[0],
		rotationY = rotationParams[1],
		translateZ = $(window).width()/2;
	
	//rotate the parallelepiped
	this.setTransform(rotationY, translateZ);
	
	//update .row > li classes
	//...
 
	//update Portfolio3D properties
	//..
};