import React from 'react';
import './ReorderBtn.css';

export function ReorderBtn({ onReorder }) {
  return (
    <button className="reorder-btn" onClick={onReorder}>
      Reorder
    </button>
  );
}
