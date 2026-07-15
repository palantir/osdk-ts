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

import type {
  OntologyActionInfo,
  OntologyEntity,
  OntologyQueryInfo,
  OntologyTypeInfo,
} from "./OntologyGraphModel.js";

import styles from "./OntologyNodeDetail.module.scss";

/**
 * One caller-supplied "this entity is used by X" entry. The component does no
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
  info: OntologyEntity;
  /** Omit to hide the usages section entirely (e.g. a static-ontology caller). */
  usages?: OntologyNodeUsage[];
  onClose: () => void;
  /** @defaultValue "Used by" */
  usagesTitle?: string;
  /** @defaultValue "No usages found" */
  usagesEmptyLabel?: string;
}

function ObjectSections(
  { info }: { info: OntologyTypeInfo },
): React.ReactElement {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Properties ({info.properties.length})
        </div>
        {info.properties.length === 0 && (
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

      {info.links.length > 0 && (
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
    </>
  );
}

function ParametersSection(
  { parameters }: { parameters: OntologyActionInfo["parameters"] },
): React.ReactElement {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Parameters ({parameters.length})
      </div>
      {parameters.length === 0 && (
        <div className={styles.empty}>No parameters</div>
      )}
      {parameters.map((param) => (
        <div key={param.name} className={styles.propRow}>
          <span className={styles.propName}>{param.name}</span>
          <span className={styles.propType}>{param.type}</span>
        </div>
      ))}
    </div>
  );
}

function ActionSections(
  { info }: { info: OntologyActionInfo },
): React.ReactElement {
  return (
    <>
      <ParametersSection parameters={info.parameters} />
      {info.operations.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Edits ({info.operations.length})
          </div>
          {info.operations.map((op) => (
            <div
              key={`${op.operation}:${op.targetType}`}
              className={styles.linkRow}
            >
              <span className={styles.propName}>
                {op.operation === "create" ? "Creates" : "Modifies"}
              </span>
              <span className={styles.linkTarget}>→ {op.targetType}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function QuerySections(
  { info }: { info: OntologyQueryInfo },
): React.ReactElement {
  return (
    <>
      <ParametersSection parameters={info.parameters} />
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Output</div>
        <div className={styles.linkRow}>
          <span className={styles.linkTarget}>{info.output || "—"}</span>
        </div>
      </div>
    </>
  );
}

function LoadedSections(
  { info }: { info: OntologyEntity },
): React.ReactElement {
  switch (info.kind) {
    case "action":
      return <ActionSections info={info} />;
    case "query":
      return <QuerySections info={info} />;
    case "object":
      return <ObjectSections info={info} />;
  }
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
        <span className={styles.metaChip}>{info.kind}</span>
        {info.kind === "object" && info.primaryKeyApiName && (
          <span className={styles.metaChip}>pk: {info.primaryKeyApiName}</span>
        )}
        {info.kind === "object" && info.status && (
          <span className={styles.metaChip}>{info.status}</span>
        )}
      </div>

      {isLoading && (
        <div className={styles.section}>
          <div className={styles.loading}>
            <Spinner size={SpinnerSize.SMALL} />
            <span>Loading metadata…</span>
          </div>
        </div>
      )}
      {info.loadState === "error" && (
        <div className={styles.section}>
          <div className={styles.errorText}>
            {info.error ?? "Failed to load metadata"}
          </div>
        </div>
      )}
      {info.loadState === "loaded" && <LoadedSections info={info} />}

      {usages && (
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
      )}
    </div>
  );
}
