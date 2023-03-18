// уменьшение или увеличение значений в инпутах (кол-во товаров в корзине)
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const counterInputs = document.querySelectorAll('.value');

if (decrementButtons) {
    decrementButtons.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (counterInputs[i].value > 0) {
                counterInputs[i].value--;
            }
        });
    });
}

if (incrementButtons) {
    incrementButtons.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (counterInputs[i].value < 999) {
                counterInputs[i].value++;
            }
        });
    });
}
// end