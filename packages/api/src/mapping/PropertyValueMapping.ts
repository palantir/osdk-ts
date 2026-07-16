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
import type {
  CipherText,
  CipherTextValue,
  CreateCipherText,
  UpdateCipherText,
} from "../object/CipherText.js";
import type { Media, MediaReference } from "../object/Media.js";
import type {
  GeotimeSeriesProperty,
  TimeSeriesProperty,
} from "../timeseries/timeseries.js";

export interface PropertyValueWireToClient {
  attachment: Attachment;
  boolean: boolean;
  byte: number;
  cipherText: CipherText;
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
  vector: number[];
}

export type GetClientPropertyValueFromWire<
  T extends
    | keyof PropertyValueWireToClient
    | Record<string, keyof PropertyValueWireToClient>,
> = T extends keyof PropertyValueWireToClient
  ? PropertyValueWireToClient[T]
  : T extends Record<string, keyof PropertyValueWireToClient>
    ? { [K in keyof T]: PropertyValueWireToClient[T[K]] }
    : never;

export interface PropertyValueClientToWire {
  attachment: string | AttachmentUpload | (Blob & { readonly name: string });
  boolean: boolean;
  byte: number;
  cipherText: CipherText;
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
  vector: number[];
}

export type GetWirePropertyValueFromClient<
  T extends
    | keyof PropertyValueClientToWire
    | Record<string, keyof PropertyValueClientToWire>,
> = T extends keyof PropertyValueClientToWire
  ? PropertyValueClientToWire[T]
  : T extends Record<string, keyof PropertyValueClientToWire>
    ? { [K in keyof T]: PropertyValueClientToWire[T[K]] }
    : never;

interface PropertyValueWireToCreateBase {
  attachment: Attachment | string;
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
  mediaReference: Media | MediaReference;
  short: number;
  string: string;
  timestamp: string;
  numericTimeseries: TimeSeriesProperty<number>;
  stringTimeseries: TimeSeriesProperty<string>;
  sensorTimeseries: TimeSeriesProperty<string | number>;
  geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
  vector: number[];
}

/**
 * User facing creation types for each properties
 */
export interface PropertyValueWireToCreate extends PropertyValueWireToCreateBase {
  cipherText: CreateCipherText | CipherText;
}

/**
 * User facing update types for each properties
 */
export interface PropertyValueWireToUpdate extends PropertyValueWireToCreateBase {
  cipherText: UpdateCipherText | CipherText;
}

/**
 * Function-edit facing creation types for each properties
 */
export interface PropertyValueCreateToWire extends PropertyValueWireToCreateBase {
  cipherText: CreateCipherText | CipherTextValue;
}

/**
 * Function-edit facing update types for each properties
 */
export interface PropertyValueUpdateToWire extends PropertyValueWireToCreateBase {
  cipherText: UpdateCipherText | CipherTextValue;
}

export type GetCreatePropertyValueFromWire<
  T extends
    | keyof PropertyValueWireToCreate
    | Record<string, keyof PropertyValueWireToCreate>,
> = T extends keyof PropertyValueWireToCreate
  ? PropertyValueWireToCreate[T]
  : T extends Record<string, keyof PropertyValueWireToCreate>
    ? { [K in keyof T]: PropertyValueWireToCreate[T[K]] | undefined }
    : never;

export type GetUpdatePropertyValueFromWire<
  T extends
    | keyof PropertyValueWireToUpdate
    | Record<string, keyof PropertyValueWireToUpdate>,
> = T extends keyof PropertyValueWireToUpdate
  ? PropertyValueWireToUpdate[T]
  : T extends Record<string, keyof PropertyValueWireToUpdate>
    ? { [K in keyof T]: PropertyValueWireToUpdate[T[K]] | undefined }
    : never;

export type GetCreateWirePropertyValueFromWire<
  T extends
    | keyof PropertyValueCreateToWire
    | Record<string, keyof PropertyValueCreateToWire>,
> = T extends keyof PropertyValueCreateToWire
  ? PropertyValueCreateToWire[T]
  : T extends Record<string, keyof PropertyValueCreateToWire>
    ? { [K in keyof T]: PropertyValueCreateToWire[T[K]] | undefined }
    : never;

export type GetUpdateWirePropertyValueFromWire<
  T extends
    | keyof PropertyValueUpdateToWire
    | Record<string, keyof PropertyValueUpdateToWire>,
> = T extends keyof PropertyValueUpdateToWire
  ? PropertyValueUpdateToWire[T]
  : T extends Record<string, keyof PropertyValueUpdateToWire>
    ? { [K in keyof T]: PropertyValueUpdateToWire[T[K]] | undefined }
    : never;
