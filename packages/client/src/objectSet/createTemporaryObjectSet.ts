/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import * as OntologyObjectSets from "@osdk/foundry.ontologies/OntologyObjectSet";

import type { MinimalClient } from "../MinimalClientContext.js";
import { normalizeInterfaceLinkSearchArounds } from "../util/normalizeInterfaceLinkSearchArounds.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
import { getWireObjectSet } from "./createObjectSet.js";

export async function createTemporaryObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(
  client: MinimalClient,
  objectSet:
    | WireObjectSet
    | (unknown extends CompileTimeMetadata<Q>["objectSet"]
        ? ObjectSet<Q>
        : CompileTimeMetadata<Q>["objectSet"]),
): Promise<string> {
  const response = await OntologyObjectSets.createTemporary(
    client,
    await client.ontologyRid,
    {
      objectSet: await normalizeInterfaceLinkSearchArounds(
        client,
        isWireObjectSet(objectSet) ? objectSet : getWireObjectSet(objectSet),
      ),
    },
    { branch: client.branch },
  );
  return response.objectSetRid;
}
