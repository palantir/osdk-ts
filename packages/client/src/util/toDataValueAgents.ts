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

import type { DataType, StructField } from "@osdk/foundry.agents";
import * as Ontologies from "@osdk/foundry.ontologies/OntologyV2";
import invariant from "tiny-invariant";

import type { MinimalClient } from "../MinimalClientContext.js";
import { createAsyncClientCache } from "../object/Cache.js";
import { isObjectSet } from "../objectSet/createObjectSet.js";
import { createAndFetchTempObjectSetRid } from "../public-utils/createAndFetchTempObjectSetRid.js";
import { isObjectSpecifiersObject } from "./isObjectSpecifiersObject.js";

export function toDataValueAgents(
  value: Record<string, unknown>,
  client: MinimalClient,
  desiredType: Extract<DataType, { type: "struct" }>,
): Promise<Record<string, unknown>>;
export function toDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType: DataType,
): Promise<unknown>;
export async function toDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType: DataType,
): Promise<unknown> {
  if (value == null) {
    return value;
  }

  switch (desiredType.type) {
    case "nullable":
      return await toDataValueAgents(value, client, desiredType.wrappedType);

    case "object": {
      const primaryKey = isObjectSpecifiersObject(value)
        ? value.$primaryKey
        : value;
      invariant(
        typeof primaryKey === "string" || typeof primaryKey === "number",
        "Expected an OSDK object, object identifier, or primary key for an agent object argument",
      );
      await checkOntology(client, desiredType.ontologyApiName);
      const objectTypeApiName = isObjectSpecifiersObject(value)
        ? value.$apiName
        : desiredType.objectTypeApiName;
      const objectTypeDefinition =
        await client.ontologyProvider.getObjectDefinition(objectTypeApiName);
      return {
        ontologyRid: await client.ontologyRid,
        objectTypeApiName,
        primaryKey: { [objectTypeDefinition.primaryKeyApiName]: primaryKey },
      };
    }

    case "objectSet": {
      invariant(
        typeof value === "object" && isObjectSet(value),
        "Expected an OSDK ObjectSet for an agent object-set argument",
      );
      await checkOntology(client, desiredType.ontologyApiName);
      return await createAndFetchTempObjectSetRid(client, value);
    }

    case "list":
      invariant(
        Array.isArray(value),
        "Expected an array for an agent list argument",
      );
      return await Promise.all(
        value.map((item: unknown) =>
          toDataValueAgents(item, client, desiredType.elementType),
        ),
      );

    case "record":
      assertRecord(value);
      return Object.fromEntries(
        await Promise.all(
          Object.entries(value).map(async ([key, entry]) => [
            key,
            await toDataValueAgents(entry, client, desiredType.valueType),
          ]),
        ),
      );

    case "struct":
      assertRecord(value);
      return await remapFields(value, client, desiredType.fields);

    case "discriminatedUnion": {
      assertRecord(value);
      const member = desiredType.members.find(
        (candidate) =>
          candidate.discriminatorValue === value[desiredType.discriminatorKey],
      );
      return await remapFields(value, client, member?.fields ?? []);
    }

    default:
      return value;
  }
}

async function remapFields(
  value: Record<string, unknown>,
  client: MinimalClient,
  fields: ReadonlyArray<StructField>,
): Promise<Record<string, unknown>> {
  const types = new Map(fields.map((field) => [field.name, field.dataType]));
  return Object.fromEntries(
    await Promise.all(
      Object.entries(value).map(async ([key, value]) => {
        const desiredType = types.get(key);
        if (desiredType === undefined) {
          return [key, value];
        }
        return [key, await toDataValueAgents(value, client, desiredType)];
      }),
    ),
  );
}

function assertRecord(
  value: unknown,
): asserts value is Record<string, unknown> {
  invariant(
    value != null && typeof value === "object" && !Array.isArray(value),
    "Expected an object for an agent struct, record, or union argument",
  );
}

async function checkOntology(
  client: MinimalClient,
  ontologyApiName: string,
): Promise<void> {
  invariant(
    ontologyApiName === (await getOntologyApiName(client)),
    "Agent object and object-set arguments must reference the client's ontology",
  );
}

const ontologyApiNameCache = createAsyncClientCache<string, string>(
  async (client, ontologyRid) => {
    return (await Ontologies.get(client, ontologyRid)).apiName;
  },
);

async function getOntologyApiName(client: MinimalClient): Promise<string> {
  return await ontologyApiNameCache.get(client, await client.ontologyRid);
}
