import AccordionItem from '../../components/accordion-item'
import { LOONG_ITEMS } from '../../data/loong';
import './LoongPage.css';

export function LoongPage() {
  const PREFIX = 'loong-page';

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>Have You Heard about Loong?</h2>
      {LOONG_ITEMS.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
        />
      ))}
    </div>
  );
};
