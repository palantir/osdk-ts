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

import { Button, Checkbox } from "@blueprintjs/core";
import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import { usePreviewPresentation } from "../PreviewProvider.js";
import { getParameterValue } from "./getParameterValue.js";
import type {
  AsyncParameterValueProps,
  ParameterValueItemProps,
  ParameterValueProps,
} from "./parameterTypes.js";

export const AsyncBooleanParameterValueInput: React.FC<
  AsyncParameterValueProps<ParameterValue.Boolean>
> = React.memo(function AsyncBooleanParameterValueInputFn({
  parameterId,
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (value: boolean) => {
      onParameterValueUpdate(parameterId, "boolean", value);
    },
    [onParameterValueUpdate, parameterId],
  );
  return (
    <BooleanParameterValueInput
      parameterValue={getParameterValue(parameterValue)}
      onParameterValueUpdate={handleChange}
    />
  );
});

export const BooleanParameterValueInputItem: React.FC<
  ParameterValueItemProps<ParameterValue.Boolean>
> = React.memo(function BooleanParameterValueInputItemFn({
  parameterValue,
  index,
  onParameterValueUpdate,
  onRemove,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (value: boolean) => {
      onParameterValueUpdate(index, value);
    },
    [index, onParameterValueUpdate],
  );
  const handleRemove = React.useCallback(
    () => onRemove(index),
    [index, onRemove],
  );
  return (
    <div className={"osdk-widget-preview-input"}>
      <BooleanParameterValueInput
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

const BooleanParameterValueInput: React.FC<
  ParameterValueProps<ParameterValue.Boolean>
> = React.memo(function BooleanParameterValueInputFn({
  parameterValue,
  onParameterValueUpdate,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onParameterValueUpdate(event.target.checked);
    },
    [onParameterValueUpdate],
  );
  return (
    <Checkbox
      label={presentation.strings.booleanLabel}
      checked={parameterValue}
      onChange={handleChange}
    />
  );
});
