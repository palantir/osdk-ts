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

import React, { memo, useCallback } from "react";

import type {
  RelativeDateBound,
  RelativeDateState,
} from "../../FilterListItemApi.js";
import { RelativeDateBoundInput } from "./RelativeDateBoundInput.js";

import styles from "./RelativeDateBoundInput.module.css";

interface RelativeDateRangeInputProps {
  /** Current relative state. */
  relativeState: RelativeDateState;
  /** Called when either bound changes. */
  onRelativeChange: (relativeState: RelativeDateState) => void;
}

function RelativeDateRangeInputInner({
  relativeState,
  onRelativeChange,
}: RelativeDateRangeInputProps): React.ReactElement {
  const handleMinChange = useCallback(
    (nextMin: RelativeDateBound | null) => {
      onRelativeChange({ ...relativeState, relativeMin: nextMin });
    },
    [onRelativeChange, relativeState],
  );

  const handleMaxChange = useCallback(
    (nextMax: RelativeDateBound | null) => {
      onRelativeChange({ ...relativeState, relativeMax: nextMax });
    },
    [onRelativeChange, relativeState],
  );

  return (
    <div className={styles.rangeRoot}>
      <RelativeDateBoundInput
        placeholder="From"
        value={relativeState.relativeMin}
        onChange={handleMinChange}
      />
      <span className={styles.separator} aria-hidden="true">
        –
      </span>
      <RelativeDateBoundInput
        placeholder="To"
        value={relativeState.relativeMax}
        onChange={handleMaxChange}
      />
    </div>
  );
}

export const RelativeDateRangeInput = memo(
  RelativeDateRangeInputInner,
) as typeof RelativeDateRangeInputInner;
