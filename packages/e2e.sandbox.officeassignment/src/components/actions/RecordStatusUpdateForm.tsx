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

import { useOsdkAction } from "@osdk/react";
import React from "react";

import {
  getStatusTypeSpec,
  STATUS_TYPES,
} from "../../constants/statusTypes.js";
import type { Assignment } from "../../generatedNoCheck2/index.js";
import { recordStatusUpdate } from "../../generatedNoCheck2/index.js";
import { makeTypeValue } from "../../utils/typeValue.js";
import { ErrorBanner } from "../common/index.js";

import styles from "./actions.module.css";

export interface RecordStatusUpdateFormProps {
  assignment: Assignment.OsdkInstance;
}

/** Records a new StatusUpdate. The caller supplies timestamp, timestampEpochMs and typeValue. */
export function RecordStatusUpdateForm(
  props: RecordStatusUpdateFormProps,
): React.JSX.Element {
  const { assignment } = props;
  const { applyAction, isPending, error } = useOsdkAction(recordStatusUpdate);

  const [type, setType] = React.useState<string>(STATUS_TYPES[0].type);
  const recordableValues = React.useMemo(() => {
    const spec = getStatusTypeSpec(type);
    if (spec == null) {
      return [];
    }
    return spec.values.filter((v) => v !== spec.noRecordValue);
  }, [type]);
  const [value, setValue] = React.useState<string>(recordableValues[0] ?? "");
  const [comment, setComment] = React.useState<string>("");

  // Keep the value valid when the type changes (derive, do not effect).
  const effectiveValue = recordableValues.includes(value)
    ? value
    : (recordableValues[0] ?? "");

  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (effectiveValue === "") {
        return;
      }
      const epochMs = Date.now();
      applyAction({
        assignment,
        statusUpdateId: crypto.randomUUID(),
        type,
        value: effectiveValue,
        typeValue: makeTypeValue(type, effectiveValue),
        timestamp: new Date(epochMs).toISOString(),
        timestampEpochMs: epochMs,
        comment: comment === "" ? undefined : comment,
      })
        .then(() => setComment(""))
        // Failures surface via the hook's `error` (rendered below); swallow here to avoid an
        // unhandled rejection.
        .catch(() => {});
    },
    [applyAction, assignment, type, effectiveValue, comment],
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Type</span>
          <select
            className={styles.select}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {STATUS_TYPES.map((spec) => (
              <option key={spec.type} value={spec.type}>
                {spec.type}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Value</span>
          <select
            className={styles.select}
            value={effectiveValue}
            onChange={(e) => setValue(e.target.value)}
          >
            {recordableValues.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Comment (optional)</span>
        <input
          className={styles.input}
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className={styles.primaryButton}
        disabled={isPending}
      >
        Record status update
      </button>
      <ErrorBanner
        message={error?.actionValidation?.message}
        context="Record status"
      />
    </form>
  );
}
