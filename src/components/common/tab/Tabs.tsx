interface TabsProps<T extends string> {
  tabs: Array<{ id: T; label: string }>;
  activeTab: T;
  onTabChange: (tabId: T) => void;
}

const Tabs = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: TabsProps<T>) => {
  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={activeTab === tab.id ? 'active' : undefined}
        >
          <a onClick={() => onTabChange(tab.id)}>
            <span>{tab.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
