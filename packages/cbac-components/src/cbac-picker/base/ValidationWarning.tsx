/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { WarningSign } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import type { RequiredMarkingGroup } from "../types.js";
import styles from "./ValidationWarning.module.css";

export interface ValidationWarningProps {
  requiredMarkingGroups: ReadonlyArray<RequiredMarkingGroup>;
  className?: string;
}

export function ValidationWarning({
  requiredMarkingGroups,
  className,
}: ValidationWarningProps): React.ReactElement {
  return (
    <div className={classnames(styles.validationWarning, className)}>
      <div className={styles.header}>
        <WarningSign className={styles.icon} size={14} />
        <span>
          To complete a valid classification, at least one marking from each of
          the following sets needs to be selected:
        </span>
      </div>
      <ol className={styles.groupList}>
        {requiredMarkingGroups.map((group, index) => (
          <li key={group.markingNames.join(",")} className={styles.groupItem}>
            <span className={styles.groupNumber}>{index + 1}.</span>
            {group.markingNames.map((name) => (
              <span key={name} className={styles.chip}>
                {name}
              </span>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
