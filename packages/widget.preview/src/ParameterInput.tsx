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

import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import type { PreviewParameter } from "./config.js";
import { AsyncArrayParameterInput } from "./parameters/ArrayParameterInput.js";
import { AsyncBooleanParameterValueInput } from "./parameters/BooleanParameterInput.js";
import { AsyncDateParameterValueInput } from "./parameters/DateParameterInput.js";
import { AsyncNumberParameterValueInput } from "./parameters/NumberParameterInput.js";
import { AsyncStringParameterValueInput } from "./parameters/StringParameterInput.js";
import { AsyncTimestampParameterValueInput } from "./parameters/TimestampParameterInput.js";
import { loadedParameterValue } from "./parameterValues.js";

/** @public */
export interface ParameterInputProps {
  parameter: PreviewParameter;
  parameterValue: ParameterValue | undefined;
  onParameterValueUpdate: (id: string, value: ParameterValue) => void;
}

/** @public */
export function ParameterInput({
  parameter,
  parameterValue,
  onParameterValueUpdate,
}: ParameterInputProps): React.ReactElement | null {
  const onUpdate = React.useCallback(
    (id: string, _type: ParameterValue.Type, value: unknown) => {
      onParameterValueUpdate(id, loadedParameterValue(parameter, value));
    },
    [onParameterValueUpdate, parameter],
  );
  const props = { parameterId: parameter.id, onParameterValueUpdate: onUpdate };
  switch (parameter.type) {
    case "string":
    case "scenario":
      return (
        <AsyncStringParameterValueInput
          {...props}
          parameterValue={parameterValue as ParameterValue.String | undefined}
        />
      );
    case "boolean":
      return (
        <AsyncBooleanParameterValueInput
          {...props}
          parameterValue={parameterValue as ParameterValue.Boolean | undefined}
        />
      );
    case "number":
      return (
        <AsyncNumberParameterValueInput
          {...props}
          parameterValue={parameterValue as ParameterValue.Number | undefined}
        />
      );
    case "date":
      return (
        <AsyncDateParameterValueInput
          {...props}
          parameterValue={parameterValue as ParameterValue.Date | undefined}
        />
      );
    case "timestamp":
      return (
        <AsyncTimestampParameterValueInput
          {...props}
          parameterValue={
            parameterValue as ParameterValue.Timestamp | undefined
          }
        />
      );
    case "array":
      return (
        <AsyncArrayParameterInput
          {...props}
          subType={parameter.subType}
          parameterValue={parameterValue as ParameterValue.Array | undefined}
        />
      );
    case "objectSet":
    case "mapTileLayer":
      return null;
  }
}
