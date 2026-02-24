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

import { TypeHelpers as TH } from "@osdk/faux";
import type { ActionTypeV2 } from "@osdk/foundry.ontologies";
import { BarInterface, FooInterface } from "./interfaceTypes.js";
import { employeeObjectType, officeObjectType } from "./objectTypes.js";

export const editTodo: TH.ActionTypeBuilderResult<{
  id: TH.ActionParameterV2<"integer", true>;
  text: TH.ActionParameterV2<"string", false>;
  completed: TH.ActionParameterV2<"string", false>;
}> = TH.actionTypeBuilder("editTodo")
  .addParameter("id", "integer", true)
  .addParameter("text", "string")
  .addParameter("completed", "string")
  .build();

export const PromoteEmployee: ActionTypeV2 = {
  apiName: "promoteEmployee",
  description: "Update an employee's title and compensation",
  parameters: {
    employeeId: {
      "displayName": "Employee ID",
      dataType: {
        type: "integer",
      },
      required: true,
      typeClasses: [],
    },
    newTitle: {
      "displayName": "New Title",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    newCompensation: {
      "displayName": "New Compensation",
      dataType: {
        type: "double",
      },
      required: true,
      typeClasses: [],
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
  apiName: "promoteEmployeeObject",
  description: "Update an employee's title and compensation",
  parameters: {
    employee: {
      "displayName": "Employee",
      dataType: {
        type: "object",
        objectApiName: employeeObjectType.apiName,
        objectTypeApiName: employeeObjectType.apiName,
      },
      required: true,
      typeClasses: [],
    },
    newTitle: {
      displayName: "New Title",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    newCompensation: {
      displayName: "New Compensation",
      dataType: {
        type: "double",
      },
      required: true,
      typeClasses: [],
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
  apiName: "createOffice",
  description: "Create an office's",
  parameters: {
    officeId: {
      displayName: "Office ID",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    address: {
      displayName: "Address",
      description:
        "The office's physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
      typeClasses: [],
    },
    capacity: {
      displayName: "Capacity",
      description:
        "The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
      typeClasses: [],
    },
    officeNames: {
      displayName: "Office Names",
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
      required: false,
      typeClasses: [],
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
  apiName: "createOfficeAndEmployee",
  description: "Create an office and employee",
  parameters: {
    officeId: {
      displayName: "Office ID",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    address: {
      displayName: "Address",
      description:
        "The office's physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
      typeClasses: [],
    },
    capacity: {
      displayName: "Capacity",
      description:
        "The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
      typeClasses: [],
    },
    officeNames: {
      displayName: "Office Names",
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
      required: false,
      typeClasses: [],
    },
    employeeId: {
      displayName: "Employee ID",
      description: "New employee Id",
      dataType: {
        type: "integer",
      },
      required: true,
      typeClasses: [],
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
  apiName: "moveOffice",
  description: "Update an office's physical location",
  displayName: "move-office",
  parameters: {
    officeId: {
      displayName: "Office ID",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    newAddress: {
      displayName: "New Address",
      description:
        "The office's new physical address (not necessarily shipping address)",
      dataType: {
        type: "string",
      },
      required: false,
      typeClasses: [],
    },
    newCapacity: {
      displayName: "New Capacity",
      description:
        "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)",
      dataType: {
        type: "integer",
      },
      required: false,
      typeClasses: [],
    },
    officeNames: {
      displayName: "Office Names",
      description: "A list of all office names",
      dataType: {
        type: "array",
        subType: {
          type: "integer",
        },
      },
      required: false,
      typeClasses: [],
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
      displayName: "Employees",
      dataType: {
        type: "objectSet",
        objectTypeApiName: employeeObjectType.apiName,
        objectApiName: employeeObjectType.apiName,
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};

export const ActionTakesAttachment: ActionTypeV2 = {
  apiName: "actionTakesAttachment",
  description: "An action which takes an attachment",
  parameters: {
    attachment: {
      displayName: "Attachment",
      dataType: {
        type: "attachment",
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3",
  operations: [],
  status: "ACTIVE",
};

export const ActionTakesMedia: ActionTypeV2 = {
  apiName: "actionTakesMedia",
  description: "An action which takes a mediaReference parameter",
  parameters: {
    media_reference: {
      displayName: "Media Reference",
      dataType: {
        type: "mediaReference",
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3",
  operations: [],
  status: "ACTIVE",
};

export const ActionTypeWithUnsupportedTypes: ActionTypeV2 = {
  apiName: "unsupportedAction",
  description: "An unsupported action type",
  parameters: {
    unsupportedProperty: {
      displayName: "Unsupported Property",
      dataType: {
        type: "unsupportedType" as "integer",
      },
      required: false,
      typeClasses: [],
    },
    unsupportedObject: {
      displayName: "Unsupported Object",
      dataType: {
        type: "object",
        objectApiName: "unsupported",
        objectTypeApiName: "unsupported",
      },
      required: false,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};

export const ActionTakesInterface: ActionTypeV2 = {
  apiName: "deleteFooInterface",
  displayName: "Delete Foo Interface",
  status: "EXPERIMENTAL",
  parameters: {
    deletedInterface: {
      displayName: "Deleted Interface",
      dataType: {
        type: "interfaceObject",
        interfaceTypeApiName: FooInterface.apiName,
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817",
  operations: [
    {
      type: "deleteInterfaceObject",
      interfaceTypeApiName: FooInterface.apiName,
    },
  ],
};

export const ActionTakesAnotherInterface: ActionTypeV2 = {
  apiName: "delete-bar-interface",
  displayName: "Delete Bar Interface",
  status: "EXPERIMENTAL",
  parameters: {
    deletedInterface: {
      displayName: "Deleted Interface",
      dataType: {
        type: "interfaceObject",
        interfaceTypeApiName: BarInterface.apiName,
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.actions.main.action-type.3828bab4-4ac7-4fdf-a780-6ccbc359d817",
  operations: [
    {
      type: "deleteInterfaceObject",
      interfaceTypeApiName: BarInterface.apiName,
    },
  ],
};

export const ActionCreatesInterface: ActionTypeV2 = {
  apiName: "createFooInterface",
  displayName: "Create Foo Interface",
  status: "EXPERIMENTAL",
  parameters: {
    createdInterface: {
      displayName: "Created Interface",
      dataType: {
        type: "objectType",
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817",
  operations: [
    {
      "type": "createInterfaceObject",
      "interfaceTypeApiName": "FooInterface",
    },
  ],
};

export const ActionTakesStruct: ActionTypeV2 = {
  apiName: "createStructPerson",
  description: "Create a struct",
  parameters: {
    name: {
      displayName: "Name",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    address: {
      displayName: "Address",
      dataType: {
        type: "struct",
        fields: [
          {
            name: "city",
            fieldType: {
              type: "string",
            },
            required: true,
          },
          {
            name: "state",
            fieldType: {
              type: "string",
            },
            required: true,
          },
          {
            name: "zipcode",
            fieldType: {
              type: "integer",
            },
            required: true,
          },
        ],
      },
      required: false,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.9f24017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};

export const ActionTakesGeoshape: ActionTypeV2 = {
  apiName: "addGeoshape",
  displayName: "Add Geoshape",
  status: "EXPERIMENTAL",
  parameters: {
    geoshapeParam: {
      displayName: "Geoshape Param",
      dataType: {
        type: "geoshape",
      },
      required: true,
      typeClasses: [],
    },
    geohashParam: {
      displayName: "Geohash Param",
      dataType: {
        type: "geohash",
      },
      required: true,
      typeClasses: [],
    },
  },
  rid: "ri.actions.main.action-type.5828bab4-49c7-4fdf-a780-6ccbc359d817",
  operations: [],
};
