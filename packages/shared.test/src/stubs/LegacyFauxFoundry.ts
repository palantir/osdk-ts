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

import invariant from "tiny-invariant";
import type { FauxDataStore } from "../FauxFoundry/FauxDataStore.js";
import { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import type { FauxOntology } from "../FauxFoundry/FauxOntology.js";
import { registerLazyActions } from "./actions.js";
import { ActionTypeWithUnsupportedTypes } from "./actionsTypes.js";
import { BarInterface, FooInterface } from "./interfaces.js";
import {
  employee1 as employee_John_50030,
  employee2 as employee_Jane_50031,
  employee3,
  employee4withDerived,
  employee50050,
  employeePassesStrict,
  nycOffice,
  objectWithAllPropertyTypes1,
  objectWithAllPropertyTypesEmptyEntries,
  travisPlayer,
} from "./objects.js";
import { objectTypesWithLinkTypes } from "./objectTypesWithLinkTypes.js";
import { defaultOntologyMetadata } from "./ontologies/defaultOntologyMetadata.js";
import { registerLazyQueries } from "./queries.js";
import { fooSpt } from "./spts.js";

export class LegacyFauxFoundry extends FauxFoundry {
  constructor(
    baseUrl: string = "https://stack.palantir.com/",
  ) {
    super(baseUrl, defaultOntologyMetadata);

    //
    // Setup the ontology
    //
    const legacyFullOntology: FauxOntology = this.getDefaultOntology();

    for (const xx of Object.values(objectTypesWithLinkTypes)) {
      legacyFullOntology.registerObjectType(xx);
    }

    registerLazyActions(legacyFullOntology);
    legacyFullOntology.registerActionType(ActionTypeWithUnsupportedTypes);

    registerLazyQueries(legacyFullOntology);

    legacyFullOntology.registerInterfaceType(BarInterface);
    legacyFullOntology.registerInterfaceType(FooInterface);

    legacyFullOntology.registerSharedPropertyType(fooSpt);

    //
    // Setup the data store
    //
    const legacyFauxDataStore: FauxDataStore = this.getDefaultDataStore();
    legacyFauxDataStore.registerObject(employee_John_50030);
    legacyFauxDataStore.registerObject(employee_Jane_50031);
    legacyFauxDataStore.registerObject(employee3);
    legacyFauxDataStore.registerObject(employee4withDerived);
    legacyFauxDataStore.registerObject(employeePassesStrict);
    legacyFauxDataStore.registerObject(employee50050);

    legacyFauxDataStore.registerObject(nycOffice);
    legacyFauxDataStore.registerObject(
      {
        ...nycOffice,
        __primaryKey: "SEA",
        __rid: nycOffice.__rid + "-1",
        officeId: "SEA",
        name: "Seattle Office",
      } satisfies typeof nycOffice,
    );

    legacyFauxDataStore.registerObject(objectWithAllPropertyTypes1);
    legacyFauxDataStore.registerObject(objectWithAllPropertyTypesEmptyEntries);
    legacyFauxDataStore.registerObject(travisPlayer);
    legacyFauxDataStore.registerLink(
      employee_John_50030,
      "lead",
      employee_Jane_50031,
      "peeps",
    );
    legacyFauxDataStore.registerLink(
      employee3,
      "lead",
      employee_Jane_50031,
      "peeps",
    );
    invariant(
      legacyFauxDataStore.getLinksOrThrow(
        "Employee",
        employee_Jane_50031.__primaryKey,
        "peeps",
      ).length === 2,
    );
  }
}
