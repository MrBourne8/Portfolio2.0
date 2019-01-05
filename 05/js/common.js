$('.btn-callbak').click(function(){
  $('.modal-callbak').addClass('modal-wisible');
  $('.overlay').fadeIn();
});
$('.buy').click(function(){
  $('.modal-order').addClass('modal-wisible');
  $('.overlay').fadeIn();
});
$('.overlay, .close-link').click(function(){
  $('.overlay').css('display', 'none');
  $('.modal-callbak, .modal-order').removeClass('modal-wisible');
  $('.modal-thank').fadeOut();
  $("#form-order").trigger("reset");
});  

$('body').click(function() {
    if ($('label.error').length > 0) {
      $('label.error').remove('#Name-error, #Phone-error');
    }
  });


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

  $('#form-order').validate({
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
          $("#form-order").trigger("reset");
        }, 1000);
        setTimeout(function() {
          $('.modal-thank').fadeOut();
          $('.overlay').fadeOut();
        }, 3000);
      });
      return false;
    }
});