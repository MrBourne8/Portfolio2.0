	//Аякс отправка форм
	$(".request-form").submit(function () {
		e.preventDefault()
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(".request-form").serialize()
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
			}, 3000);
		});
		return false;
	});
	//Аякс отправка форм

	//Слайдер
	$('.slick-slider').slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
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
	//Слайдер

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
	});
	/*Закрытие модального окна*/

	/*Появление модального окна скидка*/
	$(function () {
		if (!$.cookie('hideModal')) {
			setTimeout(function () {
				$('.modal-sale').addClass('modal-wisible');
				$('.overlay').fadeIn();
			}, 5000);
		}
		$.cookie('hideModal', true, {
   // Время хранения cookie в днях
   expires: 3,
   path: '/'
 });
	});
	/*Появление модального окна скидка*/

	//Галлерея
	jQuery('[data-fancybox="gallery"]').fancybox();
	//ГАллерея