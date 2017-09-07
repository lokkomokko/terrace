    // main slide start
    if ($('.main-slider').length >= 1) {

        $(".slick-prev").ready(function() {

            var next_button = '\<div class=\"slide_button prev\"\>\<svg class=\"icon icon-arrow\"\>\<use xlink:href=\"img\/symbol\/sprite.svg\#arrow\"\>\<use\/\>\<\/svg\>\<\/div\>',
                prev_button = '\<div class=\"slide_button next\"\>\<svg class=\"icon icon-arrow\"\>\<use xlink:href=\"img\/symbol\/sprite.svg\#arrow\"\>\<use\/\>\<\/svg\>\<\/div\>';

            $(".slick-prev").html(next_button);
            $(".slick-next").html(prev_button);;

            var newBlock = $("<div class='main-slider__nav-wrap container'></div>");

            $('.main-slider').append(newBlock);

            newBlock.append($(".slick-prev"))
                    .append($(".slick-next"))

        })


          $('.main-slider__wrapper').slick({
                infinite: true,
                speed: 1000,
                autoplay: true,
                pauseOnHover: false,
                fade: true
            });
    } 