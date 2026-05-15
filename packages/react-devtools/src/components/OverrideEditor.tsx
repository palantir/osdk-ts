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

import { Button, FormGroup, Icon, NumericInput } from "@blueprintjs/core";
import type { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import React, { Suspense } from "react";
import type { PrototypeOverride } from "../prototyping/PrototypeOverrideStore.js";
import type { InterceptAction, SelectedQuery } from "./InterceptTab.js";
import styles from "./InterceptTab.module.scss";

const LazyCodeMirror = React.lazy(() => import("@uiw/react-codemirror"));

function CodeMirrorPlaceholder() {
  return <div className={styles.editorPlaceholder}>Loading editor...</div>;
}

interface OverrideEditorProps {
  selectedQuery: SelectedQuery;
  whereClauseText: string;
  orderByText: string;
  pageSize: number | undefined;
  groupByText: string;
  selectText: string;
  jsonExtensions: ReactCodeMirrorProps["extensions"];
  theme: "light" | "dark";
  dispatch: React.Dispatch<InterceptAction>;
  onApplyOverride: () => void;
  onClearSelection: () => void;
}

export const OverrideEditor: React.FC<OverrideEditorProps> = ({
  selectedQuery,
  whereClauseText,
  orderByText,
  pageSize,
  groupByText,
  selectText,
  jsonExtensions,
  theme,
  dispatch,
  onApplyOverride,
  onClearSelection,
}) => {
  return (
    <div className={styles.editorPanel}>
      <div className={styles.panelHeader}>
        <Icon icon="edit" />
        <div>
          <div className={styles.panelTitle}>
            {selectedQuery.objectType}
          </div>
          <div className={styles.panelSubtitle}>
            {selectedQuery.componentName}
          </div>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon="cross"
          aria-label="Close editor"
          onClick={onClearSelection}
        />
      </div>

      <Suspense fallback={<CodeMirrorPlaceholder />}>
        <div className={styles.editorContent}>
          <FormGroup
            label="Where Clause (JSON)"
            labelFor="where-clause"
          >
            <LazyCodeMirror
              value={whereClauseText}
              onChange={(val) =>
                dispatch({ type: "SET_WHERE_CLAUSE_TEXT", text: val })}
              extensions={jsonExtensions}
              theme={theme}
              height="120px"
              placeholder='{ "status": "active" }'
              basicSetup={{
                lineNumbers: false,
                foldGutter: false,
              }}
            />
          </FormGroup>

          {selectedQuery.isAggregation
            ? (
              <>
                <FormGroup label="Group By (JSON)" labelFor="group-by">
                  <LazyCodeMirror
                    value={groupByText}
                    onChange={(val) =>
                      dispatch({ type: "SET_GROUP_BY_TEXT", text: val })}
                    extensions={jsonExtensions}
                    theme={theme}
                    height="80px"
                    placeholder='{ "status": "exact", "department": "exact" }'
                    basicSetup={{ lineNumbers: false, foldGutter: false }}
                  />
                </FormGroup>

                <FormGroup label="Select (JSON)" labelFor="select">
                  <LazyCodeMirror
                    value={selectText}
                    onChange={(val) =>
                      dispatch({ type: "SET_SELECT_TEXT", text: val })}
                    extensions={jsonExtensions}
                    theme={theme}
                    height="80px"
                    placeholder='{ "count": { "$count": {} } }'
                    basicSetup={{ lineNumbers: false, foldGutter: false }}
                  />
                </FormGroup>
              </>
            )
            : (
              <>
                <FormGroup label="Order By (JSON)" labelFor="order-by">
                  <LazyCodeMirror
                    value={orderByText}
                    onChange={(val) =>
                      dispatch({ type: "SET_ORDER_BY_TEXT", text: val })}
                    extensions={jsonExtensions}
                    theme={theme}
                    height="80px"
                    placeholder='{ "createdAt": "desc" }'
                    basicSetup={{ lineNumbers: false, foldGutter: false }}
                  />
                </FormGroup>

                <FormGroup label="Page Size" labelFor="page-size">
                  <NumericInput
                    id="page-size"
                    value={pageSize ?? ""}
                    onValueChange={(value) =>
                      dispatch({
                        type: "SET_PAGE_SIZE",
                        pageSize: value > 0 ? value : undefined,
                      })}
                    placeholder="Default"
                    min={1}
                    fill={true}
                  />
                </FormGroup>
              </>
            )}

          <div className={styles.editorActions}>
            <Button
              intent="primary"
              icon="tick"
              onClick={onApplyOverride}
            >
              Apply Override
            </Button>
            <Button variant="minimal" onClick={onClearSelection}>
              Cancel
            </Button>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export interface OverrideItemProps {
  override: PrototypeOverride;
  onToggle: () => void;
  onRemove: () => void;
  onEdit: () => void;
}

export const OverrideItem: React.FC<OverrideItemProps> = React.memo(
  ({ override, onToggle, onRemove, onEdit }) => {
    return (
      <div className={styles.interceptItem}>
        <div
          className={`${styles.interceptItemContent} ${styles.clickable}`}
          onClick={onEdit}
        >
          <div className={styles.interceptItemHeader}>
            <Icon
              icon={override.hookType === "useOsdkAggregation"
                ? "grouped-bar-chart"
                : "th-list"}
            />
            <span className={styles.interceptItemTitle}>
              {override.objectType}
            </span>
            <span
              className={`${styles.interceptBadge} ${styles.interceptBadgeOverride}`}
            >
              override
            </span>
            <span
              className={`${styles.overrideItemStatus} ${
                override.enabled
                  ? styles.statusEnabled
                  : styles.statusDisabled
              }`}
            >
              {override.enabled ? "active" : "paused"}
            </span>
          </div>
          <div className={styles.interceptItemDetails}>
            <span className={styles.detail}>
              {override.componentName}
            </span>
          </div>
        </div>

        <div className={styles.interceptItemActions}>
          <Button
            variant="minimal"
            size="small"
            intent={override.enabled ? "success" : "warning"}
            icon={override.enabled ? "pause" : "play"}
            onClick={onToggle}
            title={override.enabled ? "Pause override" : "Resume override"}
            aria-label={override.enabled ? "Pause override" : "Resume override"}
          />
          <Button
            variant="minimal"
            size="small"
            intent="danger"
            icon="trash"
            onClick={onRemove}
            title="Remove override"
            aria-label="Remove override"
          />
        </div>
      </div>
    );
  },
);

OverrideItem.displayName = "OverrideItem";
