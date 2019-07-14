(function($) {
	$(function() {
	
	  $('select').styler();
	
	});
	})(jQuery);

(function($){
        $(window).on("load",function(){
            $(".sidebar-block__dropdown").mCustomScrollbar();
		});
		
	})(jQuery);
	
	$(".sidebar-block__dropdown").mCustomScrollbar({
		axis:"y", // vertical scrollbar
		theme:"my-theme",
		autoExpandScrollbar:true,
		advanced:{autoExpandHorizontalScroll:true}
	});

/* Toggle  */

const pointer = document.getElementById('dropdown');
const dropdown = document.querySelector('.sidebar-block__dropdown');
const icon = document.querySelector('.icon');
console.log(icon);
console.log(pointer);
console.log(dropdown);

pointer.addEventListener('click', ()=> {
	dropdown.classList.toggle('d-none',);
	if(icon.classList.contains('fa-angle-down')) {
		icon.classList.remove('fa-angle-down');
		icon.classList.add('fa-angle-up')
	}
	else if (icon.classList.contains('fa-angle-up')){
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	}
});

/* slick slider */

$('.slick-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrow: true,
	prevArrow: document.querySelector('.left-arrow'), 
	nextArrow: document.querySelector('.right-arrow'),
	dotsClass: document.querySelector('.dots-block'),
	dots: true,
	autoplay: true,
	dotsClass: "my-dots",
	responsive: [
		{
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		}
	]
  });
		  