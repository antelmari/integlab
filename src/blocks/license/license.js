$(document).ready(function() {
    $('.platform-info-advantages__header').each(function(i) {
        $(this).on('click', function() {
            $('.platform-info-advantages__list').eq(i).slideToggle(500);
            $('.platform-info-advantages__arrow').eq(i).toggleClass('platform-info-advantages__arrow--down');
            $('.platform-info-advantages__header').eq(i).toggleClass('platform-info-advantages__header--active');
        });
    });

    $('.tariffs-comparison-categories__header').each(function(i) {
        $(this).on('click', function() {
            $('.tariffs-comparison-categories-list').eq(i).fadeToggle(700);
            $('.tariffs-comparison-categories__arrow').eq(i).toggleClass('tariffs-comparison-categories__arrow--up');
        });
    });
});

/* begin tabs */
$(document).ready(function() {
    $('.platform__tab').each(function(i) {
        $(this).on('click', function() {
            $('.platform__tab').removeClass('platform__tab--active');
            $('.platform__tab').eq(i).addClass('platform__tab--active');
            $('.platform-info').fadeOut(100);
            $('.platform-info').eq(i).fadeIn(700);
        });
    });
});
/* end tabs */