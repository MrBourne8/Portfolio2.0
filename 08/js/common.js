//Аякс отправка форм
$(".request-form").submit(function (e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function () {
		$('.modal-thank').fadeIn(500, function () {
			$('.modal-callbak').removeClass('modal-wisible');
		});
		$('.modal-thank').css({
			display: "flex",
			alignItems: "center"
		});
		setTimeout(function () {
			$(".request-form").trigger("reset");
		}, 1000);
		setTimeout(function () {
			$('.modal-thank').fadeOut();
			$('.overlay').fadeOut();
		}, 2000);
	});
	return false;
});
//Аякс отправка форм

//Слайдер главного экрана
$('.main-screen__slider').slick({
	slidesToShow: 1,
	arrows: true,
	autoplay: false,
	variableWidth: true,
	centerMode: true,
	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: false,
			slidesToShow: 1
		}
	}, ]
});
//Слайдер главного экрана

//Слайдер сертификаты
$('.about__slider').slick({
	slidesToShow: 1,
	arrows: true,
	autoplay: false,
	variableWidth: true,
	centerMode: true,
	responsive: [{
		breakpoint: 480,
		settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 1
		}
	}, ]
});
//Слайдер сертификаты

//Слайдер отзывы
$('.reviews__slider').slick({
	slidesToShow: 1,
	arrows: true,
	autoplay: false,
	variableWidth: true,
	centerMode: false,
	responsive: [{
		breakpoint: 480,
		settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 1
		}
	}, ]
});
//Слайдер отзывы

/*Появление модального окна*/
$('.btn-callbak').click(function () {
	$('.modal-callbak').addClass('modal-wisible');
	$('.overlay').fadeIn();
});
/*Появление модального окна*/

/*Закрытие модального окна*/
$('.overlay, .close-link').click(function () {
	$('.overlay').css('display', 'none');
	$('.modal-callbak, .modal-sale').removeClass('modal-wisible');
	$('.modal-thank').fadeOut();
	$(".request-form").trigger("reset");
});
/*Закрытие модального окна*/


var link = $('.menu-link');
var menu = $('.menu');
var nav_link = $('.menu a');

link.click(function () {
	event.preventDefault();
	link.toggleClass('menu-link_active');
	menu.toggleClass('menu_active');
});
nav_link.click(function () {
	event.preventDefault();
	link.toggleClass('menu-link_active');
	menu.toggleClass('menu_active');
});