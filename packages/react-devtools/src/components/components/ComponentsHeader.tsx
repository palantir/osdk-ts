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

import { Icon } from "@blueprintjs/core";
import React from "react";

import styles from "./ComponentsPanel.module.scss";

interface ComponentsHeaderProps {
  componentCount: number;
  objectTypeCount: number;
  actionTypeCount: number;
}

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

/**
 * The summary line above the tree: how many components are mounted and, across
 * all of them, how many distinct object types and action types they touch. The
 * filter glyph is a visual affordance; filtering happens through the search box.
 */
export const ComponentsHeader: React.FC<ComponentsHeaderProps> = ({
  componentCount,
  objectTypeCount,
  actionTypeCount,
}) => {
  return (
    <div className={styles.summary}>
      <span className={styles.summaryText}>
        <span className={styles.summaryStrong}>
          {plural(componentCount, "component")}
        </span>
        <span className={styles.summaryDot}>•</span>
        <span>{plural(objectTypeCount, "object type")}</span>
        <span className={styles.summaryDot}>•</span>
        <span>{plural(actionTypeCount, "action type")}</span>
      </span>
      <Icon
        className={styles.summaryFilter}
        icon="filter"
        size={14}
        title="Filter"
      />
    </div>
  );
};
