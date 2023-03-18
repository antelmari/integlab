// валидация для инпутов
const calculatorInputs = document.querySelectorAll('.calculator-form__input');

if (calculatorInputs) {
    calculatorInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('calculator-form__input--error');
            } else if (!item.checkValidity()) {
                item.classList.add('calculator-form__input--invalid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('calculator-form__input--error')) {
                item.classList.remove('calculator-form__input--error');
            }
            if (item.classList.contains('calculator-form__input--invalid')) {
                item.classList.remove('calculator-form__input--invalid');
            }
        });
    });
}
// end