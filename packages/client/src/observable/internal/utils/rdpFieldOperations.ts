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

import { createOsdkObject } from "../../../object/convertWireToOsdkObjects/createOsdkObject.js";
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "../../../object/SimpleOsdkProperties.js";
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

function stripRdpFields(
  value: ObjectHolder,
  rdpFields: ReadonlySet<string>,
): ObjectHolder {
  if (rdpFields.size === 0) {
    return value;
  }

  const underlying = value[UnderlyingOsdkObject] as SimpleOsdkProperties;

  const newProps: SimpleOsdkProperties = {
    $apiName: underlying.$apiName,
    $objectType: underlying.$objectType,
    $primaryKey: underlying.$primaryKey,
    $title: underlying.$title,
  };

  for (const key of Object.keys(underlying)) {
    if (!key.startsWith("$") && !rdpFields.has(key)) {
      newProps[key] = underlying[key];
    }
  }

  return createOsdkObject(value[ClientRef], value[ObjectDefRef], newProps);
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
  const underlying = value[UnderlyingOsdkObject] as SimpleOsdkProperties;

  const newProps: SimpleOsdkProperties = {
    $apiName: underlying.$apiName,
    $objectType: underlying.$objectType,
    $primaryKey: underlying.$primaryKey,
    $title: underlying.$title,
  };

  for (const key of Object.keys(underlying)) {
    if (!key.startsWith("$") && allowedFields.has(key)) {
      newProps[key] = underlying[key];
    }
  }

  return createOsdkObject(value[ClientRef], value[ObjectDefRef], newProps);
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

  const sourceUnderlying =
    sourceValue[UnderlyingOsdkObject] as SimpleOsdkProperties;

  const newProps: SimpleOsdkProperties = {
    $apiName: sourceUnderlying.$apiName,
    $objectType: sourceUnderlying.$objectType,
    $primaryKey: sourceUnderlying.$primaryKey,
    $title: sourceUnderlying.$title,
  };

  for (const key of Object.keys(sourceUnderlying)) {
    if (
      !key.startsWith("$")
      && (!sourceRdpFields.has(key) || targetRdpFields.has(key))
    ) {
      newProps[key] = sourceUnderlying[key];
    }
  }

  if (targetCurrentValue) {
    const targetUnderlying =
      targetCurrentValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
    for (const field of targetRdpFields) {
      if (!sourceRdpFields.has(field) && field in targetUnderlying) {
        newProps[field] = targetUnderlying[field];
      }
    }
  }

  return createOsdkObject(
    sourceValue[ClientRef],
    sourceValue[ObjectDefRef],
    newProps,
  );
}
