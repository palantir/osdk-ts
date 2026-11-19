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

import React from "react";

import { DatePicker } from "../../../shared/calendar/index.js";
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";

export function DatePickerAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
  portalContainer,
}: PortalFieldAdapterProps<"DATETIME_PICKER">): React.ReactElement {
  return (
    <DatePicker
      id={fieldDefinition.fieldKey}
      placeholder={fieldDefinition.placeholder}
      // TODO: Use coerceFieldValue
      value={value instanceof Date ? value : null}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
      portalContainer={portalContainer}
    />
  );
}
