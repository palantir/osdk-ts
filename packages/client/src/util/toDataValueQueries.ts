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
import { type DataValue } from "@osdk/foundry.ontologies";
import * as Attachments from "@osdk/foundry.ontologies/Attachment";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  isAttachmentFile,
  isAttachmentUpload,
} from "../object/AttachmentUpload.js";
import { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";
import {
  isInterfaceQueryParam,
  isInterfaceSpecifier,
} from "./interfaceUtils.js";
import { isObjectSpecifiersObject } from "./isObjectSpecifiersObject.js";
import { extractPrimaryKeyFromObjectSpecifier } from "./objectSpecifierUtils.js";
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

  if (Array.isArray(value) && desiredType.type === "array") {
    const values = Array.from(value);
    if (
      values.some((dataValue) =>
        isAttachmentUpload(dataValue) || isAttachmentFile(dataValue)
      )
    ) {
      const converted = [];
      for (const value of values) {
        converted.push(await toDataValueQueries(value, client, desiredType));
      }
      return converted;
    }
    const promiseArray = Array.from(
      value,
      async (innerValue) =>
        await toDataValueQueries(innerValue, client, desiredType.array),
    );
    return Promise.all(promiseArray);
  }

  switch (desiredType.type) {
    case "attachment": {
      if (isAttachmentUpload(value)) {
        const attachment = await Attachments.upload(
          client,
          value.data,
          {
            filename: value.name,
          },
        );
        return attachment.rid;
      }

      if (
        isAttachmentFile(value)
      ) {
        const attachment = await Attachments.upload(
          client,
          value,
          {
            filename: value.name as string,
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
      if (isObjectSpecifiersObject(value)) {
        return value.$primaryKey;
      }
      break;
    }
    case "interface": {
      if (isInterfaceSpecifier(value) || isInterfaceQueryParam(value)) {
        return {
          objectTypeApiName: value.$objectType,
          primaryKeyValue: value.$primaryKey,
        };
      }
    }
    case "objectSet":
    case "interfaceObjectSet": {
      // object set (the rid as a string (passes through the last return), or the ObjectSet definition directly)
      if (isWireObjectSet(value)) {
        return value;
      }
      if (isObjectSet(value)) {
        return getWireObjectSet(value);
      }
      break;
    }

    case "map": {
      if (typeof value === "object") {
        const entrySet: Array<{ key: any; value: any }> = [];
        for (const [key, mapValue] of Object.entries(value)) {
          entrySet.push({
            key: desiredType.keyType.type === "object"
              ? extractPrimaryKeyFromObjectSpecifier(key as any)
              : await toDataValueQueries(
                key,
                client,
                desiredType.keyType,
              ),
            value: await toDataValueQueries(
              mapValue,
              client,
              desiredType.valueType,
            ),
          });
        }
        return entrySet;
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
