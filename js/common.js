$('document').ready(function() {
  /*Появление модального окна ЗАКАЗ ВЕРСТКИ*/ 
  $('.btn-callbak, .buy').click(function(){
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
  /*Расчеты калькулятора*/ 
  $('.calc select, #sliders input[name=slider], #order input[name=order], #animat input[name=anim]').change(function() {
    $section = $('select#section').val();
    $modal = $('select#modal').val();
    $pages = $('select#pages').val();
    $sliders = $('#sliders input[name=slider]:checked').val();
    $order = $('#order input[name=order]:checked').val();
    $animate = $('#animat input[name=anim]:checked').val();
    $sect = 300;
    $mod = 300;
    $page = 500;
    $slide = 200;
    $orde = 200;
    $anim = 300;
    $mnog_sect = $sect * $section;
    $mnog_mod = $mod * $modal;
    $mnog_page = $page * $pages;
    $mnog_slide = $slide * $sliders;
    $mnog_orde = $orde * $order;
    $mnog_anim = $anim * $animate;
    $final_price = $mnog_sect + $mnog_mod + $mnog_page + $mnog_slide + $mnog_orde + $mnog_anim;
    $('#final-price').text($final_price);
  });
  
  $('.calc select#section').change(function() {
    $sect_attr = $('#section option:selected').attr('data-section');
    if ($sect_attr == 3) {
      $('.land img').hide(400);
      $('#01').show(400);
    }
    if ($sect_attr == 4) {
      $('.land img').hide(400);
      $('#02').show(400);
    }
    if ($sect_attr == 5) {
      $('.land img').hide(400);
      $('#03').show(400);
    }
    if ($sect_attr == 6) {
      $('.land img').hide(400);
      $('#04').show(400);
    }
  });
  /*Расчеты калькулятора*/
  /*Проверка валидност формы и отправка данных*/
  $('#form-callbak').validate({
    rules: {
      Name: {
        required: true
      },
      Phone: {
        required: true,
        rangelength: [11,11],
        digits: true,
      }
    },
    messages: {
      Name: {
        required: "Укажите Ваше имя",
      },
      Phone: {
      	required: "Укажите Телефон",
      	rangelength: "Введите номер в формате 91234560000",
      	digits: "Введите номер в формате 91234560000",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize()
      }).done(function() {
        $('.modal-thank').fadeIn(500, function(){
        	$('.modal-callbak').removeClass('modal-wisible');
        });
        $('.modal-thank').css({
          display:"flex",
          alignItems:"center"
        });
        setTimeout(function() {
          $("#form-callbak").trigger("reset");
        }, 1000);
        setTimeout(function() {
          $('.modal-thank').fadeOut();
          $('.overlay').fadeOut();
        }, 3000);
      });
      return false;
    }
  });
  /*Проверка валидност формы и отправка данных*/
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
  /*Настройки слайдера ОТЗЫВЫ*/
  $('.rew-slider').slick({
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    dots: true,
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
  /*Настройки слайдера ОТЗЫВЫ*/
  /*Навигация по страницу, прокрутка до якоря*/
  $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 500);
    e.preventDefault();
    return false;
  });
  /*Навигация по страницу, прокрутка до якоря*/
});