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

import { dictionary } from "@osdk/internal.modeling";
import { z } from "zod/v4";

import type {
  ColumnType,
  DatasetRef,
  DecimalColumnType,
  FunctionRef,
  GeotimeIntegrationRef,
  LiveDeploymentRef,
  MediaSetRef,
  RestrictedViewRef,
  SourceRef,
  StreamRef,
  ResourceRef,
  TabularResourceRef,
  TabularSchema,
  TimeSeriesSyncRef,
} from "./types.js";

const scalarTags = [
  "boolean",
  "byte",
  "short",
  "integer",
  "long",
  "float",
  "double",
  "string",
  "date",
  "timestamp",
  "binary",
] as const;

const decimal = z.strictObject({
  type: z.literal("decimal"),
  precision: z.int32().positive(),
  scale: z.int32(),
  nullable: z.boolean().optional(),
});

export const decimalColumnTypeSchema: z.ZodType<DecimalColumnType> = decimal;

export const columnTypeSchema: z.ZodType<ColumnType> = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.strictObject({
      type: z.literal(scalarTags),
      nullable: z.boolean().optional(),
    }),
    // We can't pass decimalColumnTypeSchema in here directly, which is why we have
    // to define decimal first
    decimal,
    z.strictObject({
      type: z.literal("array"),
      elementType: columnTypeSchema,
      nullable: z.boolean().optional(),
    }),
    z.strictObject({
      type: z.literal("map"),
      keyType: columnTypeSchema,
      valueType: columnTypeSchema,
      nullable: z.boolean().optional(),
    }),
    z.strictObject({
      type: z.literal("struct"),
      fields: dictionary(columnTypeSchema),
      nullable: z.boolean().optional(),
    }),
  ]),
);

export const tabularSchemaSchema: z.ZodType<TabularSchema> = z.strictObject({
  columns: dictionary(columnTypeSchema),
});

const uuid =
  "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
function rid(
  name: string,
  ...formats: [
    readonly [service: string, resourceType: string],
    ...Array<readonly [service: string, resourceType: string]>,
  ]
): z.ZodString {
  const patterns = formats.map(
    ([service, resourceType]) =>
      `ri\\.${z.core.util.escapeRegex(service)}\\.[^.]*\\.${z.core.util.escapeRegex(resourceType)}`,
  );
  const expected = formats.map(
    ([service, resourceType]) =>
      `ri.${service}.<instance>.${resourceType}.<UUID>`,
  );
  return z
    .string()
    .regex(
      new RegExp(`^(?:${patterns.join("|")})\\.${uuid}$`, "u"),
      `Expected a ${name} RID of the form ${expected.join(" or ")}`,
    );
}

export const datasetRidSchema: z.ZodString = rid("dataset", [
  "foundry",
  "dataset",
]);
export const streamRidSchema: z.ZodString = rid("stream", [
  "foundry",
  "stream",
]);
export const restrictedViewRidSchema: z.ZodString = rid("restricted view", [
  "foundry",
  "restricted-view",
]);
export const functionRidSchema: z.ZodString = rid("function", [
  "function-registry",
  "function",
]);
export const liveDeploymentRidSchema: z.ZodString = rid("live deployment", [
  "foundry-ml-live",
  "deployment",
]);
export const mediaSetRidSchema: z.ZodString = rid("media set", [
  "mio",
  "media-set",
]);
export const sourceRidSchema: z.ZodString = rid("source", [
  "magritte",
  "source",
]);
export const timeSeriesSyncRidSchema: z.ZodString = rid("time-series sync", [
  "time-series-catalog",
  "sync",
]);
export const geotimeIntegrationRidSchema: z.ZodString = rid(
  "geotime integration",
  ["geotime-catalog", "integration"],
  ["geotime", "series-integration"],
);

const apiNameLocator = z.strictObject({
  type: z.literal("apiName"),
  namespace: z
    .string()
    .min(1)
    .optional()
    .describe("Omitted means the parent namespace."),
  apiName: z.string().min(1),
});

function locatedBy(ridSchema: z.ZodString) {
  return z.discriminatedUnion("type", [
    apiNameLocator,
    z.strictObject({ type: z.literal("rid"), rid: ridSchema }),
  ]);
}

const dataset = z.strictObject({
  type: z.literal("dataset"),
  locator: locatedBy(datasetRidSchema),
  schema: tabularSchemaSchema.optional(),
});

const stream = z.strictObject({
  type: z.literal("stream"),
  locator: locatedBy(streamRidSchema),
  schema: tabularSchemaSchema.optional(),
});

const restrictedView = z.strictObject({
  type: z.literal("restrictedView"),
  locator: locatedBy(restrictedViewRidSchema),
  schema: tabularSchemaSchema.optional(),
});

const functionReference = z.strictObject({
  type: z.literal("function"),
  locator: locatedBy(functionRidSchema),
});

const liveDeployment = z.strictObject({
  type: z.literal("liveDeployment"),
  locator: locatedBy(liveDeploymentRidSchema),
});

const mediaSet = z.strictObject({
  type: z.literal("mediaSet"),
  locator: locatedBy(mediaSetRidSchema),
});

const source = z.strictObject({
  type: z.literal("source"),
  locator: locatedBy(sourceRidSchema),
});

const timeSeriesSync = z.strictObject({
  type: z.literal("timeSeriesSync"),
  locator: locatedBy(timeSeriesSyncRidSchema),
});

const geotimeIntegration = z.strictObject({
  type: z.literal("geotimeIntegration"),
  locator: locatedBy(geotimeIntegrationRidSchema),
});

export const datasetRefSchema: z.ZodType<DatasetRef> = dataset;
export const streamRefSchema: z.ZodType<StreamRef> = stream;
export const restrictedViewRefSchema: z.ZodType<RestrictedViewRef> =
  restrictedView;
export const functionRefSchema: z.ZodType<FunctionRef> = functionReference;
export const liveDeploymentRefSchema: z.ZodType<LiveDeploymentRef> =
  liveDeployment;
export const mediaSetRefSchema: z.ZodType<MediaSetRef> = mediaSet;
export const sourceRefSchema: z.ZodType<SourceRef> = source;
export const timeSeriesSyncRefSchema: z.ZodType<TimeSeriesSyncRef> =
  timeSeriesSync;
export const geotimeIntegrationRefSchema: z.ZodType<GeotimeIntegrationRef> =
  geotimeIntegration;

export const resourceRefSchema: z.ZodType<ResourceRef> = z.discriminatedUnion(
  "type",
  [
    dataset,
    stream,
    restrictedView,
    functionReference,
    liveDeployment,
    mediaSet,
    source,
    timeSeriesSync,
    geotimeIntegration,
  ],
);
export const tabularResourceRefSchema: z.ZodType<TabularResourceRef> =
  z.discriminatedUnion("type", [dataset, stream, restrictedView]);
