import type { ActionDefinition, ObjectActionDataType } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';
import type { Employee, Venture } from '../objects.js';

// Represents the definition of the parameters for the action
export type ActionDef$assignEmployee1$Params = {
  'employee-1': {
    multiplicity: false;
    type: ObjectActionDataType<'Employee', Employee>;
    nullable: false;
  };
  'venture-1': {
    multiplicity: false;
    type: ObjectActionDataType<'Venture', Venture>;
    nullable: false;
  };
};

// Represents the runtime arguments for the action
export type assignEmployee1$Params = NOOP<OsdkActionParameters<ActionDef$assignEmployee1$Params>>;

// Represents a fqn of the action
export interface assignEmployee1 {
  /**
   * Assigns an employee to a venture
   */
  <OP extends ApplyActionOptions>(args: assignEmployee1$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$assignEmployee1
  extends ActionDefinition<'assignEmployee1', 'Employee' | 'Venture', assignEmployee1> {
  type: 'action';
  apiName: 'assignEmployee1';
  description: 'Assigns an employee to a venture';
  modifiedEntities: { Employee: { created: false; modified: true } };
  parameters: ActionDef$assignEmployee1$Params;
}

export const assignEmployee1: ActionDef$assignEmployee1 = {
  type: 'action',
  apiName: 'assignEmployee1',
  parameters: {
    'employee-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    'venture-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Venture',
      },
      nullable: false,
    },
  },
  description: 'Assigns an employee to a venture',
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
};
