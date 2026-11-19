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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import React from "react";

import { ObjectSelectField } from "../ObjectSelectField.js";
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";

export function ObjectSelectFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
  portalContainer,
}: PortalFieldAdapterProps<"OBJECT_SELECT">): React.ReactElement {
  return (
    <ObjectSelectField
      id={fieldDefinition.fieldKey}
      value={narrowToOsdkObject(value)}
      onChange={onChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
      portalContainer={portalContainer}
    />
  );
}

/** Narrows the untyped form value to an OsdkObject by checking for $primaryKey. */
function narrowToOsdkObject(
  value: unknown,
): Osdk.Instance<ObjectTypeDefinition> | null {
  if (value != null && typeof value === "object" && "$primaryKey" in value) {
    return value as Osdk.Instance<ObjectTypeDefinition>;
  }
  return null;
}
