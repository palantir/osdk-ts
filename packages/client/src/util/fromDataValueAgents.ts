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

import type { AgentDataTypeDefinition } from "@osdk/api/unstable";

import type { MinimalClient } from "../MinimalClientContext.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { createQueryObjectResponse } from "../queries/applyQuery.js";
import {
  assertRecord,
  checkOntology,
  getPropertyPath,
  remapFields,
  wrapConversionError,
} from "./dataValueAgentsUtils.js";

export function fromDataValueAgents(
  value: Record<string, unknown>,
  client: MinimalClient,
  desiredType: Extract<AgentDataTypeDefinition, { type: "struct" }>,
  path?: string,
): Promise<Record<string, unknown>>;
export function fromDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType?: AgentDataTypeDefinition,
  path?: string,
): Promise<unknown>;
export async function fromDataValueAgents(
  value: unknown,
  client: MinimalClient,
  desiredType?: AgentDataTypeDefinition,
  path = "",
): Promise<unknown> {
  if (value == null) {
    return value;
  }

  switch (desiredType?.type) {
    case "object": {
      assertRecord(value, path, "value");
      assertRecord(value.primaryKey, path, "value");
      try {
        await checkOntology(client, desiredType.ontologyApiName, path, "value");
        if (
          value.ontologyRid !== (await client.ontologyRid) ||
          value.objectTypeApiName !== desiredType.object
        ) {
          throw new TypeError(
            "Object reference does not match the schema's ontology and object type",
          );
        }
        const primaryKeys = Object.values(value.primaryKey);
        if (primaryKeys.length !== 1) {
          throw new TypeError(
            `Object reference primaryKey must contain exactly one entry, but received ${primaryKeys.length}`,
          );
        }
        const [primaryKey] = primaryKeys;
        if (typeof primaryKey !== "string" && typeof primaryKey !== "number") {
          throw new TypeError("Expected a string or number primary key");
        }
        return createQueryObjectResponse(primaryKey, {
          type: "object",
          apiName: desiredType.object,
        });
      } catch (cause) {
        throw wrapConversionError(
          `Failed to convert agent value "${path}" to an object identifier`,
          cause,
        );
      }
    }

    case "objectSet": {
      if (typeof value !== "string") {
        throw new TypeError(
          `Invalid agent value "${path}": expected an object set RID.`,
        );
      }
      try {
        await checkOntology(client, desiredType.ontologyApiName, path, "value");
        return createObjectSet(
          { type: "object", apiName: desiredType.objectSet },
          client,
          {
            type: "intersect",
            objectSets: [
              { type: "base", objectType: desiredType.objectSet },
              { type: "reference", reference: value },
            ],
          },
        );
      } catch (cause) {
        throw wrapConversionError(
          `Failed to convert agent value "${path}" to an object set`,
          cause,
        );
      }
    }

    case "array":
      if (!Array.isArray(value)) {
        throw new TypeError(
          `Invalid agent value "${path}": expected an array.`,
        );
      }
      return await Promise.all(
        value.map((item: unknown, index) =>
          fromDataValueAgents(
            item,
            client,
            desiredType.array,
            `${path}[${index}]`,
          ),
        ),
      );

    case "record":
      assertRecord(value, path, "value");
      return Object.fromEntries(
        await Promise.all(
          Object.entries(value).map(async ([key, entry]) => [
            key,
            await fromDataValueAgents(
              entry,
              client,
              desiredType.valueType,
              getPropertyPath(path, key),
            ),
          ]),
        ),
      );

    case "struct":
      assertRecord(value, path, "value");
      return await remapFields(
        value,
        client,
        desiredType.struct,
        path,
        fromDataValueAgents,
      );

    case "discriminatedUnion": {
      assertRecord(value, path, "value");
      const discriminator = value[desiredType.discriminatorKey];
      const member =
        typeof discriminator === "string" &&
        Object.hasOwn(desiredType.members, discriminator)
          ? desiredType.members[discriminator]
          : undefined;
      return await remapFields(
        value,
        client,
        member ?? {},
        path,
        fromDataValueAgents,
      );
    }

    default:
      return value;
  }
}
