import { useRef } from 'react';
import Button from '../button';
import OrderDialog from '../order-dialog';

import './ShopCard.css';

export function ShopCard({
  merchKey,
  title,
  image,
  paragraphs,
  setPage,
  addOrder,
}) {
  const PREFIX = 'shop-card';
  const dialogRef = useRef();

  const onClickBtn = () => {
    dialogRef.current.showModal();
  };

  return (
    <div className={PREFIX}>
      <img
        className={`${PREFIX}__img`}
        src={image}
        alt={`Picture of cards in Shop Page - Showing appearance of dragon merch ${title}`}
      />
      <h3>{title}</h3>
      <ul className={`${PREFIX}__paragraphs`}>
        {paragraphs.map((paragraph, index) => <li key={index}>{paragraph}</li>)}
      </ul>
      <Button
        ariaLabel='Open order form'
        className={`${PREFIX}__btn`}
        content={'Order Now'}
        onClick={onClickBtn}
      />
      <OrderDialog
        dialogRef={dialogRef}
        merchKey={merchKey}
        setPage={setPage}
        addOrder={addOrder}
      />
    </div>
  );
}
