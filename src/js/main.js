var burgerBtn = document.querySelector('.burger-menu-btn');
var burgerMenu = document.querySelector('.burger-menu');
var overlay = document.querySelector('.overlay');
var productLink = document.querySelectorAll('.product__link');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.btn-close');

burgerBtn.addEventListener('click', burgerClickHandler);
close.addEventListener('click', closeClickHanlder);

function burgerClickHandler(e) {
    e.preventDefault();
    if(burgerMenu.classList.contains('hidden')) {
        burgerMenu.classList.remove('hidden');
    } else {
        burgerMenu.classList.add('hidden');
    }
}
for(var i = 0; i < productLink.length; i++) {
    var linkCurrent = productLink[i];
    linkCurrent.addEventListener('click', productLinkClickHanlder)
}
function productLinkClickHanlder(e) {
    e.preventDefault();

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeClickHanlder(e) {
    e.preventDefault();
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
