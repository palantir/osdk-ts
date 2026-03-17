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

import React, { useCallback } from "react";
import type { RendererFieldDefinition } from "../FormFieldApi.js";
import { FormFieldRenderer } from "./FormFieldRenderer.js";

export interface FormFieldRendererWrapperProps {
  fieldDef: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (fieldKey: string, value: unknown) => void;
}

export function FormFieldRendererWrapper({
  fieldDef,
  value,
  onFieldValueChange,
}: FormFieldRendererWrapperProps): React.ReactElement {
  const handleChange = useCallback(
    (newValue: unknown) => {
      onFieldValueChange(fieldDef.fieldKey, newValue);
    },
    [fieldDef.fieldKey, onFieldValueChange],
  );

  return (
    <FormFieldRenderer
      value={value}
      fieldDefinition={fieldDef}
      onFieldValueChange={handleChange}
    />
  );
}
