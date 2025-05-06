import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9999/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

interface CategoryResponse {
  categoryID: string;
  name: string;
  tab: string;
}

/**
 * FAQ 카테고리 목록을 가져오는 API
 */
export const getFAQCategoryList = async (
  tab: string,
): Promise<CategoryResponse[]> => {
  const result = await api({
    method: 'GET',
    url: `/category?tab=${tab}`,
  }).catch((e) => {
    return e;
  });

  return result.data;
};

interface FAQItem {
  id: number;
  categoryName: string;
  faqCategoryID: string;
  subCategoryName: string;
  question: string;
  answer: string;
  tab: string;
}

interface FAQPageInfo {
  totalRecord: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
}

interface FAQListRequest {
  offset: number;
  tab: 'CONSULT' | 'USAGE';
  selectedCategory: string;
  searchText: string;
}

interface FAQListResponse {
  pageInfo: FAQPageInfo;
  items: FAQItem[];
}

/**
 * FAQ 목록을 가져오는 API
 */
export const getFAQList = async ({
  offset,
  tab,
  selectedCategory,
  searchText,
}: FAQListRequest): Promise<FAQListResponse> => {
  let url = `/faq?_start=${offset}&tab=${tab}`;
  if (selectedCategory !== 'ALL') url += `&faqCategoryID=${selectedCategory}`;
  if (searchText !== '') url += `&question=${searchText}`;

  const result = await api({
    method: 'GET',
    url,
  }).catch((e) => {
    return e;
  });
  return result.data;
};

interface TermUseResponse {
  termsName: string;
  termsVersion: number;
  startDate: number;
  endDate: number;
  contents: string;
}

/**
 * 이용약관 데이터를 가져오는 API
 */
export const getTermsUseAPI = async (): Promise<TermUseResponse[]> => {
  const result = await api({
    method: 'GET',
    url: `/terms?termsClassID=JOIN_SERVICE_USE`,
  }).catch((e) => {
    return e;
  });

  return result.data;
};
