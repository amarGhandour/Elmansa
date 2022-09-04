
const burgerIcon = document.querySelector('.burger');
const burgerBars = document.querySelectorAll('.burger span');

burgerIcon.addEventListener('click', () => {
    burgerBars.forEach((el) => {
        el.classList.toggle('x-mark');
    });
});