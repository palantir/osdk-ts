/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { DataValue } from "@osdk/gateway/types";
import { isOntologyObjectV2 } from "../internal/net/types.js";
import { isAttachment } from "../object/Attachment.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import { isWireObjectSet } from "./WireObjectSet.js";

/**
 * Marshall user-facing data into the wire DataValue type
 *
 * @see DataValue for the expected payloads
 */
export function toDataValue(value: any): DataValue {
  if (value == null) {
    // typeof null is 'object' so do this first
    return value;
  }

  // arrays and sets are both sent over the wire as arrays
  if (Array.isArray(value) || value instanceof Set) {
    return Array.from(value, toDataValue);
  }

  // attachments just send the rid directly
  if (isAttachment(value)) {
    return value.rid;
  }

  // objects just send the JSON'd primaryKey
  if (isOntologyObjectV2(value)) {
    return toDataValue(value.__primaryKey);
  }

  // object set (the rid as a string (passes through the last return), or the ObjectSet definition directly)
  if (isWireObjectSet(value)) {
    return value;
  }
  if (isObjectSet(value)) {
    return value.definition;
  }

  // TODO (during queries implementation)
  // two dimensional aggregation
  // three dimensional aggregation

  // struct
  if (typeof value === "object") {
    return Object.entries(value).reduce((acc, [key, structValue]) => {
      acc[key] = toDataValue(structValue);
      return acc;
    }, {} as { [key: string]: DataValue });
  }

  // expected to pass through - boolean, byte, date, decimal, float, double, integer, long, short, string, timestamp
  return value;
}

function isObjectSet(o: any): o is ObjectSet<any, any> {
  return o != null && typeof o === "object"
    && isWireObjectSet((o as ObjectSet<any, any>).definition);
}
