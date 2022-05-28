$(document).ready(function () {

    //     /* magnificPopup img view */
    //     $('.popup-image').magnificPopup({
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });

    //     /* magnificPopup video view */
    //     $('.popup-video').magnificPopup({
    //         type: 'iframe'
    //     });

    // count down
    // jquery count down
    // $.each($('.jquery-countdown'), function (index, value) {
    //     // date format MM/DD/YYYY hh:mm:ss
    //     const htmlTemplate = `
    //         <div class="counter__item">
    //             <div class="counter__item--number">%H</div>
    //             <div class="counter__item--text">Hour</div>
    //         </div>
    //         <div class="counter__item">
    //             <div class="counter__item--number">%M</div>
    //             <div class="counter__item--text">Minute</div>
    //         </div>
    //         <div class="counter__item">
    //             <div class="counter__item--number">%S</div>
    //             <div class="counter__item--text">Second</div>
    //         </div>
    // 	`;

    //     const date = $(this).data('date');
    //     const counter = $(this).countdown(date, function (event) {
    //         $(this).html(event.strftime(htmlTemplate));
    //     });
    //     counter.on('finish.countdown', () => {
    //         $('.options input, .question-buttons button').attr("disabled", true);
    //         // Swal.fire({
    //         //     title: 'Time is up!',
    //         //     icon: 'info',
    //         //     showConfirmButton: false,
    //         // });
    //         setTimeout(() => {
    //             // location.replace('result.html');
    //         }, 5000);
    //     });
    // });

    // load uploaded image
    // $('.image-upload__input[type=file]').change(function (event) {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         $(this).parent().find('.image-upload__image').attr('src', e.target.result);
    //     };
    //     reader.readAsDataURL(file);
    // });

    //for menu active class
    //     $('.portfolio-menu button').on('click', function (event) {
    //         $(this).siblings('.active').removeClass('active');
    //         $(this).addClass('active');
    //         event.preventDefault();
    //     });

    // WOW active
    //     new WOW().init();

    // slick slider for banner 
    // $('.banner-slider').slick({
    //     prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
    //     nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
    // dots: true,
    //     autoplay: true
    // });

    // my code ----------------------------------------------------------------------
    // $.each($('[data-bg-img]'), (index, item) => {
    //     $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    // })
    // sticky menu ber and go to top button
    //     $(window).scroll(function () {
    //         var scrolled = $(window).scrollTop();
    //         var topMain = $('main').offset().top - 400;

    // toggle search
    // $('.search-box__btn').on('click', function () {
    //     $('.search-box').toggleClass('active');
    // });

    // go to top button
    //         if (scrolled > topMain) {
    //             $('.go-to-top').addClass('active');
    //             $('.nav-outer').addClass('sticky');

    //             $('.go-to-top').click(function () {
    //                 $(window).scrollTop(0);
    //             });
    //         } else {
    //             $('.go-to-top').removeClass('active');
    //             $('.nav-outer').removeClass('sticky')
    //         }
    // console.log(scrolled);
    //     });

    // menu bar open -------------------------
    //     $('.navigations .menu-icon').click(function () {
    //         $('.mobile-navigations').css({
    //             'width': '100%',
    //             'padding': '3rem 5rem'
    //         });
    // $('.mobile-navigations').toggleClass('w-100 py-5 pl-50 pr-50')
    //     });
    // menu bar close -------------------------
    //     $('.mobile-navigations li.close-menu').click(function () {
    //         $('.mobile-navigations').css({
    //             'width': '0',
    //             'padding': '0'
    //         });
    //     });
    // dropdown toggle ------------------
    //     $('.mobile-navigations li.has-dropdown > i').click(function () {
    //         $(this).parent().find('>ul').slideToggle()
    //     });

    // exam time counter
    $.each($('.jquery-countdown'), function (index, value) {
        // date format MM/DD/YYYY hh:mm:ss
        const htmlTemplate = `
            <div class="counter__item">
                <div class="counter__item--number">%H</div>
                <div class="counter__item--text">Hour</div>
            </div>
            <div class="counter__item">
                <div class="counter__item--number">%M</div>
                <div class="counter__item--text">Minute</div>
            </div>
            <div class="counter__item">
                <div class="counter__item--number">%S</div>
                <div class="counter__item--text">Second</div>
            </div>
		`;

        const date = $(this).data('date');
        console.log(date);
        const counter = $(this).countdown(date, function (event) {
            $(this).html(event.strftime(htmlTemplate));
        });
        counter.on('finish.countdown', () => {
            // $('.options input, .question-buttons button').attr("disabled", true);
            Swal.fire({
                title: 'Time is up!',
                icon: 'info',
                showConfirmButton: false,
            });
            setTimeout(() => {
                // location.replace('result.html');
            }, 5000);
        });
    });

    // toggle menu
    $('.open-mobile-menu').on('click', function () {
        $('.mobile-menu, .overlay').addClass('active');
    });
    $('.mobile-menu__close, .overlay').on('click', function () {
        $('.mobile-menu, .overlay').removeClass('active');
    });

    // toggle search popup
    $('.open-search-popup').on('click', function () {
        $('.search-popup').addClass('active');
    });
    $('.search-popup__close').on('click', function () {
        $('.search-popup').removeClass('active');
    });


    // preloader
    $(".preloader").animate({
        top: '-100%'
    }, 500);
});
