/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDataTypeDefinition } from "@osdk/api";
import { type DataValue } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { MinimalClient } from "../MinimalClientContext.js";
import { isAttachmentUpload } from "../object/AttachmentUpload.js";
import { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";
import { isOsdkBaseObject } from "./isOsdkBaseObject.js";
import { isWireObjectSet } from "./WireObjectSet.js";

/**
 * Marshall user-facing data into the wire DataValue type
 *
 * @see DataValue for the expected payloads
 * @internal
 */
export async function toDataValueQueries(
  value: unknown,
  client: MinimalClient,
  desiredType: QueryDataTypeDefinition,
): Promise<DataValue> {
  if (value == null) {
    return value;
  }

  if (Array.isArray(value) && desiredType.multiplicity) {
    const promiseArray = Array.from(
      value,
      async (innerValue) =>
        await toDataValueQueries(innerValue, client, desiredType),
    );
    return Promise.all(promiseArray);
  }

  switch (desiredType.type) {
    case "attachment": {
      if (isAttachmentUpload(value)) {
        const attachment = await OntologiesV2.Attachments.upload(
          client,
          value,
          {
            filename: value.name,
          },
        );
        return attachment.rid;
      }

      // If it's not an upload, it's just an attachment rid string which we can pass through
      return value;
    }
    case "twoDimensionalAggregation": {
      return {
        groups: value,
      };
    }
    case "threeDimensionalAggregation": {
      return {
        groups: value,
      };
    }

    case "set": {
      if (value instanceof Set) {
        const promiseArray = Array.from(
          value,
          async (innerValue) =>
            await toDataValueQueries(innerValue, client, desiredType["set"]),
        );
        return Promise.all(promiseArray);
      }
      break;
    }
    case "object": {
      if (isOsdkBaseObject(value)) {
        return value.$primaryKey;
      }
      break;
    }
    case "objectSet": {
      // object set (the rid as a string (passes through the last return), or the ObjectSet definition directly)
      if (isWireObjectSet(value)) {
        return value;
      }
      if (isObjectSet(value)) {
        return getWireObjectSet(value);
      }
      break;
    }

    case "struct": {
      if (typeof value === "object") {
        const structMap: { [key: string]: unknown } = {};
        for (const [key, structValue] of Object.entries(value)) {
          structMap[key] = await toDataValueQueries(
            structValue,
            client,
            desiredType["struct"][key],
          );
        }
        return structMap;
      }
    }
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      return value;
  }
  return value;
}
