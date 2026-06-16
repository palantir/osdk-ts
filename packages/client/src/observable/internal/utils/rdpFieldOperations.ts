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
 * The fresh value being written, paired with the two things that define which
 * of its keys are derived (RDP) fields and which it is authoritative for:
 * `rdpFields` is the derived-field set of its cache key, and `selectFields`, if
 * present, is the base properties it actually loaded (a partial `$select`).
 */
export interface ReconcileSource {
  value: ObjectHolder;
  rdpFields: ReadonlySet<string>;
  selectFields?: ReadonlySet<string>;
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
 * Base properties (those defined by the object schema) resolve by union with
 * the source winning: the target's loaded base props are the baseline so a
 * partial source does not drop fields loaded under a wider select, then the
 * source overlays the base props it loaded. When the source carries a
 * `selectFields` set, only those source base props are authoritative.
 *
 * Derived (RDP) field names never appear in `objectDef.properties` at runtime,
 * so this never touches them; that is handled by `assignDerivedFields`.
 */
function assignBaseProperties(
  into: SimpleOsdkProperties,
  objectDef: FetchedObjectTypeDefinition,
  source: ReconcileSource,
  sourceProps: SimpleOsdkProperties,
  target: ReconcileTarget,
  targetProps: SimpleOsdkProperties | undefined,
): void {
  if (targetProps) {
    for (const key of Object.keys(targetProps)) {
      if (key in objectDef.properties && !target.rdpFields.has(key)) {
        into[key] = targetProps[key];
      }
    }
  }

  for (const key of Object.keys(sourceProps)) {
    const authoritative = source.selectFields === undefined
      || source.selectFields.has(key);
    if (
      key in objectDef.properties && !source.rdpFields.has(key)
      && authoritative
    ) {
      into[key] = sourceProps[key];
    }
  }
}

/**
 * Derived (RDP) fields resolve by the rdp sets, the only authority for them at
 * runtime. The result carries exactly the target's derived fields:
 *   shared (in both sets): the source wins, including the absent case, which
 *     clears a derived value that became null;
 *   target-only: the source never computed it, so the cached value is kept.
 * A field only the source computed is not in the result's set, so it is dropped.
 */
function assignDerivedFields(
  into: SimpleOsdkProperties,
  source: ReconcileSource,
  sourceProps: SimpleOsdkProperties,
  target: ReconcileTarget,
  targetProps: SimpleOsdkProperties | undefined,
): void {
  for (const field of target.rdpFields) {
    if (source.rdpFields.has(field)) {
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
 * cached at some key. Every property resolves by its universe: base properties
 * by schema authority (union, source wins), derived fields by the rdp sets. The
 * result is the source's identity when reconciling would be a no-op.
 */
export function reconcileObject(
  source: ReconcileSource,
  target: ReconcileTarget,
): ObjectHolder {
  if (
    target.value === undefined
    && source.selectFields === undefined
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

  const newProps = systemFields(sourceProps, targetProps);
  assignBaseProperties(
    newProps,
    objectDef,
    source,
    sourceProps,
    target,
    targetProps,
  );
  assignDerivedFields(newProps, source, sourceProps, target, targetProps);

  return createOsdkObject(source.value[ClientRef], objectDef, newProps);
}
