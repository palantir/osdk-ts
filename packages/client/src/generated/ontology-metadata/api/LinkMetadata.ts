/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { LinkType } from "./LinkType.js";
import type { SoftLink } from "./SoftLink.js";
export interface LinkMetadata_linkType {
  type: "linkType";
  linkType: LinkType;
}

export interface LinkMetadata_softLink {
  type: "softLink";
  softLink: SoftLink;
}
/**
 * Representation of all types of links that can be traversed in the ontology
 */
export type LinkMetadata = LinkMetadata_linkType | LinkMetadata_softLink;
