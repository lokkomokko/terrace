if ($(window).width() <= 320) {

	$('header').addClass('stick');
	var didScroll;
	var lastScrollTop = 0;
	var delta = 10;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event) {
	  didScroll = true;	  
	});

	setInterval(function() {
	  if (didScroll) {
	    hasScrolled();
	    didScroll = false;

	  }
	}, 250);

	function hasScrolled() {
	  var st = $(this).scrollTop();

	  // Make sure they scroll more than delta
	  if (Math.abs(lastScrollTop - st) <= delta)
	    return;

	  // If they scrolled down and are past the navbar, add class .nav-up.
	  // This is necessary so you never see what is "behind" the navbar.
	  if (st > lastScrollTop && st > navbarHeight) {
	    // Scroll Down
	    $('header').removeClass('header-down').addClass('header-up');
	  $('.mobile_menu').removeClass('open');
	  $('.mobile_menu_icon ').removeClass('close_icon')		    
	  } else {
	    // Scroll Up
	    if (st + $(window).height() < $(document).height()) {
	      $('header').removeClass('header-up').addClass('header-down');
	    }
	  }

	  lastScrollTop = st;
	}		
}