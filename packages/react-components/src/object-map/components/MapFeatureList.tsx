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

import { Checkbox } from "../../base-components/checkbox/Checkbox.js";
import type { MapFeature } from "../BaseObjectMapApi.js";

import styles from "../ObjectMap.module.css";

interface MapFeatureListProps {
  features: readonly MapFeature[];
  selectedIds: readonly string[];
  onSelect: (id: string, additive?: boolean) => void;
  id: string;
}

export function MapFeatureList({
  features,
  selectedIds,
  onSelect,
  id,
}: MapFeatureListProps): React.ReactElement {
  return (
    <div id={id} className={styles.featureList}>
      <p className={styles.listHint}>
        Select objects using the list or Ctrl/Cmd-click on the map.
      </p>
      <ul aria-label="Objects on map" className={styles.list}>
        {features.map((feature) => (
          <li key={feature.id}>
            <label className={styles.featureRow}>
              <Checkbox
                aria-label={feature.label}
                checked={selectedIds.includes(feature.id)}
                onCheckedChange={() => onSelect(feature.id, true)}
              />
              <span>{feature.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
