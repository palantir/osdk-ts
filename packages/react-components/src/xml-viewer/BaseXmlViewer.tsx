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

import classnames from "classnames";
import React from "react";
import styles from "./BaseXmlViewer.module.css";
import type { BaseXmlViewerProps } from "./XmlViewerApi.js";

export function BaseXmlViewer({
  content,
  className,
}: BaseXmlViewerProps): React.ReactElement {
  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      <div className={styles.scrollWrapper}>
        <pre className={styles.code}>
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
}
