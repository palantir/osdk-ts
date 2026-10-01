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

import { FormGroup } from "@blueprintjs/core";
import type { ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import type { PreviewParameter } from "./config.js";
import { ParameterInput } from "./ParameterInput.js";

/** @public */
export interface ParameterConfigProps {
  parameters: readonly PreviewParameter[];
  parameterValues: Record<string, ParameterValue>;
  onParameterValueUpdate: (id: string, value: ParameterValue) => void;
  renderInput?: (parameter: PreviewParameter) => React.ReactNode;
  renderParameterId?: (id: string) => React.ReactNode;
  emptyState?: React.ReactNode;
}

/** @public */
export function ParameterConfig({
  parameters,
  parameterValues,
  onParameterValueUpdate,
  renderInput,
  renderParameterId,
  emptyState,
}: ParameterConfigProps): React.ReactElement {
  return (
    <div data-test-id="widgets-parameter-config">
      {parameters.length === 0 && emptyState}
      {parameters.map((parameter) => (
        <FormGroup
          key={parameter.id}
          label={
            <span className="osdk-widget-preview-parameter-label">
              {parameter.displayName}{" "}
              {renderParameterId?.(parameter.id) ?? <code>{parameter.id}</code>}
            </span>
          }
        >
          {renderInput?.(parameter) ?? (
            <ParameterInput
              parameter={parameter}
              parameterValue={parameterValues[parameter.id]}
              onParameterValueUpdate={onParameterValueUpdate}
            />
          )}
        </FormGroup>
      ))}
    </div>
  );
}
