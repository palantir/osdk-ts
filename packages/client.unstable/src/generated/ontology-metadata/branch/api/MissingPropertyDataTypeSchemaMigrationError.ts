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

import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { Type } from "../../api/Type.js";

/**
 * Indicates that there is a change to the Type of a PropertyType (such as changing from an
 * Integer to a String) that does not have a required schema migration associated with it.
 * Validation only looks at migrations with `SourceSchemaVersion.latestVersion()`, other
 * migrations will be ignored.
 * Currently validation is for the most common schema migrations and there are some edge cases that
 * we do not account for.
 *
 * Schema Migrations that are validated for include:
 * - cast, where propertyTypeRid and target Type match
 * - dropAllPatches
 * - dropProperty, where propertyTypeRid matches
 *
 * Edge cases include:
 * - revert migrations of a previous cast are not currently considered valid as part of this validation
 * - multiple cast migrations for the same property on a branch are not considered valid as part of this validation
 */
export interface MissingPropertyDataTypeSchemaMigrationError {
  objectTypeRid: ObjectTypeRid;
  propertyTypeRid: PropertyTypeRid;
  sourceType: Type;
  targetType: Type;
}
