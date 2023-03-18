$(document).ready(function() {
    $('.footer-mobile-option__header').each(function(i) {
        $(this).on('click', function() {
            $('.footer-mobile-option__list').eq(i).slideToggle(500);
            $('.footer-mobile-option__arrow').eq(i).toggleClass('footer-mobile-option__arrow--up');
        });
    });
});