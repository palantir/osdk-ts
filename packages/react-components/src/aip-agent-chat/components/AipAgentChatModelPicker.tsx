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

import * as React from "react";
import type { AipModelApiName } from "../AipAgentChatApi.js";

export interface AipAgentChatModelPickerProps {
  models: ReadonlyArray<AipModelApiName>;
  activeModel: AipModelApiName;
  onModelChange: (model: AipModelApiName) => void;
}

/**
 * Native-select model picker rendered in the composer footer when the
 * OSDK wrapper is given an `availableModels` list. Operates on Foundry
 * LMS model API names.
 */
export function AipAgentChatModelPicker({
  models,
  activeModel,
  onModelChange,
}: AipAgentChatModelPickerProps): React.ReactElement {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onModelChange(event.target.value);
    },
    [onModelChange],
  );

  return (
    <select
      aria-label="Active model"
      onChange={handleChange}
      value={activeModel}
    >
      {models.map(modelName => (
        <option key={modelName} value={modelName}>
          {modelName}
        </option>
      ))}
    </select>
  );
}
