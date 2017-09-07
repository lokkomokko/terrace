$(document).ready(function(){

	svg4everybody({});

	// phone mask
	$('#phone').mask("+7 ( 999 ) 999 - 99 - 99", {placeholder:"_"});

    // button access check
    $('.agree input').click(function() {
        if ($(this).is(':checked')) {
            $('.callback button').addClass('access_submit')
                                 .attr('disabled', false);
        } else {
            $('.callback button').removeClass('access_submit')
                                 .attr('disabled', true);
        }
    })   

    // hamburger-menu

        $('.hamburger-menu').click(function() {
            $('body').toggleClass('no-scroll');
            $('.bar').toggleClass('animate');
            $('.header__mobile-menu nav').toggleClass('open');
        })
    // table link

    $('tr[data-href]').on("click", function() {
        document.location = $(this).data('href');
    });            


});    
