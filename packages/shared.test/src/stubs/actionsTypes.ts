/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeV2 } from "@osdk/gateway/types";
import { employeeObjectType, officeObjectType } from "./objectTypes";

export const PromoteEmployee: ActionTypeV2 = {
  apiName: "promote-employee",
  description: "Update an employee's title and compensation",
  parameters: {
    employeeId: {
      dataType: {
        type: "integer",
      },
      required: true,
    },
    newTitle: {
      dataType: {
        type: "string",
      },
      required: true,
    },
    newCompensation: {
      dataType: {
        type: "double",
      },
      required: true,
    },
  },
  rid: "ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2167",
  operations: [{
    type: "modifyObject",
    objectTypeApiName: employeeObjectType.apiName,
  }],
  status: "ACTIVE",
};

export const PromoteEmployeeObject: ActionTypeV2 = {
  apiName: "promote-employee-object",
  description: "Update an employee's title and compensation",
  parameters: {
    employee: {
      dataType: {
        type: "object",
        objectApiName: employeeObjectType.apiName,
        objectTypeApiName: employeeObjectType.apiName,
      },
      required: true,
    },
    newTitle: {
      dataType: {
        type: "string",
      },
      required: true,
    },
    newCompensation: {
      dataType: {
        type: "double",
      },
      required: true,
    },
  },
  rid: "ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2168",
  operations: [{
    type: "modifyObject",
    objectTypeApiName: employeeObjectType.apiName,
  }],
  status: "ACTIVE",
};

export const CreateOffice: ActionTypeV2 = {
  apiName: "create-office",
  description: "Create an office's",
  parameters: {
    officeId: {
      dataType: {
        type: "string",
      },
      required: true,
    },
    address: {
      description:
        "The office's physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
    },
    capacity: {
      description:
        "The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
    },
    officeNames: {
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
      required: false,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f1",
  operations: [{
    type: "createObject",
    objectTypeApiName: officeObjectType.apiName,
  }],
  status: "ACTIVE",
};

export const CreateOfficeAndEmployee: ActionTypeV2 = {
  apiName: "create-office-and-employee",
  description: "Create an office and employee",
  parameters: {
    officeId: {
      dataType: {
        type: "string",
      },
      required: true,
    },
    address: {
      description:
        "The office's physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
    },
    capacity: {
      description:
        "The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
    },
    officeNames: {
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
      required: false,
    },
    employeeId: {
      description: "New employee Id",
      dataType: {
        type: "integer",
      },
      required: true,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [
    { type: "createObject", objectTypeApiName: officeObjectType.apiName },
    { type: "createObject", objectTypeApiName: employeeObjectType.apiName },
  ],
  status: "ACTIVE",
};

export const MoveOffice: ActionTypeV2 = {
  apiName: "move-office",
  description: "Update an office's physical location",
  parameters: {
    officeId: {
      dataType: {
        type: "string",
      },
      required: true,
    },
    newAddress: {
      description:
        "The office's new physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
    },
    newCapacity: {
      description:
        "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
    },
    officeNames: {
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "integer",
        },
      },
      required: false,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [{
    type: "modifyObject",
    objectTypeApiName: officeObjectType.apiName,
  }],
  status: "ACTIVE",
};

export const ActionTakesObjectSet: ActionTypeV2 = {
  apiName: "actionTakesObjectSet",
  description: "An action which takes an Object Set",
  parameters: {
    employees: {
      dataType: {
        type: "objectSet",
        objectTypeApiName: employeeObjectType.apiName,
        objectApiName: employeeObjectType.apiName,
      },
      required: true,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};

export const ActionTypeWithUnsupportedTypes: ActionTypeV2 = {
  apiName: "unsupported-action",
  description: "An unsupported action type",
  parameters: {
    unsupportedProperty: {
      dataType: {
        type: "unsupportedType" as "integer",
      },
      required: false,
    },
    unsupportedObject: {
      dataType: {
        type: "object",
        objectApiName: "unsupported",
        objectTypeApiName: "unsupported",
      },
      required: false,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};

export const actionTypes: ActionTypeV2[] = [
  PromoteEmployee,
  PromoteEmployeeObject,
  CreateOffice,
  CreateOfficeAndEmployee,
  MoveOffice,
  ActionTakesObjectSet,
];
