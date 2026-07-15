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

import { Icon, type IconName } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";

import type { OntologyEntityKind } from "./OntologyGraphModel.js";

import styles from "./TypeFilterBar.module.scss";

interface KindFilter {
  kind: OntologyEntityKind;
  label: string;
  icon: IconName;
  chipClass: string;
}

const KIND_FILTERS: readonly KindFilter[] = [
  {
    kind: "object",
    label: "Objects",
    icon: "cube",
    chipClass: styles.chipObject,
  },
  {
    kind: "action",
    label: "Actions",
    icon: "lightning",
    chipClass: styles.chipAction,
  },
  {
    kind: "query",
    label: "Queries",
    icon: "function",
    chipClass: styles.chipQuery,
  },
];

export interface TypeFilterBarProps {
  /** Count of entities per kind; a kind with no count renders no chip. */
  counts: ReadonlyMap<OntologyEntityKind, number>;
  /** Kinds currently hidden from the graph. */
  hiddenKinds: ReadonlySet<OntologyEntityKind>;
  onToggle: (kind: OntologyEntityKind) => void;
}

/**
 * A top bar of per-kind toggle chips (Objects / Actions / Queries) that filters
 * which entity kinds the graph shows. Only renders chips for kinds present in
 * the current graph.
 */
export function TypeFilterBar({
  counts,
  hiddenKinds,
  onToggle,
}: TypeFilterBarProps): React.ReactElement {
  const visible = KIND_FILTERS.filter((filter) =>
    (counts.get(filter.kind) ?? 0) > 0
  );

  return (
    <div className={styles.toolbar}>
      <span className={styles.label}>Types</span>
      {visible.map((filter) => {
        const active = !hiddenKinds.has(filter.kind);
        return (
          <button
            key={filter.kind}
            type="button"
            aria-pressed={active}
            className={classNames(
              styles.chip,
              filter.chipClass,
              active ? styles.chipActive : styles.chipInactive,
            )}
            onClick={() => onToggle(filter.kind)}
          >
            <Icon icon={filter.icon} size={11} className={styles.chipIcon} />
            <span>{filter.label}</span>
            <span className={styles.chipCount}>
              {counts.get(filter.kind) ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
