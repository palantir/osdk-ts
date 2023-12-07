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

import invariant from "tiny-invariant";
import type { WireOntologyDefinition } from "./WireOntologyDefinition";

export function validateWireOntologyAssumptions(
  ontology: WireOntologyDefinition,
) {
  invariantNotStartWithDollarSign(ontology.ontology.apiName);

  for (const [objectKey, objectType] of Object.entries(ontology.objectTypes)) {
    invariantMapKeyMatchesApiName(objectKey, objectType.objectType);
    invariantNotStartWithDollarSign(objectType.objectType.apiName);

    for (
      const [propertyKey, propertyType] of Object.entries(
        objectType.objectType.properties,
      )
    ) {
      invariantNotStartWithDollarSign(propertyKey);
    }
  }
}

function invariantMapKeyMatchesApiName(
  key: string,
  value: { apiName: string },
) {
  invariant(
    key === value.apiName,
    "Key in the map should be the same as the apiName.",
  );
}
function invariantNotStartWithDollarSign(value: string) {
  invariant(
    !value.startsWith("$"),
    "apiName should not start with $",
  );
}
