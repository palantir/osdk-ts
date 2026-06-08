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

import React, { memo } from "react";
import { isNoValue } from "../../utils/filterValues.js";
import { EmptyStringLabel } from "./EmptyStringLabel.js";
import { NoValueLabel } from "./NoValueLabel.js";

/** Plain-text label for the screen-reader / aria-label equivalent of an option. */
export function getOptionLabelText(value: string): string {
  if (isNoValue(value)) {
    return "No value";
  }
  if (value === "") {
    return "(empty string)";
  }
  return value;
}

interface OptionLabelProps {
  value: string;
  renderValue?: (value: string) => React.ReactNode;
  className?: string;
}

/**
 * Canonical label for a single filter option, covering the three cases that
 * share an identity-string space:
 * - the {@link NO_VALUE} sentinel (null/undefined) renders "No value"
 * - a literal empty string `""` renders "(empty string)"
 * - any other value renders via `renderValue` (or the raw value)
 *
 * `className` is forwarded to the placeholder labels so callers can theme the
 * special rows (e.g. the listogram's muted bucket styling).
 */
function OptionLabelInner({
  value,
  renderValue,
  className,
}: OptionLabelProps): React.ReactElement {
  if (isNoValue(value)) {
    return <NoValueLabel className={className} />;
  }
  if (value === "") {
    return <EmptyStringLabel className={className} />;
  }
  return <>{renderValue ? renderValue(value) : value}</>;
}

export const OptionLabel = memo(OptionLabelInner) as typeof OptionLabelInner;
