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

import { FauxOntology } from "../../FauxFoundry/FauxOntology.js";
import { registerLazyActions } from "../actions.js";
import { BarInterface, FooInterface } from "../interfaces.js";
import { objectTypesWithLinkTypes } from "../objectTypesWithLinkTypes.js";
import { queryTypes } from "../queryTypes.js";
import { fooSpt } from "../spts.js";
import { defaultOntologyMetadata } from "./defaultOntologyMetadata.js";

export const legacyFullOntology: FauxOntology = new FauxOntology(
  defaultOntologyMetadata,
);

for (const xx of Object.values(objectTypesWithLinkTypes)) {
  legacyFullOntology.registerObjectType(xx);
}

registerLazyActions(legacyFullOntology);

for (const xx of Object.values(queryTypes)) {
  legacyFullOntology.registerQueryType(xx);
}

legacyFullOntology.registerInterfaceType(BarInterface);
legacyFullOntology.registerInterfaceType(FooInterface);

legacyFullOntology.registerSharedPropertyType(fooSpt);
