import { useState, useMemo } from "react";
import Navigation from "../Nav/Navigation"
import './Tabs.css'
import Story from "../Story/Story";

function Tabs({tabs}) {
  const [activeTabId, setActiveTab] = useState(tabs[0].id);

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, tabs]
  );

  return (
    <div className={`tabs`}>
      <Navigation
        tabs={tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <div className={`tabs__content`}>
        <h3>{activeTab.title}</h3>
        <Story summaries={activeTab.isSummarisation} />
      </div>
    </div>
  );
}

export default Tabs;
