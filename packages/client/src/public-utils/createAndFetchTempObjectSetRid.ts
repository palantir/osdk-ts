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
  CompileTimeMetadata,
  ObjectOrInterfaceDefinition,
  ObjectSet,
} from "@osdk/api";
import { OntologyObjectSets } from "@osdk/internal.foundry.ontologiesv2";
import { additionalContext, type Client } from "../Client.js";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";

/**
 * Fetches a temporary object set RID from the Foundry stack for the given object set.
 *
 * @param client - An OSDK client.
 * @param objectSet - The object set to fetch a RID for.
 * @returns
 */
export async function createAndFetchTempObjectSetRid<
  Q extends ObjectOrInterfaceDefinition,
>(
  client: Client,
  objectSet: unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"],
) {
  const response = await OntologyObjectSets.createTemporary(
    client,
    await client[additionalContext].ontologyRid,
    {
      objectSet: getWireObjectSet(objectSet),
    },
  );
  return response.objectSetRid;
}
