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

import { FauxFoundry } from "@osdk/faux";
import type { Employee } from "../types/Employee.js";
import { employeeData } from "./employeeData.js";
import { employeeMetadata } from "./employeeMetadata.js";
import { interfaceMetadata } from "./interfaceMetadata.js";

const baseUrl = "https://test.palantirfoundry.com";

export const fauxFoundry: FauxFoundry = new FauxFoundry(baseUrl, {
  apiName: "osdk-storybook",
  displayName: "OSDK Storybook Ontology",
  description: "Mock ontology for OSDK React Components Storybook",
  rid: "ri.ontology.main.ontology.storybook-demo",
});

const SAMPLE_PDF_URL =
  "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

export const MEDIA_EMPLOYEE_PK = 657495071;

let isInitialized = false;

export async function setupFauxFoundry(): Promise<void> {
  if (isInitialized) {
    return;
  }

  // Register interface types
  Object.values(interfaceMetadata).forEach((interfaceType) => {
    fauxFoundry.getDefaultOntology().registerInterfaceType(interfaceType);
  });

  // Register Employee object type using metadata from JSON
  fauxFoundry.getDefaultOntology().registerObjectType<Employee>(
    employeeMetadata,
  );

  // Add mock data from JSON file
  const dataStore = fauxFoundry.getDefaultDataStore();
  employeeData.forEach((employee) => {
    dataStore.registerObject(employee);
  });

  // Register sample PDF media for an employee's employeeDocuments property
  const response = await fetch(SAMPLE_PDF_URL);
  const buffer = await response.arrayBuffer();
  const mediaRef = dataStore.registerMedia(
    "Employee",
    "employeeDocuments",
    buffer,
    "application/pdf",
    // cspell:disable-next-line
    "compressed.tracemonkey-pldi-09.pdf",
  );
  const employee = dataStore.getObjectOrThrow(
    "Employee",
    MEDIA_EMPLOYEE_PK,
  );
  dataStore.replaceObjectOrThrow({
    ...employee,
    employeeDocuments: mediaRef,
  });

  // Log registered objects for debugging
  // eslint-disable-next-line no-console
  console.log(
    `FauxFoundry: Registered ${employeeData.length} employees`,
    Array.from(dataStore.getObjectsOfType("Employee")).length,
  );

  isInitialized = true;
}
