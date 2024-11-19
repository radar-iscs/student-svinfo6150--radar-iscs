import React, { useState } from 'react';
import Button from '../button';
import {
  BUTTON_TYPE,
  SUBMIT_TYPE,
  BUTTON_VISUAL,
  LINK_VISUAL,
} from '../data/const';
import './RegisterDialog.css';

export function RegisterDialog({ dialogRef }) {
  const PREFIX = 'register-dialog';
  const [tips, setTips] = useState('');

  const onClickSubmitBtn = e => {
    e.preventDefault();
    setTips('You have successfully submitted the form!');
  };

  const onClickCloseBtn = () => {
    dialogRef.current.close();
  };

  return (
    <dialog className={PREFIX} ref={dialogRef}>
      <div className='subscribe-box'>
        <h3>Subscribe to the Latest Mews!</h3>
        <form className='form__settings' action='/subscribe' method='POST' id='subscribe-form' />
        <label className='description required' htmlFor='email'>Email</label>
        <input className='operation email' type='text' name='email' id='email' placeholder='required' />
      </div>
      {tips && <span className='tips'>{tips}</span>}
      <Button
        content='Submit'
        type={SUBMIT_TYPE}
        visual={LINK_VISUAL}
        form='subscribe-form'
        onClick={onClickSubmitBtn}
      />
      <Button
        content='Close'
        type={BUTTON_TYPE}
        visual={BUTTON_VISUAL}
        onClick={onClickCloseBtn}
      />
    </dialog>
  );
}
