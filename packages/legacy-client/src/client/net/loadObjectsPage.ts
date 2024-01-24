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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import { loadObjectSetV2 } from "@osdk/gateway/requests";
import type { LoadObjectSetRequestV2 } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { ObjectSetDefinition } from "../baseTypes/index.js";
import {
  handleLoadObjectSetError,
  LoadObjectSetErrorHandler,
} from "../errors/index.js";
import type { LoadObjectSetError } from "../errors/index.js";
import { convertWireToOsdkObject } from "../objects/convertWireToOsdkObject.js";
import type { OrderByClause } from "../objectSets/filters/index.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import type { Page } from "../Page.js";
import type { Result } from "../Result.js";
import { wrapResult } from "./util/wrapResult.js";
import type { WireOntologyObjectV2 } from "./WireOntologyObjectV2.js";

export async function loadObjectsPage<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  T extends OsdkLegacyObjectFrom<O, K>,
>(
  client: ClientContext<O>,
  objectApiName: K,
  objectSetDefinition: ObjectSetDefinition,
  orderByClauses: OrderByClause[],
  selectedProperties: ReadonlyArray<keyof T> = [],
  options?: { pageSize?: number; pageToken?: string },
): Promise<Result<Page<T>, LoadObjectSetError>> {
  return wrapResult(
    async () => {
      const page = await loadObjectSetV2(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        mapObjectSetBody(
          objectSetDefinition,
          orderByClauses,
          selectedProperties,
          options,
        ),
      ) as {
        data: WireOntologyObjectV2<T["__apiName"]>[];
        nextPageToken?: string;
      };

      return {
        data: page.data.map(object =>
          convertWireToOsdkObject(
            client,
            object,
          ) as unknown as T
        ),
        nextPageToken: page.nextPageToken,
      };
    },
    e =>
      handleLoadObjectSetError(
        new LoadObjectSetErrorHandler(),
        e,
        e.parameters,
      ),
  );
}

function mapObjectSetBody(
  objectSetDefinition: ObjectSetDefinition,
  orderByClauses: OrderByClause[],
  selectedProperties: ReadonlyArray<any> = [],
  options?: { pageSize?: number; pageToken?: string },
): LoadObjectSetRequestV2 {
  let objectSetBody: LoadObjectSetRequestV2 = {
    objectSet: objectSetDefinition,
    select: selectedProperties.map(x => x.toString()),
  };
  if (orderByClauses && orderByClauses?.length > 0) {
    objectSetBody = { ...objectSetBody, orderBy: { fields: orderByClauses } };
  }
  if (options && options?.pageSize) {
    objectSetBody = { ...objectSetBody, pageSize: options.pageSize };
  }
  if (options && options?.pageToken) {
    objectSetBody = { ...objectSetBody, pageToken: options.pageToken };
  }
  return objectSetBody;
}
