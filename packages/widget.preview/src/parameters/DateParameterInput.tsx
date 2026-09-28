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

import { getISODateFromDate } from "../getISODateFromDate.js";
import { usePreviewPresentation } from "../PreviewProvider.js";
import { getParameterValue } from "./getParameterValue.js";
import type {
  AsyncParameterValueProps,
  ParameterValueItemProps,
  ParameterValueProps,
} from "./parameterTypes.js";

export const AsyncDateParameterValueInput: React.FC<
  AsyncParameterValueProps<ParameterValue.Date>
> = React.memo(function AsyncDateParameterValueInputFn({
  parameterId,
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (newDate: string) => onParameterValueUpdate(parameterId, "date", newDate),
    [onParameterValueUpdate, parameterId],
  );
  return (
    <DateParameterValueInput
      parameterValue={getParameterValue(parameterValue)}
      onParameterValueUpdate={handleChange}
    />
  );
});

export const DateParameterValueInputItem: React.FC<
  ParameterValueItemProps<ParameterValue.Date>
> = React.memo(function DateParameterValueInputItemFn({
  parameterValue,
  index,
  onParameterValueUpdate,
  onRemove,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (newDate: string) => onParameterValueUpdate(index, newDate),
    [index, onParameterValueUpdate],
  );
  const handleRemove = React.useCallback(
    () => onRemove(index),
    [index, onRemove],
  );
  return (
    <div className={"osdk-widget-preview-input"}>
      <DateParameterValueInput
        parameterValue={parameterValue}
        onParameterValueUpdate={handleChange}
      />
      <Button
        icon="trash"
        intent="danger"
        aria-label={presentation.strings.removeButton}
        onClick={handleRemove}
      />
    </div>
  );
});

const DateParameterValueInput: React.FC<
  ParameterValueProps<ParameterValue.Date>
> = React.memo(function DateParameterValueInputFn({
  parameterValue,
  onParameterValueUpdate,
}) {
  const presentation = usePreviewPresentation();
  const date = React.useMemo(() => {
    return parameterValue != null
      ? new Date(`${parameterValue}T00:00:00.000`)
      : undefined;
  }, [parameterValue]);
  const handleChange = React.useCallback(
    (newDate: Date | null) => {
      if (newDate != null) {
        onParameterValueUpdate(getISODateFromDate(newDate));
      }
    },
    [onParameterValueUpdate],
  );
  return (
    <Popover
      placement="bottom"
      content={<DatePicker value={date} onChange={handleChange} />}
      fill={true}
      shouldReturnFocusOnClose={false}
    >
      <Button
        fill={true}
        text={
          date != null
            ? presentation.formatDate(date, "date")
            : presentation.strings.selectDateText
        }
      />
    </Popover>
  );
});
