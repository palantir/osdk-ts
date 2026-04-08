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
import { SubmitOrder } from "./actionMetadata.js";
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

const SAMPLE_PDF_PATH =
  `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

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

  // Register action types with a no-op implementation
  fauxFoundry.getDefaultOntology().registerActionType(SubmitOrder, () => {});

  // Add mock data from JSON file
  const dataStore = fauxFoundry.getDefaultDataStore();
  employeeData.forEach((employee) => {
    dataStore.registerObject(employee);
  });

  // Register sample PDF media for an employee's employeeDocuments property
  const response = await fetch(SAMPLE_PDF_PATH);
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

  // Register CBAC marking categories and markings
  const cbacCategories = [
    {
      id: "cat-classification",
      name: "Classification Level",
      description: "Overall classification level of the data",
      categoryType: "DISJUNCTIVE" as const,
      markingType: "MANDATORY" as const,
      markings: [
        "m-unclassified",
        "m-confidential",
        "m-secret",
        "m-top-secret",
      ],
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "cat-compartment",
      name: "Compartments",
      description: "Compartmented information access controls",
      categoryType: "CONJUNCTIVE" as const,
      markingType: "CBAC" as const,
      markings: ["m-alpha", "m-bravo", "m-charlie"],
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "cat-releasability",
      name: "Releasability",
      description: "Release restrictions for data sharing",
      categoryType: "CONJUNCTIVE" as const,
      markingType: "CBAC" as const,
      markings: ["m-rel-usa", "m-rel-allied", "m-no-foreign"],
      createdTime: "2024-01-01T00:00:00Z",
    },
  ];

  const cbacMarkings = [
    {
      id: "m-unclassified",
      categoryId: "cat-classification",
      name: "Unclassified",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-confidential",
      categoryId: "cat-classification",
      name: "Confidential",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-secret",
      categoryId: "cat-classification",
      name: "Secret",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-top-secret",
      categoryId: "cat-classification",
      name: "Top Secret",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-alpha",
      categoryId: "cat-compartment",
      name: "ALPHA",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-bravo",
      categoryId: "cat-compartment",
      name: "BRAVO",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-charlie",
      categoryId: "cat-compartment",
      name: "CHARLIE",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-rel-usa",
      categoryId: "cat-releasability",
      name: "REL USA",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-rel-allied",
      categoryId: "cat-releasability",
      name: "REL ALLIED",
      createdTime: "2024-01-01T00:00:00Z",
    },
    {
      id: "m-no-foreign",
      categoryId: "cat-releasability",
      name: "NO FOREIGN",
      createdTime: "2024-01-01T00:00:00Z",
    },
  ];

  const classificationColors: Record<
    string,
    { textColor: string; backgroundColors: string[] }
  > = {
    "m-unclassified": {
      textColor: "#FFFFFF",
      backgroundColors: ["#007A33"],
    },
    "m-confidential": {
      textColor: "#FFFFFF",
      backgroundColors: ["#0033A0"],
    },
    "m-secret": { textColor: "#FFFFFF", backgroundColors: ["#C8102E"] },
    "m-top-secret": {
      textColor: "#000000",
      backgroundColors: ["#FF8C00"],
    },
  };

  const admin = fauxFoundry.getAdmin();

  for (const category of cbacCategories) {
    admin.registerMarkingCategory(category);
  }
  for (const marking of cbacMarkings) {
    admin.registerMarking(marking);
  }

  admin.setBannerResolver((markingIds, markings) => {
    const markingMap = new Map(markings.map((m) => [m.id, m]));
    const classificationId = markingIds.find(
      (id) => markingMap.get(id)?.categoryId === "cat-classification",
    );

    if (classificationId == null) {
      return {
        classificationString: "UNMARKED",
        textColor: "#FFFFFF",
        backgroundColors: ["#8F99A8"],
      };
    }

    const colors = classificationColors[classificationId] ?? {
      textColor: "#FFFFFF",
      backgroundColors: ["#8F99A8"],
    };

    const parts: string[] = [];
    const classificationMarking = markingMap.get(classificationId);
    if (classificationMarking != null) {
      parts.push(classificationMarking.name.toUpperCase());
    }

    const compartments = markingIds
      .filter((id) => markingMap.get(id)?.categoryId === "cat-compartment")
      .map((id) => markingMap.get(id)?.name ?? id);

    if (compartments.length > 0) {
      parts.push(compartments.join(" / "));
    }

    const releasability = markingIds
      .filter((id) => markingMap.get(id)?.categoryId === "cat-releasability")
      .map((id) => markingMap.get(id)?.name ?? id);

    if (releasability.length > 0) {
      parts.push(releasability.join(", "));
    }

    return {
      classificationString: parts.join(" // "),
      ...colors,
    };
  });

  // Log registered objects for debugging
  // eslint-disable-next-line no-console
  console.log(
    `FauxFoundry: Registered ${employeeData.length} employees`,
    Array.from(dataStore.getObjectsOfType("Employee")).length,
  );

  isInitialized = true;
}
