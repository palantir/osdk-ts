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

import type { ObjectMetadata } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../MinimalClientContext.js";

/* @internal
* Returns a tuple of the derived property definitions and the object type that the derived property is defined on.
*/
export async function extractRdpDefinition(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
  methodInputObjectType: string,
): Promise<
  [Record<string, ObjectMetadata.Property>, string]
> {
  const result: Record<string, ObjectMetadata.Property> = {};

  switch (objectSet.type) {
    case "searchAround": {
      const [definitions, childObjectType] = await extractRdpDefinition(
        clientCtx,
        objectSet.objectSet,
        methodInputObjectType,
      );
      const objDef = await clientCtx.ontologyProvider.getObjectDefinition(
        childObjectType,
      );
      const linkDef = objDef.links[objectSet.link];
      invariant(linkDef, `Missing link definition for '${objectSet.link}'`);
      return [
        { ...result, ...definitions },
        objDef.links[objectSet.link].targetType,
      ];
    }
    case "withProperties": {
      // These are the definitions and current object type for all object set operations prior to the definition (e.g. filter, pivotTo, etc.)
      const [definitions, childObjectType] = await extractRdpDefinition(
        clientCtx,
        objectSet.objectSet,
        methodInputObjectType,
      );

      for (
        const [name, definition] of Object.entries(objectSet.derivedProperties)
      ) {
        if (definition.type !== "selection") {
          continue;
        }

        switch (definition.operation.type) {
          case "collectList":
          case "collectSet":
          case "get":
            // This is the object set construction for the derived property definition construction. We pass in childObjectType so that when we reach MethodInputObjectSet, we know where to start looking.
            const [_, operationLevelObjectType] = await extractRdpDefinition(
              clientCtx,
              definition.objectSet,
              childObjectType,
            );
            const objDef = await clientCtx.ontologyProvider.getObjectDefinition(
              operationLevelObjectType,
            );

            result[name] =
              objDef.properties[definition.operation.selectedPropertyApiName];

          default:
            continue;
        }
      }
      return [{ ...result, ...definitions }, childObjectType];
    }
    case "methodInput":
      return [{}, methodInputObjectType];
    case "base":
      return [{}, objectSet.objectType];
    case "interfaceBase":
      return [{}, objectSet.interfaceType];
    case "filter":
    case "asBaseObjectTypes":
    case "asType":
    case "nearestNeighbors":
      return extractRdpDefinition(
        clientCtx,
        objectSet.objectSet,
        methodInputObjectType,
      );
    // These will throw in OSS so we should throw here so no request is made
    case "intersect":
    case "static":
    case "subtract":
    case "union":
    case "reference":
      return [{}, ""];
    // We don't have to worry about new object sets being added and breaking people since the OSDK is always constructing these.
    default:
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type for Runtime Derived Properties`,
      );
  }
}
