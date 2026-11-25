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

// Generated from OmniAPI IR; do not edit.

import { z } from "zod/v4";

export type CoreApiNameLocator = { apiName: string };

export const CoreApiNameLocatorSchema: z.ZodType<CoreApiNameLocator> = z.lazy(
  () => z.strictObject({ apiName: z.string() }),
);

export type CoreArrayFieldTypeDefinition = {
  itemsSchema: CoreFieldSchemaDefinition;
};

export const CoreArrayFieldTypeDefinitionSchema: z.ZodType<CoreArrayFieldTypeDefinition> =
  z.lazy(() =>
    z.strictObject({
      itemsSchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
    }),
  );

export type CoreBinaryTypeDefinition = {};

export const CoreBinaryTypeDefinitionSchema: z.ZodType<CoreBinaryTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreBooleanTypeDefinition = {};

export const CoreBooleanTypeDefinitionSchema: z.ZodType<CoreBooleanTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreBranchNameDefinition = string;

export const CoreBranchNameDefinitionSchema: z.ZodType<CoreBranchNameDefinition> =
  z.lazy(() => z.string());

export type CoreByteTypeDefinition = {};

export const CoreByteTypeDefinitionSchema: z.ZodType<CoreByteTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreChangeDataCaptureConfigurationDefinition = {
  type: "fullRow";
  deletionFieldName: CoreFieldNameDefinition;
  orderingFieldName: CoreFieldNameDefinition;
};

export const CoreChangeDataCaptureConfigurationDefinitionSchema: z.ZodType<CoreChangeDataCaptureConfigurationDefinition> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      z.strictObject({
        type: z.literal("fullRow"),
        deletionFieldName: z.lazy(() => CoreFieldNameDefinitionSchema),
        orderingFieldName: z.lazy(() => CoreFieldNameDefinitionSchema),
      }),
    ]),
  );

export type CoreCustomMetadataDefinition = Record<string, unknown>;

export const CoreCustomMetadataDefinitionSchema: z.ZodType<CoreCustomMetadataDefinition> =
  z.lazy(() => z.record(z.string(), z.unknown()));

export type CoreDatasetLocator = CoreResourceLocator;

export const CoreDatasetLocatorSchema: z.ZodType<CoreDatasetLocator> = z.lazy(
  () => CoreResourceLocatorSchema,
);

export type CoreDateTypeDefinition = {};

export const CoreDateTypeDefinitionSchema: z.ZodType<CoreDateTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreDecimalTypeDefinition = {
  scale?: number | undefined;
  precision?: number | undefined;
};

export const CoreDecimalTypeDefinitionSchema: z.ZodType<CoreDecimalTypeDefinition> =
  z.lazy(() =>
    z.strictObject({
      scale: z.int32().optional(),
      precision: z.int32().optional(),
    }),
  );

export type CoreDoubleTypeDefinition = {};

export const CoreDoubleTypeDefinitionSchema: z.ZodType<CoreDoubleTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreDurationDefinition = {
  value: number;
  unit: CoreTimeUnitDefinition;
};

export const CoreDurationDefinitionSchema: z.ZodType<CoreDurationDefinition> =
  z.lazy(() =>
    z.strictObject({
      value: z.int32(),
      unit: z.lazy(() => CoreTimeUnitDefinitionSchema),
    }),
  );

export type CoreFieldDataTypeDefinition =
  | { type: "boolean" }
  | { type: "byte" }
  | { type: "short" }
  | { type: "integer" }
  | { type: "long" }
  | { type: "float" }
  | { type: "double" }
  | {
      type: "decimal";
      scale?: number | undefined;
      precision?: number | undefined;
    }
  | { type: "string" }
  | {
      type: "map";
      keySchema: CoreFieldSchemaDefinition;
      valueSchema: CoreFieldSchemaDefinition;
    }
  | { type: "array"; itemsSchema: CoreFieldSchemaDefinition }
  | { type: "struct"; subFields: Array<CoreFieldDefinition> }
  | { type: "binary" }
  | { type: "date" }
  | { type: "timestamp" };

export const CoreFieldDataTypeDefinitionSchema: z.ZodType<CoreFieldDataTypeDefinition> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      z.strictObject({ type: z.literal("boolean") }),
      z.strictObject({ type: z.literal("byte") }),
      z.strictObject({ type: z.literal("short") }),
      z.strictObject({ type: z.literal("integer") }),
      z.strictObject({ type: z.literal("long") }),
      z.strictObject({ type: z.literal("float") }),
      z.strictObject({ type: z.literal("double") }),
      z.strictObject({
        type: z.literal("decimal"),
        scale: z.int32().optional(),
        precision: z.int32().optional(),
      }),
      z.strictObject({ type: z.literal("string") }),
      z.strictObject({
        type: z.literal("map"),
        keySchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
        valueSchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
      }),
      z.strictObject({
        type: z.literal("array"),
        itemsSchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
      }),
      z.strictObject({
        type: z.literal("struct"),
        subFields: z.array(z.lazy(() => CoreFieldDefinitionSchema)),
      }),
      z.strictObject({ type: z.literal("binary") }),
      z.strictObject({ type: z.literal("date") }),
      z.strictObject({ type: z.literal("timestamp") }),
    ]),
  );

export type CoreFieldDefinition = {
  name: CoreFieldNameDefinition;
  schema: CoreFieldSchemaDefinition;
};

export const CoreFieldDefinitionSchema: z.ZodType<CoreFieldDefinition> = z.lazy(
  () =>
    z.strictObject({
      name: z.lazy(() => CoreFieldNameDefinitionSchema),
      schema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
    }),
);

export type CoreFieldNameDefinition = string;

export const CoreFieldNameDefinitionSchema: z.ZodType<CoreFieldNameDefinition> =
  z.lazy(() => z.string());

export type CoreFieldSchemaDefinition = {
  nullable: boolean;
  customMetadata?: CoreCustomMetadataDefinition | undefined;
  dataType: CoreFieldDataTypeDefinition;
};

export const CoreFieldSchemaDefinitionSchema: z.ZodType<CoreFieldSchemaDefinition> =
  z.lazy(() =>
    z.strictObject({
      nullable: z.boolean(),
      customMetadata: z
        .lazy(() => CoreCustomMetadataDefinitionSchema)
        .optional(),
      dataType: z.lazy(() => CoreFieldDataTypeDefinitionSchema),
    }),
  );

export type CoreFloatTypeDefinition = {};

export const CoreFloatTypeDefinitionSchema: z.ZodType<CoreFloatTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreFullRowChangeDataCaptureConfigurationDefinition = {
  deletionFieldName: CoreFieldNameDefinition;
  orderingFieldName: CoreFieldNameDefinition;
};

export const CoreFullRowChangeDataCaptureConfigurationDefinitionSchema: z.ZodType<CoreFullRowChangeDataCaptureConfigurationDefinition> =
  z.lazy(() =>
    z.strictObject({
      deletionFieldName: z.lazy(() => CoreFieldNameDefinitionSchema),
      orderingFieldName: z.lazy(() => CoreFieldNameDefinitionSchema),
    }),
  );

export type CoreIdLocator = { id: string };

export const CoreIdLocatorSchema: z.ZodType<CoreIdLocator> = z.lazy(() =>
  z.strictObject({ id: z.string() }),
);

export type CoreIntegerTypeDefinition = {};

export const CoreIntegerTypeDefinitionSchema: z.ZodType<CoreIntegerTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreLongTypeDefinition = {};

export const CoreLongTypeDefinitionSchema: z.ZodType<CoreLongTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreMapFieldTypeDefinition = {
  keySchema: CoreFieldSchemaDefinition;
  valueSchema: CoreFieldSchemaDefinition;
};

export const CoreMapFieldTypeDefinitionSchema: z.ZodType<CoreMapFieldTypeDefinition> =
  z.lazy(() =>
    z.strictObject({
      keySchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
      valueSchema: z.lazy(() => CoreFieldSchemaDefinitionSchema),
    }),
  );

export type CoreMediaSetRidDefinition = string;

export const CoreMediaSetRidDefinitionSchema: z.ZodType<CoreMediaSetRidDefinition> =
  z.lazy(() => z.string());

export type CoreResourceLocator =
  | { type: "id"; id: string }
  | { type: "rid"; rid: string }
  | { type: "apiName"; apiName: string };

export const CoreResourceLocatorSchema: z.ZodType<CoreResourceLocator> = z.lazy(
  () =>
    z.discriminatedUnion("type", [
      z.strictObject({ type: z.literal("id"), id: z.string() }),
      z.strictObject({ type: z.literal("rid"), rid: z.string() }),
      z.strictObject({ type: z.literal("apiName"), apiName: z.string() }),
    ]),
);

export type CoreRidLocator = { rid: string };

export const CoreRidLocatorSchema: z.ZodType<CoreRidLocator> = z.lazy(() =>
  z.strictObject({ rid: z.string() }),
);

export type CoreScheduleLocator = CoreResourceLocator;

export const CoreScheduleLocatorSchema: z.ZodType<CoreScheduleLocator> = z.lazy(
  () => CoreResourceLocatorSchema,
);

export type CoreShortTypeDefinition = {};

export const CoreShortTypeDefinitionSchema: z.ZodType<CoreShortTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreStreamSchemaDefinition = {
  fields: Array<CoreFieldDefinition>;
  keyFieldNames?: Array<CoreFieldNameDefinition> | undefined;
  changeDataCapture?: CoreChangeDataCaptureConfigurationDefinition | undefined;
};

export const CoreStreamSchemaDefinitionSchema: z.ZodType<CoreStreamSchemaDefinition> =
  z.lazy(() =>
    z.strictObject({
      fields: z.array(z.lazy(() => CoreFieldDefinitionSchema)),
      keyFieldNames: z
        .array(z.lazy(() => CoreFieldNameDefinitionSchema))
        .optional(),
      changeDataCapture: z
        .lazy(() => CoreChangeDataCaptureConfigurationDefinitionSchema)
        .optional(),
    }),
  );

export type CoreStringTypeDefinition = {};

export const CoreStringTypeDefinitionSchema: z.ZodType<CoreStringTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreStructFieldTypeDefinition = {
  subFields: Array<CoreFieldDefinition>;
};

export const CoreStructFieldTypeDefinitionSchema: z.ZodType<CoreStructFieldTypeDefinition> =
  z.lazy(() =>
    z.strictObject({
      subFields: z.array(z.lazy(() => CoreFieldDefinitionSchema)),
    }),
  );

export type CoreTableRidDefinition = string;

export const CoreTableRidDefinitionSchema: z.ZodType<CoreTableRidDefinition> =
  z.lazy(() => z.string());

export type CoreTimeUnitDefinition =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";

export const CoreTimeUnitDefinitionSchema: z.ZodType<CoreTimeUnitDefinition> =
  z.lazy(() =>
    z.enum([
      "MILLISECONDS",
      "SECONDS",
      "MINUTES",
      "HOURS",
      "DAYS",
      "WEEKS",
      "MONTHS",
      "YEARS",
    ]),
  );

export type CoreTimestampTypeDefinition = {};

export const CoreTimestampTypeDefinitionSchema: z.ZodType<CoreTimestampTypeDefinition> =
  z.lazy(() => z.strictObject({}));

export type CoreZoneIdDefinition = string;

export const CoreZoneIdDefinitionSchema: z.ZodType<CoreZoneIdDefinition> =
  z.lazy(() => z.string());
