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

import { Collapse, Icon } from "@blueprintjs/core";
import React, { useState } from "react";

import styles from "./SectionHeader.module.scss";

export interface SectionHeaderProps {
  title: string;
  /** Whether the section starts expanded. Defaults to true. */
  defaultOpen?: boolean;
  /**
   * Content pinned to the right of the header bar (a status pill, count badge,
   * or a control). Rendered outside the toggle button so it can hold its own
   * interactive elements.
   */
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * A collapsible section: a header bar with a chevron + title on the left and an
 * optional right slot, over a collapsible body. The shared building block for
 * every devtools tab's sections (Ontology, Metrics, Suggestions, Timeline, …).
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  defaultOpen = true,
  rightSlot,
  children,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icon
            icon={open ? "chevron-down" : "chevron-right"}
            size={14}
            className={styles.chevron}
          />
          <span className={styles.title}>{title}</span>
        </button>
        {rightSlot != null ? (
          <div className={styles.right}>{rightSlot}</div>
        ) : null}
      </div>
      <Collapse isOpen={open}>
        <div className={styles.body}>{children}</div>
      </Collapse>
    </section>
  );
};
