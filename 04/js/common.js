$(document).ready(function() {

	$("body").on('click', '[href*="#"]', function(e){
  		var fixed_offset = 0;
  		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
  		e.preventDefault();
	});

	$('.owl-carousel').owlCarousel({
		autoplay: true,
		responsiveClass:true,
		responsive:{
		    0:{
		        items:2,
		    },
		    321:{
		        items:3,
		    },
		    768:{
		        items:4,
		    },
		}
	})

	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},500);
		});
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

		var link = $('.menu-link');
		var menu = $('.menu');
		var nav_link = $('.menu a');

		link.click(function(){
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu_active');
		});

		nav_link.click(function(){
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu_active');
		})

  		jQuery(document).ready(function($) {
			$('a[data-rel^=lightcase]').lightcase();
		});

		if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
});

		var button_phone = document.querySelector(".phone");
		var popup = document.querySelector(".modal-enter");
		button_phone.addEventListener("click", function(event) {
			event.preventDefault();
			$('.overlay').fadeIn(400);
			popup.classList.add("modal-wisible");
		});

		var close = document.querySelector(".overlay");
		close.addEventListener("click", function(event) {
			event.preventDefault();
			$('.overlay').fadeOut(400);
			popup.classList.remove("modal-wisible");
			popup_price.classList.remove("modal-wisible");
			popup_video.classList.remove("modal-wisible");
			player.stopVideo();
		});

		var close_link = document.querySelector(".close-link");
		close_link.addEventListener("click", function(event) {
			event.preventDefault();
			$('.overlay').fadeOut(400);
			popup_video.classList.remove("modal-wisible");
			player.stopVideo();
		});

		var button_price = document.querySelector(".price__button");
		var popup_price = document.querySelector(".modal-price");
		button_price.addEventListener("click", function(event) {
			event.preventDefault();
			$('.overlay').fadeIn(400);
			popup_price.classList.add("modal-wisible");
		});

		var popup_video = document.querySelector(".modal-video");
		var button_video = document.querySelector(".button-video");
		button_video.addEventListener("click", function(event) {
			event.preventDefault();
			$('.overlay').fadeIn(400);
			popup_video.classList.add("modal-wisible");
		});


		var player;

		function onYouTubeIframeAPIReady() {
		    player = new YT.Player('video-placeholder', {
		        width: 600,
		        height: 400,
		        videoId: 'dl16e_mG6hg',
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