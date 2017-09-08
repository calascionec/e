$('document').ready(function(){

    var slickOptions = {
        nextArrow: '<div class="slider-arrow slider-arrow--next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="slider-arrow slider-arrow--previous"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    if (!(window.innerWidth > 768 && window.innerWidth < 1024)) {

        $('.slider-container').on('destroy', function (e, slick) {

            var carousel = $(this),
            reinit = debounce(function() {

                if (window.innerWidth > 768 && window.innerWidth < 1024) {
                    return;
                }
                carousel.removeAttr('style');
                carousel.slick(slick.options);

                window.removeEventListener('resize', reinit);
            }, 200)

            window.addEventListener('resize', reinit);
        }).slick(slickOptions);

    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && window.innerWidth < 1024) {
            var numberOfProducts = $('.slider-container .product-item:not(.slick-cloned)').length,
                productWidth = 200;
                lengthOfContainer = numberOfProducts * (productWidth + 10);
            $('.slider-container').width(lengthOfContainer);
        }
    })


    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};
    		var callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if (callNow) func.apply(context, args);
    	};
    };
});
