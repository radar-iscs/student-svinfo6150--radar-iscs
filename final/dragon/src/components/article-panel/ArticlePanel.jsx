import './ArticlePanel.css';

export function ArticlePanel({
  title,
  text,
  paragraphs,
  image,
}) {
  const PREFIX = 'article-panel';

  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}__img`}>
        <img src={image} alt='Picture of article - Showing appearance of British-shorthair cats' />
      </div>
      <div className={`${PREFIX}__words`}>
        <h3 className={`${PREFIX}__title`}>{title}</h3>
        <p>{text}</p>
        <ul>
          {paragraphs.map((paragraph, index) => <li key={index}>{paragraph}</li>)}
        </ul>
      </div>
    </div>
  );
}
