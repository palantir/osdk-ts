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

import type {
  ObjectOrInterfaceKeysFrom,
  ObjectOrInterfacePropertyKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import { loadObjectSetV2 } from "@osdk/gateway/requests";
import type { LoadObjectSetRequestV2, ObjectSet } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

export interface SelectArg<
  O extends OntologyDefinition<any>,
  K extends ObjectOrInterfaceKeysFrom<O>,
  L = ObjectOrInterfacePropertyKeysFrom<O, K>,
> {
  select?: readonly L[];
}

export interface FetchPageOrThrowArgs<
  O extends OntologyDefinition<any>,
  K extends ObjectOrInterfaceKeysFrom<O>,
  L = ObjectOrInterfacePropertyKeysFrom<O, K>,
> extends SelectArg<O, K, L> {
  nextPageToken?: string;
  pageSize?: number;
}

export async function fetchPageOrThrow<
  O extends OntologyDefinition<any>,
  T extends ObjectOrInterfaceKeysFrom<O>,
  const A extends FetchPageOrThrowArgs<
    O,
    T
  >,
>(
  client: ClientContext<O>,
  objectType: T & string,
  args: A,
  objectSet: ObjectSet = {
    type: "base",
    objectType,
  },
): Promise<
  PageResult<
    OsdkObjectFrom<
      T,
      O,
      A["select"] extends readonly string[] ? A["select"][number]
        : ObjectOrInterfacePropertyKeysFrom<O, T>
    >
  >
> {
  const body: LoadObjectSetRequestV2 = {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
    select: ((args?.select as string[] | undefined) ?? []), // FIXME?
  };

  if (args?.nextPageToken) {
    body.pageToken = args.nextPageToken;
  }

  if (args?.pageSize != null) {
    body.pageSize = args.pageSize;
  }

  const r = await loadObjectSetV2(
    createOpenApiRequest(
      client.stack,
      client.fetch as typeof fetch,
    ),
    client.ontology.metadata.ontologyApiName,
    body,
  );

  convertWireToOsdkObjects(client, r.data);

  // any is okay here because we have properly converted the wire objects via prototypes
  // which don't type out correctly.
  return r as any;
}
