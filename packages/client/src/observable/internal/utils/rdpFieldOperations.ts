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
 * The RDP merge path operates on concrete `ObjectHolder`s only. If an
 * `InterfaceHolder` leaks through unwrapped, `ObjectDefRef` is undefined; this
 * gate names the invariant violation instead of crashing later on
 * `objectDef.properties`.
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

/**
 * Build the system (`$`-prefixed) property bag shared by every merged object.
 * `ridFallback` lets a caller borrow `$rid` from a prior value when the primary
 * source omits it, as a partial `$select` fetch can lack it.
 */
function systemFields(
  primary: SimpleOsdkProperties,
  ridFallback?: SimpleOsdkProperties,
): SimpleOsdkProperties {
  return {
    $apiName: primary.$apiName,
    $objectType: primary.$objectType,
    $primaryKey: primary.$primaryKey,
    $title: primary.$title,
    $rid: primary.$rid ?? ridFallback?.$rid,
  };
}

function sameMembers(
  a: ReadonlySet<string>,
  b: ReadonlySet<string>,
): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const field of a) {
    if (!b.has(field)) {
      return false;
    }
  }
  return true;
}

/**
 * Copy the base properties the source loaded. RDP fields are resolved
 * separately: their authority is the rdp sets, not objectDef.properties (RDP
 * names do not appear there at runtime), so they are skipped here even when
 * present on the source.
 */
function copyBaseProperties(
  into: SimpleOsdkProperties,
  source: SimpleOsdkProperties,
  objectDef: FetchedObjectTypeDefinition,
  sourceRdpFields: ReadonlySet<string>,
): void {
  for (const key of Object.keys(source)) {
    if (key in objectDef.properties && !sourceRdpFields.has(key)) {
      into[key] = source[key];
    }
  }
}

/**
 * Merge the RDP fields the target query wants, keyed off the rdp sets rather
 * than objectDef.properties. A field the source computed is taken from the
 * source, including the absent case, which clears a derived value that became
 * null. A field only the target wants keeps its cached value.
 */
function mergeRdpFields(
  into: SimpleOsdkProperties,
  source: SimpleOsdkProperties,
  targetCurrentValue: ObjectHolder | undefined,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
): void {
  const target = targetCurrentValue?.[UnderlyingOsdkObject] as
    | SimpleOsdkProperties
    | undefined;
  for (const field of targetRdpFields) {
    if (sourceRdpFields.has(field)) {
      if (field in source) {
        into[field] = source[field];
      }
    } else if (target && field in target) {
      into[field] = target[field];
    }
  }
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

  const newProps = systemFields(sourceUnderlying, existingUnderlying);

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

  return createOsdkObject(sourceValue[ClientRef], objectDef, newProps);
}

/**
 * Merge a freshly fetched object (computed under `sourceRdpFields`) into a cache
 * entry that wants `targetRdpFields`. Base properties come from the source. RDP
 * fields are resolved by the rdp sets: a field the source computed is taken from
 * the source (including clearing a now-null value), a field only the target
 * wants keeps its cached value, and a field only the source computed is dropped.
 */
export function mergeObjectFields(
  sourceValue: ObjectHolder,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
  targetCurrentValue: ObjectHolder | undefined,
): ObjectHolder {
  // Identical RDP intent: the source is wholly authoritative, keep its identity.
  if (sameMembers(sourceRdpFields, targetRdpFields)) {
    return sourceValue;
  }

  const source = sourceValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(sourceValue[ObjectDefRef], source);

  const newProps = systemFields(source);
  copyBaseProperties(newProps, source, objectDef, sourceRdpFields);
  mergeRdpFields(
    newProps,
    source,
    targetCurrentValue,
    sourceRdpFields,
    targetRdpFields,
  );

  return createOsdkObject(sourceValue[ClientRef], objectDef, newProps);
}
