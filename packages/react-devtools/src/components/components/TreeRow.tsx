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

import { Icon, type IconName } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";

import styles from "./ComponentsPanel.module.scss";

interface TreeRowProps {
  /** Row label; a string renders as the row text, nodes render as-is. */
  label: React.ReactNode;
  /** Indentation level (0 = component, 1 = category, 2 = object type, 3 = leaf). */
  depth: number;
  /** Leading Blueprint icon. */
  icon?: IconName;
  /** Trailing count chip. */
  count?: number;
  /** Trailing badge node (e.g. a Healthy pill), shown after the count. */
  badge?: React.ReactNode;
  /** Whether the row is expanded on first render (only relevant with children). */
  defaultOpen?: boolean;
  /** Rendered when open; their presence makes the row collapsible. */
  children?: React.ReactNode;
  /** Dimmer, monospace styling for leaf rows. */
  leaf?: boolean;
}

const DEPTH_CLASS = ["depth0", "depth1", "depth2", "depth3", "depth4"] as const;

function depthClass(depth: number): string | undefined {
  const clamped = Math.min(Math.max(depth, 0), DEPTH_CLASS.length - 1);
  return styles[DEPTH_CLASS[clamped]];
}

/**
 * One collapsible row in the ontology tree. Rows with children show a chevron
 * and toggle on click; leaf rows align to the same indent without one. Every
 * level of the tree (component, category, object type, instance/property) is a
 * `TreeRow`, so indentation and interaction stay consistent.
 */
export const TreeRow: React.FC<TreeRowProps> = ({
  label,
  depth,
  icon,
  count,
  badge,
  defaultOpen = false,
  children,
  leaf = false,
}) => {
  const collapsible = React.Children.count(children) > 0;
  const [open, setOpen] = useState(defaultOpen);

  const toggle = (): void => {
    if (collapsible) {
      setOpen((prev) => !prev);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent): void => {
    if (collapsible && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div className={styles.treeNode}>
      <div
        className={classNames(styles.treeRow, depthClass(depth), {
          [styles.treeRowLeaf]: leaf,
          [styles.treeRowInteractive]: collapsible,
        })}
        onClick={collapsible ? toggle : undefined}
        onKeyDown={collapsible ? onKeyDown : undefined}
        role="treeitem"
        tabIndex={collapsible ? 0 : undefined}
        aria-expanded={collapsible ? open : undefined}
      >
        <span className={styles.treeChevron}>
          {collapsible ? (
            <Icon icon={open ? "chevron-down" : "chevron-right"} size={12} />
          ) : null}
        </span>
        {icon !== undefined ? (
          <Icon className={styles.treeIcon} icon={icon} size={14} />
        ) : null}
        <span className={styles.treeLabel}>{label}</span>
        {count !== undefined ? (
          <span className={styles.treeCount}>{count}</span>
        ) : null}
        {badge !== undefined ? badge : null}
      </div>
      {collapsible && open ? (
        <div className={styles.treeChildren}>{children}</div>
      ) : null}
    </div>
  );
};
