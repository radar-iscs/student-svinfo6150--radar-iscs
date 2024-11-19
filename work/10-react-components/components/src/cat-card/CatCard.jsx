import React from 'react';
import CardImage from '../assets/type_siamese.jpg';
import { PATH_ABOUT } from '../data/const';
import './CatCard.css';

export function CatCard({
  title,
  content,
  link,
  setPage,
}) {
  const PREFIX = 'card';

  const onClickBtn = () => {
    if (link) {
      window.location.href = link;
    } else {
      setPage(PATH_ABOUT);
    }
  };

  return (
    <div className={PREFIX}>
      <div className="collection__card">
        <img className="collection__card-img" src={CardImage} alt='card image' />
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="collection__card-btn" onClick={onClickBtn}>{link ? 'Read More' : 'About Us'}</button>
      </div>
    </div>
  );
}
