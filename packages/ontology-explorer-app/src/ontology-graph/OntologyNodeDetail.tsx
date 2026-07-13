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

import { Button, Spinner, SpinnerSize } from "@blueprintjs/core";
import React from "react";

import type { OntologyTypeInfo } from "./OntologyGraphModel.js";

import styles from "./OntologyNodeDetail.module.scss";

/**
 * One caller-supplied "this type is used by X" entry. The component does no
 * interpretation of `label`/`detail` — callers format whatever is meaningful
 * for their context (e.g. a devtools caller might format a component name +
 * hook type + file path; a static-ontology caller might have nothing to show
 * here at all).
 */
export interface OntologyNodeUsage {
  /** Stable identity for the React key. Falls back to array index if omitted. */
  key?: string;
  label: string;
  detail?: string;
  /** Full text shown on hover over `detail` (e.g. an untruncated file path). */
  detailTitle?: string;
}

export interface OntologyNodeDetailProps {
  info: OntologyTypeInfo;
  usages: OntologyNodeUsage[];
  onClose: () => void;
  /** @defaultValue "Used by" */
  usagesTitle?: string;
  /** @defaultValue "No usages found" */
  usagesEmptyLabel?: string;
}

export function OntologyNodeDetail({
  info,
  usages,
  onClose,
  usagesTitle = "Used by",
  usagesEmptyLabel = "No usages found",
}: OntologyNodeDetailProps): React.ReactElement {
  const isLoading = info.loadState === "loading" || info.loadState === "stub";

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.displayName}>{info.displayName}</div>
          <div className={styles.apiName}>{info.apiName}</div>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon="cross"
          onClick={onClose}
          aria-label="Close details"
        />
      </div>

      <div className={styles.metaRow}>
        {info.primaryKeyApiName && (
          <span className={styles.metaChip}>pk: {info.primaryKeyApiName}</span>
        )}
        {info.status && <span className={styles.metaChip}>{info.status}</span>}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Properties
          {info.loadState === "loaded" ? ` (${info.properties.length})` : ""}
        </div>
        {isLoading && (
          <div className={styles.loading}>
            <Spinner size={SpinnerSize.SMALL} />
            <span>Loading metadata…</span>
          </div>
        )}
        {info.loadState === "error" && (
          <div className={styles.errorText}>
            {info.error ?? "Failed to load metadata"}
          </div>
        )}
        {info.loadState === "loaded" && info.properties.length === 0 && (
          <div className={styles.empty}>No properties</div>
        )}
        {info.properties.map((prop) => (
          <div key={prop.apiName} className={styles.propRow}>
            <span className={styles.propName} title={prop.displayName}>
              {prop.apiName}
            </span>
            <span className={styles.propType}>
              {prop.type}
              {prop.multiplicity ? "[]" : ""}
              {prop.nullable ? "?" : ""}
            </span>
          </div>
        ))}
      </div>

      {info.loadState === "loaded" && info.links.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Links ({info.links.length})</div>
          {info.links.map((link) => (
            <div key={link.apiName} className={styles.linkRow}>
              <span className={styles.propName}>{link.apiName}</span>
              <span className={styles.linkTarget}>
                → {link.targetType}
                {link.multiplicity ? " (many)" : " (one)"}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          {usagesTitle} ({usages.length})
        </div>
        {usages.length === 0 && (
          <div className={styles.empty}>{usagesEmptyLabel}</div>
        )}
        {usages.map((usage, index) => (
          <div key={usage.key ?? index} className={styles.compRow}>
            <span className={styles.compName}>{usage.label}</span>
            {usage.detail && (
              <span className={styles.compHook} title={usage.detailTitle}>
                {usage.detail}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
