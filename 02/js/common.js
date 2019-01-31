var link = $('.menu-link');
var menu = $('.menu');
var nav_link = $('.menu a');

link.click(function () {
  link.toggleClass('menu-link_active');
  menu.toggleClass('menu_active');
});
nav_link.click(function () {
  link.toggleClass('menu-link_active');
  menu.toggleClass('menu_active');
});

$("a[href*=#]").on("click", function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 777);
  e.preventDefault();
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header').addClass("clone");
  } else {
    $('header').removeClass("clone");
  }
});