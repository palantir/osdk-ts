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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../MinimalClientContext.js";

export async function extractObjectOrInterfaceType(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
): Promise<
  ObjectOrInterfaceDefinition | undefined
> {
  return (await extractObjectOrInterfaceTypeInternal(
    clientCtx,
    objectSet,
  ));
}

/* @internal
* Returns the resultant interface type of the object set, undefined if it's an object type
*/
async function extractObjectOrInterfaceTypeInternal(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
): Promise<
  ObjectOrInterfaceDefinition | undefined
> {
  switch (objectSet.type) {
    case "searchAround": {
      const def = await extractObjectOrInterfaceTypeInternal(
        clientCtx,
        objectSet.objectSet,
      );
      if (def === undefined) {
        return undefined;
      }
      const objOrInterfaceDef = def.type === "object"
        ? await clientCtx.ontologyProvider.getObjectDefinition(
          def.apiName,
        )
        : await clientCtx.ontologyProvider.getInterfaceDefinition(
          def.apiName,
        );
      const linkDef = objOrInterfaceDef.links[objectSet.link];
      invariant(linkDef, `Missing link definition for '${objectSet.link}'`);

      return objOrInterfaceDef.type === "object"
        ? {
          apiName: objOrInterfaceDef.links[objectSet.link].targetType,
          type: "object",
        }
        : {
          apiName: objOrInterfaceDef.links[objectSet.link].targetTypeApiName,
          type: objOrInterfaceDef.links[objectSet.link].targetType,
        };
    }
    case "withProperties": {
      return extractObjectOrInterfaceTypeInternal(
        clientCtx,
        objectSet.objectSet,
      );
    }
    case "methodInput":
      return undefined;
    case "base":
      return { type: "object", apiName: objectSet.objectType };
    case "interfaceBase":
      return { type: "interface", apiName: objectSet.interfaceType };
    case "filter":
    case "asBaseObjectTypes":
    case "asType":
    case "nearestNeighbors":
      return extractObjectOrInterfaceTypeInternal(
        clientCtx,
        objectSet.objectSet,
      );
    case "intersect":
    case "subtract":
    case "union":
      const objectSets = objectSet.objectSets;
      const objectSetTypes = await Promise.all(
        objectSets.map((os) =>
          extractObjectOrInterfaceTypeInternal(
            clientCtx,
            os,
          )
        ),
      );

      const filteredObjectTypes = objectSetTypes.filter(Boolean);
      invariant(
        filteredObjectTypes.length === 1,
        "Can only have one object type when doing intersects, subtract, union",
      );
      return filteredObjectTypes[0];
    case "static":
    case "reference":
      // Static and reference object sets are always intersected with a base object set, so we can just return undefined.
      return undefined;
    // We don't have to worry about new object sets being added and doing a runtime break and breaking people since the OSDK is always constructing these.
    case "interfaceLinkSearchAround":
      const def = await extractObjectOrInterfaceTypeInternal(
        clientCtx,
        objectSet.objectSet,
      );
      if (def === undefined) {
        return undefined;
      }
      const objOrInterfaceDef = def.type === "object"
        ? await clientCtx.ontologyProvider.getObjectDefinition(
          def.apiName,
        )
        : await clientCtx.ontologyProvider.getInterfaceDefinition(
          def.apiName,
        );
      const linkDef = objOrInterfaceDef.links[objectSet.interfaceLink];
      invariant(
        linkDef,
        `Missing link definition for '${objectSet.interfaceLink}'`,
      );
      return objOrInterfaceDef.type === "object"
        ? {
          apiName: objOrInterfaceDef.links[objectSet.interfaceLink].targetType,
          type: "object",
        }
        : {
          apiName:
            objOrInterfaceDef.links[objectSet.interfaceLink].targetTypeApiName,
          type: objOrInterfaceDef.links[objectSet.interfaceLink].targetType,
        };
    default:
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type for Runtime Derived Properties`,
      );
  }
}
