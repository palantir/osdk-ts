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

import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";

export function extractRdpFieldNames(
  rdpConfig: Canonical<Rdp> | undefined,
): ReadonlySet<string> {
  if (!rdpConfig) {
    return new Set();
  }
  return new Set(Object.keys(rdpConfig));
}

function deleteField(obj: ObjectHolder, field: string): void {
  const mutableObj: Record<string, unknown> = obj;
  delete mutableObj[field];
}

function setField(obj: ObjectHolder, field: string, value: unknown): void {
  const mutableObj: Record<string, unknown> = obj;
  mutableObj[field] = value;
}

function stripRdpFields(
  value: ObjectHolder,
  rdpFields: ReadonlySet<string>,
): ObjectHolder {
  if (rdpFields.size === 0) {
    return value;
  }

  const result = { ...value };
  for (const field of rdpFields) {
    deleteField(result, field);
  }
  return result;
}

function isSuperset(
  superset: ReadonlySet<string>,
  subset: ReadonlySet<string>,
): boolean {
  for (const field of subset) {
    if (!superset.has(field)) {
      return false;
    }
  }
  return true;
}

function filterToFields(
  value: ObjectHolder,
  allowedFields: ReadonlySet<string>,
): ObjectHolder {
  const result = { ...value };
  const allFields = Object.keys(result);

  for (const field of allFields) {
    if (!allowedFields.has(field)) {
      deleteField(result, field);
    }
  }
  return result;
}

export function mergeObjectFields(
  sourceValue: ObjectHolder,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
  targetCurrentValue: ObjectHolder | undefined,
): ObjectHolder {
  if (targetRdpFields.size === 0) {
    return stripRdpFields(sourceValue, sourceRdpFields);
  }

  if (isSuperset(sourceRdpFields, targetRdpFields)) {
    if (sourceRdpFields.size === targetRdpFields.size) {
      return sourceValue;
    }
    return filterToFields(sourceValue, targetRdpFields);
  }

  const merged = { ...sourceValue };

  if (targetCurrentValue) {
    const targetAsRecord: Record<string, unknown> = targetCurrentValue;
    for (const field of targetRdpFields) {
      if (!sourceRdpFields.has(field) && field in targetCurrentValue) {
        setField(merged, field, targetAsRecord[field]);
      }
    }
  }

  return merged;
}
