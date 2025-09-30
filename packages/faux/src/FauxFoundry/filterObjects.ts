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

/* eslint-disable no-console */

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { BaseServerObject } from "./BaseServerObject.js";

export function filterObjects(
  objects: BaseServerObject[],
  where: OntologiesV2.SearchJsonQueryV2,
): BaseServerObject[] {
  switch (where.type) {
    case "eq": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const ret = objects.filter((obj) => {
        return obj[field] === where.value;
      });
      return ret;
    }

    case "gt": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] > where.value;
      });
    }

    case "lt": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] < where.value;
      });
    }

    case "gte": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] >= where.value;
      });
    }

    case "lte": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] <= where.value;
      });
    }

    case "in": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return where.value.includes(obj[field]);
      });
    }

    case "contains": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (Array.isArray(fieldValue)) {
          return fieldValue.includes(where.value);
        }
        return false;
      });
    }

    case "and": {
      const { value } = where;
      for (const subWhere of value) {
        objects = filterObjects(objects, subWhere);
      }
      return objects;
    }

    case "or": {
      const { value } = where;
      const results = new Set<BaseServerObject>();
      for (const subWhere of value) {
        const subResults = filterObjects(objects, subWhere);
        for (const result of subResults) {
          results.add(result);
        }
      }
      return Array.from(results);
    }

    case "not": {
      const { value } = where;
      return objects.filter((obj) => {
        return !filterObjects([obj], value).length;
      });
    }

    case "isNull": {
      const { propertyIdentifier, field, value } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return value ? obj[field] == null : obj[field] != null;
      });
    }

    case "startsWith": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          return fieldValue.startsWith(where.value);
        }
        return false;
      });
    }

    case "containsAnyTerm": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(" ");
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          const lowerFieldValue = fieldValue.toLowerCase();
          return searchTerms.some(term => lowerFieldValue.includes(term));
        }
        return false;
      });
    }

    case "containsAllTerms": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(" ");
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          const lowerFieldValue = fieldValue.toLowerCase();
          return searchTerms.every(term => lowerFieldValue.includes(term));
        }
        return false;
      });
    }

    case "containsAllTermsInOrder": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(" ");
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue !== "string") {
          return false;
        }
        if (searchTerms.length === 0) return true;
        return findTermsInOrder(fieldValue.toLowerCase(), searchTerms)
          .foundAllTerms;
      });
    }

    case "containsAllTermsInOrderPrefixLastTerm": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(" ");
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue !== "string") {
          return false;
        }
        const text = fieldValue.toLowerCase();
        if (searchTerms.length === 0) return true;
        if (searchTerms.length === 1) {
          return text.includes(searchTerms[0]);
        }

        // Check all terms except the last one in strict order
        const allButLastTerms = searchTerms.slice(0, -1);
        const { foundAllTerms, lastIndex } = findTermsInOrder(
          text,
          allButLastTerms,
        );
        if (!foundAllTerms) return false;

        // For the last term, check if it appears anywhere after the last found position
        const lastTerm = searchTerms[searchTerms.length - 1];
        const remainingText = text.substring(lastIndex + 1);
        return remainingText.includes(lastTerm);
      });
    }

    case "wildcard": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          return wildcardMatch(fieldValue, where.value);
        }
        return false;
      });
    }
    // TODO: Implement geospatial filter clauses (requires specialized geospatial libraries):
    case "doesNotIntersectBoundingBox":
    case "doesNotIntersectPolygon":
    case "intersectsBoundingBox":
    case "intersectsPolygon":
    case "withinBoundingBox":
    case "withinPolygon":
    case "withinDistanceOf":
      throw new Error(
        `Unhandled where type: ${where.type} in ${JSON.stringify(where)}`,
      );
    default:
      where satisfies never;
  }
  console.error(
    "-=-=-=-=-=-= Unhandled where type: \n"
      + `Unhandled where type: ${JSON.stringify(where)}`,
  );
  throw new Error(
    `Unhandled where type: ${JSON.stringify(where)}`,
  );
}

interface FindTermsInOrderResult {
  foundAllTerms: boolean;
  lastIndex: number;
}

/**
 * Finds all terms in order within text and returns the result with the last found index
 */
function findTermsInOrder(
  text: string,
  terms: string[],
): FindTermsInOrderResult {
  return terms.reduce<FindTermsInOrderResult>(
    (acc, term) => {
      if (!acc.foundAllTerms) return acc;
      const nextIndex = text.indexOf(term, acc.lastIndex + 1);
      return {
        foundAllTerms: nextIndex > acc.lastIndex,
        lastIndex: nextIndex,
      };
    },
    { foundAllTerms: true, lastIndex: -1 },
  );
}

function wildcardMatch(text: string, pattern: string): boolean {
  const escapedPattern = pattern
    .replace(/[.+^${}()|[\]\\]/g, "\\$&") // Escape regex special chars
    .replace(/\*/g, ".*"); // Convert * to .*

  const regex = new RegExp(`^${escapedPattern}$`);
  return regex.test(text);
}
