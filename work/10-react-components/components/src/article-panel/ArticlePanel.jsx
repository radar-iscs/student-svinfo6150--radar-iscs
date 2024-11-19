import React from 'react';
import ArtileImage from '../assets/type_british-shorthair.jpg';
import './ArticlePanel.css';

export function ArticlePanel({
  title,
  content,
  imageName,
}) {
  const PREFIX = 'article';

  return (
    <div className={PREFIX}>
      <div className='article__img'>
        <img src={ArtileImage} alt='article image' />
      </div>
      <div className='article__words'>
        <h2 className='article__title'>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
