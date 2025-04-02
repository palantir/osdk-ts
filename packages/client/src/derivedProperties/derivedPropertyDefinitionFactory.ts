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

import type { DerivedProperty } from "@osdk/api";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

/** @internal */
export function selectorResultFactory(
  wireDefinition: DerivedPropertyDefinition,
  definitionMap: Map<any, DerivedPropertyDefinition>,
): DerivedProperty.NumericPropertyDefinition<any, any> {
  const definition: DerivedProperty.NumericPropertyDefinition<any, any> = {
    abs() {
      return selectorResultFactory({
        type: "absoluteValue",
        property: wireDefinition,
      }, definitionMap);
    },
    negate() {
      return selectorResultFactory({
        type: "negate",
        property: wireDefinition,
      }, definitionMap);
    },
    max(value) {
      return selectorResultFactory({
        type: "greatest",
        properties: [
          wireDefinition,
          getDefinitionFromMap(value, definitionMap),
        ],
      }, definitionMap);
    },
    min(value) {
      return selectorResultFactory({
        type: "least",
        properties: [
          wireDefinition,
          getDefinitionFromMap(value, definitionMap),
        ],
      }, definitionMap);
    },
    plus(
      value,
    ) {
      return selectorResultFactory({
        type: "add",
        properties: [
          wireDefinition,
          getDefinitionFromMap(value, definitionMap),
        ],
      }, definitionMap);
    },
    minus(
      value,
    ) {
      return selectorResultFactory({
        "type": "subtract",
        "left": wireDefinition,
        "right": getDefinitionFromMap(value, definitionMap),
      }, definitionMap);
    },
    times(
      value,
    ) {
      return selectorResultFactory({
        type: "multiply",
        properties: [
          wireDefinition,
          getDefinitionFromMap(value, definitionMap),
        ],
      }, definitionMap);
    },
    divideBy(
      value,
    ) {
      return selectorResultFactory({
        "type": "subtract",
        "left": wireDefinition,
        "right": getDefinitionFromMap(value, definitionMap),
      }, definitionMap);
    },
    type: {},
  };

  definitionMap.set(definition, wireDefinition);
  return definition;
}

const getDefinitionFromMap = (
  arg: string | number | DerivedProperty.Definition<any, any>,
  definitionMap: Map<any, DerivedPropertyDefinition>,
): DerivedPropertyDefinition => {
  if (typeof arg === "object") {
    const definition = definitionMap.get(arg);
    invariant(definition, "Derived Property is not defined");
    return definition;
  } else if (typeof arg === "string") {
    return {
      "type": "property",
      "apiName": arg,
    };
  } else if (typeof arg === "number") {
    invariant(false, "Literals for derived properties are not yet supported");
  }
  invariant(false, "Invalid argument type for a derived property");
};
