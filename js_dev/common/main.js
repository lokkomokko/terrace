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
            $('body').hasClass('no-scroll') ? $('.no-scroll').off() : true; 
            $('body').toggleClass('no-scroll');
            $('.bar').toggleClass('animate');
            $('.header__mobile-menu nav').toggleClass('open');
            $('.no-scroll').on('touchmove', function(e){ 
                 e.preventDefault(); 
            });
            
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

    if ($(window).width() <= 400) {
        filter_row_1.first().click(function() {
            filter_row_1.parent().find('.wrap').toggleClass('open')
        });     
        filter_row_2.first().click(function() {
            filter_row_2.parent().find('.wrap').toggleClass('open')
        });         
    }


    // popup for galleries pages

    if($('.gallery-block').length >= 1 || $('.gallery-inner').length >= 1) {

        $('.gallery-block__images a').fancybox({
            
        }); 
        $('.gallery-inner__image').fancybox();
    }

    // popup for homes page

    if($('.carousel__item').length >= 1 ) {

            $('.slick-slide').fancybox();

    }


    // mobile safari bug issue for table on the genplan page (browser change money on phone links)

    $('.price-col').each(function() {

        $(this).html($(this).text())
      

    })

    // callback btn on main page

    $('.header__back-call').click(function(e) {
        e.preventDefault()
        $('.callback--index').toggleClass('open')
    })
    $('.callback--index .close').click(function() {
        $('.callback--index').toggleClass('open')
    })


    // fixed callblock on home page
    if ($('.callback--home').length >= 1) {
        $(window).scroll(function(e) {

            
            if ($(window).scrollTop() >= $('.info-section').offset().top) {

                var _check_scroll = $(window).scrollTop() - $('.info-section').offset().top

                console.log(_check_scroll)

                $('.callback--home').css('transform', 'translateY('+_check_scroll +'px)')
            }
            else {
                $('.callback--home').css('transform', 'translateY(0)')
            }
        })
        
    }

});    
