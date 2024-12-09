import { useState, useRef, useEffect } from 'react';
import Button from '../../../components/button'; 

import {
  SHOP_CARDS,
  SORT_TYPE_NEWEST,
  SORT_TYPE_OLDEST,
} from '../../../data/merch';

import SortIcon from '../../../assets/icon_sort.svg';
import FilterIcon from '../../../assets/icon_filter.svg';
import './SettingsPanel.css';

export function SettingsPanel({
  setSelectedSort,
  selectedFilters,
  setSelectedFilters,
}) {
  const PREFIX = 'settings-panel';

  const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);

  const sortRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);
  
  const onClickOutside = e => {
    if (sortRef.current && !sortRef.current.contains(e.target)) {
      setSortOptionsVisible(false);
    }
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setFilterOptionsVisible(false);
    }
  };

  const onClickSortBtn = () => {
    setSortOptionsVisible(prev => !prev);
    setFilterOptionsVisible(false);
  };

  const onClickSortOption = (option) => {
    setSelectedSort(option);
    setSortOptionsVisible(false);
  };

  const onClickFilterBtn = () => {
    setFilterOptionsVisible(prev => !prev);
    setSortOptionsVisible(false);
  };

  const onClickFilterOption = (e, option) => {
    setSelectedFilters(prev =>
        e.target.checked
          ? [...prev, option]
          : prev.filter((filter) => filter !== option)
    );
  };

  return (
    <div className={PREFIX}>
      <div ref={sortRef} className={`${PREFIX}__wrapper`}>
        <Button
          ariaLabel='Show Sort Options'
          className={`${PREFIX}__dropdown-btn`}
          content={<><img src={SortIcon} />Sort</>}
          onClick={onClickSortBtn}
        />
        {sortOptionsVisible && (
          <div className={`${PREFIX}__dropdown-list`}>
            <div
              className={`${PREFIX}__dropdown-item`}
              onClick={() => onClickSortOption(SORT_TYPE_NEWEST)}
            >
              Newest Order First
            </div>
            <div
              className={`${PREFIX}__dropdown-item`}
              onClick={() => onClickSortOption(SORT_TYPE_OLDEST)}
            >
              Oldest Order First
            </div>
          </div>
        )}
      </div>

      <div ref={filterRef} className={`${PREFIX}__wrapper`}>
        <Button
          ariaLabel='Show Filter Options'
          className={`${PREFIX}__dropdown-btn`}
          content={<><img src={FilterIcon} />Filter</>}
          onClick={onClickFilterBtn}
        />
        {filterOptionsVisible && (
          <div className={`${PREFIX}__dropdown-list filter`}>
            {Object.keys(SHOP_CARDS).map(merchKey => 
              <label
                key={merchKey}
                className={`${PREFIX}__dropdown-item`}
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(merchKey)}
                  onChange={e => onClickFilterOption(e, merchKey)}
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
