'use client';

import { useEffect, useRef, useState } from 'react';

import { getFAQCategoryListAPI, getFAQListAPI } from 'src/util/API';

import Title from 'src/components/common/Title';
import AppDownload from 'src/components/common/AppDownload';
import ServiceInquiry from 'src/components/common/ServiceInquiry';
import UseProcessSteps from 'src/components/common/UseProcessSteps';
import LoadMoreButton from 'src/components/common/LoadMoreButton';
import ErrorDialog from 'src/components/ErrorDialog';

import SearchInput from 'src/components/common/search/SearchInput';
import SearchInfo from 'src/components/common/search/SearchInfo';
import SearchErrorDialog, {
  SearchErrorDialogHandle,
} from 'src/components/common/search/SearchErrorDialog';

import Tabs from 'src/components/common/tab/Tabs';
import SubCategoryTabs, {
  SubCategory,
} from 'src/components/common/tab/SubCategoryTabs';

import { FAQItem } from 'src/components/faq/FAQListItem';
import FAQListSection from 'src/components/faq/FAQListSection';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);

  const [parentCategory, setParentCategory] = useState<'CONSULT' | 'USAGE'>(
    'CONSULT',
  );

  const [categoryList, setCategoryList] = useState<SubCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const [faqList, setFaqList] = useState<FAQItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);

  const searchErrorDialogRef = useRef<SearchErrorDialogHandle>(null);

  useEffect(() => {
    getCategoryList();
    setFaqList([]);

    return () => {};
  }, []);

  useEffect(() => {
    if (faqList.length > 0 || isNoResult) {
      getCategoryList();
      setOffset(0);
      setIsNext(false);
      setIsSearch(false);
      setSelectedCategory('ALL');
      setSearchText('');
      setFaqList([]);
    }
  }, [parentCategory]);

  useEffect(() => {
    setOffset(0);
    setIsNext(false);
    setFaqList([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (faqList.length === 0) {
      getFaqList();
    }
  }, [faqList]);

  async function getCategoryList() {
    const result = await getFAQCategoryListAPI(parentCategory);
    if (result) setCategoryList(result);
  }

  const getFaqList = async () => {
    setIsLoading(true);
    const result = await getFAQListAPI({
      offset,
      tab: parentCategory,
      selectedCategory,
      searchText,
    });

    if (result && result.items.length > 0) {
      setIsNoResult(false);
      setFaqList(faqList.concat(result.items));
      setTotalCount(result.pageInfo.totalRecord);
      if (result.pageInfo.nextOffset === offset) {
        setIsNext(false);
      } else {
        setIsNext(true);
        setOffset(result.pageInfo.nextOffset);
      }
    } else {
      setIsNoResult(true);
      setTotalCount(0);
    }

    setIsLoading(false);
  };

  const search = () => {
    if (searchText.length === 0) {
      clear();
      return;
    }

    if (searchText.length === 1) {
      searchErrorDialogRef.current?.show();
      return;
    }
    setOffset(0);
    setIsNext(false);
    setIsSearch(true);
    setFaqList([]);
  };

  const clear = () => {
    setOffset(0);
    setIsNext(false);
    setIsSearch(false);
    setSelectedCategory('ALL');
    setSearchText('');
    setFaqList([]);
  };

  return (
    <div className="container">
      <div className="content">
        <Title
          title={'자주 묻는 질문'}
          description={'궁금하신 내용을 빠르게 찾아보세요.'}
        />
        <Tabs<'CONSULT' | 'USAGE'>
          tabs={[
            { id: 'CONSULT', label: '서비스 도입' },
            { id: 'USAGE', label: '서비스 이용' },
          ]}
          activeTab={parentCategory}
          onTabChange={setParentCategory}
        />

        <form onSubmit={(e) => e.preventDefault()}>
          <SearchInput
            value={searchText}
            onChange={setSearchText}
            onSearch={search}
            onClear={clear}
          />
        </form>

        {isSearch && <SearchInfo totalCount={totalCount} onClear={clear} />}
        <SearchErrorDialog
          ref={searchErrorDialogRef}
          message="검색어는 2글자 이상 입력해주세요."
        />

        {categoryList.length > 0 && (
          <SubCategoryTabs
            subcategories={categoryList}
            selectedId={selectedCategory}
            onSelect={setSelectedCategory}
            className="filter"
          />
        )}
        <FAQListSection
          faqList={faqList}
          isLoading={isLoading}
          isNoResult={isNoResult}
        />
        {isNext && <LoadMoreButton onClick={() => getFaqList()} />}

        <ServiceInquiry />
        <UseProcessSteps />
        <AppDownload />
      </div>
      <ErrorDialog />
    </div>
  );
};

export default Page;
