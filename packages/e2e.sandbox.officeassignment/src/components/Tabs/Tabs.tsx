import React from "react";
import styles from "./Tabs.module.css";

export interface TabSpec {
  readonly id: string;
  readonly label: string;
}

export interface TabsProps {
  tabs: readonly TabSpec[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

/** A small accessible tab bar. No external UI library dependency. */
export function Tabs(props: TabsProps): React.JSX.Element {
  const { tabs, activeTab, onTabChange } = props;
  return (
    <div className={styles.tabBar} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeTab}
          className={tab.id === activeTab ? styles.tabActive : styles.tab}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
