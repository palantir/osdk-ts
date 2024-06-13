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

import type {
  AttachmentUpload,
  AttachmentWrapper,
} from "../object/Attachment.js";

/**
 * Map from the DataValue type to the typescript type that we return
 */
export interface DataValueWireToClient {
  attachment: AttachmentWrapper;
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
  attachment: string | AttachmentUpload;
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
