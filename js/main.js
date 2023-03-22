let openMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.close-menu');
let menuModal = document.querySelector('.menu');

openMenu.onclick = function() {
    menuModal.classList.add('active');
}
closeMenu.onclick = function() {
    menuModal.classList.remove('active');
}
