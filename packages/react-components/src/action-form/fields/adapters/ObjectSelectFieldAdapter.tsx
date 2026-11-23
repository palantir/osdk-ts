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

import { Result } from "../../../shared/Result.js";
import { ObjectSelectField } from "../ObjectSelectField.js";
import { ConvertedField } from "./ConvertedField.js";
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { getValueType } from "./getValueType.js";

export function ObjectSelectFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
  portalContainer,
}: PortalFieldAdapterProps<"OBJECT_SELECT">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  return (
    <ConvertedField
      converter={OBJECT_CONVERTER}
      label={fieldDefinition.label}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue, onFieldValueChange) => (
        <ObjectSelectField
          id={fieldDefinition.fieldKey}
          value={fieldValue}
          onChange={onFieldValueChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={portalContainer}
        />
      )}
    </ConvertedField>
  );
}

const OBJECT_CONVERTER: FieldValueConverter<Osdk.Instance<ObjectTypeDefinition> | null> =
  {
    toFieldValue: (value) => {
      if (value == null) {
        return Result.ok(null);
      }
      if (isOsdkObject(value)) {
        return Result.ok(value);
      }
      return Result.err({
        message: `Expected an Ontology object, received: ${getValueType(value)}`,
      });
    },
    toParameterValue: passThroughFieldValue,
  };

/** Narrows the untyped form value to an OsdkObject by checking for $primaryKey. */
function isOsdkObject(
  value: unknown,
): value is Osdk.Instance<ObjectTypeDefinition> {
  return value != null && typeof value === "object" && "$primaryKey" in value;
}
