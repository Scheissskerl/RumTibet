const otherMaterials = document.querySelector('.travel-blog__btn');
const itemsLength = document.querySelectorAll('.travel-blog__card').length;

let items = 4;

otherMaterials.addEventListener('click', () => {
    items += 2;
    const array = Array.from(document.querySelector('.travel-blog__cards').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('items-visible'));

    if (visItems.length === itemsLength) {
        otherMaterials.style.display = 'none';
    }
})