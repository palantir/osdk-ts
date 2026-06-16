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

import type {
  DataConstraints,
  PropertyTypeDataConstraintsWrapper,
  ValueTypeDataConstraint,
} from "@osdk/client.unstable";
import { dataConstraintToPropertyTypeDataConstraint } from "./dataConstraintToPropertyTypeDataConstraint.js";

export function convertValueTypeDataConstraints(
  dataConstraints: ValueTypeDataConstraint[],
): DataConstraints | undefined {
  if (dataConstraints.length === 0) {
    return undefined;
  }

  const propertyTypeConstraints: PropertyTypeDataConstraintsWrapper[] =
    dataConstraints.map(
      (constraint): PropertyTypeDataConstraintsWrapper => ({
        constraints: dataConstraintToPropertyTypeDataConstraint(
          constraint.constraint.constraint,
        ),
        failureMessage: constraint.constraint.failureMessage,
      }),
    );

  return {
    propertyTypeConstraints,
  };
}
