import { useState, useRef, useEffect } from 'react';
import {
  SHOP_CARDS,
  SORT_TYPE_NEWEST,
  SORT_TYPE_OLDEST,
} from '../../../data/merch';
import './SettingsPanel.css';

export function SettingsPanel({
  setSelectedSort,
  selectedFilters,
  setSelectedFilters,
}) {
  const PREFIX = 'settings-panel';

  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const sortBtnRef = useRef();
  const filterBtnRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  const handleOutsideClick = (e) => {
    if (sortBtnRef.current && !sortBtnRef.current.contains(e.target)) {
      setShowSortOptions(false);
    }
    if (filterBtnRef.current && !filterBtnRef.current.contains(e.target)) {
      setShowFilterOptions(false);
    }
  };

  const handleSortBtnClick = () => {
    setShowSortOptions(prev => !prev);
    setShowFilterOptions(false);
  };

  const handleSortOptionClick = (option) => {
    setSelectedSort(option);
    setShowSortOptions(false);
  };

  const handleFilterBtnClick = () => {
    setShowFilterOptions(prev => !prev);
    setShowSortOptions(false);
  };

  const handleFilterOptionChange = (e, option) => {
    setSelectedFilters(prev =>
        e.target.checked
          ? [...prev, option]
          : prev.filter((filter) => filter !== option)
    );
  };

  return (
    <div className={PREFIX}>
      <div ref={sortBtnRef} className={`${PREFIX}__wrapper`}>
        <button onClick={handleSortBtnClick}>Sort</button>
        {showSortOptions && (
          <div className={`${PREFIX}__dropdown`}>
            <div
              className={`${PREFIX}__dropdown-item`}
              onClick={() => handleSortOptionClick(SORT_TYPE_NEWEST)}
            >
              Newest Order First
            </div>
            <div
              className={`${PREFIX}__dropdown-item`}
              onClick={() => handleSortOptionClick(SORT_TYPE_OLDEST)}
            >
              Oldest Order First
            </div>
          </div>
        )}
      </div>

      <div ref={filterBtnRef} className={`${PREFIX}__wrapper`}>
        <button onClick={handleFilterBtnClick}>Filter</button>
        {showFilterOptions && (
          <div className={`${PREFIX}__dropdown filter`}>
            {Object.keys(SHOP_CARDS).map(merchKey => 
              <label
                key={merchKey}
                className={`${PREFIX}__dropdown-item`}
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(merchKey)}
                  onChange={e => handleFilterOptionChange(e, merchKey)}
                />
                {SHOP_CARDS[merchKey].title}
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
