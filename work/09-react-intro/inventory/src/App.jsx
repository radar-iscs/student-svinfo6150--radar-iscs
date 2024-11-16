import { useState } from 'react'
import ReorderBtn from './reorder-btn';
import CountPanel from './count-panel';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function onClickIncreaseBtn() {
    setCount(currentCount => currentCount + 1);
  };

  function onClickDecreaseBtn() {
    setCount(currentCount => Math.max(currentCount - 1, 0));
  }

  const onClickReorderBtn = () => {
    setCount(5);
  };
  
  return (
    <div className="container">
      <h1>The count of inventory is</h1>
      <CountPanel
        count={count}
        onClickIncreaseBtn={onClickIncreaseBtn}
        onClickDecreaseBtn={onClickDecreaseBtn}
      />
      {count === 0 && <ReorderBtn onReorder={onClickReorderBtn} />}
    </div>
  );
}

export default App;
