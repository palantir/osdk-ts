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

import type { ObjectTypeDefinition } from "@osdk/client";

import { loadResolvedAliases } from "./loaders.js";
export type { ObjectType } from "./types.js";

/**
 * Resolves an object type definition through the alias table so that the same
 * built code can run against a stack where the object type has a different api
 * name. The alias key is the definition's own api name, i.e. the one the SDK was
 * generated with.
 *
 * The returned definition has the same TypeScript type as the one passed in, so
 * property names, `where` clauses, `$select` and result types are all unchanged.
 * Only the api name used on the wire differs; objects loaded through it still
 * report the code-facing name in `$apiName`, `$objectType` and
 * `$objectSpecifier`.
 *
 * Resolve each object type once and keep the result in a module-scoped constant,
 * the same way you would use the generated definition it stands in for. Every
 * call reads the alias file, so calling this inline on a hot path re-reads and
 * re-parses it each time.
 *
 * @param definition - An object type imported from your generated ontology SDK
 * @returns An equivalent definition bound to this stack's api name
 * @throws If no alias is configured for the definition's api name
 * @example
 * ```ts
 * // aliased.ts - resolved once, at import
 * import { Employee } from "./generatedNoCheck/index.js";
 * import { Aliases } from "@osdk/functions";
 *
 * export const Employee$ = Aliases.objectType(Employee);
 *
 * // elsewhere - used exactly like the generated definition
 * const page = await client(Employee$)
 *   .where({ fullName: { $eq: "Jane" } })
 *   .fetchPage();
 * ```
 */
export function objectType<Q extends ObjectTypeDefinition>(definition: Q): Q {
  const resolvedAliases = loadResolvedAliases();
  const alias = definition.apiName;

  if (!(alias in resolvedAliases.objects)) {
    const available = Object.keys(resolvedAliases.objects).join(", ");
    throw new Error(
      `Object type alias '${alias}' not found. Available aliases: [${available}]`,
    );
  }

  // `internalDoNotUseMetadata` is dropped rather than carried over: it holds an
  // object type rid from the stack the SDK was generated against, which does not
  // identify the bound object type here.
  const { internalDoNotUseMetadata: _internalDoNotUseMetadata, ...rest } =
    definition as Q & { internalDoNotUseMetadata?: unknown };

  return {
    ...rest,
    apiName: resolvedAliases.objects[alias].apiName,
    localApiName: alias,
  } as Q;
}
