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

import type { RelativeDateBound } from "../../FilterListItemApi.js";
import { RelativeDateBoundInput } from "./RelativeDateBoundInput.js";

import styles from "./RelativeDateBoundInput.module.css";

interface RelativeDateRangeInputProps {
  /** Relative definition for the From bound. `undefined` = Indefinitely. */
  relativeMin: RelativeDateBound | undefined;
  /** Relative definition for the To bound. `undefined` = Indefinitely. */
  relativeMax: RelativeDateBound | undefined;
  /** Called when either bound changes, with both current values. */
  onRelativeChange: (
    relativeMin: RelativeDateBound | undefined,
    relativeMax: RelativeDateBound | undefined,
  ) => void;
}

function RelativeDateRangeInputInner({
  relativeMin,
  relativeMax,
  onRelativeChange,
}: RelativeDateRangeInputProps): React.ReactElement {
  const handleMinChange = useCallback(
    (nextMin: RelativeDateBound | undefined) => {
      onRelativeChange(nextMin, relativeMax);
    },
    [onRelativeChange, relativeMax],
  );

  const handleMaxChange = useCallback(
    (nextMax: RelativeDateBound | undefined) => {
      onRelativeChange(relativeMin, nextMax);
    },
    [onRelativeChange, relativeMin],
  );

  return (
    <div className={styles.rangeRoot}>
      <RelativeDateBoundInput
        placeholder="From"
        value={relativeMin}
        onChange={handleMinChange}
      />
      <span className={styles.separator} aria-hidden="true">
        –
      </span>
      <RelativeDateBoundInput
        placeholder="To"
        value={relativeMax}
        onChange={handleMaxChange}
      />
    </div>
  );
}

export const RelativeDateRangeInput = memo(
  RelativeDateRangeInputInner,
) as typeof RelativeDateRangeInputInner;
