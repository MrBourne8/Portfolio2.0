$(document).ready(function() {
    //Аякс отправка форм
    $(".form").submit(function(e) {
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
                $(".form").trigger("reset");
            }, 1000);
            setTimeout(function() {
                $('.modal-thank').fadeOut();
                $('.overlay').fadeOut();
            }, 2000);
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
    var body = $('body');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        body.toggleClass('no-scoll');
        e.preventDefault();
    });
    nav_link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        body.toggleClass('no-scoll');
        e.preventDefault();

    });
    //Адаптивное меню
});