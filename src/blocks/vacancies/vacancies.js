// раскрытие выпадающего списка
$(document).ready(function() {
    $('.response-inputs-wrapper').each(function(i) {
        $(this).on('click', function() {
            $('.response-inputs-list').eq(i).slideToggle(500);
            $('.response__input--dropdown').eq(i).toggleClass('response__input--focus');
            $('.response__arrow').eq(i).toggleClass('response__arrow--up');
            if ($('.response__input--dropdown').eq(i).hasClass('response__input--focus')) {
                $('.response__input--dropdown').eq(i).removeClass('response__input--error');
            } else if ($('.response__input--dropdown').eq(i).val().length == 0) {
                $('.response__input--dropdown').eq(i).addClass('response__input--error');
            }
        });
    });
    $('.response-inputs-list').each(function(i) {
        $(this).on('click', function() {
            $('.response-inputs-list').eq(i).slideUp(500);
            $('.response__input--dropdown').eq(i).removeClass('response__input--focus');
            $('.response__arrow').eq(i).removeClass('response__arrow--up');
        });
    });
});
// end

// заполнение инпута вариантом из выпадающего списка
const inputLists = document.querySelectorAll('.response-inputs-list');
const inputSelects = document.querySelectorAll('.response-inputs-select');
const dropdownInputs = document.querySelectorAll('.response__input--dropdown');

if (inputLists) {
    inputLists.forEach((item, i) => {
        Array.from(item.children).forEach((elem, el) => {
            elem.addEventListener('click', () => {
                dropdownInputs[i].value = Array.from(inputSelects[i].children)[el].value;
                dropdownInputs[i].classList.add('response__input--valid');
                dropdownInputs[i].style.paddingTop = '17px';
                dropdownInputs[i].style.paddingBottom = '17px';
            });
        });
    });
}
// end

// валидация для инпутов без выпадающего списка
const responseInputs = document.querySelectorAll('.response__input--static');

if (responseInputs) {
    responseInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('response__input--error');
            } else {
                if (item.checkValidity()) {
                    item.classList.add('response__input--valid');
                }
                else {
                    item.classList.add('response__input--invalid');
                }
            }
            if (item.value.length == 0 && item.classList.contains('response__input--valid')) {
                item.classList.remove('response__input--valid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('response__input--error')) {
                item.classList.remove('response__input--error');
            }
            if (item.classList.contains('response__input--invalid')) {
                item.classList.remove('response__input--invalid');
            }
            if (item.classList.contains('response__input--valid')) {
                item.classList.remove('response__input--valid');
            }
        });
    });
}
// end