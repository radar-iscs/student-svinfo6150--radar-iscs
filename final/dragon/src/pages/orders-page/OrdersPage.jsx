import { useState } from 'react';
import SettingsPanel from './settings-panel';
import Button from '../../components/button';

import { LINK_VISUAL, PATH_SHOP } from '../../data/const';
import { SHOP_CARDS, SORT_TYPE_NEWEST } from '../../data/merch';
import './OrdersPage.css';

export function OrdersPage({ orders, setPage }) {
  const PREFIX = 'orders-page';

  const [selectedSort, setSelectedSort] = useState(SORT_TYPE_NEWEST);
  const [selectedFilters, setSelectedFilters] = useState(Object.keys(SHOP_CARDS));

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>The Orders I Made</h2>
      <div className={`${PREFIX}__list`}>
        {/* filter & sort panel */}
        <SettingsPanel
          className={`${PREFIX}__panel`}
          setSelectedSort={setSelectedSort}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        {/* list items */}
        {!orders.lengh && 
          <div className={`${PREFIX}__item empty`}>
            <p>There are no orders now.</p>
            <p>
              Go to 
              <Button
                ariaLabel='Go to Shop Page'
                content='Shop'
                visual={LINK_VISUAL}
                onClick={() => setPage(PATH_SHOP)}
              />
            </p>
          </div>
        }
        {orders
          .sort((a, b) => (selectedSort === SORT_TYPE_NEWEST
            ? b.time - a.time
            : a.time - b.time
          ))
          .filter(order =>selectedFilters.includes(order.merchKey))
          .map(order => {
          const merch = SHOP_CARDS[order.merchKey];
          return (
            <div key={order.time} className={`${PREFIX}__item`}>
              <img
                className={`${PREFIX}__img`}
                src={merch.image}
                alt='Picture of Card - Showing appearance of different dragon merch'
              />
              <div className={`${PREFIX}__contents`}>
                <p>{`Merch Name: ${merch.title}`}</p>
                <p>{`Email: ${order.email}`}</p>
                <p>{`Shipping Address: ${order.shippingAddress}`}</p>
                {order.billAddress && <p>{`Billing Address: ${order.billAddress}`}</p>}
                <p>{`Order Time: ${new Date(order.time).toLocaleString()}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
