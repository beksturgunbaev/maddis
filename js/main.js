document.addEventListener('DOMContentLoaded', function () {
  const acc = document.getElementsByClassName('faq_title');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
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
});

document.addEventListener('DOMContentLoaded', function () {
  // Найти кнопки
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');

  const paymentSection = document.getElementById('payment');

  // Функция для прокрутки к блоку #payment
  function scrollToPayment() {
    paymentSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Добавить обработчики событий клика
  button1.addEventListener('click', scrollToPayment);
  button2.addEventListener('click', scrollToPayment);
  button3.addEventListener('click', scrollToPayment);
  button4.addEventListener('click', scrollToPayment);
});
