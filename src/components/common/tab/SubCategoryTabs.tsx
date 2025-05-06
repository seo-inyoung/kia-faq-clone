import React from 'react';
import 'src/styles/component/common/tab.css';

export interface SubCategory {
  categoryID: string;
  name: string;
}

interface SubCategoryTabsProps {
  className?: string;
  subcategories: SubCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const SubCategoryTabs: React.FC<SubCategoryTabsProps> = ({
  className = '',
  subcategories,
  selectedId,
  onSelect,
}) => {
  return (
    <div className={`subcategory-tabs ${className}`} role="tablist">
      <label className="tab-item">
        <input
          type="radio"
          name="subcategory"
          value="ALL"
          checked={selectedId === 'ALL'}
          onChange={() => onSelect('ALL')}
          aria-controls="all-tabpanel"
        />
        <i>전체</i>
      </label>

      {subcategories.map((subcategory) => (
        <label key={subcategory.categoryID} className="tab-item">
          <input
            type="radio"
            name="filter"
            value={subcategory.categoryID}
            checked={selectedId === subcategory.categoryID}
            onChange={() => onSelect(subcategory.categoryID)}
            aria-controls={`${subcategory.categoryID}-tabpanel`}
          />
          <i>{subcategory.name}</i>
        </label>
      ))}
    </div>
  );
};

export default SubCategoryTabs;
