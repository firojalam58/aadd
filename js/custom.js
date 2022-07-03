$(function () {



    // ============== venobox==========
    $('.venobox').venobox();


    $('.videos').venobox();
    // ============== venobox end==========

    // ========= mixitup=========

    var mixer = mixitup('.mixe');

    // ========= mixitup end=========


    $('.counter').counterUp({
        delay: 13,
        time: 1000
    });


    //    ========= review_slider=======
    $('.review_slide').slick({
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {

                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {

                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },

            {
                breakpoint: 324,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    //    ========= review_slider end=======

    //    mobile menu
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600
    });

    //    SmoothScroll end
    //    sticky menu


    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });

});