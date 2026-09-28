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

import { Button, InputGroup } from "@blueprintjs/core";
import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import { usePreviewPresentation } from "../PreviewProvider.js";
import { getParameterValue } from "./getParameterValue.js";
import type {
  AsyncParameterValueProps,
  ParameterValueItemProps,
  ParameterValueProps,
} from "./parameterTypes.js";

export const AsyncStringParameterValueInput: React.FC<
  AsyncParameterValueProps<ParameterValue.String>
> = React.memo(function AsyncStringParameterValueInputFn({
  parameterId,
  parameterValue,
  onParameterValueUpdate,
}) {
  const handleChange = React.useCallback(
    (value: string) => {
      onParameterValueUpdate(parameterId, "string", value);
    },
    [onParameterValueUpdate, parameterId],
  );
  return (
    <StringParameterValueInput
      parameterValue={getParameterValue(parameterValue)}
      onParameterValueUpdate={handleChange}
    />
  );
});

export const StringParameterValueInputItem: React.FC<
  ParameterValueItemProps<ParameterValue.String>
> = React.memo(function StringParameterValueInputItemFn({
  parameterValue,
  index,
  onParameterValueUpdate,
  onRemove,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (value: string) => {
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
      <StringParameterValueInput
        parameterValue={parameterValue}
        onParameterValueUpdate={handleChange}
      />
      <Button
        intent="danger"
        minimal={true}
        icon="trash"
        aria-label={presentation.strings.removeButton}
        onClick={handleRemove}
      />
    </div>
  );
});

const StringParameterValueInput: React.FC<
  ParameterValueProps<ParameterValue.String>
> = React.memo(function StringParameterValueInputFn({
  parameterValue,
  onParameterValueUpdate,
}) {
  const presentation = usePreviewPresentation();
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onParameterValueUpdate(event.target.value);
    },
    [onParameterValueUpdate],
  );
  return (
    <InputGroup
      placeholder={presentation.strings.stringInputPlaceholder}
      fill={true}
      value={parameterValue ?? ""}
      onChange={handleChange}
    />
  );
});
