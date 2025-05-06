'use-client';
import React, { useState } from 'react';
import HtmlViewer from 'src/components/common/HTMLViewer';

export interface FAQItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
  tab: string;
}

interface FAQListItemProps {
  faqItem: FAQItem;
}

const FAQListItem: React.FC<FAQListItemProps> = ({ faqItem }) => {
  const { id, categoryName, subCategoryName, question, answer, tab } = faqItem;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={`${isOpen && 'active show'}`} onClick={handleClick}>
      <h4 className="a">
        <button type="button">
          {tab === 'USAGE' && <em>{categoryName}</em>}
          <em>{subCategoryName}</em>
          <strong>{question}</strong>
        </button>
      </h4>
      {isOpen && (
        <div className="q">
          <HtmlViewer className={'inner'} html={answer} />
        </div>
      )}
    </li>
  );
};

export default FAQListItem;
