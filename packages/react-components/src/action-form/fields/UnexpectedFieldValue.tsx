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

import React, { useCallback } from "react";

import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import { NonIdealState } from "../../shared/NonIdealState.js";
import type { UnexpectedValueError } from "./adapters/FieldValueConverter.js";

import styles from "./UnexpectedFieldValue.module.css";

interface UnexpectedFieldValueProps {
  /** The field's label, so the Clear button names the field it clears. */
  label: string | undefined;
  error: UnexpectedValueError;
  /** Writes a parameter value to form state. */
  onChange: (value: unknown) => void;
  disabled: boolean;
}

/**
 * Shown in place of a field component when the stored value has a shape the
 * component can't display, so the value is never hidden from the user.
 */
export function UnexpectedFieldValue({
  label,
  error,
  onChange,
  disabled,
}: UnexpectedFieldValueProps): React.ReactElement {
  const handleClear = useCallback(() => onChange(null), [onChange]);
  return (
    <NonIdealState
      // As tall as a single-line input, so clearing the value minimizes layout shift.
      className={styles.osdkUnexpectedFieldValue}
      message={
        <>
          {error.message}{" "}
          <ActionButton
            aria-label={label != null ? `Clear ${label}` : undefined}
            variant="primary"
            appearance="minimal"
            onClick={handleClear}
            disabled={disabled}
          >
            Clear
          </ActionButton>
        </>
      }
    />
  );
}
