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
import * as employeeDataJsonFile from "./employee_data.json";
import * as employeeMetadataJson from "./employee_metadata.json";
import * as interfaceMetadataJson from "./interface_metadata.json";

const baseUrl = "https://test.palantirfoundry.com";

export const fauxFoundry: FauxFoundry = new FauxFoundry(baseUrl, {
  apiName: "osdk-storybook",
  displayName: "OSDK Storybook Ontology",
  description: "Mock ontology for OSDK React Components Storybook",
  rid: "ri.ontology.main.ontology.storybook-demo",
});

// Register interface types
const interfaceMetadata = interfaceMetadataJson as any;
Object.values(interfaceMetadata).forEach((interfaceType: any) => {
  fauxFoundry.getDefaultOntology().registerInterfaceType(interfaceType);
});

// Register Employee object type using metadata from JSON
const employeeMetadata = employeeMetadataJson as any;
fauxFoundry.getDefaultOntology().registerObjectType(employeeMetadata);

// Add mock data from JSON file
const dataStore = fauxFoundry.getDefaultDataStore();
const employeeDataJson = employeeDataJsonFile as any;
employeeDataJson.data.forEach((employee: any) => {
  // Remove __apiName and __primaryKey if they exist to avoid duplication
  const { __apiName, __primaryKey, ...employeeData } = employee;
  dataStore.registerObject({
    __apiName: "Employee",
    __primaryKey: __primaryKey || employee.employeeNumber,
    ...employeeData,
  });
});

// Log registered objects for debugging
// eslint-disable-next-line no-console
console.log(
  `FauxFoundry: Registered ${employeeDataJson.data.length} employees`,
  dataStore.getObjectsOfType("Employee").length,
);
