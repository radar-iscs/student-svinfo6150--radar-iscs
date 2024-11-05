'use strict';
(function() {
  // handle email verification
  const emailEl = document.querySelector('.operation.email');
  const emailConfirmEl = document.querySelector('.operation.email-confirm');
  
  const state = {
    email: '',
    emailErr: '',
    emailConfirm: '',
    emailConfirmErr: '',
  };

  emailEl.addEventListener('input', e => {
    state.email = e.target.value;
    verifyEmail();
    if (state.email && state.emailConfirm && state.emailConfirm !== state.email) {
      state.emailConfirmErr = 'Confirm Email must match the Email!';
    } else if (state.emailConfirm === state.email) {
      state.emailConfirmErr = '';
    }

    renderBox();
  });
  
  emailConfirmEl.addEventListener('input', e => {
    state.emailConfirm = e.target.value;
    verifyEmailConfirm();

    renderBox();
  });

  function verifyEmail() {
    if (!state.email) {
      state.emailErr = 'Email must not be empty!';
    } else if (!state.email.includes('@')) {
      state.emailErr = 'Email should include a @!';
    } else {
      state.emailErr = '';
    }
  }

  function verifyEmailConfirm() {
    if (!state.emailConfirm) {
      state.emailConfirmErr = 'Confirm Email must not be empty!';
    } else if (state.emailConfirm !== state.email) {
      state.emailConfirmErr = 'Confirm Email must match the Email!';
    } else {
      state.emailConfirmErr = '';
    }
  }

  function verifyAll() {
    verifyEmail();
    verifyEmailConfirm();
  }

  function isValid() {
    return (!state.emailErr && !state.emailConfirmErr);
  }

  function renderBox() {
    const emailErrEl = document.querySelector('.error.email');
    emailErrEl.innerHTML = state.emailErr;
    
    const emailConfirmErrEl = document.querySelector('.error.email-confirm');
    emailConfirmErrEl.innerHTML = state.emailConfirmErr;
  }

  // handle btns & modal click
  const subscribeBtns = document.querySelectorAll('.collection__card-btn');
  const modal = document.querySelector('.modal');
  const submitBtn = document.querySelector('.form__button.submit');
  const cancelBtn = document.querySelector('.form__button.cancel');
  
  function onClickSubscribeBtn() {
      modal.showModal();
  }

  function onClickModal(event) {
    if (event.target === modal) {
      modal.close();
    }
  }

  function onClickSubmitBtn(e) {
    verifyAll();
    renderBox();

    if (!isValid()) {
      e.preventDefault();
    } else {
      modal.close();
    }
  }

  function onClickCancelBtn() {
    modal.close();
  }

  for (const btn of subscribeBtns) {
    btn.addEventListener('click', onClickSubscribeBtn);
  }
  submitBtn.addEventListener('click', onClickSubmitBtn);
  cancelBtn.addEventListener('click', onClickCancelBtn);
  window.onclick = onClickModal;
})();
