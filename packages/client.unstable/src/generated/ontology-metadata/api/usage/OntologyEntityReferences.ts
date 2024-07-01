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

import type { LinkTypeIdentifier } from "../LinkTypeIdentifier.js";
import type { ObjectTypeIdentifier } from "../ObjectTypeIdentifier.js";
import type { ObjectTypeAndPropertyTypeIdentifiers } from "./ObjectTypeAndPropertyTypeIdentifiers.js";

/**
 * References to the different entities for which usage is reported.
 */
export interface OntologyEntityReferences {
  objectTypeAndPropertyTypeIdentifiers: Array<
    ObjectTypeAndPropertyTypeIdentifiers
  >;
  linkTypeIdentifiers: Array<LinkTypeIdentifier>;
  objectTypesWithAllProperties: Array<ObjectTypeIdentifier>;
}
