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

import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import type { Attachment } from "../object/Attachment.js";
import { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { OsdkObject } from "../OsdkObject.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";

/**
 * Map from the DataValue type to the typescript type that we return
 */
export interface DataValueWireToClient {
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  datetime: string;
  decimal: string;
  float: number;
  double: number;
  integer: number;
  long: string;
  marking: string;
  null: null;
  short: number;
  string: string;
  timestamp: string;
}

/**
 * Map from the DataValue type to the typescript type that we accept
 */
export interface DataValueClientToWire {
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  datetime: string;
  decimal: string | number;
  float: number;
  double: number;
  integer: number;
  long: string | number;
  marking: string;
  null: null;
  short: number;
  string: string;
  timestamp: string;
}

// shared between actions and queries

export function attachmentClientToWire(
  value: string | Attachment | { rid: string },
): string {
  if (typeof value === "string") {
    return value;
  } else if (value.rid) {
    return value.rid;
  }
  throw new Error(`Unsupported attachment ${JSON.stringify(value)}`);
}

export function objectSetClientToWire(
  value: ObjectSet<any> | WireObjectSet | string,
): string | WireObjectSet {
  if (typeof value === "string") {
    return value;
  } else if (isWireObjectSet(value)) {
    return value;
  } else if (value && isObjectSet(value)) {
    return getWireObjectSet(value);
  } else {
    throw new Error(`Unsupported objectSet ${JSON.stringify(value)}`);
  }
}

export function objectClientToWire(
  value: OsdkObject<any> | string | number | boolean,
) {
  if (typeof value === "object") {
    return (value as any).$primaryKey;
  } else {
    return value;
  }
}

export function timestampClientToWire(value: string | Date | number): string {
  const type = typeof value;
  if (type === "string") {
    return value as string;
  } else if (type === "number") {
    return new Date(value).toISOString();
  } else if (value instanceof Date) {
    return value.toISOString();
  } else {
    throw new Error(`Unsupported timestamp ${JSON.stringify(value)}`);
  }
}

// queries only

export function setClientToWire(
  value: Iterable<any>,
  mapfn?: (v: any, k: number) => any,
): Array<any> {
  if (Array.isArray(value) && !mapfn) {
    return value;
  } else if (mapfn) {
    return Array.from(value, mapfn);
  } else {
    return Array.from(value);
  }
}

export function twoDimensionalAggregationClientToWire(data: Record<any, any>) {
  return {
    groups: Object.entries(data).map(([key, value]) => ({
      key,
      value,
    })),
  };
}

export function threeDimensionalAggregationClientToWire(
  data: Record<any, Record<any, any>>,
) {
  return {
    groups: Object.entries(data).map(([key, value]) => ({
      key,
      groups: Object.entries(value).map(([key, value]) => ({ key, value })),
    })),
  };
}

// queries only
//   | Struct ~
