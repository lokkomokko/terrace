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

    // genplan mobile iframe

    if ($('.genplan').length >= 1) {
        $('.genplan__mobile-link').fancybox({

            'type': 'iframe',
            iframe :{
               css : {
                    width  : '320px',
                },
            'scrolling': 'yes'  
            }

        });        
    }            

    // news page filter script

    var filter_row_1 = $('.news-filter .row:first-of-type .col'),
        filter_row_2 = $('.news-filter .row:last-of-type .col');
        
        filter_row_1.click(function() {
            filter_row_1.removeClass('active');
            $(this).toggleClass('active');
        })
        filter_row_2.click(function() {
            filter_row_2.removeClass('active');
            $(this).toggleClass('active');
        })        

    // news page filter sctipt open/close 

    if ($(window).width() <=320) {
        filter_row_1.first().click(function() {
            filter_row_1.parent().find('.wrap').toggleClass('open')
        });     
        filter_row_2.first().click(function() {
            filter_row_2.parent().find('.wrap').toggleClass('open')
        });         
    }


});    
