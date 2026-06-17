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
 * The fresh value being written, paired with what the source query is
 * authoritative for: `rdpFields` is the derived-field set it computed, and
 * `loadedBaseFields`, if present, is the base properties it actually loaded.
 * `undefined` means a full load that owns every base property, so an omitted
 * base property is a genuine clear rather than a field that was never fetched.
 */
export interface ReconcileSource {
  value: ObjectHolder;
  rdpFields: ReadonlySet<string>;
  loadedBaseFields?: ReadonlySet<string>;
}

/**
 * The cache entry being written into. `value` is its current cached value (may
 * be undefined on first write) and `rdpFields` is the derived-field set its
 * cache key owns, which determines the derived fields the result carries.
 */
export interface ReconcileTarget {
  value: ObjectHolder | undefined;
  rdpFields: ReadonlySet<string>;
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

function systemFields(
  primary: SimpleOsdkProperties,
  ridFallback: SimpleOsdkProperties | undefined,
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
 * A base property is one defined by the object schema and not a derived (RDP)
 * field of the relevant cache key. The rdp set, not schema membership, is the
 * authority for what is derived: a name can be both a schema property and an
 * rdp field, and when it is the rdp set wins.
 */
function isBaseProperty(
  key: string,
  objectDef: FetchedObjectTypeDefinition,
  rdpFields: ReadonlySet<string>,
): boolean {
  return key in objectDef.properties && !rdpFields.has(key);
}

/**
 * Resolve each of `fields` into `into`. A field the source owns
 * (`ownedBySource === undefined` means it owns all of them) is taken from the
 * source, where an omitted field is left unset so a value that became null
 * clears rather than retaining the stale cached one. A field the source does
 * not own keeps the target's cached value.
 */
function resolveFields(
  into: SimpleOsdkProperties,
  fields: Iterable<string>,
  ownedBySource: ReadonlySet<string> | undefined,
  sourceProps: SimpleOsdkProperties,
  targetProps: SimpleOsdkProperties | undefined,
): void {
  for (const field of fields) {
    if (ownedBySource === undefined || ownedBySource.has(field)) {
      if (field in sourceProps) {
        into[field] = sourceProps[field];
      }
    } else if (targetProps && field in targetProps) {
      into[field] = targetProps[field];
    }
  }
}

/**
 * Reconcile a freshly written `source` object into the `target` currently
 * cached at some key. One rule governs every field: the source wins for a field
 * it owns (an omitted owned field clears), otherwise the target keeps its cached
 * value. The rule runs over the base properties present on either side, then
 * over the target key's derived fields. The result is the source's identity when
 * reconciling would be a no-op.
 */
export function reconcileObject(
  source: ReconcileSource,
  target: ReconcileTarget,
): ObjectHolder {
  if (
    target.value === undefined
    && source.loadedBaseFields === undefined
    && sameMembers(source.rdpFields, target.rdpFields)
  ) {
    return source.value;
  }

  const sourceProps = source
    .value[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const targetProps = target.value?.[UnderlyingOsdkObject] as
    | SimpleOsdkProperties
    | undefined;
  const objectDef = requireObjectDef(source.value[ObjectDefRef], sourceProps);

  const result = systemFields(sourceProps, targetProps);

  // Base properties present on either side; the source's loaded set owns them,
  // and a full load (undefined) owns all of them.
  const baseFields = new Set<string>();
  for (const key of Object.keys(sourceProps)) {
    if (isBaseProperty(key, objectDef, source.rdpFields)) {
      baseFields.add(key);
    }
  }
  if (targetProps) {
    for (const key of Object.keys(targetProps)) {
      if (isBaseProperty(key, objectDef, target.rdpFields)) {
        baseFields.add(key);
      }
    }
  }
  resolveFields(
    result,
    baseFields,
    source.loadedBaseFields,
    sourceProps,
    targetProps,
  );

  // Derived fields the target key carries; the source owns the ones it computed.
  resolveFields(
    result,
    target.rdpFields,
    source.rdpFields,
    sourceProps,
    targetProps,
  );

  return createOsdkObject(source.value[ClientRef], objectDef, result);
}
