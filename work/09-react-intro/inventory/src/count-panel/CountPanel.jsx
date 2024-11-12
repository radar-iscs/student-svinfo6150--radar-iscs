import React from 'react';
import './CountPanel.css';

export function CountPanel({
  count,
  onClickIncreaseBtn,
  onClickDecreaseBtn,
}) {
  const PREFIX = "control-panel";

  return (
    <div className={PREFIX}>
      <button
        className={`${PREFIX}__decrease-btn`}
        onClick={onClickDecreaseBtn}
        disabled={!count}
      >
        -
      </button>
      <div className={`${PREFIX}__displayer`}>{count}</div>
      <button
        className={`${PREFIX}__increase-btn`}
        onClick={onClickIncreaseBtn}
      >
        +
      </button>
    </div>
  );
}
