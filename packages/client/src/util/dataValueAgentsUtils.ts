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

export async function remapFields(
  value: Record<string, unknown>,
  client: MinimalClient,
  fields: ReadonlyArray<StructField>,
  path: string,
  convertValue: (
    value: unknown,
    client: MinimalClient,
    desiredType: DataType,
    path: string,
  ) => Promise<unknown>,
): Promise<Record<string, unknown>> {
  const types = new Map(fields.map((field) => [field.name, field.dataType]));
  return Object.fromEntries(
    await Promise.all(
      Object.entries(value).map(async ([key, entry]) => {
        const desiredType = types.get(key);
        if (desiredType === undefined) {
          return [key, entry];
        }
        return [
          key,
          await convertValue(
            entry,
            client,
            desiredType,
            getPropertyPath(path, key),
          ),
        ];
      }),
    ),
  );
}

export function assertRecord(
  value: unknown,
  path: string,
  valueKind: "argument" | "value",
): asserts value is Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(
      path === ""
        ? `Invalid agent ${valueKind}: expected an object.`
        : `Invalid agent ${valueKind} "${path}": expected an object.`,
    );
  }
}

export function getPropertyPath(path: string, key: string): string {
  if (/^[a-zA-Z_$][\w$]*$/u.test(key)) {
    return path === "" ? key : `${path}.${key}`;
  }
  return `${path}[${JSON.stringify(key)}]`;
}

export async function checkOntology(
  client: MinimalClient,
  ontologyApiName: string,
  path: string,
  valueKind: "argument" | "value",
): Promise<void> {
  const clientOntologyApiName = await getOntologyApiName(client);
  if (ontologyApiName !== clientOntologyApiName) {
    throw new Error(
      `Agent ${valueKind} "${path}" references ontology "${ontologyApiName}", but the client uses ontology "${clientOntologyApiName}".`,
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
