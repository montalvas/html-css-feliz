const btnLeft = document.querySelector('.button-arrow.-left');
const btnRight = document.querySelector('.button-arrow.-right');
const items = document.querySelector('.items');
let pixels = 0;

btnLeft.addEventListener('click', () => {
    pixels -= 30;
    items.style = `transform: translateX(${pixels}px);`;
});

btnRight.addEventListener('click', () => {
    pixels += 30;
    items.style = `transform: translateX(${pixels}px);`;
});