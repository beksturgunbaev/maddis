let openMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.close-menu');
let menuModal = document.querySelector('.menu');

openMenu.onclick = function() {
    menuModal.classList.add('active');
}
closeMenu.onclick = function() {
    menuModal.classList.remove('active');
}

// Accordion:
const acc = document.getElementsByClassName("accordion-item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let panel = this.children[1];
        let icon = this.children[0].querySelector('span');
        icon.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
} 