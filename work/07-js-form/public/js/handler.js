'use strict';
(function() {
  const nameEl = document.querySelector('.operation.name');
  const emailEl = document.querySelector('.operation.email');
  const emailConfirmEl = document.querySelector('.operation.email-confirm');
  const submitBtn = document.querySelector('.submit-button');

  const state = {
    name: '',
    nameErr: '',
    email: '',
    emailErr: '',
    emailConfirm: '',
    emailConfirmErr: '',
  };
  
  nameEl.addEventListener('input', e => {
    state.name = e.target.value;
    verifyName();

    render();
  });
  
  emailEl.addEventListener('input', e => {
    state.email = e.target.value;
    verifyEmail();
    if (state.email && state.emailConfirm && state.emailConfirm !== state.email) {
      state.emailConfirmErr = 'Confirm Email must match the Email!';
    } else if (state.emailConfirm === state.email) {
      state.emailConfirmErr = '';
    }

    render();
  });
  
  emailConfirmEl.addEventListener('input', e => {
    state.emailConfirm = e.target.value;
    verifyEmailConfirm();

    render();
  });

  submitBtn.addEventListener('click', e => {
    verifyAll();
    render();

    if (!isValid()) {
      e.preventDefault();
    }
  });

  function verifyName() {
    state.nameErr = state.name ? '' : 'Name must not be empty!';
  }

  function verifyEmail() {
    state.emailErr = state.email ? '' : 'Email must not be empty!';
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
    verifyName();
    verifyEmail();
    verifyEmailConfirm();
  }

  function isValid() {
    return (!state.nameErr && !state.emailErr && !state.emailConfirmErr);
  }

  function render() {
    if (state.nameErr) {
      nameEl.classList.add('invalid');
    } else {
      nameEl.classList.remove('invalid');
    }
    const nameErrEl = document.querySelector('.error.name');
    nameErrEl.innerHTML = state.nameErr;

    if (state.emailErr) {
      emailEl.classList.add('invalid');
    } else {
      emailEl.classList.remove('invalid');
    }
    const emailErrEl = document.querySelector('.error.email');
    emailErrEl.innerHTML = state.emailErr;

    if (state.emailConfirmErr) {
      emailConfirmEl.classList.add('invalid');
    } else {
      emailConfirmEl.classList.remove('invalid');
    }
    const emailConfirmErrEl = document.querySelector('.error.email-confirm');
    emailConfirmErrEl.innerHTML = state.emailConfirmErr;
  }
})();
