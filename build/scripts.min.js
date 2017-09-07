$('document').ready(function(){

    $('.slider-container').slick({
        nextArrow: '<div class="slider-arrow slider-arrow--next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="slider-arrow slider-arrow--previous"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick',
            },
            {
                breakpoint: 425,
                slidesToShow: 1,
            }
        ]
    });
});
