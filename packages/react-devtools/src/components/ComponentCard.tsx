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
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import styles from "./ComponentCard.module.scss";
import { HookRow } from "./HookRow.js";

export interface ComponentCardProps {
  componentId: string;
  bindings: ComponentHookBinding[];
  formatTime?: (ms: number) => string;
  monitorStore?: any;
}

/**
 * Displays a single component with its hooks in an expandable card.
 */
export const ComponentCard: React.FC<ComponentCardProps> = ({
  componentId,
  bindings,
  formatTime = (ms) => `${ms.toFixed(1)}ms`,
  monitorStore,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (bindings.length === 0) return null;

  const firstBinding = bindings[0];
  const componentName = firstBinding.componentDisplayName
    || firstBinding.componentName
    || "Anonymous";

  const totalRenders = bindings.reduce((sum, b) => sum + b.renderCount, 0);
  const avgRenderDuration = bindings.length > 0
    ? bindings.reduce((sum, b) => sum + b.avgRenderDuration, 0)
      / bindings.length
    : 0;

  const hasWarnings = bindings.length > 10;

  return (
    <div className={styles.componentCard}>
      <div
        className={styles.header}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={styles.headerLeft}>
          <Icon
            icon={expanded ? "chevron-down" : "chevron-right"}
            size={14}
            className={styles.expandIcon}
          />
          <span className={styles.componentName}>{componentName}</span>
        </div>

        <div className={styles.headerRight}>
          {hasWarnings && (
            <Tooltip content="This component has many hooks">
              <Tag minimal intent="warning" className={styles.warningTag}>
                <Icon icon="warning-sign" size={10} />
              </Tag>
            </Tooltip>
          )}
          <Tooltip content={`${bindings.length} OSDK hooks`}>
            <Tag minimal intent="primary" className={styles.hookCountTag}>
              {bindings.length}
            </Tag>
          </Tooltip>
          {totalRenders > 0 && (
            <Tooltip content={`${totalRenders} total renders`}>
              <div className={styles.renderCount}>
                <Icon icon="refresh" size={10} />
                <span>{totalRenders}</span>
              </div>
            </Tooltip>
          )}
          {avgRenderDuration > 0 && (
            <Tooltip content={`Average render time`}>
              <div className={styles.avgDuration}>
                <Icon icon="time" size={10} />
                <span>{formatTime(avgRenderDuration)}</span>
              </div>
            </Tooltip>
          )}
        </div>
      </div>

      {expanded && (
        <div className={styles.body}>
          <div className={styles.hooks}>
            {bindings.map((binding, index) => (
              <HookRow
                key={`${binding.querySignature}-${index}`}
                binding={binding}
                formatTime={formatTime}
                monitorStore={monitorStore}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
