import { useState, useEffect, useRef } from 'react';

import GlobalNav from '../global-nav';
import Button from '../button'; 

import Logo from '../../assets/logo.jpg';
import MenuIcon from '../../assets/icon_menu.svg';
import './header.css';

export function Header({
  currentPage,
  navToHash,
}) {
  const PREFIX = 'header';

  const [navVisibleInMobile, setNavVisibleInMobile] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const onClickOutside = e => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setNavVisibleInMobile(false);
    }
  }

  const onClickNavBtn = () => {
    console.log(navVisibleInMobile)
    setNavVisibleInMobile(prev => !prev);
  }

  return (
    <header className={PREFIX}>
      <div className={`${PREFIX}__logo`}>
        <img src={Logo} alt='All About Dragons Logo - A website full of all kinds of information about dragons' />
        <h1>All About Dragons</h1>
        {/* hamburger menu in mobile layout */}
        <Button 
          ariaLabel='Show Navigation Menu'
          className={`${PREFIX}__dropdown-btn`}
          content={<img src={MenuIcon} />}
          onClick={onClickNavBtn}
        />
      </div>
      <GlobalNav
        navRef={navRef}
        currentPage={currentPage}
        navToHash={navToHash}
        navVisibleInMobile={navVisibleInMobile}
        setNavVisibleInMobile={setNavVisibleInMobile}
      />
    </header>
  );
}
