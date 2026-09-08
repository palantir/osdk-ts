import { Icon, Tab, Tabs } from "@blueprintjs/core";
import type { ReactNode } from "react";

import type { PropEntry } from "./PropsTable";
import { PropsTable } from "./PropsTable";

/**
 * Component-page wrapper that splits content into "Documentation" and
 * "Props" tabs (Mantine-style), powered by Blueprint's Tabs. Optionally
 * surfaces a "Package" link above the tabs that points to the npm registry.
 */
export function ComponentPage({
  children,
  packageName,
  packageUrl,
  props,
}: {
  children: ReactNode;
  packageName?: string;
  packageUrl?: string;
  props: PropEntry[];
}) {
  return (
    <div className="component-page-tabs">
      {packageName !== undefined && (
        <dl className="component-page-meta">
          <dt>Package</dt>
          <dd>
            {packageUrl === undefined
              ? <code>{packageName}</code>
              : (
                <a href={packageUrl} rel="noopener noreferrer" target="_blank">
                  <code>{packageName}</code>
                </a>
              )}
          </dd>
        </dl>
      )}
      <Tabs
        animate={false}
        defaultSelectedTabId="docs"
        id="component-page"
        large
      >
        <Tab
          id="docs"
          panel={<div className="component-page-tabs__panel">{children}</div>}
          title={
            <span>
              <Icon icon="document" /> Documentation
            </span>
          }
        />
        <Tab
          id="props"
          panel={
            <div className="component-page-tabs__panel">
              <PropsTable rows={props} />
            </div>
          }
          title={
            <span>
              <Icon icon="code" /> Props
            </span>
          }
        />
      </Tabs>
    </div>
  );
}
