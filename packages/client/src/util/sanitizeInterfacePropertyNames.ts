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
  ObjectSet,
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { extractNamespace } from "../internal/conversions/extractNamespace.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { extractObjectOrInterfaceType } from "./extractObjectOrInterfaceType.js";

/* @internal
* Sanitizes property names in filter where clauses by removing namespaces from
* Interface Defined Properties (IDPs) that shouldn't have them.
*/
export async function sanitizeInterfacePropertyNames(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
): Promise<ObjectSet> {
  switch (objectSet.type) {
    case "filter": {
      // Get the interface type for this object set
      const interfaceType = await extractObjectOrInterfaceType(
        clientCtx,
        objectSet.objectSet,
      );

      // Recursively sanitize the nested object set
      const sanitizedObjectSet = await sanitizeInterfacePropertyNames(
        clientCtx,
        objectSet.objectSet,
      );

      // Only sanitize if we have an interface type
      if (interfaceType?.type === "interface") {
        const fullInterfaceDef = await clientCtx.ontologyProvider
          .getInterfaceDefinition(
            interfaceType.apiName,
          );
        const interfaceUnmodifiedProperties = new Set(
          Object.keys(fullInterfaceDef.properties),
        );
        const [interfaceNamespace] = extractNamespace(interfaceType.apiName);

        // Sanitize the where clause
        const sanitizedWhere = await sanitizeWhereClause(
          objectSet.where,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        );

        return {
          type: "filter",
          objectSet: sanitizedObjectSet,
          where: sanitizedWhere,
        };
      }

      return {
        type: "filter",
        objectSet: sanitizedObjectSet,
        where: objectSet.where,
      };
    }

    case "searchAround":
    case "withProperties":
    case "asBaseObjectTypes":
    case "nearestNeighbors":
    case "interfaceLinkSearchAround":
    case "asType":
      return {
        ...objectSet,
        objectSet: await sanitizeInterfacePropertyNames(
          clientCtx,
          objectSet.objectSet,
        ),
      };

    case "intersect":
    case "subtract":
    case "union": {
      const sanitizedObjectSets = await Promise.all(
        objectSet.objectSets.map((os) =>
          sanitizeInterfacePropertyNames(clientCtx, os)
        ),
      );
      return {
        ...objectSet,
        objectSets: sanitizedObjectSets,
      };
    }

    case "base":
    case "interfaceBase":
    case "static":
    case "reference":
    case "methodInput":
      // These types don't have nested object sets
      return objectSet;

    // We don't have to worry about new object sets being added and doing a runtime break and breaking people since the OSDK is always constructing these.
    default:
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type for deriving object or interface type,`,
      );
  }
}

/**
 * Sanitizes property names in a where clause by removing namespaces from IDPs
 */
async function sanitizeWhereClause(
  where: SearchJsonQueryV2,
  interfaceNamespace: string | undefined,
  interfaceUnmodifiedProperties: Set<string>,
): Promise<SearchJsonQueryV2> {
  switch (where.type) {
    case "and":
    case "or": {
      const sanitizedValue = await Promise.all(
        where.value.map((clause) =>
          sanitizeWhereClause(
            clause,
            interfaceNamespace,
            interfaceUnmodifiedProperties,
          )
        ),
      );
      return { ...where, value: sanitizedValue };
    }

    case "not":
      return {
        ...where,
        value: await sanitizeWhereClause(
          where.value,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        ),
      };

    case "eq":
    case "lt":
    case "lte":
    case "gt":
    case "gte":
    case "contains":
    case "isNull":
    case "in":
    case "startsWith":
    case "wildcard":
    case "regex":
    case "containsAllTerms":
    case "containsAnyTerm":
    case "containsAllTermsInOrder":
    case "containsAllTermsInOrderPrefixLastTerm":
    case "withinDistanceOf":
    case "withinBoundingBox":
    case "intersectsBoundingBox":
    case "doesNotIntersectBoundingBox":
    case "withinPolygon":
    case "intersectsPolygon":
    case "doesNotIntersectPolygon":
    case "relativeDateRange":
    case "interval": {
      if ("field" in where && where.field != null) {
        const sanitizedField = sanitizePropertyName(
          where.field,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        );
        return { ...where, field: sanitizedField };
      }

      if ("propertyIdentifier" in where && where.propertyIdentifier != null) {
        const sanitizedPropertyIdentifier = sanitizePropertyIdentifier(
          where.propertyIdentifier,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        );
        return {
          ...where,
          propertyIdentifier: sanitizedPropertyIdentifier,
        };
      }
    }

    default:
      // For any other query types, return as-is
      return where;
  }
}

/**
 * Sanitizes a single property name by removing the namespace if it's an IDP
 */
function sanitizePropertyName(
  propertyName: string,
  interfaceNamespace: string | undefined,
  interfaceUnmodifiedProperties: Set<string>,
): string {
  const [fieldNamespace, fieldShortName] = extractNamespace(propertyName);

  // If the property has the same namespace as the interface,
  // and the interface has the property without namespace (IDP),
  // then strip the namespace
  if (
    interfaceNamespace != null
    && fieldNamespace === interfaceNamespace
    && interfaceUnmodifiedProperties.has(fieldShortName)
  ) {
    return fieldShortName;
  }

  return propertyName;
}

function sanitizePropertyIdentifier(
  propertyIdentifier: PropertyIdentifier,
  interfaceNamespace: string | undefined,
  interfaceUnmodifiedProperties: Set<string>,
): PropertyIdentifier {
  switch (propertyIdentifier.type) {
    case "property":
      return {
        ...propertyIdentifier,
        apiName: sanitizePropertyName(
          propertyIdentifier.apiName,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        ),
      };

    case "structField":
      return {
        ...propertyIdentifier,
        propertyApiName: sanitizePropertyName(
          propertyIdentifier.propertyApiName,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        ),
      };

    case "propertyWithLoadLevel":
      return {
        ...propertyIdentifier,
        propertyIdentifier: sanitizePropertyIdentifier(
          propertyIdentifier.propertyIdentifier,
          interfaceNamespace,
          interfaceUnmodifiedProperties,
        ),
      };
    default:
      return propertyIdentifier;
  }
}
