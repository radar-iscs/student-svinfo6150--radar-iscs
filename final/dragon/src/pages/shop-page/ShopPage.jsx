import ShopCard from '../../components/shop-card';

import { SHOP_CARDS } from '../../data/shop-cards';
import './ShopPage.css';

export function ShopPage() {
  const PREFIX = 'shop-page';

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>Fantastic Dragon Merch</h2>
      <div className={`${PREFIX}__cards`}>
        {SHOP_CARDS.map(card =>
          <ShopCard
            key={card.title}
            title={card.title}
            image={card.image}
            contents={card.contents}
          />
        )}
      </div>
    </div>
  );
}
