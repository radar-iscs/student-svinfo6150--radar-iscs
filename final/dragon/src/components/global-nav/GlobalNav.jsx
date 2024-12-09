import { MENU } from '../../data/const';
import './GlobalNav.css';

export function GlobalNav({
  navRef,
  currentPage,
  navToHash,
  navVisibleInMobile,
  setNavVisibleInMobile,
}) {
  const PREFIX = 'global-nav';

  const list = MENU.map(item => {
    return (
      <li
        key={item.name}
        className={`${PREFIX}__item ${currentPage === item.path ? 'selected' : ''}`}
        onClick={() => {
          setNavVisibleInMobile(false);
          navToHash(item.path);
        }}
      >
        <a
          className={`${PREFIX}__link`}
          onClick={e => e.preventDefault()}
          href={item.path}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav ref={navRef} className={PREFIX}>
      <ul className={`${PREFIX}__list ${navVisibleInMobile ? 'show' : ''}`}>{list}</ul>
    </nav>
  );
}
