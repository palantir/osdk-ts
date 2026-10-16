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

import type { ObjectTypeDefinition } from "@osdk/api";
import type {
  AgentDefinitionVersion,
  DataType,
  ObjectReferenceType,
  StructField,
} from "@osdk/foundry.agents";
import * as AgentDefinitionVersions from "@osdk/foundry.agents/AgentDefinitionVersion";
import type { Ontology } from "@osdk/foundry.ontologies";
import * as ObjectSets from "@osdk/foundry.ontologies/OntologyObjectSet";
import * as Ontologies from "@osdk/foundry.ontologies/OntologyV2";

import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";
import { createAsyncClientCache } from "../object/Cache.js";
import {
  createObjectSet,
  getWireObjectSet,
  isObjectSet,
} from "../objectSet/createObjectSet.js";
import { createQueryObjectResponse } from "../queries/applyQuery.js";
import { normalizeInterfaceLinkSearchArounds } from "../util/normalizeInterfaceLinkSearchArounds.js";

const metadata = new WeakMap<
  ClientCacheKey,
  Map<string, AgentDefinitionVersion>
>();
const ontologies = createAsyncClientCache<string, Ontology>((client, rid) =>
  Ontologies.get(client, rid),
);

export async function loadAgentSchema(
  client: MinimalClient,
  apiName: string,
  version: string,
): Promise<AgentDefinitionVersion> {
  let cache = metadata.get(client.clientCacheKey);
  if (!cache) metadata.set(client.clientCacheKey, (cache = new Map()));
  const key = JSON.stringify([await client.ontologyRid, apiName, version]);
  const cached = cache.get(key);
  if (cached) return cached;
  const schema = await AgentDefinitionVersions.get(client, apiName, version, {
    ontology: await client.ontologyRid,
    preview: true,
  });
  cache.set(key, schema);
  return schema;
}

function record(value: unknown): Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Expected an object in agent data");
  }
  return value as Record<string, unknown>;
}

async function validateObjectTypeOntology(
  client: MinimalClient,
  type: ObjectReferenceType,
): Promise<void> {
  const ontology = await ontologies.get(client, await client.ontologyRid);
  if (type.ontologyApiName !== ontology.apiName) {
    throw new Error(
      `Agent object type ${type.objectTypeApiName} belongs to ontology ${type.ontologyApiName}, expected ${ontology.apiName}`,
    );
  }
}

export async function convertAgentFields(
  client: MinimalClient,
  fields: StructField[],
  value: unknown,
  direction: "input" | "output",
  objectSetClient: MinimalClient = client,
): Promise<Record<string, unknown>> {
  const entries = record(value);
  const types = new Map(fields.map((field) => [field.name, field.dataType]));
  return Object.fromEntries(
    await Promise.all(
      Object.entries(entries).map(async ([name, data]) => [
        name,
        types.has(name)
          ? await convertAgentData(
              client,
              types.get(name)!,
              data,
              direction,
              objectSetClient,
            )
          : data,
      ]),
    ),
  );
}

export async function convertAgentData(
  client: MinimalClient,
  type: DataType,
  value: unknown,
  direction: "input" | "output",
  objectSetClient: MinimalClient = client,
): Promise<unknown> {
  if (value == null) return value;
  switch (type.type) {
    case "nullable":
      return convertAgentData(
        client,
        type.wrappedType,
        value,
        direction,
        objectSetClient,
      );
    case "list":
      if (!Array.isArray(value))
        throw new Error("Expected an array in agent data");
      return Promise.all(
        value.map((item) =>
          convertAgentData(
            client,
            type.elementType,
            item,
            direction,
            objectSetClient,
          ),
        ),
      );
    case "record":
      return Object.fromEntries(
        await Promise.all(
          Object.entries(record(value)).map(async ([key, item]) => [
            key,
            await convertAgentData(
              client,
              type.valueType,
              item,
              direction,
              objectSetClient,
            ),
          ]),
        ),
      );
    case "struct":
      return convertAgentFields(
        client,
        type.fields,
        value,
        direction,
        objectSetClient,
      );
    case "discriminatedUnion": {
      const data = record(value);
      const member = type.members.find(
        (candidate) =>
          candidate.discriminatorValue === data[type.discriminatorKey],
      );
      return member
        ? convertAgentFields(
            client,
            member.fields,
            data,
            direction,
            objectSetClient,
          )
        : data;
    }
    case "object": {
      await validateObjectTypeOntology(client, type);
      const objectType = await client.ontologyProvider.getObjectDefinition(
        type.objectTypeApiName,
      );
      if (direction === "input") {
        const primaryKey =
          typeof value === "object" ? record(value).$primaryKey : value;
        if (typeof primaryKey !== "string" && typeof primaryKey !== "number")
          throw new Error("Expected an OSDK object or primary key");
        return {
          ontologyRid: await client.ontologyRid,
          objectTypeApiName: objectType.apiName,
          primaryKey: { [objectType.primaryKeyApiName]: primaryKey },
        };
      }
      const reference = record(value);
      const primaryKey = record(reference.primaryKey)[
        objectType.primaryKeyApiName
      ];
      if (typeof primaryKey !== "string" && typeof primaryKey !== "number")
        throw new Error("Invalid agent object reference");
      const definition: ObjectTypeDefinition = {
        type: "object",
        apiName: objectType.apiName,
      };
      return createQueryObjectResponse(primaryKey, definition);
    }
    case "objectSet": {
      await validateObjectTypeOntology(client, type);
      if (direction === "input") {
        if (typeof value !== "object" || !isObjectSet(value))
          throw new Error("Expected an OSDK object set");
        const result = await ObjectSets.createTemporary(
          client,
          await client.ontologyRid,
          {
            objectSet: await normalizeInterfaceLinkSearchArounds(
              client,
              getWireObjectSet(value),
            ),
          },
        );
        return result.objectSetRid;
      }
      if (typeof value !== "string")
        throw new Error("Expected an object set RID");
      return createObjectSet(
        { type: "object", apiName: type.objectTypeApiName },
        objectSetClient,
        {
          type: "intersect",
          objectSets: [
            { type: "base", objectType: type.objectTypeApiName },
            { type: "reference", reference: value },
          ],
        },
      );
    }
    default:
      return value;
  }
}
