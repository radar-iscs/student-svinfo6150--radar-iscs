import React from 'react';
import CatCard from '../cat-card';

import { CARDS } from '../data/cards'
import './CatsPage.css';

export function CatsPage({ setPage }) {
  const PREFIX = "cats-page";

  return (
    <div className={PREFIX}>
      <h2 className={`${{PREFIX}}__title`}>Cats in the News</h2>
      {CARDS.map(card =>
        <CatCard
          key={card.title}
          title={card.title}
          content={card.content}
          link={card.link}
          setPage={setPage}
        />
      )}
    </div>
  );
}
