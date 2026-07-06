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

export interface ComponentFilter {
  kind: "objectType" | "action";
  name: string;
}

interface ComponentFiltersProps {
  objectTypes: string[];
  actions: string[];
  active: ComponentFilter | null;
  onChange: (filter: ComponentFilter | null) => void;
}

/** Chip row for narrowing the component list to one object type or action. */
export const ComponentFilters: React.FC<ComponentFiltersProps> = ({
  objectTypes,
  actions,
  active,
  onChange,
}) => {
  if (objectTypes.length === 0 && actions.length === 0) {
    return null;
  }

  const chipClass = (isActive: boolean) =>
    isActive ? `${styles.chip} ${styles.chipActive}` : styles.chip;

  const isActive = (kind: ComponentFilter["kind"], name: string) =>
    active != null && active.kind === kind && active.name === name;

  const toggle = (filter: ComponentFilter) => {
    onChange(isActive(filter.kind, filter.name) ? null : filter);
  };

  return (
    <div className={styles.filters}>
      <button
        type="button"
        className={chipClass(active == null)}
        aria-pressed={active == null}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {objectTypes.map((name) => (
        <button
          key={`object:${name}`}
          type="button"
          className={chipClass(isActive("objectType", name))}
          aria-pressed={isActive("objectType", name)}
          onClick={() => toggle({ kind: "objectType", name })}
        >
          <Icon icon="cube" size={11} />
          {name}
        </button>
      ))}
      {actions.map((name) => (
        <button
          key={`action:${name}`}
          type="button"
          className={chipClass(isActive("action", name))}
          aria-pressed={isActive("action", name)}
          onClick={() => toggle({ kind: "action", name })}
        >
          <Icon icon="key" size={11} />
          {name}
        </button>
      ))}
    </div>
  );
};
