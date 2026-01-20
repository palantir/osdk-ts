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
 * A discriminated union representing different types of property security outcomes.
 *
 * @discriminator type - The type field determines which security outcome is represented:
 *   - "propertyMarkings": Successfully computed security markings for the property
 *   - "unsupportedPolicy": The property is backed by a restricted view that doesn't support property securities
 *   - "errorComputingSecurity": The server was unable to load the securities of the property
 */
export type PropertySecurity =
  | ({
    type: "propertyMarkings";
  } & PropertyMarkings)
  | ({
    type: "unsupportedPolicy";
  })
  | ({
    type: "errorComputingSecurity";
  });

/**
 * All marking requirements applicable to a property value.
 *
 * Markings represent security classifications or access control requirements
 * that must be satisfied to access the property value.
 */
export interface PropertyMarkings {
  /**
   * The conjunctive set of markings required to access the property value.
   * All markings from a conjunctive set must be met for access.
   */
  conjunctive?: Array<MarkingId>;
  /**
   * The disjunctive set of markings required to access the property value.
   *
   * Disjunctive markings are represented as a conjunctive list of disjunctive sets.
   * The top-level array is a conjunction of sets, where each inner array should be
   * treated as a unit where any marking within the set can satisfy the set.
   * All sets within the top level array must be satisfied.
   */
  disjunctive?: Array<Array<MarkingId>>;
  /**
   * The conjunctive set of markings for the container of this property value,
   * such as the project of a dataset. These markings may differ from the marking
   * on the actual property value, but still must be satisfied for accessing the property.
   *
   * All markings from a conjunctive set must be met for access.
   */
  containerConjunctive?: Array<MarkingId>;
  /**
   * The disjunctive set of markings for the container of this property value,
   * such as the project of a dataset. These markings may differ from the marking
   * on the actual property value, but still must be satisfied for accessing the property.
   *
   * Disjunctive markings are represented as a conjunctive list of disjunctive sets.
   * The top-level array is a conjunction of sets, where each inner array should be
   * treated as a unit where any marking within the set can satisfy the set.
   * All sets within the top level array must be satisfied.
   */
  containerDisjunctive?: Array<Array<MarkingId>>;
}

/**
 * A unique identifier for a security marking.
 * Markings represent security classifications or access control requirements.
 */
export type MarkingId = string;
