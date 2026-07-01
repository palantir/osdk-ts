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
import type {
  ComponentHookBinding,
  QueryParams,
} from "../../utils/ComponentQueryRegistry.js";
import { formatQueryParams } from "../queryParamsFormat.js";
import { resolveComponentName } from "../resolveComponentName.js";
import styles from "./ComponentsPanel.module.scss";

interface ComponentCardProps {
  componentId: string;
  bindings: ComponentHookBinding[];
  monitorStore: MonitorStore;
  wasted?: WastedRender;
  unused?: UnusedProperty[];
}

/** The object type a query reads from, or null for actions (shown by name). */
function objectTypeOf(params: QueryParams): string | null {
  switch (params.type) {
    case "object":
    case "list":
    case "aggregation": {
      return params.objectType;
    }
    case "links": {
      return params.sourceObject;
    }
    case "objectSet": {
      return params.baseObjectSet;
    }
    default: {
      return null;
    }
  }
}

function fileLabel(binding: ComponentHookBinding): string | null {
  if (binding.filePath === undefined) {
    return null;
  }
  const name = binding.filePath.split("/").pop() ?? binding.filePath;
  return binding.lineNumber !== undefined
    ? `${name}:${binding.lineNumber}`
    : name;
}

/**
 * A live component shown by what it does with OSDK: the object types it reads
 * and the queries powering it. Render count and over-fetch are secondary
 * signals; the per-query detail is available on expand.
 */
export const ComponentCard: React.FC<ComponentCardProps> = ({
  componentId,
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
  const props = monitorStore.getComponentRegistry().getComponentProps(
    componentId,
  );
  const propEntries = props ? Object.entries(props) : [];

  const objectTypes = [
    ...new Set(
      bindings
        .map((b) => objectTypeOf(b.queryParams))
        .filter((t): t is string => t !== null && t !== "Unknown"),
    ),
  ];

  return (
    <div className={styles.componentCard}>
      <div
        className={styles.cardHeader}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={styles.cardHeaderLeft}>
          <Icon icon={expanded ? "chevron-down" : "chevron-right"} size={14} />
          <span className={styles.componentName}>{componentName}</span>
          <div className={styles.objTypeTags}>
            {objectTypes.map((type) => (
              <Tag key={type} minimal intent="primary">{type}</Tag>
            ))}
          </div>
        </div>
        <div className={styles.cardHeaderRight}>
          {wasted !== undefined
            ? (
              <Tooltip
                content={`${wasted.count} renders changed no read property`}
                portalClassName="osdk-devtools-portal"
              >
                <Tag minimal intent="warning" icon="refresh">
                  {wasted.count} wasted
                </Tag>
              </Tooltip>
            )
            : null}
          {overFetch.length > 0
            ? (
              <Tooltip
                content={`${overFetch.length} fetched properties go mostly unused`}
                portalClassName="osdk-devtools-portal"
              >
                <Tag minimal intent="warning" icon="download">
                  over-fetch {overFetch.length}
                </Tag>
              </Tooltip>
            )
            : null}
          {totalRenders > 0
            ? (
              <Tooltip
                content={`${totalRenders} total renders`}
                portalClassName="osdk-devtools-portal"
              >
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
            <div className={styles.queryGroupTitle}>Queries</div>
            {bindings.map((binding, index) => {
              const file = fileLabel(binding);
              return (
                <div
                  key={`${binding.subscriptionId}-${index}`}
                  className={styles.queryRow}
                >
                  <Tag minimal className={styles.hookTag}>
                    {binding.hookType}
                  </Tag>
                  <span className={styles.queryText}>
                    {formatQueryParams(binding.queryParams)}
                  </span>
                  {file !== null
                    ? <span className={styles.queryMeta}>{file}</span>
                    : null}
                </div>
              );
            })}
            {propEntries.length > 0
              ? (
                <div className={styles.propsSection}>
                  <div className={styles.queryGroupTitle}>Props</div>
                  {propEntries.map(([key, value]) => (
                    <div key={key} className={styles.propRow}>
                      <span className={styles.propKey}>{key}</span>
                      <span className={styles.propValue}>{value}</span>
                    </div>
                  ))}
                </div>
              )
              : null}
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
