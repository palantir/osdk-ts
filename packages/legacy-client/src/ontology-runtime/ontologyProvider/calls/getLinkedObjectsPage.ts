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

import { createOpenApiRequest } from "@osdk/api";
import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import type { OntologyObject } from "../../baseTypes";
import type { ClientContext } from "./ClientContext";

export async function getLinkedObjectsPage<T extends OntologyObject>(
  context: ClientContext,
  sourceApiName: string,
  primaryKey: any,
  linkTypeApiName: string,
  options?: { pageSize?: number; pageToken?: string },
) {
  const pagePromise = await listLinkedObjectsV2(
    createOpenApiRequest(context.client.stack, context.client.fetch),
    context.ontology.metadata.ontologyApiName,
    sourceApiName,
    primaryKey,
    linkTypeApiName,
    {
      pageSize: options?.pageSize,
      pageToken: options?.pageToken,
      select: [],
    },
  );
  return {
    data: pagePromise.data.map(object => {
      return context.createObject<T>(context, linkTypeApiName, object);
    }),
    nextPageToken: pagePromise.nextPageToken,
  };
}
