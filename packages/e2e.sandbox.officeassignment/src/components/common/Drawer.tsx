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

import React from "react";

import styles from "./Drawer.module.css";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

/** A minimal right-side overlay drawer. No external UI library dependency. */
export function Drawer(props: DrawerProps): React.JSX.Element | null {
  const { isOpen, onClose, title, children } = props;
  // Stable per-instance id so the dialog can name itself via the title; drawers can stack.
  const titleId = React.useId();
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <button
        type="button"
        aria-label="Close drawer"
        className={styles.backdrop}
        onClick={onClose}
      />
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className={styles.header}>
          <div id={titleId} className={styles.title}>
            {title}
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </aside>
    </div>
  );
}
