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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/internal.foundry";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../ontology/OntologyProvider.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { createOsdkObject } from "./convertWireToOsdkObjects/createOsdkObject.js";

/**
 * If interfaceApiName is not undefined, converts the instances of the
 * interface into their respective
 * underlying concrete types and then returns the $as() representation
 * for the consumers.
 *
 * Otherwise just does the conversion
 *
 * May mutate in place for performance reasons. If you need a clean copy,
 * keep it first.
 *
 * However, you must use the returned value, which will be whatever is correct.
 *
 * @internal
 * @param interfaceApiName - if undefined
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  forceRemoveRid: boolean = false,
): Promise<Osdk<ObjectOrInterfaceDefinition>[]> {
  client.logger?.debug(`START convertWireToOsdkObjects()`);

  fixObjectPropertiesInline(objects, forceRemoveRid);

  const ret = [];
  for (const rawObj of objects) {
    const objectDef = await client.ontologyProvider.getObjectDefinition(
      rawObj.$apiName,
    );
    invariant(objectDef, `Missing definition for '${rawObj.$apiName}'`);

    if (interfaceApiName !== undefined) {
      // API returns interface spt names but we cache by real values
      reframeAsObjectInPlace(objectDef, interfaceApiName, client, rawObj);
    }

    const osdkObject: any = createOsdkObject(client, objectDef, rawObj);
    ret.push(interfaceApiName ? osdkObject.$as(interfaceApiName) : osdkObject);
  }

  client.logger?.debug(`END convertWireToOsdkObjects()`);
  return ret;
}

/**
 * Takes a raw object from the wire (contextually as an interface) and
 * updates the fields to reflect the underlying objectDef instead
 * @param objectDef
 * @param interfaceApiName
 * @param client
 * @param rawObj
 */
function reframeAsObjectInPlace(
  objectDef: FetchedObjectTypeDefinition<any, unknown>,
  interfaceApiName: string,
  client: MinimalClient,
  rawObj: OntologyObjectV2,
) {
  if (objectDef.interfaceMap?.[interfaceApiName] == null) {
    const warning =
      "Interfaces are only supported 'as views' but your metadata object is missing the correct information. This suggests your interfaces have not been migrated to the newer version yet and you cannot use this version of the SDK.";
    if (client.logger) {
      client.logger.warn(warning);
    } else {
      // eslint-disable-next-line no-console
      console.error(`WARNING! ${warning}`);
    }
    throw new Error(warning);
  }

  const newProps: Record<string, any> = {};
  for (
    const [sptProp, regularProp] of Object.entries(
      objectDef.interfaceMap[interfaceApiName],
    )
  ) {
    if (sptProp in rawObj) {
      const value = rawObj[sptProp];
      delete rawObj[sptProp];
      if (value !== undefined) {
        newProps[regularProp] = value;
      }
    }
  }
  Object.assign(rawObj, newProps);

  if (!(objectDef.primaryKeyApiName in rawObj)) {
    rawObj[objectDef.primaryKeyApiName] = rawObj.$primaryKey;
  }
}

function fixObjectPropertiesInline(
  objs: OntologyObjectV2[],
  forceRemoveRid: boolean,
) {
  for (const obj of objs) {
    if (forceRemoveRid) {
      delete obj.__rid;
    }

    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }

    // Backend returns as __apiName but we want to stick to $ structure
    obj.$apiName = obj.__apiName;

    // for now these are the same but when we start doing interface projections the $objectType will always be underlying and
    // the $apiName will be for the current view (in current designs)
    obj.$objectType = obj.__apiName;

    // copying over for now as its always returned. In the future, this should just be inferred from underlying
    obj.$primaryKey = obj.__primaryKey;

    // we don't want people to use these
    delete obj.__apiName;
    delete obj.__primaryKey;
  }
}
