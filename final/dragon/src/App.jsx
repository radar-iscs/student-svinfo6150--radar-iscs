import { useState } from 'react'

// const
import {
  PATH_HOME,
  PATH_LOONG,
  PATH_SHOP,
  PATH_ORDERS,
  PATH_ABOUT,
} from './data/const';

// components
import Header from './components/header';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import OrdersPage from './pages/orders-page';
import Footer from './components/footer';

import './App.css'

function App() {
  const [page, setPage] = useState(PATH_HOME);
  const [orders, setOrders] = useState([]);

  const navToHash = (e) => {
    e.preventDefault();
    setPage(e.target.hash);
  };

  const addOrder = (merchKey, email, shippingAddress, billingAddress, time) => {
    setOrders(prev => [...prev, {
      merchKey,
      email,
      shippingAddress,
      billingAddress,
      time,
    }])
  };
  
  return (
    <div className='app'>
      <Header navToHash={navToHash} />
      {page === PATH_HOME && <HomePage />}
      {page === PATH_SHOP && <ShopPage addOrder={addOrder} />}
      {page === PATH_ORDERS && <OrdersPage orders={orders} />}
      <Footer />
    </div>
  );
}

export default App;
