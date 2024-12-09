import GlobalNav  from '../global-nav';

import Logo from '../../assets/logo.jpg';
import './header.css';

export function Header({
  navToHash,
}) {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <div className={`${PREFIX}__logo`}>
        <img src={Logo} alt='All About Dragons Logo - A website full of all kinds of information about dragons' />
        <h1>All About Dragons</h1>
      </div>
      <GlobalNav className='header__nav' navToHash={navToHash} />
    </header>
  );
}
