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

// Compile-time helpers that constrain `OntologySeedBuilder.link` to real link names and
// correctly-typed targets. They mirror the `AddLink*` helpers behind
// `EditBatch.link` in @osdk/functions, using `OntologySeedRef` in place of `ObjectLocator`.

import type {
  CompileTimeMetadata,
  InterfaceDefinition,
  LinkTypeApiNamesFor,
  ObjectTypeDefinition,
} from "@osdk/api";

import type { OntologySeedRef } from "./types.js";

/**
 * The object or interface type on the far side of `Q`'s `A` link.
 */
export type LinkTargetType<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
  A extends LinkTypeApiNamesFor<Q>,
> = NonNullable<CompileTimeMetadata<Q>["links"][A]["__OsdkLinkTargetType"]>;

/**
 * The target(s) accepted for `Q`'s `A` link: one ref, or an array of refs when
 * the link is many-valued (`multiplicity: true`).
 */
export type LinkTargets<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
  A extends LinkTypeApiNamesFor<Q>,
> = CompileTimeMetadata<Q>["links"][A]["multiplicity"] extends true
  ?
      | OntologySeedRef<LinkTargetType<Q, A>>
      | Array<OntologySeedRef<LinkTargetType<Q, A>>>
  : OntologySeedRef<LinkTargetType<Q, A>>;
