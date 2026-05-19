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
  defineObject,
  type OacDatasourceConfig,
  type OacObjectTypeDefinition,
  type OacPropertiesShape,
  type OacPropertyDatasourceMapping,
  type OacPropertyDefinitionShape,
} from "@osdk/maker";

const dsl = createRuntimeDslBuilder();

// Paste a full ontology DSL object-type body here.
((O: typeof dsl) => {
  const datasource = O.datasource.dataset(
    "ri.foundry.main.dataset.cf223273-8f81-47bb-b794-e95d8debb3ce",
  );

  const mwaltherTestAiFdePsgs = O.objectType(
    {
      id: "znarnoqq.id-41ddfb08-604f-4f1f-9147-810b885d79ac",
      apiName: "mwaltherTestAiFdePsgs",
      displayName: "Mwalther Test AI FDE PSGs",
      pluralDisplayName: "Mwalther Test AI FDE PSGs",
      properties: {
        id: {
          propertyTypeId: "id",
          type: O.types.string,
          display: { displayName: "ID" },
          datasource: {
            type: "primaryKey",
            columns: [datasource.column("primary-key")],
          },
        },
        age: {
          propertyTypeId: "age",
          type: O.types.integer,
          display: { displayName: "Age" },
        },
        ageAcl: {
          propertyTypeId: "age-acl",
          type: O.types.string,
          display: { displayName: "Age ACL" },
        },
        dateOfBirth: {
          propertyTypeId: "date-of-birth",
          type: O.types.date,
          display: { displayName: "Date of Birth" },
        },
        dateOfBirthAcl: {
          propertyTypeId: "date-of-birth-acl",
          type: O.types.string,
          display: { displayName: "Date of Birth ACL" },
        },
        usCitizen: {
          propertyTypeId: "us-citizen",
          type: O.types.boolean,
          display: { displayName: "US Citizen" },
        },
        usCitizenAcl: {
          propertyTypeId: "us-citizen-acl",
          type: { type: "decimal", string: {}},
          display: { displayName: "US Citizen ACL" },
        },
      },
      primaryKey: "id",
      titleProperty: "id",
      displayMetadata: { description: "foo bar baz" },
      allowEdits: true,
      datasources: [datasource],
    },
  );

  void mwaltherTestAiFdePsgs;
})(dsl);

function createRuntimeDslBuilder() {
  return {
    types: {
      string: { type: "string" },
      boolean: { type: "boolean" },
      integer: { type: "integer" },
      long: { type: "long" },
      short: { type: "short" },
      byte: { type: "byte" },
      double: { type: "double" },
      float: { type: "float" },
      decimal: (args?: { precision?: number; scale?: number }) => ({
        type: "decimal",
        ...args,
      }),
      date: { type: "date" },
      timestamp: { type: "timestamp" },
      geohash: { type: "geohash" },
      geoshape: { type: "geoshape" },
      attachment: { type: "attachment" },
      marking: (markingType: "mandatory" | "CBAC") => ({
        type: "marking",
        markingType,
      }),
      cipherText: (args?: { defaultCipherChannelRid?: string }) => ({
        type: "cipherText",
        ...args,
      }),
      array: (elementType: Record<string, unknown>) => ({
        type: "array",
        elementType,
      }),
      struct: (config: Record<string, unknown>) => ({
        type: "struct",
        ...config,
      }),
      unsupported: () => ({ type: "unsupported" }),
    },
    datasource: {
      dataset: (rid: string) => makeTabularDatasource("dataset", rid),
      restrictedView: (rid: string) =>
        makeTabularDatasource("restrictedView", rid),
      stream: (rid: string) => makeTabularDatasource("stream", rid),
      table: (rid: string) => makeTabularDatasource("table", rid),
      unsupported: (datasourceRid: string) => ({
        type: "unsupported",
        datasourceRid,
        unsupported: () => ({ type: "unsupported", datasourceRid }),
      }),
      redacted: () => ({ type: "redacted" }),
    },
    objectType: <T extends Record<string, unknown>>(config: T): T => {
      defineObject(toOacObjectTypeDefinition(config));
      return config;
    },
    linkType: {
      oneToMany: <T extends Record<string, unknown>>(config: T) => ({
        type: "oneToMany",
        ...config,
      }),
      manyToMany: <T extends Record<string, unknown>>(config: T) => ({
        type: "manyToMany",
        ...config,
      }),
      objectBacked: <T extends Record<string, unknown>>(config: T) => ({
        type: "objectBacked",
        ...config,
      }),
    },
  } as const;
}

function makeTabularDatasource(
  type: "dataset" | "restrictedView" | "stream" | "table",
  backingDatasourceRid: string,
) {
  return {
    type,
    backingDatasourceRid,
    column: (column: string) => ({ type, backingDatasourceRid, column }),
    userEdits: () => ({ type, backingDatasourceRid }),
  } as const;
}

function toOacObjectTypeDefinition(
  config: Record<string, unknown>,
): OacObjectTypeDefinition {
  const interfaceImplementations = config.interfaceImplementations;
  if (
    interfaceImplementations != null
    && (!Array.isArray(interfaceImplementations)
      || interfaceImplementations.length > 0)
  ) {
    throw new Error(
      "The full-DSL paste compiler does not support interface implementations yet.",
    );
  }

  return {
    apiName: requireString(config.apiName, "apiName"),
    displayName: requireString(config.displayName, "displayName"),
    pluralDisplayName: requireString(
      config.pluralDisplayName,
      "pluralDisplayName",
    ),
    displayMetadata: config.displayMetadata as
      | OacObjectTypeDefinition["displayMetadata"]
      | undefined,
    properties: toOacProperties(
      requireRecord(config.properties, "properties"),
    ),
    primaryKey: requireString(config.primaryKey, "primaryKey"),
    titleProperty: requireString(config.titleProperty, "titleProperty"),
    status: config.status as OacObjectTypeDefinition["status"] | undefined,
    allowEdits: config.allowEdits as boolean | undefined,
    datasources: Array.isArray(config.datasources)
      ? config.datasources.map(toOacDatasourceConfig)
      : undefined,
  } satisfies OacObjectTypeDefinition;
}

function toOacProperties(
  properties: Record<string, unknown>,
): OacPropertiesShape {
  return Object.fromEntries(
    Object.entries(properties).map(([apiName, property]) => [
      apiName,
      toOacProperty(requireRecord(property, `properties.${apiName}`)),
    ]),
  );
}

function toOacProperty(
  property: Record<string, unknown>,
): OacPropertyDefinitionShape {
  if ("sharedPropertyTypeRid" in property) {
    throw new Error(
      "The full-DSL paste compiler needs shared property API names, not shared property RIDs.",
    );
  }

  const { propertyTypeId: _propertyTypeId, datasource, ...rest } = property;
  return {
    ...rest,
    datasource: datasource
      ? toOacPropertyDatasource(requireRecord(datasource, "datasource"))
      : undefined,
  } as OacPropertyDefinitionShape;
}

function toOacDatasourceConfig(
  datasource: unknown,
): OacDatasourceConfig {
  const record = requireRecord(datasource, "datasource");
  const type = requireString(record.type, "datasource.type");
  switch (type) {
    case "dataset":
    case "restrictedView":
    case "table":
      return { type };
    case "stream":
      return {
        type,
        retentionPeriod: record.retentionPeriod as string | undefined,
      };
    case "unsupported":
      throw new Error("Unsupported object datasources cannot compile to OAC.");
    default:
      throw new Error(`Unsupported object datasource type: ${type}`);
  }
}

function toOacPropertyDatasource(
  datasource: Record<string, unknown>,
): OacPropertyDatasourceMapping {
  const type = requireString(datasource.type, "datasource.type");
  switch (type) {
    case "primaryKey":
      return {
        type: "primaryKey",
        columns: requireArray(datasource.columns, "datasource.columns").map(
          column => toOacPrimaryKeyColumn(requireRecord(column, "column")),
        ),
      };
    case "dataset":
    case "restrictedView":
    case "stream":
    case "table":
      return typeof datasource.column === "string"
        ? { type, column: datasource.column }
        : { type };
    case "unsupported":
      return { type: "unsupported" };
    case "redacted":
      return { type: "redacted" };
    default:
      throw new Error(`Unsupported property datasource type: ${type}`);
  }
}

function toOacPrimaryKeyColumn(
  datasource: Record<string, unknown>,
): Extract<OacPropertyDatasourceMapping, { type: "primaryKey" }>["columns"][0] {
  const type = requireString(datasource.type, "datasource.type");
  switch (type) {
    case "dataset":
    case "restrictedView":
    case "stream":
    case "table":
      if (typeof datasource.column !== "string") {
        throw new Error("Primary key datasource mappings must use columns.");
      }
      return { type, column: datasource.column };
    case "redacted":
      return { type: "redacted" };
    default:
      throw new Error(
        `Invalid primary key datasource column mapping: ${type}`,
      );
  }
}

function requireRecord(value: unknown, label: string): Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Expected ${label} to be an object.`);
  }
  return value as Record<string, unknown>;
}

function requireArray(value: unknown, label: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new Error(`Expected ${label} to be an array.`);
  }
  return value;
}

function requireString(value: unknown, label: string): string {
  if (typeof value !== "string") {
    throw new Error(`Expected ${label} to be a string.`);
  }
  return value;
}
