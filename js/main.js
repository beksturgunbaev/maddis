const acc = document.getElementsByClassName('faq_btn');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
