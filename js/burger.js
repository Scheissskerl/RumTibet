document.querySelector('.header__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('open');
})