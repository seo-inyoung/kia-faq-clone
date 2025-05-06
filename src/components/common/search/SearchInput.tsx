import React, { useRef } from 'react';
import 'src/styles/component/common/search.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  onClear,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search">
      <div className="input-wrap">
        <input
          ref={inputRef}
          type="text"
          placeholder="찾으시는 내용을 입력해 주세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button
          type="button"
          className="clear"
          data-ui-click="input-clear"
          onClick={onClear}
        >
          다시입력
        </button>
        <button type="button" className="submit" onClick={onSearch}>
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
