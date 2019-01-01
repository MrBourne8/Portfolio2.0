$(document).ready(function() {


  $('body').click(function() {
    if ($('label.error').length > 0) {
      $('label.error').remove('#mail-error');
    }
  });

	$('#form').validate({
    rules: {
      mail: {
        required: true,
        email: true
      }
    },
    messages: {
      mail: {
        required: "Required field",
        email: "Please enter a valid Email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize()
      }).done(function() {
        $('.overlay').fadeIn();
        $('.modal-thank').fadeIn();
        setTimeout(function() {
          $("#form").trigger("reset");
        }, 1000);
      });
      return false;
    }
	});


$('.callback').click(function(){
  $('.modal-callbak').addClass('modal-wisible');
  $('.overlay').fadeIn();
});
$('.overlay, .close-link').click(function(){
  $('.modal-callbak, .overlay').removeClass('modal-wisible');
  $('.overlay').css('display', 'none');
  $('.modal-thank').fadeOut();
});  

});
