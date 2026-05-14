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
import styles from "./BaseImageViewer.module.css";
import type { BaseImageViewerProps } from "./ImageViewerApi.js";

export function BaseImageViewer({
  src,
  alt,
  className,
  onError,
}: BaseImageViewerProps): React.ReactElement {
  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      <img
        className={styles.image}
        src={src}
        alt={alt ?? ""}
        onError={onError}
      />
    </div>
  );
}
