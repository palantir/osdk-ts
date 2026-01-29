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

    case "containsAnyTerm": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(/\s+/);
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
      const searchTerms = where.value.toLowerCase().split(/\s+/);
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
      const searchTerms = where.value.toLowerCase().split(/\s+/);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          const lowerFieldValue = fieldValue.toLowerCase();
          let lastIndex = -1;
          return searchTerms.every(term => {
            const index = lowerFieldValue.indexOf(term, lastIndex + 1);
            if (index > lastIndex) {
              lastIndex = index;
              return true;
            }
            return false;
          });
        }
        return false;
      });
    }

    case "startsWith":
    case "containsAllTermsInOrderPrefixLastTerm": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const searchTerms = where.value.toLowerCase().split(/\s+/);
      return objects.filter((obj) => {
        const fieldValue = obj[field];
        if (typeof fieldValue === "string") {
          const lowerFieldValue = fieldValue.toLowerCase();
          if (searchTerms.length === 0) return true;

          let lastIndex = -1;
          for (let i = 0; i < searchTerms.length - 1; i++) {
            const index = lowerFieldValue.indexOf(
              searchTerms[i],
              lastIndex + 1,
            );
            if (index <= lastIndex) return false;
            lastIndex = index;
          }

          const lastTerm = searchTerms[searchTerms.length - 1];
          const remainingText = lowerFieldValue.substring(lastIndex + 1);
          return remainingText.includes(lastTerm)
            || remainingText.startsWith(lastTerm);
        }
        return false;
      });
    }
    case "regex":
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
