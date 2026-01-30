import { FauxFoundry } from "@osdk/faux";
import type { ObjectTypeFullMetadataV2 } from "@osdk/foundry.ontologies";
import { employeeData } from "./mockData.js";

const baseUrl = "https://test.palantirfoundry.com";

export const fauxFoundry = new FauxFoundry(baseUrl, {
  apiName: "osdk-storybook",
  displayName: "OSDK Storybook Ontology",
  description: "Mock ontology for OSDK React Components Storybook",
  rid: "ri.ontology.main.ontology.storybook-demo",
});

// Configure Employee object type
const employeeObjectType: ObjectTypeFullMetadataV2 = {
  objectType: {
    apiName: "Employee",
    displayName: "Employee",
    primaryKey: "employeeId",
    properties: {
      employeeId: {
        dataType: { type: "string" },
      },
      fullName: {
        dataType: { type: "string" },
      },
      email: {
        dataType: { type: "string" },
      },
      jobTitle: {
        dataType: { type: "string" },
      },
      department: {
        dataType: { type: "string" },
      },
      officeId: {
        dataType: { type: "string" },
      },
      firstFullTimeStartDate: {
        dataType: { type: "date" },
      },
      leadId: {
        dataType: { type: "string" },
      },
    },
  },
  linkTypes: [
    {
      apiName: "lead",
      displayName: "Lead",
      status: "ACTIVE",
      cardinality: "ONE",
      objectTypeApiName: "Employee",
      foreignKeyPropertyApiName: "leadId",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

const officeObjectType: ObjectTypeFullMetadataV2 = {
  objectType: {
    apiName: "Office",
    displayName: "Office",
    primaryKey: "officeId",
    properties: {
      officeId: {
        dataType: { type: "string" },
      },
      officeName: {
        dataType: { type: "string" },
      },
      location: {
        dataType: { type: "string" },
      },
      capacity: {
        dataType: { type: "integer" },
      },
    },
  },
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

// Register object types
fauxFoundry.getDefaultOntology().registerObjectType(employeeObjectType);
fauxFoundry.getDefaultOntology().registerObjectType(officeObjectType);

// Add mock data
const dataStore = fauxFoundry.getDefaultDataStore();
employeeData.forEach((employee) => {
  const { lead, ...rest } = employee;
  dataStore.registerObject({
    __apiName: "Employee",
    __primaryKey: employee.employeeId,
    ...rest,
    leadId: lead, // Map lead to leadId for the foreign key
  });
});
