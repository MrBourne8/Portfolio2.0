$(document).ready(function () {
	/*Появление модального окна*/
	$('.btn-mod').click(function () {
		$('.modal').addClass('modal-wisible');
		$('.overlay').fadeIn();
	});
	$('.overlay').click(function () {
		$('.modal, .overlay').removeClass('modal-wisible');
		$('.overlay, .modal-thank, .modal').fadeOut();
	});
	/*Появление модального окна*/

	/*Слайдер*/
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: false,
				slidesToShow: 1
			}
		},
		]
	});
	/*Слайдер*/

	/*Навигация по странице, прокрутка до якоря*/
	$('a[href*="#"]').on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 600);
		e.preventDefault();
		return false;
	});
	/*Навигация по странице, прокрутка до якоря*/
});

//Адаптивное меню
var link = $('.menu-link');
var menu = $('.menu');
var nav_link = $('.menu a');

link.click(function () {
	link.toggleClass('menu-link_active');
	menu.toggleClass('menu_active');
});
nav_link.click(function () {
	link.toggleClass('menu-link_active');
	menu.toggleClass('menu_active');
});
	//Адаптивное меню