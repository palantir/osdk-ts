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

import type { QueryDefinition } from "@osdk/client";

import { loadResolvedAliases } from "./loaders.js";
export type { Query } from "./types.js";

/**
 * Resolves a query definition through the alias table so that the same built code
 * can run against a stack where the query has a different api name. The alias key
 * is the definition's own api name, i.e. the one the SDK was generated with.
 *
 * The returned definition has the same TypeScript type as the one passed in, so
 * parameters and return types are unchanged. Only the api name used on the wire
 * differs; nothing inside the query is remapped.
 *
 * Resolve each query once and keep the result in a module-scoped constant, the
 * same way you would use the generated definition it stands in for. Every call
 * reads the alias file, so calling this inline on a hot path re-reads and
 * re-parses it each time.
 *
 * @param definition - A query imported from your generated ontology SDK
 * @returns An equivalent definition bound to this stack's api name
 * @throws If no alias is configured for the definition's api name
 * @example
 * ```ts
 * // aliased.ts - resolved once, at import
 * import { getEmployeeCount } from "./generatedNoCheck/index.js";
 * import { Aliases } from "@osdk/functions";
 *
 * export const getEmployeeCount$ = Aliases.query(getEmployeeCount);
 *
 * // elsewhere - used exactly like the generated definition
 * const count = await client(getEmployeeCount$).executeFunction({});
 * ```
 */
export function query<Q extends QueryDefinition<any>>(definition: Q): Q {
  const resolvedAliases = loadResolvedAliases();
  const alias = definition.apiName;

  if (!(alias in resolvedAliases.queries)) {
    const available = Object.keys(resolvedAliases.queries).join(", ");
    throw new Error(
      `Query alias '${alias}' not found. Available aliases: [${available}]`,
    );
  }

  const bound = resolvedAliases.queries[alias];
  return {
    ...definition,
    apiName: bound.apiName,
    alias: { localApiName: alias, boundApiName: bound.apiName },
  } as Q;
}
