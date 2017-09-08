 if ($('.carousel').length >= 1) {

        $(".slick-prev").ready(function() {

            var next_button = '\<div class=\"slide_button prev\"\>\<svg class=\"icon icon-arrow\"\>\<use xlink:href=\"img\/symbol\/sprite.svg\#arrow\"\>\<use\/\>\<\/svg\>\<\/div\>',
                prev_button = '\<div class=\"slide_button next\"\>\<svg class=\"icon icon-arrow\"\>\<use xlink:href=\"img\/symbol\/sprite.svg\#arrow\"\>\<use\/\>\<\/svg\>\<\/div\>';

            $(".slick-prev").html(next_button);
            $(".slick-next").html(prev_button);;

            

        }) 	

          $('.carousel__wrapper').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			draggable: false, 
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },                        
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },                 
            ]

            });
 };