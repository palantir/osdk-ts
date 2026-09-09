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

import invariant from "tiny-invariant";

import {
  isStruct,
  type PropertyTypeType,
} from "./properties/PropertyTypeType.js";

// Standard ontology metadata limits count UTF-8 bytes.
const ONTOLOGY_DISPLAY_NAME_LIMIT = 1_000;
export const OBJECT_PROPERTY_DISPLAY_NAME_LIMIT = 1_500;
const ONTOLOGY_DESCRIPTION_LIMIT = 10_000;
export const ACTION_DISPLAY_NAME_LIMIT = 2_000;
export const ACTION_DESCRIPTION_LIMIT = 15_000;

// Value type limits count UTF-16 code units, like JavaScript String.length.
export const VALUE_TYPE_DISPLAY_NAME_LIMIT = 100;
export const VALUE_TYPE_DESCRIPTION_LIMIT = 500;

const encoder = new TextEncoder();

type DisplayMetadata = {
  displayName?: string;
  pluralDisplayName?: string;
  groupDisplayName?: string;
  description?: string | null;
};

export function validateMetadataLength(
  value: string | null | undefined,
  field: string,
  context: string,
  limit: number,
  unit: "UTF-8 bytes" | "UTF-16 code units" = "UTF-8 bytes",
): void {
  if (value == null) {
    return;
  }
  const length =
    unit === "UTF-8 bytes" ? encoder.encode(value).length : value.length;
  invariant(
    length <= limit,
    `${context}: ${field} must be at most ${limit} ${unit} (got ${length})`,
  );
}

export function validateDisplayMetadataLengths(
  metadata: DisplayMetadata,
  context: string,
  nameLimit: number = ONTOLOGY_DISPLAY_NAME_LIMIT,
  descriptionLimit: number = ONTOLOGY_DESCRIPTION_LIMIT,
): void {
  for (const field of [
    "displayName",
    "pluralDisplayName",
    "groupDisplayName",
  ] as const) {
    validateMetadataLength(metadata[field], field, context, nameLimit);
  }
  validateMetadataLength(
    metadata.description,
    "description",
    context,
    descriptionLimit,
  );
}

export function validateStructFieldMetadata(
  type: PropertyTypeType,
  context: string,
): void {
  if (!isStruct(type)) {
    return;
  }
  for (const [apiName, field] of Object.entries(type.structDefinition)) {
    const metadata =
      typeof field === "object" && "fieldType" in field
        ? field.displayMetadata
        : undefined;
    validateDisplayMetadataLengths(
      metadata ?? { displayName: apiName },
      `${context}, struct field "${apiName}"`,
      OBJECT_PROPERTY_DISPLAY_NAME_LIMIT,
    );
  }
}
