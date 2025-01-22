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

import type { Attachment, AttachmentUpload } from "../object/Attachment.js";
import type { Media } from "../object/Media.js";
import type {
  GeotimeSeriesProperty,
  TimeSeriesProperty,
} from "../timeseries/timeseries.js";

/**
 * Map from the PropertyDefinition type to the typescript type that we return
 */
export interface PropertyValueWireToClient {
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  datetime: string;
  decimal: string;
  double: number;
  float: number;
  geopoint: GeoJSON.Point;
  geoshape: GeoJSON.GeoJSON;
  integer: number;
  long: string;
  marking: string;
  mediaReference: Media;
  short: number;
  string: string;
  timestamp: string;
  numericTimeseries: TimeSeriesProperty<number>;
  stringTimeseries: TimeSeriesProperty<string>;
  sensorTimeseries: TimeSeriesProperty<string | number>;
  geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}

export type GetClientPropertyValueFromWire<
  T extends
    | keyof PropertyValueWireToClient
    | Record<string, keyof PropertyValueWireToClient>,
> = T extends keyof PropertyValueWireToClient ? PropertyValueWireToClient[T]
  : T extends Record<string, keyof PropertyValueWireToClient>
    ? { [K in keyof T]: PropertyValueWireToClient[T[K]] }
  : never;

/**
 * Map from the PropertyDefinition type to the typescript type that we accept
 */
export interface PropertyValueClientToWire {
  attachment: string | AttachmentUpload | Blob & { readonly name: string };
  boolean: boolean;
  byte: number;
  datetime: string;
  decimal: string | number;
  double: number;
  float: number;
  geopoint: GeoJSON.Point;
  geoshape: GeoJSON.GeoJSON;
  integer: number;
  long: string | number;
  marking: string;
  short: number;
  string: string;
  timestamp: string;
  mediaReference: Media;
  numericTimeseries: TimeSeriesProperty<number>;
  stringTimeseries: TimeSeriesProperty<string>;
  sensorTimeseries: TimeSeriesProperty<string | number>;
  geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}
export type GetWirePropertyValueFromClient<
  T extends
    | keyof PropertyValueClientToWire
    | Record<string, keyof PropertyValueClientToWire>,
> = T extends keyof PropertyValueClientToWire ? PropertyValueClientToWire[T]
  : T extends Record<string, keyof PropertyValueClientToWire>
    ? { [K in keyof T]: PropertyValueClientToWire[T[K]] }
  : never;
