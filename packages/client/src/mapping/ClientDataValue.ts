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

import type { Attachment } from "../object/Attachment.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { OsdkObject } from "../OsdkObject.js";
import type { ClientPrimaryKey } from "./ClentPropertyValue.js";

/**
 * DataValue mapping for data coming from the wire
 *
 * @see @osdk/gateway/types DataValue
 */
export interface ClientDataValue {
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  /** ISO 8601 extended local date string */
  date: string;
  decimal: string;
  float: number;
  double: number;
  integer: number;
  long: string;
  marking: string;
  null: null;
  objectSet: ObjectSet<any>;
  short: number;
  string: string;
  timestamp: string;
  set: Set<any>;
  object: OsdkObject<any>;
  twoDimensionalAggregation: Record<any, any>;
  threeDimensionalAggregation: Record<any, Record<any, any>>;
  struct: Record<string, any>;
}

/**
 * DataValue mapping for data heading to the wire
 *
 * This is a bit more permissive than ClientDataValue
 */
export type ClientDataValueInput = ClientDataValue | {
  attachment: string | { rid: string };
  decimal: number;
  long: number;
  set: Iterable<any>;
  object: { $primaryKey: ClientPrimaryKey } | ClientPrimaryKey;
};
