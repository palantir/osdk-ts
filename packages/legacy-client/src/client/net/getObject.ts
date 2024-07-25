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
import { getObjectV2 } from "@osdk/gateway/requests";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { OntologyObject } from "../baseTypes/index.js";
import {
  GetObjectErrorHandler,
  handleGetObjectError,
} from "../errors/index.js";
import type { GetObjectError } from "../errors/index.js";
import { convertWireToOsdkObject } from "../objects/convertWireToOsdkObject.js";
import type { Result } from "../Result.js";
import { wrapResult } from "./util/wrapResult.js";
import type { WireOntologyObjectV2 } from "./WireOntologyObjectV2.js";

export async function getObject<T extends OntologyObject>(
  client: ClientContext<OntologyDefinition<T["$apiName"]>>,
  objectApiName: string,
  primaryKey: T["$primaryKey"],
  selectedProperties: ReadonlyArray<keyof T> = [],
): Promise<Result<T, GetObjectError>> {
  return wrapResult(
    async () =>
      getObjectWithoutErrors(
        client,
        objectApiName,
        primaryKey,
        selectedProperties,
      ),
    e => handleGetObjectError(new GetObjectErrorHandler(), e, e.parameters),
  );
}

export async function getObjectWithoutErrors<T extends OntologyObject>(
  client: ClientContext<OntologyDefinition<T["$apiName"]>>,
  objectApiName: string,
  primaryKey: T["$primaryKey"],
  selectedProperties: ReadonlyArray<keyof T> = [],
): Promise<T> {
  const object = await getObjectV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    objectApiName,
    encodeURIComponent(primaryKey.toString()),
    {
      select: selectedProperties.map(x => x.toString()),
    },
  ) as WireOntologyObjectV2<T["$apiName"]>;

  return convertWireToOsdkObject(
    client,
    object,
  ) as unknown as T;
}
