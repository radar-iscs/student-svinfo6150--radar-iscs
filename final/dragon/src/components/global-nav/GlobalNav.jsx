import React from 'react';
import { MENU } from '../../data/const';
import './GlobalNav.css';

export function GlobalNav({
  navToHash,
}) {
  const PREFIX = 'global-nav';

  const list = MENU.map(item => {
    return (
      <li key={item.name} className={`${PREFIX}__item`}>
        <a
          className={`${PREFIX}__link`}
          onClick={navToHash}
          href={item.path}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav className={PREFIX}>
      <ul className={`${PREFIX}__list`}>{list}</ul>
    </nav>
  );
}
