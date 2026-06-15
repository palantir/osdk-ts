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

/**
 * Build the system (`$`-prefixed) property bag shared by every merged object.
 * `ridFallback` lets a caller borrow `$rid` from a prior value when the primary
 * source omits it (a partial `$select` fetch can lack it).
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
 * Copy the fields the source query is authoritative for: every base property,
 * plus the RDP fields it computed that the target query also wants. RDP fields
 * the source computed but the target does not want are skipped so they don't
 * leak into the target's cache entry.
 */
function copyAuthoritativeSourceFields(
  into: SimpleOsdkProperties,
  source: SimpleOsdkProperties,
  objectDef: FetchedObjectTypeDefinition,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
): void {
  for (const key of Object.keys(source)) {
    if (!(key in objectDef.properties)) {
      continue;
    }
    const isSourceRdp = sourceRdpFields.has(key);
    if (!isSourceRdp || targetRdpFields.has(key)) {
      into[key] = source[key];
    }
  }
}

/**
 * Restore the RDP fields the target wants but the source query did not compute.
 * The source has no opinion on those, so the cached value survives. RDP fields
 * the source did compute are left exactly as the source set them, which is what
 * clears a derived value that became null.
 */
function preserveTargetOnlyRdps(
  into: SimpleOsdkProperties,
  targetCurrentValue: ObjectHolder | undefined,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
): void {
  if (!targetCurrentValue) {
    return;
  }
  const target =
    targetCurrentValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  for (const field of targetRdpFields) {
    if (!sourceRdpFields.has(field) && field in target) {
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
 * entry that wants `targetRdpFields`. The source query is authoritative for every
 * base property and for the RDP fields it computed, including clearing an RDP
 * whose derived value became null. RDP fields the source did not compute are kept
 * from `targetCurrentValue`; RDP fields the target does not want are dropped.
 */
export function mergeObjectFields(
  sourceValue: ObjectHolder,
  sourceRdpFields: ReadonlySet<string>,
  targetRdpFields: ReadonlySet<string>,
  targetCurrentValue: ObjectHolder | undefined,
): ObjectHolder {
  // Identical RDP intent → the source is wholly authoritative; keep its identity.
  if (sameMembers(sourceRdpFields, targetRdpFields)) {
    return sourceValue;
  }

  const source = sourceValue[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const objectDef = requireObjectDef(sourceValue[ObjectDefRef], source);

  const newProps = systemFields(source);
  copyAuthoritativeSourceFields(
    newProps,
    source,
    objectDef,
    sourceRdpFields,
    targetRdpFields,
  );
  preserveTargetOnlyRdps(
    newProps,
    targetCurrentValue,
    sourceRdpFields,
    targetRdpFields,
  );

  return createOsdkObject(sourceValue[ClientRef], objectDef, newProps);
}
