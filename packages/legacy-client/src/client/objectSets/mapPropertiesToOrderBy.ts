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

import type { PropertyDefinition } from "@osdk/api";
import type { OntologyObject } from "../../ontology-runtime";
import { OrderByOption } from "../../ontology-runtime";
import type { OrderBy } from "../interfaces/ordering";

export function mapPropertiesToOrderBy<T extends OntologyObject>(
  properties: Record<string, PropertyDefinition>,
): OrderBy<T> {
  return Object.entries(properties).reduce(
    (acc, [propertyName]) => {
      acc[propertyName] = OrderByOption(propertyName);
      return acc;
    },
    {} as {
      [key: string]: OrderByOption;
    },
  ) as OrderBy<T>;
}
