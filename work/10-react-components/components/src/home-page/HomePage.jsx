import React from 'react';
import ArticlePanel from '../article-panel';

import { ARTICLES } from '../data/articles';
import './HomePage.css';

export function HomePage() {
  const PREFIX = 'home-page';

  return (
    <div className={PREFIX}>
      {ARTICLES.map(article =>
        <ArticlePanel
          key={article.title}
          title={article.title}
          content={article.content}
        />
      )}
    </div>
  );
}
