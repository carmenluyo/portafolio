$(document).ready(function(){
	$(window).scroll(function(){
		var prueba = $(this).scrollTop();
		$("#carmen").text(prueba);
		if (prueba > 658) {
			$(".nav-efecto").addClass("navegacion");
		}
			else if (prueba < 658) {
			$(".nav-efecto").removeClass("navegacion");
		}
	});
});




$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
				
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
<<<<<<< HEAD
=======

>>>>>>> 2d9e2011b0529a6ab61adb63bb83d86690971fab
}
