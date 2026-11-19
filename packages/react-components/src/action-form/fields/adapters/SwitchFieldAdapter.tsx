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

import { SwitchField } from "../SwitchField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";

export function SwitchFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"SWITCH">): React.ReactElement {
  return (
    <SwitchField
      id={fieldDefinition.fieldKey}
      label={fieldDefinition.label}
      value={!!value}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
    />
  );
}
