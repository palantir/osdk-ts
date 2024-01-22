/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import type { ObjectSet, SearchJsonQueryV2 } from "@osdk/gateway/types";
import type {
  ObjectSet as OssObjectSet,
  ObjectSetFilter,
} from "../generated/object-set-service/api/index.js";
import type { ObjectPropertyMapping } from "./ObjectSetListenerWebsocket.js";

export function toConjureObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  objectSet: ObjectSet,
  objectPropertyMapping: ObjectPropertyMapping,
): OssObjectSet {
  switch (objectSet.type) {
    case "base":
      return {
        type: "base",
        base: {
          objectTypeId: objectPropertyMapping.id,
        },
      };
    case "static":
      return {
        type: "static",
        static: {
          objectRids: objectSet.objects,
          provenance: undefined,
        },
      };
    case "reference":
      return {
        type: "referenced",
        referenced: {
          objectSetRid: objectSet.reference,
        },
      };
    case "filter":
      return {
        type: "filtered",
        filtered: {
          objectSet: toConjureObjectSet(
            objectSet.objectSet,
            objectPropertyMapping,
          ),
          runtimeDerivedProperties: undefined,
          filter: mapWhereClauseToObjectSetFilter(
            objectSet.where,
            objectPropertyMapping,
          ),
        },
      };
    case "union":
      return {
        type: "unioned",
        unioned: {
          objectSets: objectSet.objectSets.map(os =>
            toConjureObjectSet(os, objectPropertyMapping)
          ),
        },
      };
    case "intersect":
      return {
        type: "intersected",
        intersected: {
          objectSets: objectSet.objectSets.map(os =>
            toConjureObjectSet(os, objectPropertyMapping)
          ),
        },
      };
    case "subtract":
      return {
        type: "subtracted",
        subtracted: {
          objectSets: objectSet.objectSets.map(os =>
            toConjureObjectSet(os, objectPropertyMapping)
          ),
        },
      };
    case "searchAround":
      throw new Error("not implemented");
  }
}

export async function getObjectSetBaseType(objectSet: ObjectSet) {
  switch (objectSet.type) {
    case "base":
      return objectSet.objectType;
    case "static":
      // TODO: Get the object type from a wire call
      // This is not supported at the moment by the API anyway
      throw new Error("not implemented");
    case "reference":
      // TODO: Get the object type from a wire call
      throw new Error("not implemented");
    case "filter":
      return getObjectSetBaseType(objectSet.objectSet);
    case "union":
      // Technically you can have multiple ObjectTypes but at the moment we only support one
      return getObjectSetBaseType(objectSet.objectSets[0]);
    case "intersect":
      return getObjectSetBaseType(objectSet.objectSets[0]);
    case "subtract":
      return getObjectSetBaseType(objectSet.objectSets[0]);
    case "searchAround":
      // TODO: Get a mapping using the link
      throw new Error("not implemented");
  }
}

function mapWhereClauseToObjectSetFilter(
  objectSetFilter: SearchJsonQueryV2,
  propertyMapping: ObjectPropertyMapping,
): ObjectSetFilter {
  switch (objectSetFilter.type) {
    case "lt":
      return {
        type: "range",
        range: {
          propertyId: propertyMapping.propertyApiNameToIdMapping[
            objectSetFilter.field
          ],
          lt: objectSetFilter.value,
          lte: undefined,
          gt: undefined,
          gte: undefined,
        },
      };
    case "gt":
      return {
        type: "range",
        range: {
          propertyId: propertyMapping.propertyApiNameToIdMapping[
            objectSetFilter.field
          ],
          gt: objectSetFilter.value,
          lte: undefined,
          lt: undefined,
          gte: undefined,
        },
      };
    case "lte":
      return {
        type: "range",
        range: {
          propertyId: propertyMapping.propertyApiNameToIdMapping[
            objectSetFilter.field
          ],
          lte: objectSetFilter.value,
          lt: undefined,
          gt: undefined,
          gte: undefined,
        },
      };
    case "gte":
      return {
        type: "range",
        range: {
          propertyId: propertyMapping.propertyApiNameToIdMapping[
            objectSetFilter.field
          ],
          gte: objectSetFilter.value,
          lt: undefined,
          lte: undefined,
          gt: undefined,
        },
      };
    case "eq":
      return {
        type: "exactMatch",
        exactMatch: {
          propertyId: propertyMapping.propertyApiNameToIdMapping[
            objectSetFilter.field
          ],
          terms: [],
        },
      };
    case "and":
      return {
        type: "and",
        and: {
          filters: objectSetFilter.value.map(filter =>
            mapWhereClauseToObjectSetFilter(filter, propertyMapping)
          ),
        },
      };
    case "or":
      return {
        type: "or",
        or: {
          filters: objectSetFilter.value.map(filter =>
            mapWhereClauseToObjectSetFilter(filter, propertyMapping)
          ),
        },
      };
    case "isNull":
      return {
        type: "not",
        not: {
          filter: {
            type: "hasProperty",
            hasProperty: {
              propertyId: propertyMapping
                .propertyApiNameToIdMapping[objectSetFilter.field],
            },
          },
        },
      };
    case "not":
      return {
        type: "not",
        not: {
          filter: mapWhereClauseToObjectSetFilter(
            objectSetFilter.value,
            propertyMapping,
          ),
        },
      };
    case "contains":
    case "startsWith":
    case "containsAllTermsInOrder":
    case "containsAnyTerm":
    case "containsAllTerms":
    case "withinDistanceOf":
    case "withinBoundingBox":
    case "intersectsBoundingBox":
    case "doesNotIntersectBoundingBox":
    case "withinPolygon":
    case "intersectsPolygon":
    case "doesNotIntersectPolygon":
    case "containsAllTermsInOrderPrefixLastTerm":
      throw new Error("not implemented");
  }
}
