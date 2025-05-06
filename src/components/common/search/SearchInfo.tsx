import React from 'react';

interface SearchInfoProps {
  totalCount: number;
  onClear: () => void;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ totalCount, onClear }) => {
  return (
    <div className="search-info">
      <h2 className="heading-info">
        검색결과 총 <em>{totalCount}</em>건
      </h2>
      <button type="button" className="init" onClick={onClear}>
        검색초기화
      </button>
    </div>
  );
};

export default SearchInfo;
