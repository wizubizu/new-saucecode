// dashboard show and hide
    $('#openSidebar').click(function(){
    $('.leftbar').addClass('biger');
    });
    $('#closebtn').click(function(){
        $('.leftbar').removeClass('biger');
    });

   // partner slider
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });
    // partner slider end






    // partner slider down slider
    $(document).ready(function(){
        $('.customer-logosd').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            prevArrow: $('.cust-prev'),
            nextArrow: $('.cust-next'),
            pauseOnHover: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
    // partner slider end