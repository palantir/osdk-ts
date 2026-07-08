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

import { Icon, Tooltip } from "@blueprintjs/core";
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

const SCOPE_EXPLANATION = `Only components that call an @osdk/react hook (useOsdkObject, useOsdkObjects, …) show up here. If a component only renders an OSDK-aware child like ObjectTable or ActionForm, or gets its objects through props, it won't appear. Look for the child that owns the hook instead.`;

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
      <Tooltip
        compact={true}
        content={
          <span className={styles.infoContent}>{SCOPE_EXPLANATION}</span>
        }
      >
        <Icon className={styles.infoIcon} icon="info-sign" size={12} />
      </Tooltip>
    </div>
  );
};
