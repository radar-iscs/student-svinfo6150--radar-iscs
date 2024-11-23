import React, { useState, useRef } from 'react';
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
  const inputRef = useRef();
  const [tips, setTips] = useState('');

  const onClickSubmitBtn = e => {
    e.preventDefault();
    setTips('You have successfully submitted the form!');
  };

  const onClickCloseBtn = () => {
    dialogRef.current.close();

    // reset dialog
    setTips('');
    inputRef.current.value = '';
  };

  return (
    <dialog className={PREFIX} ref={dialogRef}>
      <h3>Submit and Join Us Now!</h3>
      <div className={`${PREFIX}__box`}>
        <form
          className={`${PREFIX}__form`}
          action='/subscribe'
          method='POST'
          id='subscribe-form'
        >
          <label className={`${PREFIX}__description`} htmlFor='email'>Email</label>
          <input
            ref={inputRef}
            className={`${PREFIX}__operation`}
            type='text'
            name='email'
            id='email'
            placeholder='123@abc.com'
          />
        </form>
      </div>
      <div className={`${PREFIX}__btns`}>
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
      </div>
      {tips && <span>{tips}</span>}
    </dialog>
  );
}
