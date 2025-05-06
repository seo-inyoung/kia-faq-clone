import 'src/styles/component/common/serviceInquiry.css';

const inquiryTypeNames = ['Download', 'Counsel', 'Talk'] as const;
type InquiryType = (typeof inquiryTypeNames)[number];

interface InquiryTypeInfo {
  icon: string;
  href: string;
  title: string;
  additionalText?: string;
  target?: string;
  rel?: string;
  download?: string;
}

const InquiryTypeMap: Record<InquiryType, InquiryTypeInfo> = {
  Download: {
    icon: 'download',
    href: '/pdf/proposal.pdf',
    title: '서비스 제안서 다운로드',
    download: '기아 비즈 서비스 제안서',
  },
  Counsel: {
    icon: 'write',
    href: 'https://wiblebiz.kia.com/Counsel',
    title: '상담문의 등록하기',
    rel: 'noreferrer',
    target: '_blank',
  },
  Talk: {
    icon: 'talk',
    href: 'https://pf.kakao.com/_xfLxjdb',
    title: '카톡으로 문의하기',
    additionalText: 'ID : 기아 비즈',
    rel: 'noreferrer',
    target: '_blank',
  },
};

const ServiceInquiry: React.FC = () => {
  return (
    <>
      <h2 className="heading-2">서비스 문의</h2>
      <div className="inquiry-info">
        {inquiryTypeNames.map((inquiryType) => (
          <a
            key={inquiryType}
            className="btn-xxlg btn-tertiary"
            href={InquiryTypeMap[inquiryType].href}
            target={InquiryTypeMap[inquiryType].target}
            rel={InquiryTypeMap[inquiryType].rel}
            download={InquiryTypeMap[inquiryType].download}
          >
            <i className={`ic ${InquiryTypeMap[inquiryType].icon}`} />
            <span>
              {InquiryTypeMap[inquiryType].title}
              {InquiryTypeMap[inquiryType].additionalText && (
                <em>{InquiryTypeMap[inquiryType].additionalText}</em>
              )}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ServiceInquiry;
