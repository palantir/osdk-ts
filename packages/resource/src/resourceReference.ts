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

import {
  datasetRefSchema,
  functionRefSchema,
  geotimeIntegrationRefSchema,
  liveDeploymentRefSchema,
  mediaSetRefSchema,
  restrictedViewRefSchema,
  sourceRefSchema,
  streamRefSchema,
  timeSeriesSyncRefSchema,
} from "./schemas.js";
import type {
  DatasetRef,
  FunctionRef,
  GeotimeIntegrationRef,
  LiveDeploymentRef,
  MediaSetRef,
  RestrictedViewRef,
  SourceRef,
  StreamRef,
  TabularSchema,
  TimeSeriesSyncRef,
} from "./types.js";

export interface TabularResourceContract<
  TSchema extends TabularSchema = TabularSchema,
> {
  readonly schema: TSchema;
}

export function createDatasetReference(
  locator: DatasetRef["locator"],
): DatasetRef;
export function createDatasetReference<const TSchema extends TabularSchema>(
  locator: DatasetRef["locator"],
  contract: TabularResourceContract<TSchema>,
): Omit<DatasetRef, "schema"> & TabularResourceContract<TSchema>;
export function createDatasetReference(
  locator: DatasetRef["locator"],
  contract?: TabularResourceContract,
): DatasetRef {
  return Object.freeze(
    datasetRefSchema.parse({
      type: "dataset",
      locator,
      ...(contract?.schema === undefined ? {} : { schema: contract.schema }),
    }),
  );
}

export function createStreamReference(locator: StreamRef["locator"]): StreamRef;
export function createStreamReference<const TSchema extends TabularSchema>(
  locator: StreamRef["locator"],
  contract: TabularResourceContract<TSchema>,
): Omit<StreamRef, "schema"> & TabularResourceContract<TSchema>;
export function createStreamReference(
  locator: StreamRef["locator"],
  contract?: TabularResourceContract,
): StreamRef {
  return Object.freeze(
    streamRefSchema.parse({
      type: "stream",
      locator,
      ...(contract?.schema === undefined ? {} : { schema: contract.schema }),
    }),
  );
}

export function createRestrictedViewReference(
  locator: RestrictedViewRef["locator"],
): RestrictedViewRef;
export function createRestrictedViewReference<
  const TSchema extends TabularSchema,
>(
  locator: RestrictedViewRef["locator"],
  contract: TabularResourceContract<TSchema>,
): Omit<RestrictedViewRef, "schema"> & TabularResourceContract<TSchema>;
export function createRestrictedViewReference(
  locator: RestrictedViewRef["locator"],
  contract?: TabularResourceContract,
): RestrictedViewRef {
  return Object.freeze(
    restrictedViewRefSchema.parse({
      type: "restrictedView",
      locator,
      ...(contract?.schema === undefined ? {} : { schema: contract.schema }),
    }),
  );
}

export function createFunctionReference(
  locator: FunctionRef["locator"],
): FunctionRef {
  return Object.freeze(
    functionRefSchema.parse({
      type: "function",
      locator,
    }),
  );
}

export function createLiveDeploymentReference(
  locator: LiveDeploymentRef["locator"],
): LiveDeploymentRef {
  return Object.freeze(
    liveDeploymentRefSchema.parse({
      type: "liveDeployment",
      locator,
    }),
  );
}

export function createSourceReference(
  locator: SourceRef["locator"],
): SourceRef {
  return Object.freeze(
    sourceRefSchema.parse({
      type: "source",
      locator,
    }),
  );
}

export function createMediaSetReference(
  locator: MediaSetRef["locator"],
): MediaSetRef {
  return Object.freeze(
    mediaSetRefSchema.parse({
      type: "mediaSet",
      locator,
    }),
  );
}

export function createTimeSeriesSyncReference(
  locator: TimeSeriesSyncRef["locator"],
): TimeSeriesSyncRef {
  return Object.freeze(
    timeSeriesSyncRefSchema.parse({
      type: "timeSeriesSync",
      locator,
    }),
  );
}

export function createGeotimeIntegrationReference(
  locator: GeotimeIntegrationRef["locator"],
): GeotimeIntegrationRef {
  return Object.freeze(
    geotimeIntegrationRefSchema.parse({
      type: "geotimeIntegration",
      locator,
    }),
  );
}

export type GenericResourceLocator =
  | {
      type: "apiName";
      namespace?: string;
      apiName: string;
    }
  | {
      type: "rid";
      rid: string;
    };

export type GenericResourceReference = {
  type: string;
  locator: GenericResourceLocator;
};

export function resourceIdentity({
  type,
  locator,
}: GenericResourceReference): string {
  return JSON.stringify(
    locator.type === "rid"
      ? [type, "rid", locator.rid]
      : [type, "apiName", locator.namespace, locator.apiName],
  );
}
