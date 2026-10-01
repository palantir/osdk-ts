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

import { Button, Popover } from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/datetime";
import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import { usePreviewPresentation } from "../PreviewProvider.js";
import { getParameterValue } from "./getParameterValue.js";
import type {
  AsyncParameterValueProps,
  ParameterValueItemProps,
  ParameterValueProps,
} from "./parameterTypes.js";

export const AsyncTimestampParameterValueInput: React.FC<
  AsyncParameterValueProps<ParameterValue.Timestamp>
> = React.memo(function AsyncTimestampParameterValueInputFn({
  parameterId,
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (newValue: string) =>
      onParameterValueUpdate(parameterId, "timestamp", newValue),
    [onParameterValueUpdate, parameterId],
  );
  return (
    <TimestampParameterValueInput
      parameterValue={getParameterValue(parameterValue)}
      onParameterValueUpdate={handleChange}
    />
  );
});

export const TimestampParameterValueInputItem: React.FC<
  ParameterValueItemProps<ParameterValue.Timestamp>
> = React.memo(function TimestampParameterValueInputItemFn({
  parameterValue,
  index,
  onParameterValueUpdate,
  onRemove,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (newValue: string) => onParameterValueUpdate(index, newValue),
    [index, onParameterValueUpdate],
  );
  const handleRemove = React.useCallback(
    () => onRemove(index),
    [index, onRemove],
  );
  return (
    <div className={"osdk-widget-preview-input"}>
      <TimestampParameterValueInput
        parameterValue={parameterValue}
        onParameterValueUpdate={handleChange}
      />
      <Button
        icon="trash"
        intent="primary"
        aria-label={presentation.strings.removeButton}
        onClick={handleRemove}
      />
    </div>
  );
});

const TimestampParameterValueInput: React.FC<
  ParameterValueProps<ParameterValue.Timestamp>
> = ({ parameterValue, onParameterValueUpdate }) => {
  const presentation = usePreviewPresentation();
  const date = React.useMemo(() => {
    return parameterValue != null ? new Date(parameterValue) : undefined;
  }, [parameterValue]);
  const handleChange = React.useCallback(
    (newDate: Date | null) => {
      if (newDate != null) {
        onParameterValueUpdate(newDate.toISOString());
      }
    },
    [onParameterValueUpdate],
  );
  return (
    <Popover
      placement="bottom"
      fill={true}
      content={
        <DatePicker
          value={date}
          timePrecision="second"
          onChange={handleChange}
        />
      }
      shouldReturnFocusOnClose={false}
    >
      <Button
        fill={true}
        text={
          date != null
            ? presentation.formatDate(date, "timestamp")
            : presentation.strings.selectTimestampText
        }
      />
    </Popover>
  );
};
