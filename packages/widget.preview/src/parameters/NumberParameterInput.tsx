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

import { Button, NumericInput } from "@blueprintjs/core";
import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import { usePreviewPresentation } from "../PreviewProvider.js";
import { getParameterValue } from "./getParameterValue.js";
import type {
  AsyncParameterValueProps,
  ParameterValueItemProps,
  ParameterValueProps,
} from "./parameterTypes.js";

export const AsyncNumberParameterValueInput: React.FC<
  AsyncParameterValueProps<ParameterValue.Number>
> = React.memo(function AsyncNumberParameterValueInputFn({
  parameterId,
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (newValue: number) => {
      onParameterValueUpdate(parameterId, "number", newValue);
    },
    [onParameterValueUpdate, parameterId],
  );
  return (
    <NumberParameterValueInput
      parameterValue={getParameterValue(parameterValue)}
      onParameterValueUpdate={handleChange}
    />
  );
});

export const NumberParameterValueInputItem: React.FC<
  ParameterValueItemProps<ParameterValue.Number>
> = React.memo(function NumberParameterValueInputItemFn({
  parameterValue,
  onParameterValueUpdate,
  index,
  onRemove,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (value: number) => {
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
      <NumberParameterValueInput
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

const NumberParameterValueInput: React.FC<
  ParameterValueProps<ParameterValue.Number>
> = React.memo(function NumberParameterValueInputFn({
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (newValue: number) => {
      onParameterValueUpdate(newValue);
    },
    [onParameterValueUpdate],
  );
  return (
    <NumericInput
      fill={true}
      value={parameterValue}
      onValueChange={handleChange}
    />
  );
});
