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

import { FauxOntology } from "../FauxFoundry/FauxOntology.js";
import { actionTypes, ActionTypeWithUnsupportedTypes } from "./actionsTypes.js";
import { BarInterface, FooInterface } from "./interfaces.js";
import { objectTypesWithLinkTypes } from "./objectTypesWithLinkTypes.js";
import { fullOntology } from "./ontologies.js";
import { queryTypes } from "./queryTypes.js";

export const fauxOntology: FauxOntology = new FauxOntology({
  apiName: fullOntology.ontology.apiName,
  rid: fullOntology.ontology.rid,
  displayName: fullOntology.ontology.displayName,
  description: fullOntology.ontology.description,
});

for (const xx of Object.values(objectTypesWithLinkTypes)) {
  fauxOntology.registerObjectType(xx);
}

for (const xx of Object.values(actionTypes)) {
  fauxOntology.registerActionType(xx);
}

fauxOntology.registerActionType(ActionTypeWithUnsupportedTypes);

for (const xx of Object.values(queryTypes)) {
  fauxOntology.registerQueryType(xx);
}

fauxOntology.registerInterfaceType(BarInterface);
fauxOntology.registerInterfaceType(FooInterface);
