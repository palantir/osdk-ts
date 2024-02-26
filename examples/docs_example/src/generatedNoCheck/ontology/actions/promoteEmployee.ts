import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$promoteEmployee$Params = {
  employeeId: {
    multiplicity: false;
    type: 'integer';
    nullable: false;
  };
  newTitle: {
    multiplicity: false;
    type: 'string';
    nullable: false;
  };
  newCompensation: {
    multiplicity: false;
    type: 'double';
    nullable: false;
  };
};

// Represents the runtime arguments for the action
export type promoteEmployee$Params = NOOP<OsdkActionParameters<ActionDef$promoteEmployee$Params>>;

// Represents a fqn of the action
export interface promoteEmployee {
  /**
   * Update an employee's title and compensation
   */
  <OP extends ApplyActionOptions>(args: promoteEmployee$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$promoteEmployee extends ActionDefinition<'promoteEmployee', 'Employee', promoteEmployee> {
  type: 'action';
  apiName: 'promoteEmployee';
  description: "Update an employee's title and compensation";
  modifiedEntities: { Employee: { created: false; modified: true } };
  parameters: ActionDef$promoteEmployee$Params;
}

export const promoteEmployee: ActionDef$promoteEmployee = {
  type: 'action',
  apiName: 'promoteEmployee',
  parameters: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
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
