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
  wireDefinition: Promise<DerivedPropertyDefinition>,
  definitionMap: Map<any, Promise<DerivedPropertyDefinition>>,
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
        return derivedPropertyDefinitionFactory(
          wireDefinition.then(wireDefinition => ({
            type: "absoluteValue",
            property: wireDefinition,
          })),
          definitionMap,
        );
      },
      negate() {
        return derivedPropertyDefinitionFactory(
          wireDefinition.then(wireDefinition => ({
            type: "negate",
            property: wireDefinition,
          })),
          definitionMap,
        );
      },
      max(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            type: "greatest",
            properties: [
              wireDefinition,
              definitionFromMap,
            ],
          })),
          definitionMap,
        );
      },
      min(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            type: "least",
            properties: [
              wireDefinition,
              definitionFromMap,
            ],
          })),
          definitionMap,
        );
      },
      add(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            type: "add",
            properties: [
              wireDefinition,
              definitionFromMap,
            ],
          })),
          definitionMap,
        );
      },
      subtract(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            "type": "subtract",
            "left": wireDefinition,
            "right": definitionFromMap,
          })),
          definitionMap,
        );
      },
      multiply(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            type: "multiply",
            properties: [
              wireDefinition,
              definitionFromMap,
            ],
          })),
          definitionMap,
        );
      },
      divide(value) {
        return derivedPropertyDefinitionFactory(
          Promise.all([
            wireDefinition,
            getDefinitionFromMap(value, definitionMap),
          ]).then(([wireDefinition, definitionFromMap]) => ({
            "type": "subtract",
            "left": wireDefinition,
            "right": definitionFromMap,
          })),
          definitionMap,
        );
      },
      extractPart(part) {
        return derivedPropertyDefinitionFactory(
          wireDefinition.then(wireDefinition => ({
            type: "extract",
            part,
            property: wireDefinition,
          })),
          definitionMap,
        );
      },
    };

  definitionMap.set(definition, wireDefinition);
  return definition as any;
}

const getDefinitionFromMap = (
  arg: string | number | DerivedProperty.Definition<any, any>,
  definitionMap: Map<any, Promise<DerivedPropertyDefinition>>,
): Promise<DerivedPropertyDefinition> => {
  if (typeof arg === "object") {
    const definition = definitionMap.get(arg);
    invariant(definition, "Derived Property is not defined");
    return definition;
  } else if (typeof arg === "number") {
    invariant(false, "Literals for derived properties are not yet supported");
  }
  invariant(false, "Invalid argument type for a derived property");
};
