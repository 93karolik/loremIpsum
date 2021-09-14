"use strict";

jQuery(function ($) {
	$(".icon-menu").on("click", function () {
		$('.icon-menu').toggleClass('icon-menu--cross');
		$('.menu').toggleClass('menu--visible');
		$('.menu__item').toggleClass('menu__item--visible');
	});
});

(function ($) {
	'use strict';

	var slider = document.getElementById("range-input-js");
	var output = document.getElementById("range-value-js");
	output.innerHTML = slider.value;

	slider.oninput = function () {
		output.innerHTML = this.value;
	};
})(jQuery);