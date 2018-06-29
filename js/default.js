

function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html, body').animate({
	      scrollTop: target.offset().top - 170
	    }, 1000);
	    return false;
	  }
	}
  });
};


function initLazyLoad(){

	$('img').lazyload({
		threshold : 1000
	});

}




// Start functions over here
$(document).ready(function(){

	initLazyLoad();
	smoothScroll();

});