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

import type {
  ShapeDerivedLinkDef,
  ShapeLinkObjectSetDef,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

interface ShapeIdInput {
  baseTypeApiName: string;
  props: Record<string, ShapePropertyConfig>;
  derivedLinks: readonly ShapeDerivedLinkDef[];
}

function sortedStringify(obj: unknown): string {
  return JSON.stringify(
    obj,
    (_, v) =>
      v && typeof v === "object" && !Array.isArray(v)
        ? Object.fromEntries(
          Object.entries(v).sort(([a], [b]) => a.localeCompare(b)),
        )
        : v,
  );
}

export function computeShapeId(input: ShapeIdInput): string {
  const canonical = canonicalizeShapeInput(input);
  return simpleHash(JSON.stringify(canonical));
}

function canonicalizeShapeInput(
  input: ShapeIdInput,
): Record<string, unknown> {
  const sortedPropKeys = Object.keys(input.props).sort();
  const canonicalProps: Record<string, string> = {};

  for (const key of sortedPropKeys) {
    const config = input.props[key];
    canonicalProps[key] = config.nullabilityOp.type;
  }

  const canonicalLinks = input.derivedLinks.map((link) => ({
    name: link.name,
    objectSetDef: canonicalizeObjectSetDef(link.objectSetDef),
    targetShapeId: link.targetShape.__shapeId,
  }));

  canonicalLinks.sort((a, b) => a.name.localeCompare(b.name));

  return {
    baseType: input.baseTypeApiName,
    props: canonicalProps,
    links: canonicalLinks,
  };
}

function canonicalizeObjectSetDef(
  def: ShapeLinkObjectSetDef,
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    segments: def.segments.map((seg) => ({
      type: seg.type,
      linkName: seg.linkName,
      sourceType: seg.sourceType,
    })),
  };

  if (def.where) {
    result.where = JSON.parse(sortedStringify(def.where));
  }

  if (def.orderBy && def.orderBy.length > 0) {
    result.orderBy = def.orderBy.map((o) => ({
      property: o.property,
      direction: o.direction,
    }));
  }

  if (def.limit !== undefined) {
    result.limit = def.limit;
  }

  if (def.distinct) {
    result.distinct = true;
  }

  if (def.setOperations && def.setOperations.length > 0) {
    result.setOperations = def.setOperations.map((op) => ({
      type: op.type,
      other: canonicalizeObjectSetDef(op.other),
    }));
  }

  return result;
}

function simpleHash(str: string): string {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
  }

  const positiveHash = hash >>> 0;
  return positiveHash.toString(16).padStart(8, "0");
}
