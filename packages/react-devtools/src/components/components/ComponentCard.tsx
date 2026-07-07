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

import classNames from "classnames";
import React from "react";

import type { ComponentOntology } from "./deriveComponentOntology.js";
import { TreeRow } from "./TreeRow.js";

import styles from "./ComponentsPanel.module.scss";

interface ComponentCardProps {
  name: string;
  ontology: ComponentOntology;
}

const VISIBLE_LEAVES = 5;

function moreRow(depth: number, hidden: number): React.ReactNode {
  if (hidden <= 0) {
    return null;
  }
  return <TreeRow depth={depth} leaf label={`+ ${hidden} more`} />;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  name,
  ontology,
}) => {
  const badge = (
    <span
      className={classNames(
        styles.healthBadge,
        ontology.healthy ? styles.healthy : styles.unhealthy
      )}
    >
      {ontology.healthy ? "Healthy" : ontology.warning}
    </span>
  );

  return (
    <div className={styles.componentCard}>
      <TreeRow depth={0} icon="widget" label={name} badge={badge}>
        {ontology.objectTypes.length > 0 ? (
          <TreeRow
            depth={1}
            label="Related objects"
            count={ontology.objectTypes.length}
            defaultOpen
          >
            {ontology.objectTypes.map((objectType) => {
              const visible = objectType.instances.slice(0, VISIBLE_LEAVES);
              const hidden = objectType.instances.length - visible.length;
              return (
                <TreeRow
                  key={objectType.name}
                  depth={2}
                  icon="cube"
                  label={objectType.name}
                  count={
                    objectType.instances.length > 0
                      ? objectType.instances.length
                      : undefined
                  }
                >
                  {visible.map((primaryKey) => (
                    <TreeRow
                      key={primaryKey}
                      depth={3}
                      icon="cube"
                      leaf
                      label={primaryKey}
                    />
                  ))}
                  {moreRow(3, hidden)}
                </TreeRow>
              );
            })}
          </TreeRow>
        ) : null}

        {ontology.actions.length > 0 ? (
          <TreeRow
            depth={1}
            label="Related actions"
            count={ontology.actions.length}
            defaultOpen
          >
            {ontology.actions.slice(0, VISIBLE_LEAVES).map((action) => (
              <TreeRow key={action} depth={2} icon="key" leaf label={action} />
            ))}
            {moreRow(2, ontology.actions.length - VISIBLE_LEAVES)}
          </TreeRow>
        ) : null}

        {ontology.properties.length > 0 ? (
          <TreeRow
            depth={1}
            label="Related properties"
            count={ontology.properties.length}
            defaultOpen
          >
            {ontology.properties.map((group) => {
              const visible = group.names.slice(0, VISIBLE_LEAVES);
              const hidden = group.names.length - visible.length;
              return (
                <TreeRow
                  key={group.objectType}
                  depth={2}
                  icon="cube"
                  label={group.objectType}
                  count={group.names.length}
                >
                  {visible.map((propertyName) => (
                    <TreeRow
                      key={propertyName}
                      depth={3}
                      icon="property"
                      leaf
                      label={propertyName}
                    />
                  ))}
                  {moreRow(3, hidden)}
                </TreeRow>
              );
            })}
          </TreeRow>
        ) : null}

        {ontology.reactProps.length > 0 ? (
          <TreeRow
            depth={1}
            label="React props"
            count={ontology.reactProps.length}
          >
            {ontology.reactProps.map(([key, value]) => (
              <TreeRow
                key={key}
                depth={2}
                leaf
                label={
                  <span className={styles.propRow}>
                    <span className={styles.propKey}>{key}</span>
                    <span className={styles.propValue}>{value}</span>
                  </span>
                }
              />
            ))}
          </TreeRow>
        ) : null}
      </TreeRow>
    </div>
  );
};
