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

/**
 * Mapping from wire to client types:
 * - Upgrade Attachment or Array<Attachment> properties to use the Attachment class
 * - Any object property can be configured to be an Array of an entry in ClientPropertyValue
 *
 * Mapping from client to wire types:
 * - Only the primary-key eligible types are sent to the backend, and none of them need to be transformed
 *
 * @see @osdk/gateway/types PropertyValue
 */
export interface ClientPropertyValue {
  /**
   * Wire shape is an object with a rid property
   * `{"rid":"ri.blobster.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"}`
   */
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  /** ex: "2021-05-01" */
  date: string;
  decimal: string;
  double: number;
  float: number;
  geopoint: GeoJSON.Point;
  geoshape: GeoJSON.GeoJSON;
  integer: number;
  long: string;
  short: number;
  string: string;
  /** ex: "2021-01-04T05:00:00Z" */
  timestamp: string;
}

export type ClientPrimaryKey = Pick<
  ClientPropertyValue,
  | "boolean"
  | "byte"
  | "date"
  | "integer"
  | "long"
  | "short"
  | "string"
  | "timestamp"
>;
