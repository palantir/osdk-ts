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

import React, { memo, useCallback } from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type { RendererFieldDefinition } from "../FormFieldApi.js";
import { FormFieldRenderer } from "./FormFieldRenderer.js";

export interface FieldBridgeProps {
  fieldDef: RendererFieldDefinition;
  control: Control<Record<string, unknown>>;
  onExternalChange?: (fieldKey: string, value: unknown) => void;
}
export const FieldBridge: React.FC<FieldBridgeProps> = memo(
  function FieldBridgeFn({
    fieldDef,
    control,
    onExternalChange,
  }: FieldBridgeProps): React.ReactElement {
    const {
      field: { onChange, value },
    } = useController({
      name: fieldDef.fieldKey,
      control,
    });

    const handleChange = useCallback(
      (newValue: unknown) => {
        onChange(newValue);
        onExternalChange?.(fieldDef.fieldKey, newValue);
      },
      [onChange, onExternalChange, fieldDef.fieldKey],
    );

    return (
      <FormFieldRenderer
        value={value}
        fieldDefinition={fieldDef}
        onFieldValueChange={handleChange}
      />
    );
  },
);
