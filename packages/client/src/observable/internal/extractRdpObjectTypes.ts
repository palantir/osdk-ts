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

import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";

/**
 * Extracts all object types that could be traversed through RDP definitions.
 * This is used for Level 2 cache invalidation - we invalidate when any object type
 * that RDPs could potentially traverse to changes.
 */
export function extractRdpObjectTypes(
  rdpMetadata: DerivedPropertyRuntimeMetadata | undefined,
): Set<string> {
  const objectTypes = new Set<string>();

  if (!rdpMetadata) {
    return objectTypes;
  }

  for (const [_, metadata] of Object.entries(rdpMetadata)) {
    extractObjectTypesFromDefinition(metadata.definition, objectTypes);
  }

  return objectTypes;
}

function extractObjectTypesFromDefinition(
  definition: DerivedPropertyDefinition,
  objectTypes: Set<string>,
): void {
  // DerivedPropertyDefinition is for property expressions like add, subtract, etc.
  // The actual object traversals are in the "selection" type with an ObjectSet
  switch (definition.type) {
    case "selection": {
      // Selection operations traverse object sets
      if ("objectSet" in definition && definition.objectSet) {
        extractObjectTypesFromObjectSet(definition.objectSet, objectTypes);
      }
      break;
    }

    case "property":
    case "add":
    case "subtract":
    case "multiply":
    case "divide":
    case "absoluteValue":
    case "negate":
    case "extract":
    case "least":
    case "greatest":
      // These are property operations that don't traverse to other object types
      // They may reference other DerivedPropertyDefinitions recursively but
      // don't introduce new object type dependencies
      break;
  }
}

function extractObjectTypesFromObjectSet(
  objectSet: any, // ObjectSet type from foundry.ontologies
  objectTypes: Set<string>,
): void {
  if (!objectSet) return;

  // Handle different object set types
  if (objectSet.type === "base") {
    // Base object set with an object type ID
    if (objectSet.objectTypeId) {
      objectTypes.add(objectSet.objectTypeId);
    } else if (objectSet.objectTypeApiName) {
      objectTypes.add(objectSet.objectTypeApiName);
    }
  } else if (objectSet.type === "filtered" && objectSet.objectSet) {
    // Filtered object set - recurse into the base
    extractObjectTypesFromObjectSet(objectSet.objectSet, objectTypes);
  } else if (objectSet.type === "union" && objectSet.objectSets) {
    // Union of object sets
    for (const subSet of objectSet.objectSets) {
      extractObjectTypesFromObjectSet(subSet, objectTypes);
    }
  } else if (objectSet.type === "intersect" && objectSet.objectSets) {
    // Intersection of object sets
    for (const subSet of objectSet.objectSets) {
      extractObjectTypesFromObjectSet(subSet, objectTypes);
    }
  } else if (objectSet.type === "subtract") {
    // Subtraction - extract from both sets
    if (objectSet.minuend) {
      extractObjectTypesFromObjectSet(objectSet.minuend, objectTypes);
    }
    if (objectSet.subtrahend) {
      extractObjectTypesFromObjectSet(objectSet.subtrahend, objectTypes);
    }
  } else if (objectSet.type === "searchAround" && objectSet.objectSet) {
    // Search around - extract from base set
    extractObjectTypesFromObjectSet(objectSet.objectSet, objectTypes);
    // Also extract from the linked object type if specified
    if (objectSet.link?.targetObjectTypeId) {
      objectTypes.add(objectSet.link.targetObjectTypeId);
    } else if (objectSet.link?.targetObjectTypeApiName) {
      objectTypes.add(objectSet.link.targetObjectTypeApiName);
    }
  }
}
