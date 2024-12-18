let selectField = document.querySelector('.selected__btn');
let selectText = document.querySelector('.selected__btn-text');
let list = document.querySelector('.options');
let options = document.querySelectorAll('.option');
let btnArrow = document.querySelector('.selected__btn-arrow');

selectField.onclick = function () {
  list.classList.toggle('flex');
  btnArrow.classList.toggle('rotate');
}

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('flex');
    btnArrow.classList.toggle('rotate');
  }
}
























