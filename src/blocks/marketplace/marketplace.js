const listItems = document.querySelectorAll('.marketplace-catalog-list--mobile__item');
const detailedLists = document.querySelectorAll('.marketplace-catalog-list-details--mobile');

listItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        detailedLists[i].classList.add('marketplace-catalog-list-details--show');
    });
});

$(document).ready(function() {
    $('.marketplace-catalog-list-details--mobile__item').each(function(i) {
        $(this).on('click', function() {
            $('.marketplace-catalog-list-details-products').eq(i).slideToggle(500);
            $('.marketplace-catalog-list-details--mobile__text').eq(i).toggleClass('marketplace-catalog-list-details--mobile__text--active');
        });
    });
});


/* begin tabs */
$(document).ready(function() {
    $('.product-card-descr__tab').each(function(i) {
        $(this).on('click', function() {
            $('.product-card-descr__tab').removeClass('product-card-descr__tab--active');
            $('.product-card-descr__tab').eq(i).addClass('product-card-descr__tab--active');
            $('.product-card-descr-block').fadeOut(100);
            $('.product-card-descr-block').eq(i).fadeIn(700);
        });
    });
});
/* end tabs */

$(document).ready(function() {
    $('.catalog-mobile-filters__popular').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-mobile-filters-list').eq(i).slideToggle(500);
            $('.catalog-mobile-filters__popular').eq(i).toggleClass('catalog-mobile-filters__popular--active');
        });
    });
    $('.catalog-mobile-filters-list').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-mobile-filters-list').eq(i).slideUp(500);
            $('.catalog-mobile-filters__popular').eq(i).removeClass('catalog-mobile-filters__popular--active');
        });
    });
});

const filterList = document.querySelector('.catalog-mobile-filters-list');
const filterInput = document.querySelector('.catalog-mobile-filters__input');

if (filterList) {
    Array.from(filterList.children).forEach(item => {
        item.addEventListener('click', () => {
            filterInput.value = item.innerHTML;
            Array.from(filterList.children).forEach(elem => {
                if (elem.classList.contains('catalog-mobile-filters-list__item--active')) {
                    elem.classList.remove('catalog-mobile-filters-list__item--active');
                }
            });
            item.classList.add('catalog-mobile-filters-list__item--active');
        });
    });
}