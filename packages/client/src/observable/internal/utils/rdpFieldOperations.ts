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
  RdpDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "../../../object/SimpleOsdkProperties.js";
import type { FetchedObjectTypeDefinition } from "../../../ontology/OntologyProvider.js";
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

/**
 * Throws a clear, actionable error if `objectDef` is undefined. The RDP merge
 * path operates on concrete `ObjectHolder`s only; if an `InterfaceHolder` ever
 * leaks through without being unwrapped via `storeOsdkInstances`, the missing
 * ObjectDefRef would surface as a confusing "cannot read property 'properties'
 * of undefined" crash. Use this helper to gate access to `objectDef.properties`
 * so the failure mode names the actual invariant violation.
 */
export function requireObjectDef(
  objectDef: FetchedObjectTypeDefinition | undefined,
  instance: { $apiName?: string; $objectType?: string },
): FetchedObjectTypeDefinition {
  if (objectDef === undefined) {
    throw new Error(
      `Internal invariant violated: missing ObjectDefRef for $apiName=${
        instance.$apiName ?? "?"
      } $objectType=${instance.$objectType ?? "?"}. `
        + `This likely means an InterfaceHolder leaked into the RDP merge path `
        + `without being unwrapped via storeOsdkInstances.`,
    );
  }
  return objectDef;
}

function stripRdpFields(
  value: ObjectHolder,
  rdpFields: ReadonlySet<string>,
): ObjectHolder {
  if (rdpFields.size === 0) {
    return value;
  }

  const underlying = value[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(value[ObjectDefRef], underlying);

  const newProps: SimpleOsdkProperties = {
    $apiName: underlying.$apiName,
    $objectType: underlying.$objectType,
    $primaryKey: underlying.$primaryKey,
    $title: underlying.$title,
    $rid: underlying.$rid,
  };

  for (const key of Object.keys(underlying)) {
    if (key in objectDef.properties && !rdpFields.has(key)) {
      newProps[key] = underlying[key];
    }
  }

  // Forward the RDP type metadata so derived numeric (decimal/long) fields keep
  // sorting/filtering numerically after a rebuild; entries for stripped fields
  // are harmless since resolvePropertyType only reads keys present on the holder.
  return createOsdkObject(
    value[ClientRef],
    objectDef,
    newProps,
    value[RdpDefRef],
  );
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

function filterToRdpFields(
  value: ObjectHolder,
  rdpFieldsToKeep: ReadonlySet<string>,
  sourceRdpFields: ReadonlySet<string>,
): ObjectHolder {
  const underlying = value[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(value[ObjectDefRef], underlying);

  const newProps: SimpleOsdkProperties = {
    $apiName: underlying.$apiName,
    $objectType: underlying.$objectType,
    $primaryKey: underlying.$primaryKey,
    $title: underlying.$title,
    $rid: underlying.$rid,
  };

  for (const key of Object.keys(underlying)) {
    if (key in objectDef.properties) {
      const isRdpField = sourceRdpFields.has(key);
      if (!isRdpField || rdpFieldsToKeep.has(key)) {
        newProps[key] = underlying[key];
      }
    }
  }

  return createOsdkObject(
    value[ClientRef],
    objectDef,
    newProps,
    value[RdpDefRef],
  );
}

export function mergeSelectFields(
  sourceValue: ObjectHolder,
  selectFields: ReadonlySet<string>,
  existingValue: ObjectHolder,
): ObjectHolder {
  const sourceUnderlying =
    sourceValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const existingUnderlying =
    existingValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(
    sourceValue[ObjectDefRef],
    sourceUnderlying,
  );

  const newProps: SimpleOsdkProperties = {
    $apiName: sourceUnderlying.$apiName,
    $objectType: sourceUnderlying.$objectType,
    $primaryKey: sourceUnderlying.$primaryKey,
    $title: sourceUnderlying.$title,
    $rid: sourceUnderlying.$rid ?? existingUnderlying.$rid,
  };

  for (const key of Object.keys(existingUnderlying)) {
    if (key in objectDef.properties) {
      newProps[key] = existingUnderlying[key];
    }
  }

  for (const key of Object.keys(sourceUnderlying)) {
    if (key in objectDef.properties && selectFields.has(key)) {
      newProps[key] = sourceUnderlying[key];
    }
  }

  // RDP fields can come from either holder, so merge both sets of metadata.
  return createOsdkObject(
    sourceValue[ClientRef],
    objectDef,
    newProps,
    { ...existingValue[RdpDefRef], ...sourceValue[RdpDefRef] },
  );
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
    return filterToRdpFields(sourceValue, targetRdpFields, sourceRdpFields);
  }

  const sourceUnderlying =
    sourceValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(
    sourceValue[ObjectDefRef],
    sourceUnderlying,
  );

  const newProps: SimpleOsdkProperties = {
    $apiName: sourceUnderlying.$apiName,
    $objectType: sourceUnderlying.$objectType,
    $primaryKey: sourceUnderlying.$primaryKey,
    $title: sourceUnderlying.$title,
    $rid: sourceUnderlying.$rid,
  };

  for (const key of Object.keys(sourceUnderlying)) {
    if (
      key in objectDef.properties
      && (!sourceRdpFields.has(key) || targetRdpFields.has(key))
    ) {
      newProps[key] = sourceUnderlying[key];
    }
  }

  if (targetCurrentValue) {
    const targetUnderlying =
      targetCurrentValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
    for (const field of targetRdpFields) {
      if (field in targetUnderlying) {
        // Preserve target's value when:
        // 1. Source doesn't have this RDP field at all, OR
        // 2. Source hasn't provided the value (undefined)
        if (
          !sourceRdpFields.has(field)
          || newProps[field] === undefined
        ) {
          newProps[field] = targetUnderlying[field];
        }
      }
    }
  }

  // Target supplies the preserved RDP fields, so merge its metadata too.
  return createOsdkObject(
    sourceValue[ClientRef],
    objectDef,
    newProps,
    { ...targetCurrentValue?.[RdpDefRef], ...sourceValue[RdpDefRef] },
  );
}
