import React, { useState } from 'react';
import Button from '../button';
import {
  BUTTON_TYPE,
  LINK_VISUAL,
} from '../data/const';
import './footer.css';

export function Footer() {
  const PREFIX = 'footer';
  const [tips, setTips] = useState('');

  const onClickPolicy = e => {
    setTips('Dah! There\'s no policy at all!');
  };

  return (
    <footer className={PREFIX}>
      See our
      <Button
        content='Privacy Policy'
        type={BUTTON_TYPE}
        visual={LINK_VISUAL}
        onClick={onClickPolicy}
      />
      {tips && <span>{tips}</span>}
    </footer>
  );
}
