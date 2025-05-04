interface ProcessStepInfo {
  step: number;
  icon: string;
  title: string;
  description: string;
  descriptionMaxWidth?: string;
}

const processStepList: ProcessStepInfo[] = [
  {
    step: 1,
    icon: 'process-1',
    title: '문의 등록',
    description:
      '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    step: 2,
    icon: 'process-2',
    title: '관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
    descriptionMaxWidth: '225px',
  },
  {
    step: 3,
    icon: 'process-3',
    title: '임직원 가입',
    description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
    descriptionMaxWidth: '200px',
  },
  {
    step: 4,
    icon: 'process-4',
    title: '서비스 이용',
    description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
    descriptionMaxWidth: '230px',
  },
];

const UseProcessSteps: React.FC = () => {
  return (
    <>
      <h2 className="heading-2">이용 프로세스 안내</h2>

      <ol className="process-info">
        {processStepList.map((processStep) => (
          <li key={processStep.step}>
            <i className={`ic ${processStep.icon}`} />
            <span>
              <strong>{processStep.title}</strong>
              <em style={{ maxWidth: processStep.descriptionMaxWidth }}>
                {processStep.description}
              </em>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
};

export default UseProcessSteps;
