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

import type { RegisterOptions } from "react-hook-form";
import type {
  RendererFieldDefinition,
  ValidationError,
} from "../FormFieldApi.js";

type RhfRules = RegisterOptions<Record<string, unknown>, string>;

/**
 * Derives react-hook-form validation rules from a field definition's
 * constraint props (min, max, minLength, etc.) and the optional
 * user-provided `validate` function.
 *
 * Called at rule-building time so that `onValidationError` can inject
 * custom messages into the RHF rules object.
 */
export function extractValidationRules(
  fieldDef: RendererFieldDefinition,
): RhfRules {
  const rules: RhfRules = {};

  if (fieldDef.isRequired) {
    rules.required = getMessage(fieldDef, { type: "required" });
  }

  const validateFns: Record<
    string,
    (value: unknown) => string | true | Promise<string | true>
  > = {};

  switch (fieldDef.fieldComponent) {
    case "NUMBER_INPUT": {
      const { min, max } = fieldDef.fieldComponentProps;
      if (min != null) {
        const msg = getMessage(fieldDef, { type: "min", min });
        validateFns.min = (value) =>
          typeof value === "number" && value < min ? msg : true;
      }
      if (max != null) {
        const msg = getMessage(fieldDef, { type: "max", max });
        validateFns.max = (value) =>
          typeof value === "number" && value > max ? msg : true;
      }
      break;
    }
    case "TEXT_INPUT":
    case "TEXT_AREA": {
      const { minLength, maxLength } = fieldDef.fieldComponentProps;
      if (minLength != null) {
        rules.minLength = {
          value: minLength,
          message: getMessage(fieldDef, { type: "minLength", minLength }),
        };
      }
      if (maxLength != null) {
        rules.maxLength = {
          value: maxLength,
          message: getMessage(fieldDef, { type: "maxLength", maxLength }),
        };
      }
      break;
    }
    case "DATETIME_PICKER": {
      const { min, max } = fieldDef.fieldComponentProps;
      if (min != null) {
        const msg = getMessage(fieldDef, { type: "min", min });
        validateFns.min = (value) =>
          value instanceof Date && value.getTime() < min.getTime()
            ? msg
            : true;
      }
      if (max != null) {
        const msg = getMessage(fieldDef, { type: "max", max });
        validateFns.max = (value) =>
          value instanceof Date && value.getTime() > max.getTime()
            ? msg
            : true;
      }
      break;
    }
    case "FILE_PICKER": {
      const { maxSize } = fieldDef.fieldComponentProps;
      if (maxSize != null) {
        const msg = getMessage(fieldDef, { type: "maxSize", maxSize });
        validateFns.maxSize = (value) => {
          if (value instanceof File) {
            return value.size > maxSize ? msg : true;
          }
          if (Array.isArray(value)) {
            const oversized = value.some(
              (f: unknown) => f instanceof File && f.size > maxSize,
            );
            return oversized ? msg : true;
          }
          return true;
        };
      }
      break;
    }
    // DROPDOWN, RADIO_BUTTONS, CUSTOM, OBJECT_SET: only `required` applies
    default:
      break;
  }

  if (fieldDef.validate != null) {
    const userValidate = fieldDef.validate;
    validateFns.custom = async (value: unknown) => {
      const result = await userValidate(value);
      if (result == null) {
        return true;
      }
      return getMessage(fieldDef, { type: "validate", message: result });
    };
  }

  if (Object.keys(validateFns).length > 0) {
    rules.validate = validateFns;
  }

  return rules;
}

function getMessage(
  fieldDef: RendererFieldDefinition,
  error: ValidationError,
): string {
  return fieldDef.onValidationError?.(error) ?? getDefaultMessage(error);
}

function getDefaultMessage(error: ValidationError): string {
  switch (error.type) {
    case "required":
      return "This field is required";
    case "min":
      return `Must be at least ${formatConstraint(error.min)}`;
    case "max":
      return `Must be at most ${formatConstraint(error.max)}`;
    case "minLength":
      return `Must be at least ${error.minLength} characters`;
    case "maxLength":
      return `Must be at most ${error.maxLength} characters`;
    case "maxSize":
      return `File must be smaller than ${formatBytes(error.maxSize)}`;
    case "validate":
      return error.message;
  }
}

function formatConstraint(value: number | Date): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  return String(value);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
