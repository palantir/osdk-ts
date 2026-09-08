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

import classnames from "classnames";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { BaseMarkdownViewerProps } from "./MarkdownViewerApi.js";

import styles from "./BaseMarkdownViewer.module.css";

const REMARK_PLUGINS = [remarkGfm];

export function BaseMarkdownViewer({
  content,
  className,
}: BaseMarkdownViewerProps): React.ReactElement {
  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      <div className={styles.documentWrapper}>
        <div className={styles.document}>
          <Markdown remarkPlugins={REMARK_PLUGINS}>{content}</Markdown>
        </div>
      </div>
    </div>
  );
}
