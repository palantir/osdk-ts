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

/* @internal
* Returns the resultant interface or object type of the object set
*/
export async function extractObjectOrInterfaceType(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
): Promise<
  ObjectOrInterfaceDefinition | undefined
> {
  switch (objectSet.type) {
    case "searchAround": {
      const def = await extractObjectOrInterfaceType(
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
      return extractObjectOrInterfaceType(
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
    case "nearestNeighbors":
      return extractObjectOrInterfaceType(
        clientCtx,
        objectSet.objectSet,
      );
    case "asType":
      return {
        type:
          clientCtx.narrowTypeInterfaceOrObjectMapping[objectSet.entityType],
        apiName: objectSet.entityType,
      };
    case "intersect": {
      const objectSets = objectSet.objectSets;
      const objectSetTypes = await Promise.all(
        objectSets.map((os) =>
          extractObjectOrInterfaceType(
            clientCtx,
            os,
          )
        ),
      );

      const filteredObjectTypes = objectSetTypes.filter(Boolean);
      const firstInterfaceType = filteredObjectTypes.find(val =>
        val?.type === "interface"
      );

      invariant(
        firstInterfaceType,
        `Missing interface type in intersect objectset scope'`,
      );
      return firstInterfaceType;
    }
    case "subtract":
    case "union":
      const objectSets = objectSet.objectSets;
      const objectSetTypes = await Promise.all(
        objectSets.map((os) =>
          extractObjectOrInterfaceType(
            clientCtx,
            os,
          )
        ),
      );

      const filteredObjectTypes = objectSetTypes.filter(Boolean);
      const firstObjectType = filteredObjectTypes[0];
      invariant(
        filteredObjectTypes.every(val => {
          return val?.apiName === firstObjectType?.apiName
            && val?.type === firstObjectType?.type;
        }),
        "Can only have one object type when doing subtract, union",
      );

      return filteredObjectTypes[0];
    case "static":
    case "reference":
      // Static and reference object sets are always intersected with a base object set, so we can just return undefined.
      return undefined;
    case "interfaceLinkSearchAround":
      const def = await extractObjectOrInterfaceType(
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
    // We don't have to worry about new object sets being added and doing a runtime break and breaking people since the OSDK is always constructing these.
    default:
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type for deriving object or interface type,`,
      );
  }
}
