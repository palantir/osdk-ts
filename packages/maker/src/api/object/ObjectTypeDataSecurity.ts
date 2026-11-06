/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
 * Datasource-level data security settings for an object type.
 *
 * These settings apply to the marking constraints on the object type's main
 * datasource. Maker emits one mandatory marking constraint for all `MANDATORY`
 * marking properties and one classification constraint for all `CBAC`
 * marking properties on the object.
 */
export type ObjectTypeDataSecurity = {
  /**
   * Settings for the mandatory marking constraint. Only valid when the object
   * has at least one `MANDATORY` marking property.
   */
  mandatory?: ObjectTypeMarkingConstraintSettings;
  /**
   * Settings for the classification (CBAC) constraint. Only valid when the
   * object has at least one `CBAC` marking property.
   */
  cbac?: ObjectTypeMarkingConstraintSettings;
};

export type ObjectTypeMarkingConstraintSettings = {
  /**
   * When true, installers may supply an empty marking set for this marking
   * input. When false or unset, a non-empty marking set is required.
   *
   * Maps to `allowEmptyMarkings` on OMS `MandatoryMarkingConstraint` (for
   * `mandatory`) or `ClassificationConstraint` (for `cbac`) on the object
   * type's datasource. Omitted from the output when undefined.
   */
  allowEmptyMarkings?: boolean;
};
