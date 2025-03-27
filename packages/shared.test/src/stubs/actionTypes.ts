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

import type { ActionTypeV2, ObjectTypeApiName } from "@osdk/foundry.ontologies";
import type { ActionTypeBuilderResult } from "../FauxFoundry/typeHelpers/ActionTypeBuilder.js";
import { ActionTypeBuilder } from "../FauxFoundry/typeHelpers/ActionTypeBuilder.js";
import type { TH_ActionParameterV2 } from "../FauxFoundry/typeHelpers/TH_ActionParameterV2.js";
import { BarInterface, FooInterface } from "./interfaceTypes.js";
import { employeeObjectType, officeObjectType } from "./objectTypes.js";

export const editTodo: ActionTypeBuilderResult<{
  id: TH_ActionParameterV2<"integer", true>;
  text: TH_ActionParameterV2<"string", false>;
  completed: TH_ActionParameterV2<"string", false>;
}> = new ActionTypeBuilder("editTodo")
  .addParameter("id", "integer", true)
  .addParameter("text", "string")
  .addParameter("completed", "string")
  .build();

export const PromoteEmployee: ActionTypeV2 = {
  apiName: "promoteEmployee",
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
  apiName: "promoteEmployeeObject",
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
  apiName: "createOffice",
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
  apiName: "createOfficeAndEmployee",
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

interface MoveOfficeActionDef {
  readonly apiName: "moveOffice";
  readonly description: "Update an office's physical location";
  readonly displayName: "move-office";
  readonly parameters: {
    readonly officeId: {
      readonly dataType: {
        readonly type: "string";
      };
      readonly required: true;
    };
    readonly newAddress: {
      readonly description:
        "The office's new physical address (not necessarily shipping address)";
      readonly dataType: {
        readonly type: "string";
      };
      readonly required: false;
    };
    readonly newCapacity: {
      readonly description:
        "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)";
      readonly dataType: {
        readonly type: "integer";
      };
      readonly required: false;
    };
    readonly officeNames: {
      readonly description: "A list of all office names";
      readonly dataType: {
        readonly type: "array";
        readonly subType: {
          readonly type: "integer";
        };
      };
      readonly required: false;
    };
  };
  readonly rid:
    "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2";
  readonly operations: [
    {
      readonly type: "modifyObject";
      readonly objectTypeApiName: ObjectTypeApiName;
    },
  ];
  readonly status: "ACTIVE";
}

export const MoveOffice: MoveOfficeActionDef = {
  apiName: "moveOffice",
  description: "Update an office's physical location",
  displayName: "move-office",
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
} as const satisfies ActionTypeV2;

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

export const ActionTakesAttachment: {
  readonly apiName: "actionTakesAttachment";
  readonly description: "An action which takes an attachment";
  readonly parameters: {
    readonly attachment: {
      readonly dataType: {
        readonly type: "attachment";
      };
      readonly required: true;
    };
  };
  readonly rid:
    "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3";
  readonly operations: [];
  readonly status: "ACTIVE";
} = {
  apiName: "actionTakesAttachment",
  description: "An action which takes an attachment",
  parameters: {
    attachment: {
      dataType: {
        type: "attachment",
      },
      required: true,
    },
  },
  rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3",
  operations: [],
  status: "ACTIVE",
} as const satisfies ActionTypeV2;

export const ActionTakesMedia: ActionTypeV2 = {
  apiName: "actionTakesMedia",
  description: "An action which takes a mediaReference parameter",
  parameters: {
    media_reference: {
      dataType: {
        type: "mediaReference",
      },
      required: true,
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

export const ActionTakesInterface: ActionTypeV2 = {
  apiName: "deleteFooInterface",
  displayName: "Delete Foo Interface",
  status: "EXPERIMENTAL",
  parameters: {
    deletedInterface: {
      dataType: {
        type: "interfaceObject",
        interfaceTypeApiName: FooInterface.apiName,
      },
      required: true,
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
      dataType: {
        type: "interfaceObject",
        interfaceTypeApiName: BarInterface.apiName,
      },
      required: true,
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
      dataType: {
        type: "objectType",
      },
      required: true,
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
      dataType: {
        type: "string",
      },
      required: true,
    },
    address: {
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
    },
  },
  rid: "ri.ontology.main.action-type.9f24017d-cf17-4fa8-84c3-8e01e5d594f2",
  operations: [],
  status: "ACTIVE",
};
