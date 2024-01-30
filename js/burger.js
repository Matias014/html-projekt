document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const linki = document.querySelector('.linki');

    burgerMenu.addEventListener('click', function () {
        linki.classList.toggle('active');
    });
});