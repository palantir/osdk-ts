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

/** Returns the `field` from a where clause, rejecting the unsupported
 * `propertyIdentifier` form. */
function requireField(
  where: Extract<OntologiesV2.SearchJsonQueryV2, { field?: unknown }>
): string {
  const { propertyIdentifier, field } = where;
  if (propertyIdentifier) {
    console.error("propertyIdentifier not supported", where);
    throw new Error("propertyIdentifier not supported");
  }
  invariant(field);
  return field;
}

function matchesTermsInOrderPrefixLastTerm(
  lowerFieldValue: string,
  searchTerms: string[]
): boolean {
  if (searchTerms.length === 0) return true;

  let lastIndex = -1;
  for (let i = 0; i < searchTerms.length - 1; i++) {
    const index = lowerFieldValue.indexOf(searchTerms[i], lastIndex + 1);
    if (index <= lastIndex) return false;
    lastIndex = index;
  }

  const lastTerm = searchTerms[searchTerms.length - 1];
  const remainingText = lowerFieldValue.substring(lastIndex + 1);
  return remainingText.includes(lastTerm) || remainingText.startsWith(lastTerm);
}

/** Handles the free-text search `where` variants. */
function filterByTermSearch(
  objects: BaseServerObject[],
  where: Extract<
    OntologiesV2.SearchJsonQueryV2,
    {
      type:
        | "containsAnyTerm"
        | "containsAllTerms"
        | "containsAllTermsInOrder"
        | "startsWith"
        | "containsAllTermsInOrderPrefixLastTerm";
    }
  >
): BaseServerObject[] {
  const { propertyIdentifier, field } = where;
  if (propertyIdentifier) {
    console.error("propertyIdentifier not supported", where);
    throw new Error("propertyIdentifier not supported");
  }
  invariant(field);
  const searchTerms = where.value.toLowerCase().split(/\s+/u);
  const matches = (
    predicate: (lowerFieldValue: string) => boolean
  ): BaseServerObject[] =>
    objects.filter((obj) => {
      const fieldValue = obj[field];
      return (
        typeof fieldValue === "string" && predicate(fieldValue.toLowerCase())
      );
    });

  switch (where.type) {
    case "containsAnyTerm":
      return matches((lfv) => searchTerms.some((term) => lfv.includes(term)));
    case "containsAllTerms":
      return matches((lfv) => searchTerms.every((term) => lfv.includes(term)));
    case "containsAllTermsInOrder":
      return matches((lfv) => {
        let lastIndex = -1;
        return searchTerms.every((term) => {
          const index = lfv.indexOf(term, lastIndex + 1);
          if (index > lastIndex) {
            lastIndex = index;
            return true;
          }
          return false;
        });
      });
    case "startsWith":
    case "containsAllTermsInOrderPrefixLastTerm":
      return matches((lfv) =>
        matchesTermsInOrderPrefixLastTerm(lfv, searchTerms)
      );
  }
}

export function filterObjects(
  objects: BaseServerObject[],
  where: OntologiesV2.SearchJsonQueryV2
): BaseServerObject[] {
  switch (where.type) {
    case "eq": {
      const field = requireField(where);
      const ret = objects.filter((obj) => {
        return obj[field] === where.value;
      });
      return ret;
    }

    case "gt": {
      const field = requireField(where);
      return objects.filter((obj) => {
        return obj[field] > where.value;
      });
    }

    case "lt": {
      const field = requireField(where);
      return objects.filter((obj) => {
        return obj[field] < where.value;
      });
    }

    case "gte": {
      const field = requireField(where);
      return objects.filter((obj) => {
        return obj[field] >= where.value;
      });
    }

    case "lte": {
      const field = requireField(where);
      return objects.filter((obj) => {
        return obj[field] <= where.value;
      });
    }

    case "in": {
      const field = requireField(where);
      return objects.filter((obj) => {
        return where.value.includes(obj[field]);
      });
    }

    case "contains": {
      const field = requireField(where);
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
        // Empty strings are also considered null to match the behavior of the backend
        const v = obj[field];
        const isEmpty = v == null || v === "";
        return value ? isEmpty : !isEmpty;
      });
    }

    case "containsAnyTerm":
    case "containsAllTerms":
    case "containsAllTermsInOrder":
    case "startsWith":
    case "containsAllTermsInOrderPrefixLastTerm":
      return filterByTermSearch(objects, where);

    case "regex": {
      const field = requireField(where);
      // oxlint-disable-next-line require-unicode-regexp -- dynamic pattern; adding the u flag could change matching or throw on patterns that are valid without it
      const pattern = new RegExp(where.value);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          return pattern.test(fieldValue);
        }
        return false;
      });
    }

    case "wildcard":
    case "interval":
    case "relativeDateRange":
    // TODO: Implement geospatial filter clauses (require specialized geospatial libraries):
    case "doesNotIntersectBoundingBox":
    case "doesNotIntersectPolygon":
    case "intersectsBoundingBox":
    case "intersectsPolygon":
    case "withinBoundingBox":
    case "withinPolygon":
    case "withinDistanceOf":
    case "geoShapeV2":
      throw new Error(
        `Unhandled where type: ${where.type} in ${JSON.stringify(where)}`
      );
    default:
      where satisfies never;
  }
  console.error(
    "-=-=-=-=-=-= Unhandled where type: \n" +
      `Unhandled where type: ${JSON.stringify(where)}`
  );
  throw new Error(`Unhandled where type: ${JSON.stringify(where)}`);
}
