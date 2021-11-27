const burger = document.querySelector('.navigation__menu');
const menu = document.querySelector('.navigation__in-row');

burger.addEventListener('click', () => {
    menu.classList.toggle('is-active');
})