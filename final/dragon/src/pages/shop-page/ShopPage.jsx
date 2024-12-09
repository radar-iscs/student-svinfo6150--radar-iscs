import ShopCard from '../../components/shop-card';

import { SHOP_CARDS } from '../../data/merch';
import './ShopPage.css';

export function ShopPage({ setPage, addOrder }) {
  const PREFIX = 'shop-page';

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>Fantastic Dragon Merch</h2>
      <div className={`${PREFIX}__cards`}>
        {Object.keys(SHOP_CARDS).map(merchKey => {
          const card = SHOP_CARDS[merchKey];
          return (
            <ShopCard
              key={merchKey}
              merchKey={merchKey}
              title={card.title}
              image={card.image}
              paragraphs={card.paragraphs}
              setPage={setPage}
              addOrder={addOrder}
            />
          );
        })}
      </div>
    </div>
  );
}
