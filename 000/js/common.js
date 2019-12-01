$(document).ready(function () {
	//Аякс отправка форм
	$("#form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(form).serialize()
		}).done(function () {
			$('.modal-thank').fadeIn(500, function () {
				$('.modal-callbak').removeClass('modal-wisible');
			});
			$('.modal-thank').css({
				display: "flex",
				alignItems: "center"
			});
			setTimeout(function () {
				$("#form-callbak").trigger("reset");
			}, 1000);
			setTimeout(function () {
				$('.modal-thank').fadeOut();
				$('.overlay').fadeOut();
			}, 3000);
		});
		return false;
	});
	//Аякс отправка форм
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	}
	//Chrome Smooth Scroll

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

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}
	//SVG Fallback

	//Слайдер
	$('.slick-slider').slick({
		slidesToShow: 2,
		arrows: true,
		autoplay: true,
		variableWidth: true,
		responsive: [{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1
			}
		}, ]
	});
	//Слайдер

	/*Навигация по странице, прокрутка до якоря*/
	$("a[href*=#]").on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 500);
		e.preventDefault();
		return false;
	});
	/*Навигация по странице, прокрутка до якоря*/

	/*Появление модального окна*/
	$('.btn-callbak, .buy').click(function () {
		$('.modal').addClass('modal-wisible');
		$('.overlay').fadeIn();
	});
	/*Появление модального окна*/

	/*Закрытие модального окна*/
	$('.overlay, .close-link').click(function () {
		$('.overlay').css('display', 'none');
		$('.modal').removeClass('modal-wisible');
		$('.modal-thank').fadeOut();
	});
	/*Закрытие модального окна*/

	//Галлерея
	jQuery(".fancybox").fancybox();
	//ГАллерея
});