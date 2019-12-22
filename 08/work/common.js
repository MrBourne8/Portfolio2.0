//Аякс отправка форм
$(".request-form").submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $('.modal-thank').fadeIn(500, function() {
            $('.modal-callbak').removeClass('modal-wisible');
        });
        $('.modal-thank').css({
            display: "flex",
            alignItems: "center"
        });
        setTimeout(function() {
            $(".request-form").trigger("reset");
        }, 1000);
        setTimeout(function() {
            $('.modal-thank').fadeOut();
            $('.overlay').fadeOut();
        }, 2000);
    });
    return false;
});
//Аякс отправка форм

//Слайдер главного экрана
$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.main-screen__slider', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
//Слайдер главного экрана

//Слайдер сертификаты
$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.about__slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev ',
        },
        loop: true,
    });
});
//Слайдер сертификаты

//Слайдер отзывы
$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.reviews__slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev ',
        },
        loop: true,
        autoHeight: true,
    });
});
//Слайдер отзывы

/*Появление модального окна*/
$('.btn-callbak').click(function() {
    $('.modal-callbak').addClass('modal-wisible');
    $('.overlay').fadeIn();
});
/*Появление модального окна*/

/*Закрытие модального окна*/
$('.overlay, .close-link').click(function() {
    $('.overlay').css('display', 'none');
    $('.modal-callbak, .modal-sale').removeClass('modal-wisible');
    $('.modal-thank').fadeOut();
    $(".request-form").trigger("reset");
});
/*Закрытие модального окна*/

/*Адаптивное меню*/
var link = $('.menu-link');
var menu = $('.menu');
var nav_link = $('.menu a');

link.click(function() {
    event.preventDefault();
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
});
nav_link.click(function() {
    event.preventDefault();
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
});
/*Адаптивное меню*/

new WOW().init();