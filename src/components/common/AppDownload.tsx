const appTypeNames = ['Google', 'AppStore'] as const;
type AppType = (typeof appTypeNames)[number];

interface AppTypeInfo {
  className: string;
  label: string;
  href: string;
}

const appTypeMap: Record<AppType, AppTypeInfo> = {
  Google: {
    className: 'gp',
    label: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=kor.mop.user.app',
  },
  AppStore: {
    className: 'as',
    label: 'App Store',
    href: 'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794',
  },
};

const AppDownload: React.FC = () => {
  return (
    <div className="app-info">
      <h2>
        <em>기아 비즈 App</em> 지금 만나보세요!
      </h2>
      {appTypeNames.map((appType) => (
        <a
          key={appType}
          className={appTypeMap[appType].className}
          href={appTypeMap[appType].href}
          target="_blank"
          rel="noreferrer"
        >
          {appTypeMap[appType].label}
        </a>
      ))}
    </div>
  );
};

export default AppDownload;
