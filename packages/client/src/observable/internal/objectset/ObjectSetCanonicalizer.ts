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
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
} from "@osdk/foundry.ontologies";

import type { Canonical } from "../Canonical.js";
import { CachingCanonicalizer } from "../Canonicalizer.js";
import { GenericCanonicalizer } from "../GenericCanonicalizer.js";
import { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";

export class ObjectSetCanonicalizer extends CachingCanonicalizer<
  WireObjectSet,
  WireObjectSet
> {
  #values = new GenericCanonicalizer();

  constructor(private whereCanonicalizer = new WhereClauseCanonicalizer()) {
    super();
  }

  protected lookupOrCreate(objectSet: WireObjectSet): Canonical<WireObjectSet> {
    return this.#values.canonicalize(this.#canonicalizeObjectSet(objectSet));
  }

  #canonicalizeObjectSet(objectSet: WireObjectSet): WireObjectSet {
    switch (objectSet.type) {
      case "base":
      case "interfaceBase":
      case "methodInput":
      case "reference":
      case "static":
        return objectSet;

      case "asBaseObjectTypes":
      case "asType":
      case "interfaceLinkSearchAround":
      case "nearestNeighbors":
      case "searchAround":
        return {
          ...objectSet,
          objectSet: this.canonicalize(objectSet.objectSet),
        };

      case "filter": {
        const child = this.canonicalize(objectSet.objectSet);
        const where = this.whereCanonicalizer.canonicalizeWire(objectSet.where);
        if (child.type !== "filter") {
          return { ...objectSet, objectSet: child, where };
        }

        return {
          type: "filter",
          objectSet: child.objectSet,
          where: this.whereCanonicalizer.canonicalizeWire({
            type: "and",
            value: [child.where, where],
          }),
        };
      }

      case "intersect":
      case "subtract":
      case "union":
        return {
          ...objectSet,
          objectSets: objectSet.objectSets.map((child) =>
            this.canonicalize(child),
          ),
        };

      case "withProperties":
        return {
          ...objectSet,
          objectSet: this.canonicalize(objectSet.objectSet),
          derivedProperties: Object.fromEntries(
            Object.entries(objectSet.derivedProperties).map(
              ([name, definition]) => [
                name,
                this.#canonicalizeDerivedProperty(definition),
              ],
            ),
          ),
        };
    }
  }

  #canonicalizeDerivedProperty(
    definition: DerivedPropertyDefinition,
  ): DerivedPropertyDefinition {
    switch (definition.type) {
      case "property":
        return definition;

      case "selection":
        return {
          ...definition,
          objectSet: this.canonicalize(definition.objectSet),
        };

      case "absoluteValue":
      case "extract":
      case "negate":
        return {
          ...definition,
          property: this.#canonicalizeDerivedProperty(definition.property),
        };

      case "divide":
      case "subtract":
        return {
          ...definition,
          left: this.#canonicalizeDerivedProperty(definition.left),
          right: this.#canonicalizeDerivedProperty(definition.right),
        };

      case "add":
      case "greatest":
      case "least":
      case "multiply":
        return {
          ...definition,
          properties: definition.properties.map((property) =>
            this.#canonicalizeDerivedProperty(property),
          ),
        };
    }
  }
}
