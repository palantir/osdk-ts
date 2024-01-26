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

import { type OntologyDefinition } from "@osdk/api";
import { getLastPoint as gatewayGetLastPoint } from "@osdk/gateway/requests";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { TimeSeriesPoint } from "../baseTypes";
import { Timestamp } from "../baseTypes";
import type { TimeSeriesError } from "../errors";
import { TimeSeriesErrorHandler } from "../errors";
import { handleTimeSeriesError } from "../errors/handlers/ErrorHandlers";
import type { Result } from "../Result";
import { wrapResult } from "./util/wrapResult";

export async function getLastPoint<T extends string | number>(
  client: ClientContext<OntologyDefinition<any>>,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
  return wrapResult(
    async () => {
      const point = await gatewayGetLastPoint(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        objectApiName,
        primaryKey,
        propertyName,
      );
      return {
        time: Timestamp.fromISOString(point.time),
        value: point.value as T,
      };
    },
    e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
  );
}
