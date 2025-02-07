/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypePeeringMetadataV1 } from "../ObjectTypePeeringMetadataV1.js";
import type { DropObjectTypePeeringMetadata } from "./DropObjectTypePeeringMetadata.js";
export interface ObjectTypePeeringMetadataModification_drop {
  type: "drop";
  drop: DropObjectTypePeeringMetadata;
}

export interface ObjectTypePeeringMetadataModification_v1 {
  type: "v1";
  v1: ObjectTypePeeringMetadataV1;
}
export type ObjectTypePeeringMetadataModification =
  | ObjectTypePeeringMetadataModification_drop
  | ObjectTypePeeringMetadataModification_v1;
