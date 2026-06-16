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

import React, { memo, useCallback, useMemo, useState } from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type {
  FieldComponent,
  PortalContainer,
  RendererFieldDefinition,
} from "../FormFieldApi.js";
import { extractValidationRules } from "../utils/extractValidationRules.js";
import { FormFieldRenderer } from "./FormFieldRenderer.js";

export interface FieldBridgeProps {
  fieldDef: RendererFieldDefinition;
  control: Control<Record<string, unknown>>;
  onExternalChange?: (fieldKey: string, value: unknown) => void;
  portalContainer?: PortalContainer;
}
const SELECT_LIKE_FIELDS: ReadonlySet<FieldComponent> = new Set<FieldComponent>(
  ["RADIO_BUTTONS", "SWITCH"],
);

export const FieldBridge: React.FC<FieldBridgeProps> = memo(
  function FieldBridgeFn({
    fieldDef,
    control,
    onExternalChange,
    portalContainer,
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
    const isDropdown = fieldDef.fieldComponent === "DROPDOWN";
    // RHF's touched state is blur-based and dirty state is value-comparison
    // based. The tag represents an actual user edit, so set it from the
    // field change path and keep it visible even if the value is restored.
    const [isEdited, setIsEdited] = useState(false);

    const handleChange = useCallback(
      (newValue: unknown) => {
        onChange(newValue);
        setIsEdited(true);
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

    // Ignore blur events where focus stays within the field container
    // (e.g. moving between radio buttons in a group). Only fire RHF's
    // onBlur when focus truly leaves the field.
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
          return;
        }
        onBlur();
      },
      [onBlur],
    );

    return (
      <FormFieldRenderer
        value={value}
        fieldDefinition={fieldDef}
        onFieldValueChange={handleChange}
        // Dropdown fields own their blur signal because their popover renders
        // in a portal outside the container div — the container-level blur
        // would fire prematurely when the popover opens.
        onBlur={isDropdown ? undefined : handleBlur}
        onFieldBlur={isDropdown ? onBlur : undefined}
        isEdited={isEdited}
        error={fieldError?.message}
        portalContainer={portalContainer}
      />
    );
  },
);
