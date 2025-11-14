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
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import type { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

type IntersectWithInput<
  T extends ObjectOrInterfaceDefinition = ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    SimplePropertyDef
  >,
> = Array<{ where: WhereClause<T, RDPs> }>;

export class IntersectCanonicalizer extends CachingCanonicalizer<
  IntersectWithInput,
  Array<Canonical<SimpleWhereClause>>
> {
  private structuralCache = new Map<
    string,
    Canonical<Array<Canonical<SimpleWhereClause>>>
  >();

  constructor(private whereCanonicalizer: WhereClauseCanonicalizer) {
    super();
  }

  protected lookupOrCreate(
    intersectWith: IntersectWithInput,
  ): Canonical<Array<Canonical<SimpleWhereClause>>> {
    const canonicalClauses = intersectWith.map((item) =>
      this.whereCanonicalizer.canonicalize(item.where ?? {})
    );

    const structuralKey = canonicalClauses
      .map((clause) => JSON.stringify(clause))
      .join("||");

    let canonical = this.structuralCache.get(structuralKey);

    if (!canonical) {
      canonical = canonicalClauses as Canonical<
        Array<Canonical<SimpleWhereClause>>
      >;
      this.structuralCache.set(structuralKey, canonical);
    }

    return canonical;
  }
}
