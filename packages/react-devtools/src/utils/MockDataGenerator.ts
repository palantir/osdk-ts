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

/**
 * Generates realistic mock data based on the primitive type and metadata.
 * This provides users with accurate, editable templates for their mocks.
 */
export class MockDataGenerator {
  /**
   * Generate payload (parameters) for actions
   */
  static generatePayload(primitive: SelectedPrimitive): string {
    if (primitive.type !== "action") {
      return "{}";
    }

    const actionData = primitive.data as any;
    const actionName = actionData.name || "action";

    let parameters: any;

    // Generate sample parameters based on action name
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
      // Default parameters
      parameters = {
        id: this.generateUUID(),
        data: {
          field1: "value1",
          field2: 42,
        },
      };
    }

    // Wrap in proper action request format
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

  /**
   * Generate mock data for the static data field based on primitive type
   */
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
      default:
        return "{\n  \"data\": {},\n  \"status\": \"SUCCESS\"\n}";
    }
  }

  /**
   * Generate mock function code based on primitive type
   */
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
      default:
        return "function generateMock(params) {\n  return {\n    data: {},\n    status: \"SUCCESS\"\n  };\n}";
    }
  }

  private static generateActionMockData(actionData: any): string {
    const actionName = actionData.name || "action";
    const actionId = this.generateUUID();

    // For createTodo, we need to use the actual object type from the system
    // Check if we have metadata about the actual object type
    let objectType = "TodoLike"; // Use the actual type from your logs

    // If action has metadata about the object type, use it
    if (actionData.objectType) {
      objectType = actionData.objectType;
    } else if (actionName === "createTodo") {
      objectType = "TodoLike"; // Based on your console logs showing TodoLike
    } else {
      objectType = this.extractObjectTypeFromAction(actionName);
    }

    // Generate action execution response matching ActionEditResponse format
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

  private static generateObjectMockData(objectData: any): string {
    const objectType = objectData.type || "Object";
    const primaryKey = objectData.primaryKey || this.generateUUID();

    const mockData = {
      id: primaryKey,
      __apiName: objectType,
      __primaryKey: primaryKey,
      __title: `Mock ${objectType}`,
      // Add common fields based on object type
      ...this.generateFieldsForObjectType(objectType),
    };

    return JSON.stringify(mockData, null, 2);
  }

  private static generateObjectSetMockData(objectSetData: any): string {
    const objectType = objectSetData.type || "Object";
    const pageSize = objectSetData.pageSize || 10;

    // Generate sample objects
    const objects = Array.from(
      { length: Math.min(pageSize, 3) },
      (_, index) => {
        const id = this.generateUUID();
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

  private static generateLinksMockData(linkData: any): string {
    const linkName = linkData.linkName || "linkedObjects";
    const sourceType = linkData.sourceType || "SourceObject";

    // Infer linked object type from link name
    const linkedType = this.inferLinkedTypeFromLinkName(linkName, sourceType);

    const linkedObjects = Array.from({ length: 2 }, (_, index) => {
      const id = this.generateUUID();
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

  private static generateQueryMockData(queryData: any): string {
    // For advanced queries, generate a generic response
    const mockData = {
      data: [
        {
          id: this.generateUUID(),
          __apiName: "QueryResult",
          __primaryKey: this.generateUUID(),
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

  private static generateActionFunctionCode(actionData: any): string {
    const actionName = actionData.name || "action";

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

  private static generateObjectFunctionCode(objectData: any): string {
    const objectType = objectData.type || "Object";

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

  private static generateObjectSetFunctionCode(objectSetData: any): string {
    const objectType = objectSetData.type || "Object";

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

  private static generateLinksFunctionCode(linkData: any): string {
    const linkName = linkData.linkName || "linkedObjects";
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

  private static generateQueryFunctionCode(queryData: any): string {
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

  /**
   * Generate common fields based on object type
   */
  private static generateFieldsForObjectType(
    objectType: string,
  ): Record<string, any> {
    // Common patterns for known object types
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

    // Generic fields for unknown types
    return {
      name: `Sample ${objectType}`,
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };
  }

  /**
   * Generate dynamic field code snippets for function templates
   */
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

  /**
   * Extract object type from action name (e.g., "create-todo" -> "Todo")
   */
  private static extractObjectTypeFromAction(actionName: string): string {
    // Common patterns: create-todo, createTodo, TodoCreate, etc.
    const patterns = [
      /create[_-]?(\w+)/i,
      /add[_-]?(\w+)/i,
      /new[_-]?(\w+)/i,
      /(\w+)[_-]?create/i,
      /(\w+)[_-]?add/i,
    ];

    for (const pattern of patterns) {
      const match = actionName.match(pattern);
      if (match) {
        // Capitalize first letter
        const objectType = match[1];
        return objectType.charAt(0).toUpperCase()
          + objectType.slice(1).toLowerCase();
      }
    }

    // Default fallback
    return "Object";
  }

  /**
   * Infer linked object type from link name
   */
  private static inferLinkedTypeFromLinkName(
    linkName: string,
    sourceType: string,
  ): string {
    // Common patterns
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
      return sourceType; // Same type for hierarchical relationships
    }

    // Try to singularize and capitalize
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

  /**
   * Generate parameters for create actions
   */
  private static generateCreateParameters(objectType: string): any {
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

    // Generic create parameters
    return {
      name: `New ${objectType}`,
      description: `Description for ${objectType}`,
      status: "ACTIVE",
    };
  }

  /**
   * Generate parameters for update actions
   */
  private static generateUpdateParameters(objectType: string): any {
    if (objectType === "Todo") {
      return {
        todo: { $primaryKey: this.generateUUID() },
        is_complete: true,
        Todo: "Updated Todo",
      };
    }

    if (objectType === "Employee") {
      return {
        employee: { $primaryKey: this.generateUUID() },
        department: "Marketing",
        email: "updated.email@example.com",
      };
    }

    // Generic update parameters
    return {
      object: { $primaryKey: this.generateUUID() },
      name: `Updated ${objectType}`,
      status: "MODIFIED",
    };
  }

  /**
   * Generate parameters for delete actions
   */
  private static generateDeleteParameters(objectType: string): any {
    return {
      object: { $primaryKey: this.generateUUID() },
      reason: "No longer needed",
    };
  }

  /**
   * Generate a UUID v4
   */
  private static generateUUID(): string {
    return crypto.randomUUID();
  }
}
