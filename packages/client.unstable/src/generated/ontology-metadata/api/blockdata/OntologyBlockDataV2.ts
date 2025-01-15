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

import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { RuleSet } from "../formatting/RuleSet.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { ActionTypeBlockDataV2 } from "./ActionTypeBlockDataV2.js";
import type { BlockPermissionInformation } from "./BlockPermissionInformation.js";
import type { BlockShapeId } from "./BlockShapeId.js";
import type { InstallLocationBlockShapeId } from "./InstallLocationBlockShapeId.js";
import type { InterfaceTypeBlockDataV2 } from "./InterfaceTypeBlockDataV2.js";
import type { KnownMarketplaceIdentifiers } from "./KnownMarketplaceIdentifiers.js";
import type { LinkTypeBlockDataV2 } from "./LinkTypeBlockDataV2.js";
import type { ObjectTypeBlockDataV2 } from "./ObjectTypeBlockDataV2.js";
import type { SharedPropertyTypeBlockDataV2 } from "./SharedPropertyTypeBlockDataV2.js";
export interface OntologyBlockDataV2 {
  objectTypes: Record<ObjectTypeRid, ObjectTypeBlockDataV2>;
  sharedPropertyTypes: Record<
    SharedPropertyTypeRid,
    SharedPropertyTypeBlockDataV2
  >;
  linkTypes: Record<LinkTypeRid, LinkTypeBlockDataV2>;
  ruleSets: Record<RuleSetRid, RuleSet>;
  actionTypes: Record<ActionTypeRid, ActionTypeBlockDataV2>;
  interfaceTypes: Record<InterfaceTypeRid, InterfaceTypeBlockDataV2>;
  blockOutputCompassLocations: Record<
    BlockShapeId,
    InstallLocationBlockShapeId
  >;
  knownIdentifiers: KnownMarketplaceIdentifiers;
  blockPermissionInformation: BlockPermissionInformation | undefined;
}
