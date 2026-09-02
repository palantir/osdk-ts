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

import type { ObjectMetadata } from "@osdk/api";
import type {
  OntologyObjectV2,
  PropertySecurities,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

import type { DerivedPropertyRuntimeMetadata } from "../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { type FetchedObjectTypeDefinition } from "../ontology/OntologyProvider.js";
import { createOsdkObject } from "./convertWireToOsdkObjects/createOsdkObject.js";
import type { InterfaceHolder } from "./convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "./convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "./SimpleOsdkProperties.js";

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
  interfaceApiName: string,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<InterfaceHolder>>;
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder>>;
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder | InterfaceHolder>>;
/**
 * @internal
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid: boolean = false,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder | InterfaceHolder>> {
  fixObjectPropertiesInPlace(objects, forceRemoveRid);

  const ret = [];
  for (const rawObj of objects) {
    // If caller supplied object definitions, use them exclusively instead of
    // hitting the ontology provider - a missing entry is an error rather than a
    // fallback. Only when no map is provided do we defer to the provider, so
    // existing behavior is preserved.
    const objectDef = (
      objectDefsByApiName != null
        ? objectDefsByApiName[rawObj.$apiName]
        : await client.ontologyProvider.getObjectDefinition(rawObj.$apiName)
    ) as FetchedObjectTypeDefinition;
    invariant(objectDef, `Missing definition for '${rawObj.$apiName}'`);

    let osdkObject: ObjectHolder | InterfaceHolder = createOsdkObject(
      client,
      objectDef,
      rawObj,
      derivedPropertyTypeByName,
      propertySecurities,
    );
    if (interfaceApiName) osdkObject = osdkObject.$as(interfaceApiName);

    ret.push(osdkObject);
  }

  return ret;
}

function fixObjectPropertiesInPlace(
  objs: OntologyObjectV2[],
  forceRemoveRid: boolean,
): asserts objs is SimpleOsdkProperties[] {
  for (const obj of objs) {
    if (forceRemoveRid) {
      delete obj.__rid;
    }

    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }

    if (obj.__score) {
      obj.$score = obj.__score;
      delete obj.__score;
    }

    // Backend returns as __apiName but we want to stick to $ structure
    obj.$apiName ??= obj.__apiName;

    // for now these are the same but when we start doing interface projections the $objectType will always be underlying and
    // the $apiName will be for the current view (in current designs)
    obj.$objectType = obj.$apiName;

    // copying over for now as its always returned. In the future, this should just be inferred from underlying
    obj.$primaryKey ??= obj.__primaryKey;
    obj.$title ??= obj.__title;

    // we don't want people to use these
    delete obj.__apiName;
    delete obj.__primaryKey;
    delete obj.__title;
  }
}
