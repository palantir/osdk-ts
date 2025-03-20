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

/**
 * Specifies a side of a link type to indicate a direction derived property is going from. Its semantic
 * meaning depends on the context of usage.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the link type definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the
 * link type definition, and TARGET corresponds to the MANY (or foreign key) side.
 * EXCEPTION: In self-referential one-to-many link types, this is inverted: SOURCE corresponds to the MANY side
 * and TARGET corresponds to the ONE side in self-referential one-to-many link types.
 *
 * See also: `https://github.palantir.build/foundry/ontology-metadata-service/blob/develop/docs/adr/0055-link-type-side-semantics.md`
 * for more context surrounding this decision.
 */
export type DerivedPropertyLinkTypeSide = "SOURCE" | "TARGET";
