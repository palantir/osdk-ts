import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$createOfficeAndEmployee$Params = {
  address: {
    description: "The office's physical address (not necessarily shipping address)";
    multiplicity: false;
    nullable: true;
    type: 'string';
  };
  capacity: {
    description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
    multiplicity: false;
    nullable: true;
    type: 'integer';
  };
  employeeId: {
    description: 'New employee Id';
    multiplicity: false;
    nullable: false;
    type: 'integer';
  };
  officeId: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
  officeNames: {
    description: 'A list of all office names';
    multiplicity: true;
    nullable: true;
    type: 'string';
  };
};

// Represents the runtime arguments for the action
export type createOfficeAndEmployee$Params = NOOP<OsdkActionParameters<ActionDef$createOfficeAndEmployee$Params>>;

// Represents a fqn of the action
export interface createOfficeAndEmployee {
  /**
   * Create an office and employee
   */
  <OP extends ApplyActionOptions>(
    args: createOfficeAndEmployee$Params,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createOfficeAndEmployee
  extends ActionDefinition<'createOfficeAndEmployee', 'Office' | 'Employee', createOfficeAndEmployee> {
  apiName: 'createOfficeAndEmployee';
  description: 'Create an office and employee';
  modifiedEntities: { Office: { created: true; modified: false }; Employee: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createOfficeAndEmployee$Params;
}

export const createOfficeAndEmployee: ActionDef$createOfficeAndEmployee = {
  type: 'action',
  apiName: 'createOfficeAndEmployee',
  parameters: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    address: {
      multiplicity: false,
      type: 'string',
      nullable: true,
      description: "The office's physical address (not necessarily shipping address)",
    },
    capacity: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
      description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)',
    },
    officeNames: {
      multiplicity: true,
      type: 'string',
      nullable: true,
      description: 'A list of all office names',
    },
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
      description: 'New employee Id',
    },
  },
  description: 'Create an office and employee',
  modifiedEntities: {
    Office: {
      created: true,
      modified: false,
    },
    Employee: {
      created: true,
      modified: false,
    },
  },
};
