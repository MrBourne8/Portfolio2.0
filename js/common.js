$('document').ready(function() {
  /*Появление модального окна ЗАКАЗ ВЕРСТКИ*/ 
  $('.btn-callbak,').click(function(){
    $('.modal-callbak').addClass('modal-wisible');
    $('.overlay').fadeIn();
  });
  $('.overlay, .close-link').click(function(){
    $('.overlay').css('display', 'none');
    $('.modal-callbak').removeClass('modal-wisible');
    $('.modal-thank').fadeOut();
  });  
  /*Появление модального окна ЗАКАЗ ВЕРСТКИ*/
  /*Появление модального окна НАПИСАТЬ СООБЩЕНИЕ*/ 
  $('.contact__btn').click(function(){
    $('.modal-message').addClass('modal-wisible');
    $('.overlay').fadeIn();
  });
  $('.overlay, .close-link').click(function(){
    $('.overlay').css('display', 'none');
    $('.modal-message').removeClass('modal-wisible');
  });  
  /*Появление модального окна НАПИСАТЬ СООБЩЕНИЕ*/
  /*Удаление текста ошибки при клике по странице*/ 
  $('body').click(function() {
    if ($('label.error').length > 0) {
      $('label.error').remove('#Name-error, #Phone-error');
    }
  });
  /*Удаление текста ошибки при клике по странице*/

  /*Настройки слайдера ПОРТФОЛИО*/
  $('.slick-slider').slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
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
  /*Настройки слайдера ПОРТФОЛИО*/

  /*Навигация по страницу, прокрутка до якоря*/
  $("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 500);
    e.preventDefault();
    return false;
  });
  /*Навигация по страницу, прокрутка до якоря*/
});