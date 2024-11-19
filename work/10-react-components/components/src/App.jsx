import { useState } from 'react'

// const
import { PATH_HOME, PATH_CATS, PATH_ABOUT } from './data/const';

// components
import Header from './header';
import HomePage from './home-page';
import AboutPage from './about-page';
import CatsPage from './cats-page';
import Footer from './footer';

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
      {page === PATH_CATS && <CatsPage setPage={setPage} />}
      {page === PATH_ABOUT && <AboutPage />}
      <Footer />
    </div>
  );
}

export default App;
