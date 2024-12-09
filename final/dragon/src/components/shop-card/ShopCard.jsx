import React from 'react';
import Button from '../button';

import { LINK_VISUAL, PATH_ABOUT } from '../../data/const';
import './ShopCard.css';

export function ShopCard({
  title,
  image,
  contents,
}) {
  const PREFIX = 'shop-card';

  const onClickBtn = () => {
  };

  return (
    <div className={PREFIX}>
      <img
        className={`${PREFIX}__img`}
        src={image}
        alt='Picture of Card - Showing appearance of different dragon merch'
      />
      <h3>{title}</h3>
      <ul className={`${PREFIX}__contents`}>
        {contents.map(paragraph => <li>{paragraph}</li>)}
      </ul>
      <Button
        className={`${PREFIX}__btn`}
        content={'Order Now'}
        onClick={onClickBtn}
      />
    </div>
  );
}
