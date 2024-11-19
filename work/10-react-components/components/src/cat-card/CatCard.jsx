import React from 'react';
import Button from '../button';

import { LINK_VISUAL, PATH_ABOUT } from '../data/const';
import './CatCard.css';

export function CatCard({
  title,
  image,
  content,
  link,
  setPage,
}) {
  const PREFIX = 'cat-card';

  const onClickBtn = () => {
    if (link) {
      window.location.href = link;
    } else {
      setPage(PATH_ABOUT);
    }
  };

  return (
    <div className={PREFIX}>
      <img
        className={`${PREFIX}__img`}
        src={image}
        alt='Picture of Card - Showing appearance of Siamese cats'
      />
      <h3>{title}</h3>
      <p>{content}</p>
      <Button
        className={`${PREFIX}__btn`}
        content={link ? 'Read More' : 'About Us'}
        onClick={onClickBtn}
        {...(link ? { visual: LINK_VISUAL } : {})}
      />
    </div>
  );
}
