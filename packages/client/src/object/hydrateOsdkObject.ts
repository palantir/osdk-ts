/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectMetadata, Osdk } from "@osdk/api";
import type {
  OntologyObjectV2,
  PropertySecurities,
} from "@osdk/foundry.ontologies";

import type { Client } from "../Client.js";
import { additionalContext } from "../Client.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

/**
 * Hydrates raw wire objects into OSDK object instances without going through a
 * network fetch.
 *
 * When supplied, the `objectDefsByApiName` map (object type api name -> object
 * definition) is used exclusively to resolve each object's type, avoiding calls
 * to the ontology provider; an object whose api name is missing from the map
 * throws. When the map is omitted, definitions are resolved via the ontology
 * provider.
 *
 * Unstable API. Do not depend on this outside of experimental usage.
 *
 * @param client - the OSDK client
 * @param objects - the raw wire objects to hydrate
 * @param objectDefsByApiName - optional map of object type api name to its
 * definition. When provided, every object's api name must be present.
 * @param propertySecurities - optional property securities for the objects
 */
export async function hydrateOsdkObject(
  client: Client,
  objects: OntologyObjectV2[],
  objectDefsByApiName?: Record<string, ObjectMetadata>,
  propertySecurities?: PropertySecurities[]
): Promise<Array<Osdk.Instance<any>>> {
  return convertWireToOsdkObjects(
    client[additionalContext],
    objects,
    /* interfaceApiName */ undefined,
    /* derivedPropertyTypeByName */ {},
    propertySecurities,
    /* forceRemoveRid */ undefined,
    /* selectedProps */ undefined,
    /* strictNonNull */ undefined,
    /* interfaceToObjectTypeMappings */ undefined,
    /* interfaceToObjectTypeMappingsV2 */ undefined,
    objectDefsByApiName
  ) as unknown as Promise<Array<Osdk.Instance<any>>>;
}
