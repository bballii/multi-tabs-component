import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

export default function TabsComponent(props) {
  const { tabs } = props;

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Nav tabs>
        {tabs &&
          tabs.map((tab, idx) => {
            //iterating tabs
            return (
              <NavItem
                className="mypointer"
                key={idx}
                onClick={(e) => setTabIndex(idx)} //change tab
              >
                <NavLink className={`${tabIndex === idx ? "active" : ""}`}>
                  {tab.tab_name}
                </NavLink>
              </NavItem>
            );
          })}
      </Nav>
      <TabContent activeTab={tabIndex}>
        {tabs &&
          tabs.map((tab, idx) => {
            //iterating tab components
            return (
              <TabPane key={idx} tabId={idx}>
                {tab.component}
              </TabPane>
            );
          })}
      </TabContent>
    </div>
  );
}
