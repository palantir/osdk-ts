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

import type {
  ObjectSet as OssObjectSet,
  ObjectSetFilter,
} from "@osdk/client.unstable";
import type { ObjectSet, SearchJsonQueryV2 } from "@osdk/internal.foundry.core";
import type { ObjectPropertyMapping } from "../__unstable/ConjureSupport.js";
import { conjureUnionType } from "./conjureUnionType.js";

/** @internal */
export function toConjureObjectSet(
  objectSet: ObjectSet,
  objectPropertyMapping: ObjectPropertyMapping,
): OssObjectSet {
  switch (objectSet.type) {
    case "base":
      return conjureUnionType("base", {
        objectTypeId: objectPropertyMapping.id,
      });
    case "static":
      return conjureUnionType("static", {
        objectRids: objectSet.objects as string[],
        provenance: undefined,
      });

    case "reference":
      return conjureUnionType("referenced", {
        objectSetRid: objectSet.reference,
      });

    case "filter":
      return conjureUnionType("filtered", {
        objectSet: toConjureObjectSet(
          objectSet.objectSet,
          objectPropertyMapping,
        ),
        runtimeDerivedProperties: undefined,
        filter: mapWhereClauseToObjectSetFilter(
          objectSet.where,
          objectPropertyMapping,
        ),
      });
    case "union":
      return conjureUnionType("unioned", {
        objectSets: objectSet.objectSets.map(os =>
          toConjureObjectSet(os, objectPropertyMapping)
        ),
      });
    case "intersect":
      return conjureUnionType("intersected", {
        objectSets: objectSet.objectSets.map(os =>
          toConjureObjectSet(os, objectPropertyMapping)
        ),
      });
    case "subtract":
      return conjureUnionType("subtracted", {
        objectSets: objectSet.objectSets.map(os =>
          toConjureObjectSet(os, objectPropertyMapping)
        ),
      });
    case "searchAround":
    case "asBaseObjectTypes":
    case "asType":
    case "interfaceBase":
    case "withProperties":
    case "methodInput":
      throw new Error("not implemented");
  }
}

/** @internal */
export async function getObjectSetBaseType(
  objectSet: ObjectSet,
) {
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
    case "asBaseObjectTypes":
    case "asType":
    case "interfaceBase":
      throw new Error("not implemented");
  }
}

function mapWhereClauseToObjectSetFilter(
  objectSetFilter: SearchJsonQueryV2,
  propertyMapping: ObjectPropertyMapping,
): ObjectSetFilter {
  switch (objectSetFilter.type) {
    case "lt":
      return conjureUnionType("range", {
        propertyId: propertyMapping.propertyApiNameToIdMapping[
          objectSetFilter.field
        ],
        lt: objectSetFilter.value,
        lte: undefined,
        gt: undefined,
        gte: undefined,
      });
    case "gt":
      return conjureUnionType("range", {
        propertyId: propertyMapping.propertyApiNameToIdMapping[
          objectSetFilter.field
        ],
        gt: objectSetFilter.value,
        lte: undefined,
        lt: undefined,
        gte: undefined,
      });
    case "lte":
      return conjureUnionType("range", {
        propertyId: propertyMapping.propertyApiNameToIdMapping[
          objectSetFilter.field
        ],
        lte: objectSetFilter.value,
        lt: undefined,
        gt: undefined,
        gte: undefined,
      });
    case "gte":
      return conjureUnionType("range", {
        propertyId: propertyMapping.propertyApiNameToIdMapping[
          objectSetFilter.field
        ],
        gte: objectSetFilter.value,
        lt: undefined,
        lte: undefined,
        gt: undefined,
      });

    case "eq":
      return conjureUnionType("exactMatch", {
        propertyId: propertyMapping.propertyApiNameToIdMapping[
          objectSetFilter.field
        ],
        terms: [objectSetFilter.value],
      });
    case "and":
      return conjureUnionType("and", {
        filters: objectSetFilter.value.map(filter =>
          mapWhereClauseToObjectSetFilter(filter, propertyMapping)
        ),
      });
    case "or":
      return conjureUnionType("or", {
        filters: objectSetFilter.value.map(filter =>
          mapWhereClauseToObjectSetFilter(filter, propertyMapping)
        ),
      });
    case "isNull":
      return conjureUnionType("not", {
        filter: {
          type: "hasProperty",
          hasProperty: {
            propertyId: propertyMapping
              .propertyApiNameToIdMapping[objectSetFilter.field],
          },
        },
      });
    case "not":
      return conjureUnionType("not", {
        filter: mapWhereClauseToObjectSetFilter(
          objectSetFilter.value,
          propertyMapping,
        ),
      });
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
    case "in":
      throw new Error("not implemented");
  }
}
