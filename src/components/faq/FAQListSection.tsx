import LoadingIndicator from 'src/components/common/LoadingIndicator';
import FAQListItem, { FAQItem } from 'src/components/faq/FAQListItem';

interface FAQListSectionProps {
  faqList: FAQItem[];
  isLoading: boolean;
  isNoResult: boolean;
}

const FAQListSection: React.FC<FAQListSectionProps> = ({
  faqList,
  isLoading,
  isNoResult,
}) => {
  return (
    <section>
      {isLoading && <LoadingIndicator />}

      {isNoResult ? (
        <div className="no-data">
          <p>검색결과가 없습니다.</p>
        </div>
      ) : (
        <ul className="faq-list">
          {faqList.map((item) => (
            <FAQListItem faqItem={item} key={item.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default FAQListSection;
