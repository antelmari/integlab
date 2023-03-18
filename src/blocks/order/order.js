const orderInputs = document.querySelectorAll('.payment-form-products__input');
if (orderInputs) {
    orderInputs.forEach(item => {
        item.style.width = `${item.value.length * 8 + 16}px`;
    });
}

// валидация для инпутов
const orderFormInputs = document.querySelectorAll('.order-form__input');

if (orderFormInputs) {
    orderFormInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('order-form__input--error');
            } else if (!item.checkValidity()) {
                item.classList.add('order-form__input--invalid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('order-form__input--error')) {
                item.classList.remove('order-form__input--error');
            }
            if (item.classList.contains('order-form__input--invalid')) {
                item.classList.remove('order-form__input--invalid');
            }
        });
    });
}
// end