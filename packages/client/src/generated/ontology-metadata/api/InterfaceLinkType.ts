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

import type { InterfaceLinkTypeCardinality } from "./InterfaceLinkTypeCardinality.js";
import type { InterfaceLinkTypeMetadata } from "./InterfaceLinkTypeMetadata.js";
import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid.js";
import type { LinkedEntityTypeId } from "./LinkedEntityTypeId.js";
export interface InterfaceLinkType {
  rid: InterfaceLinkTypeRid;
  metadata: InterfaceLinkTypeMetadata;
  linkedEntityTypeId: LinkedEntityTypeId;
  cardinality: InterfaceLinkTypeCardinality;
  required: boolean;
}
