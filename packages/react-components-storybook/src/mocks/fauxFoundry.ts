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

import { FauxFoundry, TypeHelpers } from "@osdk/faux";

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

const SAMPLE_PDF_PATH = `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

export const MEDIA_EMPLOYEE_PK = 657495071;

export const updateEmployeeStoryAction = TypeHelpers.actionTypeBuilder(
  TypeHelpers.createActionType({
    apiName: "updateEmployeeStoryAction",
    displayName: "Update employee",
    parameters: {},
  })
)
  .addParameter("fullName", "string", true)
  .addParameter("yearsExperience", "integer", false)
  .addParameter("isRemote", "boolean", false)
  .addParameter("isFullTime", "boolean", false)
  .build();

export const toggleRemoteStoryAction = TypeHelpers.actionTypeBuilder(
  TypeHelpers.createActionType({
    apiName: "toggleRemoteStoryAction",
    displayName: "Toggle remote status",
    parameters: {},
  })
)
  .addParameter("isRemote", "boolean", false)
  .build();

type ActionParameterMap = Parameters<
  typeof TypeHelpers.createActionType
>[0]["parameters"];

const generatedFieldsActionParameters = {
  fullName: {
    displayName: "Full name",
    dataType: { type: "string" },
    required: true,
    typeClasses: [],
  },
  yearsExperience: {
    displayName: "Years of experience",
    dataType: { type: "integer" },
    required: false,
    typeClasses: [],
  },
  isRemote: {
    displayName: "Remote employee",
    dataType: { type: "boolean" },
    required: false,
    typeClasses: [],
  },
  startDate: {
    displayName: "Start date",
    dataType: { type: "timestamp" },
    required: false,
    typeClasses: [],
  },
  document: {
    displayName: "Document",
    dataType: { type: "attachment" },
    required: false,
    typeClasses: [],
  },
  manager: {
    displayName: "Manager",
    dataType: {
      type: "object",
      objectApiName: "Employee",
      objectTypeApiName: "Employee",
    },
    required: false,
    typeClasses: [],
  },
  reviewPool: {
    displayName: "Review pool",
    dataType: {
      type: "objectSet",
      objectApiName: "Employee",
      objectTypeApiName: "Employee",
    },
    required: false,
    typeClasses: [],
  },
} satisfies ActionParameterMap;

export const generatedFieldsStoryAction = TypeHelpers.actionTypeBuilder(
  TypeHelpers.createActionType({
    apiName: "generatedFieldsStoryAction",
    displayName: "Create employee profile",
    parameters: generatedFieldsActionParameters,
  })
).build();

const unsupportedFieldsActionParameters = {
  structPayload: {
    displayName: "Struct payload",
    dataType: {
      type: "struct",
      fields: [
        {
          name: "externalId",
          fieldType: { type: "string" },
          required: true,
        },
      ],
    },
    required: true,
    typeClasses: [],
  },
  geoshape: {
    displayName: "Geoshape",
    dataType: { type: "geoshape" },
    required: false,
    typeClasses: [],
  },
  classification: {
    displayName: "Classification",
    dataType: { type: "marking" },
    required: false,
    typeClasses: [],
  },
  objectKind: {
    displayName: "Object type",
    dataType: { type: "objectType" },
    required: false,
    typeClasses: [],
  },
} satisfies ActionParameterMap;

export const unsupportedFieldsStoryAction = TypeHelpers.actionTypeBuilder(
  TypeHelpers.createActionType({
    apiName: "unsupportedFieldsStoryAction",
    displayName: "Review unsupported fields",
    parameters: unsupportedFieldsActionParameters,
  })
).build();

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
  fauxFoundry
    .getDefaultOntology()
    .registerObjectType<Employee>(employeeMetadata);

  fauxFoundry
    .getDefaultOntology()
    .registerActionType(
      updateEmployeeStoryAction.actionTypeV2,
      () => undefined
    );
  fauxFoundry
    .getDefaultOntology()
    .registerActionType(toggleRemoteStoryAction.actionTypeV2, () => undefined);
  fauxFoundry
    .getDefaultOntology()
    .registerActionType(
      generatedFieldsStoryAction.actionTypeV2,
      () => undefined
    );
  fauxFoundry
    .getDefaultOntology()
    .registerActionType(
      unsupportedFieldsStoryAction.actionTypeV2,
      () => undefined
    );

  // Add mock data from JSON file. We synthesize marking values so the
  // ObjectTable marking column story has data to render — each employee is
  // assigned a classification (cycling unclassified → top-secret) and a
  // CBAC clearance set (compartments + releasability) varying by index.
  const dataStore = fauxFoundry.getDefaultDataStore();
  const classificationCycle = [
    "m-unclassified",
    "m-confidential",
    "m-secret",
    "m-top-secret",
  ];
  const compartmentPool = ["m-alpha", "m-bravo", "m-charlie"];
  const releasabilityPool = ["m-rel-usa", "m-rel-allied", "m-no-foreign"];
  employeeData.forEach((employee, index) => {
    const classificationMarking =
      classificationCycle[index % classificationCycle.length];
    const compartmentCount = (index % compartmentPool.length) + 1;
    const releasabilityCount = (index % releasabilityPool.length) + 1;
    const clearanceMarking = [
      ...compartmentPool.slice(0, compartmentCount),
      ...releasabilityPool.slice(0, releasabilityCount),
    ];
    dataStore.registerObject({
      ...employee,
      classificationMarking,
      clearanceMarking,
    });
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
    "compressed.tracemonkey-pldi-09.pdf"
  );
  const employee = dataStore.getObjectOrThrow("Employee", MEDIA_EMPLOYEE_PK);
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

  const categoryColors: Record<string, { textColor: string; bg: string }> = {
    "cat-compartment": { textColor: "#FFFFFF", bg: "#5B3F8A" },
    "cat-releasability": { textColor: "#FFFFFF", bg: "#1F6FB5" },
  };

  admin.setBannerResolver((markingIds, markings) => {
    if (markingIds.length === 0) {
      return {
        classificationString: "UNMARKED",
        textColor: "#FFFFFF",
        backgroundColors: ["#8F99A8"],
      };
    }

    const markingMap = new Map(markings.map((m) => [m.id, m]));
    const classificationId = markingIds.find(
      (id) => markingMap.get(id)?.categoryId === "cat-classification"
    );

    if (classificationId == null) {
      // No classification marking — label with the joined marking names so
      // CBAC compartment / releasability columns render meaningfully on
      // their own. Color tracks the first marking's category.
      const resolved = markingIds.map((id) => markingMap.get(id)?.name ?? id);
      const firstCategoryId = markingIds
        .map((id) => markingMap.get(id)?.categoryId)
        .find((cid): cid is string => cid != null);
      const swatch =
        firstCategoryId != null ? categoryColors[firstCategoryId] : undefined;
      return {
        classificationString: resolved.join(", "),
        textColor: swatch?.textColor ?? "#FFFFFF",
        backgroundColors: [swatch?.bg ?? "#8F99A8"],
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

  // Register a function-backed column query type
  fauxFoundry.getDefaultOntology().registerQueryType(
    {
      apiName: "getEmployeeSeniority",
      version: "1.0.0",
      displayName: "Get Employee Seniority",
      description:
        "Returns seniority level for each employee based on their start date",
      rid: "ri.function-registry.main.function.seniority-query",
      typeReferences: {},
      parameters: {
        employees: {
          dataType: {
            type: "objectSet",
            objectApiName: "Employee",
            objectTypeApiName: "Employee",
          },
          required: true,
        },
      },
      output: {
        type: "string",
      },
    },
    (req, fauxDataStore) => {
      const objects = [...fauxDataStore.getObjectsOfType("Employee")];
      const result: Record<string, string> = {};
      for (const obj of objects) {
        const pk = String(obj.employeeNumber);
        const startDate = obj.firstFullTimeStartDate as string | undefined;
        if (startDate) {
          const years =
            (Date.now() - new Date(startDate).getTime()) /
            (365.25 * 24 * 60 * 60 * 1000);
          result[pk] = years >= 2 ? "Senior" : years >= 1 ? "Mid" : "Junior";
        } else {
          result[pk] = "Unknown";
        }
      }
      return { value: result };
    }
  );

  // Log registered objects for debugging
  // eslint-disable-next-line no-console
  console.log(
    `FauxFoundry: Registered ${employeeData.length} employees`,
    [...dataStore.getObjectsOfType("Employee")].length
  );

  isInitialized = true;
}
