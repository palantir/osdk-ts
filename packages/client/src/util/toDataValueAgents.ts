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

import type { MinimalClient } from "../MinimalClientContext.js";
import { createAsyncClientCache } from "../object/Cache.js";
import { isObjectSet } from "../objectSet/createObjectSet.js";
import { createTemporaryObjectSet } from "../objectSet/createTemporaryObjectSet.js";
import { isObjectSpecifiersObject } from "./isObjectSpecifiersObject.js";
import { isWireObjectSet } from "./WireObjectSet.js";

export function toDataValueAgents(
  value: Record<string, unknown>,
  client: MinimalClient,
  desiredType: Extract<DataType, { type: "struct" }>,
  path?: string,
): Promise<Record<string, unknown>>;
export function toDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType: DataType,
  path?: string,
): Promise<unknown>;
export async function toDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType: DataType,
  path = "",
): Promise<unknown> {
  if (value == null) {
    return value;
  }

  switch (desiredType.type) {
    case "nullable":
      return await toDataValueAgents(
        value,
        client,
        desiredType.wrappedType,
        path,
      );

    case "object": {
      const primaryKey = isObjectSpecifiersObject(value)
        ? value.$primaryKey
        : value;
      if (typeof primaryKey !== "string" && typeof primaryKey !== "number") {
        throw new TypeError(
          `Invalid agent argument "${path}": expected an OSDK object, object identifier, or string or number primary key.`,
        );
      }
      await checkOntology(client, desiredType.ontologyApiName, path);
      const objectTypeApiName = isObjectSpecifiersObject(value)
        ? value.$apiName
        : desiredType.objectTypeApiName;
      const objectTypeDefinition =
        await client.ontologyProvider.getObjectDefinition(objectTypeApiName);
      // TODO(mhogberg): Update the agent APIs to accept simple object primary keys and remove the conversion here.
      return {
        ontologyRid: await client.ontologyRid,
        objectTypeApiName,
        primaryKey: { [objectTypeDefinition.primaryKeyApiName]: primaryKey },
      };
    }

    case "objectSet": {
      if (typeof value === "string") {
        return value;
      }
      if (!isWireObjectSet(value) && !isObjectSet(value)) {
        throw new TypeError(
          `Invalid agent argument "${path}": expected an OSDK ObjectSet, object set definition, or object set RID string.`,
        );
      }
      await checkOntology(client, desiredType.ontologyApiName, path);
      // TODO(mhogberg): Update the agent APIs to accept both object set objects and object set RIDs and
      //  remove the conversion here.
      return await createTemporaryObjectSet(client, value);
    }

    case "list":
      if (!Array.isArray(value)) {
        throw new TypeError(
          `Invalid agent argument "${path}": expected an array.`,
        );
      }
      return await Promise.all(
        value.map((item: unknown, index) =>
          toDataValueAgents(
            item,
            client,
            desiredType.elementType,
            `${path}[${index}]`,
          ),
        ),
      );

    case "record":
      assertRecord(value, path);
      return Object.fromEntries(
        await Promise.all(
          Object.entries(value).map(async ([key, entry]) => [
            key,
            await toDataValueAgents(
              entry,
              client,
              desiredType.valueType,
              getPropertyPath(path, key),
            ),
          ]),
        ),
      );

    case "struct":
      assertRecord(value, path);
      return await remapFields(value, client, desiredType.fields, path);

    case "discriminatedUnion": {
      assertRecord(value, path);
      const member = desiredType.members.find(
        (candidate) =>
          candidate.discriminatorValue === value[desiredType.discriminatorKey],
      );
      return await remapFields(value, client, member?.fields ?? [], path);
    }

    default:
      return value;
  }
}

async function remapFields(
  value: Record<string, unknown>,
  client: MinimalClient,
  fields: ReadonlyArray<StructField>,
  path: string,
): Promise<Record<string, unknown>> {
  const types = new Map(fields.map((field) => [field.name, field.dataType]));
  return Object.fromEntries(
    await Promise.all(
      Object.entries(value).map(async ([key, value]) => {
        const desiredType = types.get(key);
        if (desiredType === undefined) {
          return [key, value];
        }
        return [
          key,
          await toDataValueAgents(
            value,
            client,
            desiredType,
            getPropertyPath(path, key),
          ),
        ];
      }),
    ),
  );
}

function assertRecord(
  value: unknown,
  path: string,
): asserts value is Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(
      path === ""
        ? "Invalid agent argument: expected an object."
        : `Invalid agent argument "${path}": expected an object.`,
    );
  }
}

/**
 * Appends a property key to an argument path, preferring dot notation and falling back to quoted
 * brackets where necessary to disambiguate. For example, "groups" + "engineering" returns groups.engineering,
 * "groups" + "engineering.eu" returns groups["engineering.eu"].
 */
function getPropertyPath(path: string, key: string): string {
  if (/^[a-zA-Z_$][\w$]*$/u.test(key)) {
    return path === "" ? key : `${path}.${key}`;
  }
  return `${path}[${JSON.stringify(key)}]`;
}

async function checkOntology(
  client: MinimalClient,
  ontologyApiName: string,
  path: string,
): Promise<void> {
  const clientOntologyApiName = await getOntologyApiName(client);
  if (ontologyApiName !== clientOntologyApiName) {
    throw new Error(
      `Agent argument "${path}" references ontology "${ontologyApiName}", but the client uses ontology "${clientOntologyApiName}".`,
    );
  }
}

const ontologyApiNameCache = createAsyncClientCache<string, string>(
  async (client, ontologyRid) => {
    return (await Ontologies.get(client, ontologyRid)).apiName;
  },
);

async function getOntologyApiName(client: MinimalClient): Promise<string> {
  return await ontologyApiNameCache.get(client, await client.ontologyRid);
}
