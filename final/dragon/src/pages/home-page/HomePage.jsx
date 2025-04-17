
import ArticlePanel from '../../components/article-panel';
import { ARTICLES } from '../../data/article';

import './HomePage.css';

export function HomePage() {
  const PREFIX = 'home-page';

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>Dragons Everywhere</h2>
      {ARTICLES.map(article =>
        <ArticlePanel
          key={article.title}
          title={article.title}
          text={article.text}
          paragraphs={article.paragraphs}
          image={article.image}
        />
      )}
    </div>
  );
}
