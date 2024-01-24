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

import type { OntologyDefinition } from "@osdk/api";
import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import type { ListLinkedObjectsResponseV2 } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { OntologyObject } from "../../baseTypes/index.js";
import { convertWireToOsdkObject } from "../../objects/convertWireToOsdkObject.js";
import type { WireOntologyObjectV2 } from "../WireOntologyObjectV2.js";

export async function* iterateLinkedObjects<T extends OntologyObject>(
  client: ClientContext<OntologyDefinition<any>>,
  sourceApiName: string,
  primaryKey: any,
  linkTypeApiName: string,
  options?: { pageSize?: number },
): AsyncGenerator<T, any, unknown> {
  let nextPageToken;
  do {
    const page: ListLinkedObjectsResponseV2 = await listLinkedObjectsV2(
      createOpenApiRequest(client.stack, client.fetch),
      client.ontology.metadata.ontologyApiName,
      sourceApiName,
      primaryKey,
      linkTypeApiName,
      {
        pageSize: options?.pageSize,
        pageToken: nextPageToken,
        select: [],
      },
    );

    for (const object of page.data) {
      yield convertWireToOsdkObject(
        client,
        object as WireOntologyObjectV2<T["__apiName"]>,
      ) as unknown as T;
    }

    nextPageToken = page.nextPageToken;
  } while (nextPageToken);
}
