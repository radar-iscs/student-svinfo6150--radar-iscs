'use strict';
(function() {
  const btn = document.querySelector('.nav__dropdown-btn');
  
  function onClickBtn() {
    const content = document.querySelector('.nav__dropdown-content');
    content.classList.toggle('show');
  }

  function onClickOutside(event) {
    if (btn.contains(event.target)) {
      return;
    }

    const content = document.querySelector('.nav__dropdown-content');
    if (content.classList.contains('show')) {
      content.classList.remove('show');
    }
  }

  btn.addEventListener('click', onClickBtn);
  window.onclick = onClickOutside;
})();
