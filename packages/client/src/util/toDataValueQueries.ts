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
import { type DataValue, Ontologies } from "@osdk/internal.foundry";
import type { SharedClient, SharedClientContext } from "@osdk/shared.client";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  Attachment,
  isAttachment,
  isAttachmentUpload,
} from "../object/Attachment.js";
import { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";
import { isOntologyObjectV2 } from "./isOntologyObjectV2.js";
import { isWireObjectSet } from "./WireObjectSet.js";

/**
 * Marshall user-facing data into the wire DataValue type
 *
 * @see DataValue for the expected payloads
 */
export async function toDataValueQueries<T extends string>(
  value: unknown,
  client: MinimalClient,
  desiredType: QueryDataTypeDefinition<T>,
): Promise<DataValue> {
  if (value == null) {
    // typeof null is 'object' so do this first
    return value;
  }

  // arrays and sets are both sent over the wire as arrays
  if (Array.isArray(value) || value instanceof Set) {
    const promiseArray = Array.from(
      value,
      async (innerValue) =>
        await toDataValueQueries(innerValue, client, desiredType),
    );
    return Promise.all(promiseArray);
  }

  // attachments just send the rid directly
  if (isAttachment(value) && desiredType.type === "attachment") {
    return value.rid;
  }

  // For uploads, we need to upload ourselves first to get the RID of the attachment
  if (isAttachmentUpload(value)) {
    const attachment = await Ontologies.Attachments.uploadAttachment(
      client,
      value,
      {
        filename: value.name,
      },
      {
        "Content-Length": value.size.toString(),
        "Content-Type": value.type,
      },
    );
    return await toDataValueQueries(
      new Attachment(attachment.rid),
      client,
      desiredType,
    );
  }

  // objects just send the JSON'd primaryKey
  if (isOntologyObjectV2(value)) {
    return await toDataValueQueries(value.__primaryKey, client, desiredType);
  }

  // object set (the rid as a string (passes through the last return), or the ObjectSet definition directly)
  if (isWireObjectSet(value)) {
    return value;
  }
  if (isObjectSet(value)) {
    return getWireObjectSet(value);
  }

  if (desiredType.type === "twoDimensionalAggregation") {
    return {
      groups: Object.entries(value).map(([key, values]) => ({
        key,
        values,
      })),
    };
  }

  if (desiredType.type === "threeDimensionalAggregation") {
    return {
      groups: Object.entries(value).map(([key, values]) => ({
        key,
        groups: Object.entries(values).map(([key, value]) => ({ key, value })),
      })),
    };
  }

  // TODO (during queries implementation)
  // two dimensional aggregation
  // three dimensional aggregation

  // struct
  if (typeof value === "object" && desiredType.type === "struct") {
    return Object.entries(value).reduce(
      async (promisedAcc, [key, structValue]) => {
        const acc = await promisedAcc;
        acc[key] = await toDataValueQueries(structValue, client, desiredType);
        return acc;
      },
      Promise.resolve({} as { [key: string]: DataValue }),
    );
  }

  // expected to pass through - boolean, byte, date, decimal, float, double, integer, long, short, string, timestamp
  return value;
}
