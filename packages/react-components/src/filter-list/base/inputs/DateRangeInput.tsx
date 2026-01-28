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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import React, { memo } from "react";
import { formatDateForInput, parseDateFromInput } from "./dateUtils.js";
import { RangeInput, type RangeInputConfig } from "./RangeInput.js";

const dateConfig: RangeInputConfig<Date> = {
  inputType: "date",
  formatValue: formatDateForInput,
  parseValue: parseDateFromInput,
  toNumber: (d) => d.getTime(),
  fromNumber: (t) => new Date(t),
  minLabel: "From",
  maxLabel: "To",
  formatTooltip: (min, max, count) =>
    `${formatDateForInput(min)} - ${
      formatDateForInput(max)
    }: ${count.toLocaleString()}`,
};

interface DateRangeInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onChange: (min: Date | undefined, max: Date | undefined) => void;
  objectSet?: ObjectSet<Q>;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function DateRangeInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(props: DateRangeInputProps<Q, K>): React.ReactElement {
  return <RangeInput {...props} config={dateConfig} />;
}

export const DateRangeInput = memo(
  DateRangeInputInner,
) as typeof DateRangeInputInner;
