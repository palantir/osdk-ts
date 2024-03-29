import type { ActionDefinition, ObjectActionDataType } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';
import type { Employee } from '../objects';

// Represents the definition of the parameters for the action
export type ActionDef$promoteEmployeeObject$Params = {
  employee: {
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'Employee', Employee>;
  };
  newCompensation: {
    multiplicity: false;
    nullable: false;
    type: 'double';
  };
  newTitle: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
};

// Represents the runtime arguments for the action
export type promoteEmployeeObject$Params = NOOP<OsdkActionParameters<ActionDef$promoteEmployeeObject$Params>>;

// Represents a fqn of the action
export interface promoteEmployeeObject {
  /**
   * Update an employee's title and compensation
   */
  <OP extends ApplyActionOptions>(
    args: promoteEmployeeObject$Params,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$promoteEmployeeObject
  extends ActionDefinition<'promoteEmployeeObject', 'Employee', promoteEmployeeObject> {
  apiName: 'promoteEmployeeObject';
  description: "Update an employee's title and compensation";
  modifiedEntities: { Employee: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$promoteEmployeeObject$Params;
}

export const promoteEmployeeObject: ActionDef$promoteEmployeeObject = {
  type: 'action',
  apiName: 'promoteEmployeeObject',
  parameters: {
    employee: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    newTitle: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    newCompensation: {
      multiplicity: false,
      type: 'double',
      nullable: false,
    },
  },
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
};
