/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Icon, Tag, Tooltip } from "@blueprintjs/core";
import React, { useState } from "react";

import type { MonitorStore } from "../../store/MonitorStore.js";
import type { UnusedProperty, WastedRender } from "../../types/index.js";
import type { ComponentHookBinding } from "../../utils/ComponentQueryRegistry.js";
import { resolveComponentName } from "../resolveComponentName.js";
import styles from "./ComponentsPanel.module.scss";
import { HookRow } from "./HookRow.js";

interface ComponentCardProps {
  componentId: string;
  bindings: ComponentHookBinding[];
  monitorStore: MonitorStore;
  wasted?: WastedRender;
  unused?: UnusedProperty[];
}

/**
 * A live component with the OSDK hooks it uses. No "health" badge — instead it
 * surfaces concrete signals: hook count, wasted renders, and over-fetched
 * properties, with the per-hook detail available on expand.
 */
export const ComponentCard: React.FC<ComponentCardProps> = ({
  bindings,
  monitorStore,
  wasted,
  unused,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (bindings.length === 0) {
    return null;
  }

  const componentName = resolveComponentName(bindings);
  const totalRenders = bindings.reduce((sum, b) => sum + b.renderCount, 0);
  const overFetch = unused ?? [];

  return (
    <div className={styles.componentCard}>
      <div
        className={styles.cardHeader}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={styles.cardHeaderLeft}>
          <Icon icon={expanded ? "chevron-down" : "chevron-right"} size={14} />
          <span className={styles.componentName}>{componentName}</span>
        </div>
        <div className={styles.cardHeaderRight}>
          <Tooltip content={`${bindings.length} OSDK hooks`}>
            <Tag minimal intent="primary">{bindings.length}</Tag>
          </Tooltip>
          {wasted !== undefined
            ? (
              <Tooltip content={`${wasted.count} renders changed no read property`}>
                <Tag minimal intent="warning" icon="refresh">
                  {wasted.count} wasted
                </Tag>
              </Tooltip>
            )
            : null}
          {overFetch.length > 0
            ? (
              <Tooltip content={`${overFetch.length} fetched properties go mostly unused`}>
                <Tag minimal intent="warning" icon="download">
                  over-fetch {overFetch.length}
                </Tag>
              </Tooltip>
            )
            : null}
          {totalRenders > 0
            ? (
              <Tooltip content={`${totalRenders} total renders`}>
                <span className={styles.renders}>
                  <Icon icon="time" size={10} /> {totalRenders}
                </span>
              </Tooltip>
            )
            : null}
        </div>
      </div>

      {expanded
        ? (
          <div className={styles.cardBody}>
            {bindings.map((binding, index) => (
              <HookRow
                key={`${binding.subscriptionId}-${index}`}
                binding={binding}
                monitorStore={monitorStore}
              />
            ))}
            {overFetch.length > 0
              ? (
                <div className={styles.overFetch}>
                  <div className={styles.overFetchTitle}>
                    Mostly-unused properties
                  </div>
                  {overFetch.map((prop) => (
                    <div key={prop.propertyName} className={styles.overFetchRow}>
                      <span className={styles.usageName}>
                        {prop.propertyName}
                      </span>
                      <span className={styles.overFetchMeta}>
                        read in {prop.accessCount}/{prop.totalRenders} renders
                      </span>
                    </div>
                  ))}
                </div>
              )
              : null}
          </div>
        )
        : null}
    </div>
  );
};
