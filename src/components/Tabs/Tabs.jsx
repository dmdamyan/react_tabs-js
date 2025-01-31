export const Tabs = ({ tabs, tabSelected, onTabSelected, activeTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li className={'is-active' && tab.id === activeTabId} data-cy="Tab">
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              key={tab.id}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabSelected.content}
    </div>
  </div>
);
