let openMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.close-menu');
let menuModal = document.querySelector('.menu');

const openMenuModal = () => {
    menuModal.classList.add('active');
}
const closeMenuModal = () => {
    menuModal.classList.remove('active');
}
openMenu.addEventListener('click', openMenuModal);
closeMenu.addEventListener('click', closeMenuModal);