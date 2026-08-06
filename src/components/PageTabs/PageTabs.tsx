import { useState } from 'react';
import './PageTabs.css';

type PageTabItem = {
  label: string;
  content: React.ReactNode;
};

type PageTabsProps = {
  items: PageTabItem[];
  initialTab?: number;
};

function PageTabs({ items, initialTab = 0 }: PageTabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!items.length) {
    return null;
  }

  return (
    <div className="page-tabs">
      <div className="page-tabs__list" role="tablist" aria-label="Page sections">
        {items.map((item, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={item.label}
              className={`page-tabs__button${isActive ? ' page-tabs__button--active' : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
              id={`tab-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveTab(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        className="page-tabs__panel"
        role="tabpanel"
        id={`panel-${items[activeTab].label.replace(/\s+/g, '-').toLowerCase()}`}
        aria-labelledby={`tab-${items[activeTab].label.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {items[activeTab].content}
      </div>
    </div>
  );
}

export default PageTabs;
