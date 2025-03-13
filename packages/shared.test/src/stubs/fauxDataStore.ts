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
import { FauxDataStore } from "../FauxFoundry/FauxDataStore.js";
import { fauxOntology } from "./fauxOntology.js";
import {
  employee1 as employee_John_50030,
  employee2 as employee_Jane_50031,
  employee3,
  employee4withDerived,
  employee50050,
  employeeFailsStrict,
  nycOffice,
  objectWithAllPropertyTypes1,
  objectWithAllPropertyTypesEmptyEntries,
  travisPlayer,
} from "./objects.js";

export const fauxDataStore: FauxDataStore = new FauxDataStore(fauxOntology);

fauxDataStore.registerObject(employee_John_50030);
fauxDataStore.registerObject(employee_Jane_50031);
fauxDataStore.registerObject(employee3);
fauxDataStore.registerObject(employee4withDerived);
fauxDataStore.registerObject(employeeFailsStrict);
fauxDataStore.registerObject(employee50050);
fauxDataStore.registerObject(nycOffice);
fauxDataStore.registerObject(objectWithAllPropertyTypes1);
fauxDataStore.registerObject(objectWithAllPropertyTypesEmptyEntries);
fauxDataStore.registerObject(travisPlayer);

fauxDataStore.registerLink(
  employee_John_50030,
  "lead",
  employee_Jane_50031,
  "peeps",
);
fauxDataStore.registerLink(
  employee3,
  "lead",
  employee_Jane_50031,
  "peeps",
);

invariant(
  fauxDataStore.getLinks(
    "Employee",
    employee_Jane_50031.__primaryKey,
    "peeps",
  ).length === 2,
);
