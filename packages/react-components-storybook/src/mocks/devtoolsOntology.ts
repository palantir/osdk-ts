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

import type { FauxFoundry } from "@osdk/faux";
import { TypeHelpers } from "@osdk/faux";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";

/**
 * A handful of extra, small object types (beyond Employee) purely so the
 * DevTools "Ontology Graph" story has a multi-node graph with real
 * cross-object links to explore: Office <-> Department <-> Project <-> Team.
 */

function mockProperty(
  displayName: string,
  type: "string" | "integer" | "double",
  rid: string
): OntologiesV2.PropertyV2 {
  return {
    displayName,
    dataType: { type },
    rid,
    status: { type: "experimental" },
    visibility: "NORMAL",
    typeClasses: [],
  };
}

const officeObjectType: OntologiesV2.ObjectTypeFullMetadata = {
  objectType: {
    apiName: "Office",
    displayName: "Office",
    pluralDisplayName: "Offices",
    status: "EXPERIMENTAL",
    icon: { type: "blueprint", color: "#4C90F0", name: "office" },
    primaryKey: "officeId",
    titleProperty: "city",
    rid: "ri.ontology.main.object-type.devtools-office",
    properties: {
      officeId: mockProperty(
        "Office ID",
        "string",
        "ri.ontology.main.property.devtools-office-id"
      ),
      city: mockProperty(
        "City",
        "string",
        "ri.ontology.main.property.devtools-office-city"
      ),
      capacity: mockProperty(
        "Capacity",
        "integer",
        "ri.ontology.main.property.devtools-office-capacity"
      ),
    },
  },
  linkTypes: [
    {
      apiName: "departments",
      displayName: "Departments",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Department",
      cardinality: "MANY",
      linkTypeRid: "ri.ontology.main.relation.devtools-office-department",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

const departmentObjectType: OntologiesV2.ObjectTypeFullMetadata = {
  objectType: {
    apiName: "Department",
    displayName: "Department",
    pluralDisplayName: "Departments",
    status: "EXPERIMENTAL",
    icon: { type: "blueprint", color: "#29A634", name: "diagram-tree" },
    primaryKey: "departmentId",
    titleProperty: "name",
    rid: "ri.ontology.main.object-type.devtools-department",
    properties: {
      departmentId: mockProperty(
        "Department ID",
        "string",
        "ri.ontology.main.property.devtools-department-id"
      ),
      name: mockProperty(
        "Name",
        "string",
        "ri.ontology.main.property.devtools-department-name"
      ),
      budget: mockProperty(
        "Budget",
        "double",
        "ri.ontology.main.property.devtools-department-budget"
      ),
      officeId: mockProperty(
        "Office ID",
        "string",
        "ri.ontology.main.property.devtools-department-office-id"
      ),
    },
  },
  linkTypes: [
    {
      apiName: "office",
      displayName: "Office",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Office",
      cardinality: "ONE",
      foreignKeyPropertyApiName: "officeId",
      linkTypeRid: "ri.ontology.main.relation.devtools-office-department",
    },
    {
      apiName: "projects",
      displayName: "Projects",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Project",
      cardinality: "MANY",
      linkTypeRid: "ri.ontology.main.relation.devtools-department-project",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

const projectObjectType: OntologiesV2.ObjectTypeFullMetadata = {
  objectType: {
    apiName: "Project",
    displayName: "Project",
    pluralDisplayName: "Projects",
    status: "EXPERIMENTAL",
    icon: { type: "blueprint", color: "#D9822B", name: "briefcase" },
    primaryKey: "projectId",
    titleProperty: "name",
    rid: "ri.ontology.main.object-type.devtools-project",
    properties: {
      projectId: mockProperty(
        "Project ID",
        "string",
        "ri.ontology.main.property.devtools-project-id"
      ),
      name: mockProperty(
        "Name",
        "string",
        "ri.ontology.main.property.devtools-project-name"
      ),
      status: mockProperty(
        "Status",
        "string",
        "ri.ontology.main.property.devtools-project-status"
      ),
      departmentId: mockProperty(
        "Department ID",
        "string",
        "ri.ontology.main.property.devtools-project-department-id"
      ),
      teamId: mockProperty(
        "Team ID",
        "string",
        "ri.ontology.main.property.devtools-project-team-id"
      ),
    },
  },
  linkTypes: [
    {
      apiName: "department",
      displayName: "Department",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Department",
      cardinality: "ONE",
      foreignKeyPropertyApiName: "departmentId",
      linkTypeRid: "ri.ontology.main.relation.devtools-department-project",
    },
    {
      apiName: "team",
      displayName: "Team",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Team",
      cardinality: "ONE",
      foreignKeyPropertyApiName: "teamId",
      linkTypeRid: "ri.ontology.main.relation.devtools-project-team",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

const teamObjectType: OntologiesV2.ObjectTypeFullMetadata = {
  objectType: {
    apiName: "Team",
    displayName: "Team",
    pluralDisplayName: "Teams",
    status: "EXPERIMENTAL",
    icon: { type: "blueprint", color: "#8F398F", name: "people" },
    primaryKey: "teamId",
    titleProperty: "name",
    rid: "ri.ontology.main.object-type.devtools-team",
    properties: {
      teamId: mockProperty(
        "Team ID",
        "string",
        "ri.ontology.main.property.devtools-team-id"
      ),
      name: mockProperty(
        "Name",
        "string",
        "ri.ontology.main.property.devtools-team-name"
      ),
      size: mockProperty(
        "Size",
        "integer",
        "ri.ontology.main.property.devtools-team-size"
      ),
    },
  },
  linkTypes: [
    {
      apiName: "projects",
      displayName: "Projects",
      status: "EXPERIMENTAL",
      objectTypeApiName: "Project",
      cardinality: "MANY",
      linkTypeRid: "ri.ontology.main.relation.devtools-project-team",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export const updateProjectStatusStoryAction = TypeHelpers.actionTypeBuilder(
  TypeHelpers.createActionType({
    apiName: "updateProjectStatusStoryAction",
    displayName: "Update project status",
    parameters: {},
    // Declares the action edits a Project, so the graph draws a
    // "Modifies → Project" edge from the action node.
    operations: [{ type: "modifyObject", objectTypeApiName: "Project" }],
  })
)
  .addParameter("status", "string", true)
  .build();

/**
 * Registers Office/Department/Project/Team on top of the Employee-only
 * default ontology, plus a sample action, so the DevTools story has a
 * multi-node graph to render instead of just Employee's self-link.
 */
export function registerDevtoolsOntology(fauxFoundry: FauxFoundry): void {
  const ontology = fauxFoundry.getDefaultOntology();
  ontology.registerObjectType(officeObjectType);
  ontology.registerObjectType(departmentObjectType);
  ontology.registerObjectType(projectObjectType);
  ontology.registerObjectType(teamObjectType);
  ontology.registerActionType(
    updateProjectStatusStoryAction.actionTypeV2,
    () => undefined
  );

  const dataStore = fauxFoundry.getDefaultDataStore();
  dataStore.registerObject({
    __apiName: "Office",
    __primaryKey: "office-nyc",
    officeId: "office-nyc",
    city: "New York",
    capacity: 250,
  });
  dataStore.registerObject({
    __apiName: "Office",
    __primaryKey: "office-sf",
    officeId: "office-sf",
    city: "San Francisco",
    capacity: 180,
  });
  dataStore.registerObject({
    __apiName: "Department",
    __primaryKey: "dept-eng",
    departmentId: "dept-eng",
    name: "Engineering",
    budget: 2_500_000,
    officeId: "office-sf",
  });
  dataStore.registerObject({
    __apiName: "Department",
    __primaryKey: "dept-sales",
    departmentId: "dept-sales",
    name: "Sales",
    budget: 900_000,
    officeId: "office-nyc",
  });
  dataStore.registerObject({
    __apiName: "Team",
    __primaryKey: "team-platform",
    teamId: "team-platform",
    name: "Platform",
    size: 8,
  });
  dataStore.registerObject({
    __apiName: "Project",
    __primaryKey: "proj-devtools",
    projectId: "proj-devtools",
    name: "OSDK DevTools",
    status: "In Progress",
    departmentId: "dept-eng",
    teamId: "team-platform",
  });
}
