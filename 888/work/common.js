	$(".yap").hover(function () {
		$('.strel').toggleClass("yap_deg");
		$('.strel').removeClass("iz_deg-l");
	});
	$(".ger").hover(function () {
		$('.strel').toggleClass("ger_deg");
	});
	$(".por").hover(function () {
		$('.strel').toggleClass("por_deg");
	});
	$(".chi").hover(function () {
		$('.strel').toggleClass("chi_deg");
		$('.strel').removeClass("iz_deg-l");
	});
	$(".iz").hover(function () {
		$('.strel').toggleClass("iz_deg");
		$('.strel').addClass("iz_deg-l");
	});
	$(".ben").hover(function () {
		if ($('.strel').hasClass('iz_deg-l')) {
			$('.strel').toggleClass("ben_deg-l");
		}
	});
	$(".ben").hover(function () {
		$('.strel').toggleClass("ben_deg");
	});
	$(".tay").hover(function () {
		$('.strel').toggleClass("tay_deg");
		$('.strel').removeClass("iz_deg-l");
	});