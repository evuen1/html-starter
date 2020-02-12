$(document).ready(function () {

	"use strict";

	// image to background
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();


	// Плавная прокрутка по якорям (#)
	function SmoothScroll() {
		const anchors = document.querySelectorAll('a[href*="#"]')
		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				const blockID = anchor.getAttribute('href').substr(1)
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		}
	}
	SmoothScroll();



	// Проскроллить к верху страницы
	function scrollToTop() {
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
		})
	}
	scrollToTop();

	// Проверка input'ов на валидность
	function FormValidation() {
		$('input, textarea').on('keyup', function () {
			if ($(this).val() == '') {
				$(this).addClass('invalid');
				$(this).removeClass('valid');
				console.log($(this).val());
			} else {
				$(this).removeClass('invalid');
				$(this).addClass('valid');
				console.log($(this).val());
			}
		});
	}
	FormValidation();


});