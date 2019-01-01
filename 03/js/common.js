$(document).ready(function() {

new WOW().init();

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


$('.btn_video').click(function(){
  $('.modal-video').addClass('modal-wisible');
  $('.overlay').fadeIn();
});
$('.overlay, .close-link').click(function(){
  $('.modal-video, .overlay').removeClass('modal-wisible');
  $('.overlay').css('display', 'none');
  $('.modal-thank').fadeOut();
  $("iframe").each(function() {
    $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')});
});  

});

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
    width: 600,
    height: 400,
    videoId: 'k9vPd0XPpgA',
    playerVars: {
      showinfo: '0',
      controls: '0',
    },
    events: {
      onReady: initialize
    }
  });
}

function initialize(){
  time_update_interval = setInterval(function () {
  }, 1000)
}
