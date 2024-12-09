import { useState } from 'react'

// const
import {
  PATH_HOME,
  PATH_LOONG,
  PATH_SHOP,
  PATH_ORDER,
  PATH_ABOUT,
} from './data/const';

// components
import Header from './components/header';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Footer from './components/footer';

import './App.css'

function App() {
  const [page, setPage] = useState(PATH_HOME);

  const navToHash = (e) => {
    e.preventDefault();
    setPage(e.target.hash);
  };
  
  return (
    <div className='app'>
      <Header navToHash={navToHash} />
      {page === PATH_HOME && <HomePage />}
      {page === PATH_SHOP && <ShopPage />}
      <Footer />
    </div>
  );
}

export default App;
