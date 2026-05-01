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

import type { SelectedPrimitive } from "../components/PrimitiveSelectionPanel.js";
import type {
  DiscoveredAction,
  DiscoveredLink,
  DiscoveredObject,
  DiscoveredObjectSet,
  DiscoveredQuery,
} from "./ComponentPrimitiveDiscovery.js";

export class MockDataGenerator {
  static generatePayload(primitive: SelectedPrimitive): string {
    if (primitive.type !== "action") {
      return "{}";
    }

    const actionName = primitive.data.name;

    let parameters: Record<string, unknown>;

    if (actionName.toLowerCase().includes("create")) {
      const objectType = this.extractObjectTypeFromAction(actionName);
      parameters = this.generateCreateParameters(objectType);
    } else if (
      actionName.toLowerCase().includes("update")
      || actionName.toLowerCase().includes("modify")
    ) {
      const objectType = this.extractObjectTypeFromAction(actionName);
      parameters = this.generateUpdateParameters(objectType);
    } else if (actionName.toLowerCase().includes("delete")) {
      const objectType = this.extractObjectTypeFromAction(actionName);
      parameters = this.generateDeleteParameters(objectType);
    } else {
      parameters = {
        id: crypto.randomUUID(),
        data: {
          field1: "value1",
          field2: 42,
        },
      };
    }

    return JSON.stringify(
      {
        parameters,
        options: {
          mode: "VALIDATE_AND_EXECUTE",
          returnEdits: "ALL_V2_WITH_DELETIONS",
        },
      },
      null,
      2,
    );
  }

  static generateStaticData(primitive: SelectedPrimitive): string {
    switch (primitive.type) {
      case "action":
        return this.generateActionMockData(primitive.data);
      case "object":
        return this.generateObjectMockData(primitive.data);
      case "objectSet":
        return this.generateObjectSetMockData(primitive.data);
      case "link":
        return this.generateLinksMockData(primitive.data);
      case "query":
        return this.generateQueryMockData(primitive.data);
      case "aggregation":
        return "{\n  \"data\": {},\n  \"status\": \"SUCCESS\"\n}";
    }
  }

  static generateFunctionCode(primitive: SelectedPrimitive): string {
    switch (primitive.type) {
      case "action":
        return this.generateActionFunctionCode(primitive.data);
      case "object":
        return this.generateObjectFunctionCode(primitive.data);
      case "objectSet":
        return this.generateObjectSetFunctionCode(primitive.data);
      case "link":
        return this.generateLinksFunctionCode(primitive.data);
      case "query":
        return this.generateQueryFunctionCode(primitive.data);
      case "aggregation":
        return "function generateMock(params) {\n  return {\n    data: {},\n    status: \"SUCCESS\"\n  };\n}";
    }
  }

  private static generateActionMockData(actionData: DiscoveredAction): string {
    const actionName = actionData.name;
    const actionId = crypto.randomUUID();

    let objectType: string;

    if (actionName === "createTodo") {
      objectType = "TodoLike";
    } else {
      objectType = this.extractObjectTypeFromAction(actionName);
    }

    const mockData = {
      type: "edits",
      addedObjects: [
        {
          primaryKey: actionId,
          objectType: objectType,
        },
      ],
      modifiedObjects: [],
      deletedObjects: [],
      addedLinks: [],
      deletedLinks: [],
      deletedObjectsCount: 0,
      deletedLinksCount: 0,
      editedObjectTypes: [objectType],
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateObjectMockData(objectData: DiscoveredObject): string {
    const objectType = objectData.type;
    const primaryKey = objectData.primaryKey || crypto.randomUUID();

    const mockData = {
      id: primaryKey,
      __apiName: objectType,
      __primaryKey: primaryKey,
      __title: `Mock ${objectType}`,
      ...this.generateFieldsForObjectType(objectType),
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateObjectSetMockData(
    objectSetData: DiscoveredObjectSet,
  ): string {
    const objectType = objectSetData.type;
    const pageSize = objectSetData.pageSize || 10;

    const objects = Array.from(
      { length: Math.min(pageSize, 3) },
      (_, index) => {
        const id = crypto.randomUUID();
        return {
          id,
          __apiName: objectType,
          __primaryKey: id,
          __title: `${objectType} ${index + 1}`,
          ...this.generateFieldsForObjectType(objectType),
        };
      },
    );

    const mockData = {
      data: objects,
      totalCount: String(objects.length),
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateLinksMockData(linkData: DiscoveredLink): string {
    const linkName = linkData.linkName;
    const sourceType = linkData.sourceType;

    const linkedType = this.inferLinkedTypeFromLinkName(linkName, sourceType);

    const linkedObjects = Array.from({ length: 2 }, (_, index) => {
      const id = crypto.randomUUID();
      return {
        $apiName: linkedType,
        $primaryKey: id,
        $objectType: linkedType,
        $title: `${linkedType} ${index + 1}`,
        ...this.generateFieldsForObjectType(linkedType),
      };
    });

    const mockData = {
      data: linkedObjects,
      totalCount: String(linkedObjects.length),
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateQueryMockData(queryData: DiscoveredQuery): string {
    const mockData = {
      data: [
        {
          id: crypto.randomUUID(),
          __apiName: "QueryResult",
          __primaryKey: crypto.randomUUID(),
          __title: "Query Result 1",
          customField1: "value1",
          customField2: 42,
          customField3: true,
        },
      ],
      totalCount: "1",
      metadata: {
        queryType: queryData.hookType || "advanced",
        signature: queryData.signature || "custom query",
      },
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateActionFunctionCode(
    actionData: DiscoveredAction,
  ): string {
    const actionName = actionData.name;

    return `function generateMock(params) {
  // Access action parameters
  console.log("Action: ${actionName}", params);

  // Generate dynamic response based on parameters
  const primaryKey = generateId();

  return {
    validation: {
      result: "VALID",
      submissionCriteria: [],
      parameters: params
    },
    edits: {
      type: "edits",
      edits: [
        {
          type: "addObject",
          primaryKey: primaryKey,
          objectType: "${this.extractObjectTypeFromAction(actionName)}"
        }
      ],
      addedObjectCount: 1,
      modifiedObjectsCount: 0,
      deletedObjectsCount: 0,
      addedLinksCount: 0,
      deletedLinksCount: 0
    }
  };
}

function generateId() {
  return crypto.randomUUID();
}`;
  }

  private static generateObjectFunctionCode(
    objectData: DiscoveredObject,
  ): string {
    const objectType = objectData.type;

    return `function generateMock(params) {
  // Access object primary key
  const primaryKey = params.primaryKey || generateId();

  return {
    id: primaryKey,
    __apiName: "${objectType}",
    __primaryKey: primaryKey,
    __title: \`Mock ${objectType} \${primaryKey}\`,
    // Add dynamic fields based on context
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
    ${this.generateDynamicFieldsForObjectType(objectType)}
  };
}

function generateId() {
  return crypto.randomUUID();
}`;
  }

  private static generateObjectSetFunctionCode(
    objectSetData: DiscoveredObjectSet,
  ): string {
    const objectType = objectSetData.type;

    return `function generateMock(params) {
  // Access query parameters
  const pageSize = params.pageSize || 10;
  const where = params.where || {};

  // Generate dynamic list based on parameters
  const objects = Array.from({ length: pageSize }, (_, index) => {
    const id = generateId();
    return {
      id,
      __apiName: "${objectType}",
      __primaryKey: id,
      __title: \`${objectType} \${index + 1}\`,
      // Add fields based on where clause
      ${this.generateDynamicFieldsForObjectType(objectType)}
    };
  });

  return {
    data: objects,
    totalCount: String(objects.length)
  };
}

function generateId() {
  return crypto.randomUUID();
}`;
  }

  private static generateLinksFunctionCode(linkData: DiscoveredLink): string {
    const linkName = linkData.linkName;
    const linkedType = this.inferLinkedTypeFromLinkName(
      linkName,
      linkData.sourceType,
    );

    return `function generateMock(params) {
  // Access link traversal context
  const sourceObject = params.sourceObject;
  const linkName = "${linkName}";

  // Generate linked objects based on source
  const linkedObjects = Array.from({ length: 3 }, (_, index) => {
    const id = generateId();
    return {
      $apiName: "${linkedType}",
      $primaryKey: id,
      $objectType: "${linkedType}",
      $title: \`${linkedType} \${index + 1}\`,
      // Add relationship fields
      sourceId: sourceObject?.$primaryKey,
      ${this.generateDynamicFieldsForObjectType(linkedType)}
    };
  });

  return {
    data: linkedObjects,
    totalCount: String(linkedObjects.length)
  };
}

function generateId() {
  return crypto.randomUUID();
}`;
  }

  private static generateQueryFunctionCode(queryData: DiscoveredQuery): string {
    return `function generateMock(params) {
  // Access advanced query parameters
  console.log("Query params:", params);

  // Generate dynamic results based on query
  const results = Array.from({ length: 5 }, (_, index) => ({
    id: generateId(),
    __apiName: "QueryResult",
    __primaryKey: generateId(),
    __title: \`Result \${index + 1}\`,
    // Add computed fields
    score: Math.random() * 100,
    relevance: Math.random(),
    timestamp: new Date().toISOString()
  }));

  return {
    data: results,
    totalCount: String(results.length),
    metadata: {
      queryType: "${queryData.hookType || "advanced"}",
      executionTime: Math.random() * 1000
    }
  };
}

function generateId() {
  return crypto.randomUUID();
}`;
  }

  private static generateFieldsForObjectType(
    objectType: string,
  ): Record<string, unknown> {
    if (objectType === "Todo") {
      return {
        title: "Sample Todo",
        isComplete: false,
        description: "This is a mock todo item",
        createdAt: new Date().toISOString(),
      };
    }

    if (objectType === "Employee") {
      return {
        employeeId: Math.floor(Math.random() * 10000),
        fullName: "John Doe",
        email: "john.doe@example.com",
        department: "Engineering",
      };
    }

    if (objectType === "Office") {
      return {
        officeId: `OFFICE-${Math.floor(Math.random() * 100)}`,
        name: "Main Office",
        location: "New York",
        capacity: 100,
      };
    }

    return {
      name: `Sample ${objectType}`,
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };
  }

  private static generateDynamicFieldsForObjectType(
    objectType: string,
  ): string {
    if (objectType === "Todo") {
      return `title: \`Todo Item \${index || ""}\`,
    isComplete: Math.random() > 0.5,
    description: "Generated todo description",
    createdAt: new Date().toISOString()`;
    }

    if (objectType === "Employee") {
      return `employeeId: Math.floor(Math.random() * 10000),
    fullName: \`Employee \${index || ""}\`,
    email: \`employee\${index || ""}@example.com\`,
    department: ["Engineering", "Sales", "Marketing"][Math.floor(Math.random() * 3)]`;
    }

    return `name: \`${objectType} \${index || ""}\`,
    status: "ACTIVE",
    createdAt: new Date().toISOString()`;
  }

  private static extractObjectTypeFromAction(actionName: string): string {
    const patterns = [
      /create[_-]?(\w+)/i,
      /add[_-]?(\w+)/i,
      /new[_-]?(\w+)/i,
      /(\w+)[_-]?create/i,
      /(\w+)[_-]?add/i,
    ];

    for (const pattern of patterns) {
      const match = actionName.match(pattern);
      if (match && match[1]) {
        return match[1].charAt(0).toUpperCase()
          + match[1].slice(1).toLowerCase();
      }
    }

    return "Object";
  }

  private static inferLinkedTypeFromLinkName(
    linkName: string,
    sourceType: string,
  ): string {
    if (linkName === "occupants" || linkName === "employees") {
      return "Employee";
    }
    if (linkName === "offices" || linkName === "locations") {
      return "Office";
    }
    if (linkName === "todos" || linkName === "tasks") {
      return "Todo";
    }
    if (linkName === "children" || linkName === "parents") {
      return sourceType;
    }

    let singular = linkName;
    if (linkName.endsWith("ies")) {
      singular = linkName.slice(0, -3) + "y";
    } else if (linkName.endsWith("es")) {
      singular = linkName.slice(0, -2);
    } else if (linkName.endsWith("s")) {
      singular = linkName.slice(0, -1);
    }

    return singular.charAt(0).toUpperCase() + singular.slice(1);
  }

  private static generateCreateParameters(
    objectType: string,
  ): Record<string, unknown> {
    if (objectType === "Todo") {
      return {
        Todo: "New Todo Item",
        is_complete: false,
        location: "0,0",
      };
    }

    if (objectType === "Employee") {
      return {
        fullName: "John Doe",
        email: "john.doe@example.com",
        employeeId: Math.floor(Math.random() * 10000),
        department: "Engineering",
      };
    }

    return {
      name: `New ${objectType}`,
      description: `Description for ${objectType}`,
      status: "ACTIVE",
    };
  }

  private static generateUpdateParameters(
    objectType: string,
  ): Record<string, unknown> {
    if (objectType === "Todo") {
      return {
        todo: { $primaryKey: crypto.randomUUID() },
        is_complete: true,
        Todo: "Updated Todo",
      };
    }

    if (objectType === "Employee") {
      return {
        employee: { $primaryKey: crypto.randomUUID() },
        department: "Marketing",
        email: "updated.email@example.com",
      };
    }

    return {
      object: { $primaryKey: crypto.randomUUID() },
      name: `Updated ${objectType}`,
      status: "MODIFIED",
    };
  }

  private static generateDeleteParameters(
    _objectType: string,
  ): Record<string, unknown> {
    return {
      object: { $primaryKey: crypto.randomUUID() },
      reason: "No longer needed",
    };
  }
}
