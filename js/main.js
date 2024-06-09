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

const hideElements = document.querySelector('.hide-elements');
const showBtn = document.querySelector('.show-btn');
const hideBtn = document.querySelector('.hide-btn');

showBtn.addEventListener('click', () => {
  hideElements.classList.add('active');
  showBtn.classList.remove('active');
  hideBtn.classList.add('active');
});

hideBtn.addEventListener('click', () => {
  hideElements.classList.remove('active');
  showBtn.classList.add('active');
  hideBtn.classList.remove('active');
});

