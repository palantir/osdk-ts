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

import type { DataType } from "@osdk/foundry.agents";

import type { MinimalClient } from "../MinimalClientContext.js";
import { isObjectSet } from "../objectSet/createObjectSet.js";
import { createTemporaryObjectSet } from "../objectSet/createTemporaryObjectSet.js";
import {
  assertRecord,
  checkOntology,
  getPropertyPath,
  remapFields,
} from "./dataValueAgentsUtils.js";
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
      try {
        await checkOntology(
          client,
          desiredType.ontologyApiName,
          path,
          "argument",
        );
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
      } catch (cause) {
        throw new Error(
          `Failed to convert agent argument "${path}" to an object reference`,
          { cause },
        );
      }
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
      try {
        await checkOntology(
          client,
          desiredType.ontologyApiName,
          path,
          "argument",
        );
        // TODO(mhogberg): Update the agent APIs to accept both object set objects and object set RIDs and
        //  remove the conversion here.
        return await createTemporaryObjectSet(client, value);
      } catch (cause) {
        throw new Error(
          `Failed to convert agent argument "${path}" to an object set RID`,
          { cause },
        );
      }
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
      assertRecord(value, path, "argument");
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
      assertRecord(value, path, "argument");
      return await remapFields(
        value,
        client,
        desiredType.fields,
        path,
        toDataValueAgents,
      );

    case "discriminatedUnion": {
      assertRecord(value, path, "argument");
      const member = desiredType.members.find(
        (candidate) =>
          candidate.discriminatorValue === value[desiredType.discriminatorKey],
      );
      return await remapFields(
        value,
        client,
        member?.fields ?? [],
        path,
        toDataValueAgents,
      );
    }

    default:
      return value;
  }
}
