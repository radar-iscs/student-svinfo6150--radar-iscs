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
        <img src={image} alt={`Picture of article - Showing appearances of dragons under title ${title}`} />
      </div>
      <div className={`${PREFIX}__words`}>
        <h3 className={`${PREFIX}__title`}>{title}</h3>
        <p>{text}</p>
        {paragraphs.map((paragraph, index) => <li key={index}>{paragraph}</li>)}
      </div>
    </div>
  );
}
