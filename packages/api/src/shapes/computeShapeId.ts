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

/**
 * Input for computing a content-based shape ID.
 */
interface ShapeIdInput {
  baseTypeApiName: string;
  props: Record<string, ShapePropertyConfig>;
  derivedLinks: readonly ShapeDerivedLinkDef[];
}

/**
 * Computes a content-based hash for a shape definition.
 * This ensures cache key stability - shapes with identical data requirements
 * will have the same ID regardless of how they were created.
 *
 * What's hashed (affects data):
 * - Base type API name
 * - Selected properties and their nullability ops
 * - Derived link ObjectSet definitions
 * - Target shapes for derived links
 *
 * What's NOT hashed (doesn't affect cached data):
 * - Debug names
 * - Transform functions (they're pure transforms on same data)
 * - Default values (applied at runtime, don't affect network requests)
 */
export function computeShapeId(input: ShapeIdInput): string {
  const canonical = canonicalizeShapeInput(input);
  const jsonString = JSON.stringify(canonical);
  return simpleHash(jsonString);
}

/**
 * Creates a canonical representation of a shape for hashing.
 */
function canonicalizeShapeInput(
  input: ShapeIdInput,
): Record<string, unknown> {
  // Sort property keys for deterministic ordering
  const sortedPropKeys = Object.keys(input.props).sort();
  const canonicalProps: Record<string, string> = {};

  for (const key of sortedPropKeys) {
    const config = input.props[key];
    // Only include the nullability operation type, not the actual values
    // (transforms and defaults don't affect what data is fetched)
    canonicalProps[key] = config.nullabilityOp.type;
  }

  // Canonicalize derived links
  const canonicalLinks = input.derivedLinks.map((link) => ({
    name: link.name,
    objectSetDef: canonicalizeObjectSetDef(link.objectSetDef),
    // Recursively include target shape's ID (but not the full definition)
    targetShapeId: link.targetShape.__shapeId,
  }));

  // Sort links by name for deterministic ordering
  canonicalLinks.sort((a, b) => a.name.localeCompare(b.name));

  return {
    baseType: input.baseTypeApiName,
    props: canonicalProps,
    links: canonicalLinks,
  };
}

/**
 * Canonicalizes an ObjectSet definition for hashing.
 */
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
    result.where = canonicalizeWhereClause(def.where);
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

/**
 * Canonicalizes a where clause for hashing.
 * We sort keys and handle nested structures.
 */
function canonicalizeWhereClause(
  clause: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const sortedKeys = Object.keys(clause).sort();

  for (const key of sortedKeys) {
    const value = clause[key];
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        result[key] = value.map((item) =>
          typeof item === "object" && item != null
            ? canonicalizeWhereClause(item as Record<string, unknown>)
            : item
        );
      } else {
        result[key] = canonicalizeWhereClause(value as Record<string, unknown>);
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Simple hash function for generating shape IDs.
 * Uses a djb2-like algorithm for good distribution.
 */
function simpleHash(str: string): string {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
  }

  // Convert to positive hex string
  const positiveHash = hash >>> 0;
  return positiveHash.toString(16).padStart(8, "0");
}
