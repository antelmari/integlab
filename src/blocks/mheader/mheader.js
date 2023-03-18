// клик на кнопку в нижнем меню
const mheaderButtons = document.querySelectorAll('.mheader__btn');

if (mheaderButtons) {
    mheaderButtons.forEach(item => {
        item.addEventListener('click', () => {
            mheaderButtons.forEach(elem => {
                if (elem.classList.contains('mheader__btn--active')) {
                    elem.classList.remove('mheader__btn--active');
                }
            });
            item.classList.add('mheader__btn--active');
        });
    });
}
// end

// делаем активной иконку каталога в нижнем меню при открытии каталога
const mobileCatalog = document.querySelector('.marketplace-catalog--mobile');
const catalogIcon = document.getElementById('catalog');

if (mobileCatalog) {
    mobileCatalog.addEventListener('click', () => {
        mheaderButtons.forEach(elem => {
            if (elem.classList.contains('mheader__btn--active')) {
                elem.classList.remove('mheader__btn--active');
            }
        });
        catalogIcon.classList.add('mheader__btn--active');
    });
}
// end