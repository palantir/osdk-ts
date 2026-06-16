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
export function derivedPropertyDefinitionFactory(
  wireDefinition: DerivedPropertyDefinition,
  definitionMap: Map<any, DerivedPropertyDefinition>,
): DerivedProperty.NumericPropertyDefinition<any, any> & {
  extractPart: DerivedProperty.DatetimePropertyDefinition<
    any,
    any
  >["extractPart"];
} {
  type RemoveSymbolKeys<T> = {
    [K in keyof T as K extends symbol ? never : K]: T[K];
  };

  const definition:
    & RemoveSymbolKeys<DerivedProperty.NumericPropertyDefinition<any, any>>
    & {
      extractPart: DerivedProperty.DatetimePropertyDefinition<
        any,
        any
      >["extractPart"];
    } = {
      abs() {
        return derivedPropertyDefinitionFactory({
          type: "absoluteValue",
          property: wireDefinition,
        }, definitionMap);
      },
      negate() {
        return derivedPropertyDefinitionFactory({
          type: "negate",
          property: wireDefinition,
        }, definitionMap);
      },
      max(value) {
        return derivedPropertyDefinitionFactory({
          type: "greatest",
          properties: [
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ],
        }, definitionMap);
      },
      min(value) {
        return derivedPropertyDefinitionFactory({
          type: "least",
          properties: [
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ],
        }, definitionMap);
      },
      add(
        value,
      ) {
        return derivedPropertyDefinitionFactory({
          type: "add",
          properties: [
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ],
        }, definitionMap);
      },
      subtract(
        value,
      ) {
        return derivedPropertyDefinitionFactory({
          "type": "subtract",
          "left": wireDefinition,
          "right": getDefinitionFromMap(value, definitionMap),
        }, definitionMap);
      },
      multiply(
        value,
      ) {
        return derivedPropertyDefinitionFactory({
          type: "multiply",
          properties: [
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ],
        }, definitionMap);
      },
      divide(
        value,
      ) {
        return derivedPropertyDefinitionFactory({
          "type": "divide",
          "left": wireDefinition,
          "right": getDefinitionFromMap(value, definitionMap),
        }, definitionMap);
      },
      extractPart: (part) => {
        return derivedPropertyDefinitionFactory({
          type: "extract",
          part,
          property: wireDefinition,
        }, definitionMap);
      },
    };

  definitionMap.set(definition, wireDefinition);
  return definition as any;
}

const getDefinitionFromMap = (
  arg: string | number | DerivedProperty.Definition<any, any>,
  definitionMap: Map<any, DerivedPropertyDefinition>,
): DerivedPropertyDefinition => {
  if (typeof arg === "object") {
    const definition = definitionMap.get(arg);
    invariant(definition, "Derived Property is not defined");
    return definition;
  } else if (typeof arg === "number") {
    invariant(false, "Literals for derived properties are not yet supported");
  }
  invariant(false, "Invalid argument type for a derived property");
};
