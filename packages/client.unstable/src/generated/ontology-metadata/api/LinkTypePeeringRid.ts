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

/**
 * An identifier for a peered LinkType used for establishing a mapping between local LinkTypes and remote
 * LinkTypes for Peering. Before a link can be peered, a user must configure a mapping between the local and
 * remote LinkType for that link. If the local and remote LinkType share the same LinkTypePeeringRid, Peering
 * will suggest forming a mapping between those types.
 *
 * LinkTypePeeringRids are preserved in Marketplace blocks, so LinkTypes installed from the same Marketplace
 * definition on different stacks will share a LinkTypePeeringRid if the original LinkType packaged in
 * Marketplace has a LinkTypePeeringRid.
 */
export type LinkTypePeeringRid = string;
