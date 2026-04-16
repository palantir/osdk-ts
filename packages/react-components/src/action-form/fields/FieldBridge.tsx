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

import React, { memo, useCallback, useMemo } from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type {
  FieldComponent,
  RendererFieldDefinition,
} from "../FormFieldApi.js";
import { extractValidationRules } from "../utils/extractValidationRules.js";
import { FormFieldRenderer } from "./FormFieldRenderer.js";

export interface FieldBridgeProps {
  fieldDef: RendererFieldDefinition;
  control: Control<Record<string, unknown>>;
  onExternalChange?: (fieldKey: string, value: unknown) => void;
}
const SELECT_LIKE_FIELDS: ReadonlySet<FieldComponent> = new Set<FieldComponent>(
  ["RADIO_BUTTONS", "DROPDOWN"],
);

export const FieldBridge: React.FC<FieldBridgeProps> = memo(
  function FieldBridgeFn({
    fieldDef,
    control,
    onExternalChange,
  }: FieldBridgeProps): React.ReactElement {
    const rules = useMemo(() => extractValidationRules(fieldDef), [fieldDef]);

    const {
      field: { onChange, onBlur, value },
      fieldState: { error: fieldError },
    } = useController({
      name: fieldDef.fieldKey,
      control,
      rules,
    });

    const isSelectLike = SELECT_LIKE_FIELDS.has(fieldDef.fieldComponent);

    const handleChange = useCallback(
      (newValue: unknown) => {
        onChange(newValue);
        onExternalChange?.(fieldDef.fieldKey, newValue);
        // Select-like fields are "pick once" interactions — mark as touched
        // immediately so RHF revalidates (clears errors) on selection rather
        // than waiting for focus to leave the container.
        if (isSelectLike) {
          onBlur();
        }
      },
      [onChange, onBlur, onExternalChange, fieldDef.fieldKey, isSelectLike],
    );

    return (
      <FormFieldRenderer
        value={value}
        fieldDefinition={fieldDef}
        onFieldValueChange={handleChange}
        onBlur={onBlur}
        error={fieldError?.message}
      />
    );
  },
);
